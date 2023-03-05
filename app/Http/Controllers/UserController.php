<?php

namespace App\Http\Controllers;

use App\Http\Requests\EditUserRequest;
use App\Http\Requests\UserRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
	/**
	 * Display a listing of the resource.
	 */
	public function index()
	{
		return inertia('Users/Index', [
			'users' => User::latest()->paginate(10),
			// 'canAddUser' => $this->authorize('add_user')
			'canAddUser' => Auth::user()->can('add_user')
		]);
	}

	
	/**
	 * Store a newly created resource in storage.
	 */
	public function store(UserRequest $request)
	{
		$this->authorize('add_user', Auth::user());
		$attr = $request->toArray();
		$attr['password'] = Hash::make('password');

		User::create($attr);

		return back()->with([
			'type' => 'success',
			'message' => 'User berhasil ditambahkan'
		]);
	}

	/**
	 * Display the specified resource.
	 */
	public function show(User $user)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 */
	public function update(EditUserRequest $request, User $user)
	{
		$attr = $request->toArray();
		$attr['password'] = Hash::make($request->password);

		$user->update($attr);

		return back()->with([
			'type' => 'success',
			'message' => 'User berhasil diperbarui'
		]);
	}

	/**
	 * Remove the specified resource from storage.
	 */
	public function destroy(User $user)
	{
		$user->delete();

		return back()->with([
			'type' => 'success',
			'message' => 'User berhasil dihapus'
		]);
	}
}
