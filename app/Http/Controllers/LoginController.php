<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
	/**
	 * Handle the incoming request.
	 */
	public function create(Request $request)
	{
		return inertia('Auth/Login');
	}
	public function store(Request $request)
	{
		$request->validate([
			'email' => 'required',
			'password' => 'required'
		]);

		if (Auth::attempt($request->only('email', 'password'), $request->remember)) {

			session()->regenerate();

			return redirect('/dashboard')->with([
				'type' => 'success',
				'message' => 'Kamu Berhasil Login'
			]);
		}
		throw ValidationException::withMessages([
			'email' => 'Email Salah',
			'password' => 'Password Salah'
		]);
	}

	public function destroy()
	{
		Auth::logout();

		return redirect('/login')->with([
			'type' => 'success',
			'message' => 'Kamu berhasil logout'
		]);
	}
}
