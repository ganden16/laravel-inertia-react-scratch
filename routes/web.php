<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', HomeController::class)->name('home');

Route::middleware('auth')->group(function () {
	Route::post('/logout', [LoginController::class, 'destroy'])->name('logout');
	Route::get('/dashboard', DashboardController::class)->name('dashboard');

	Route::apiResource('users', UserController::class);
});

Route::middleware('guest')->group(function () {
	Route::get('/login', [LoginController::class, 'create'])->name('login');
	Route::post('/login', [LoginController::class, 'store']);

	Route::get('/register', [RegisterController::class, 'create'])->name('register');
	Route::post('/register', [RegisterController::class, 'store']);
});
