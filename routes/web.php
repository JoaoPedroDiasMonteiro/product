<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\SaleOrderController;
use App\Http\Controllers\TestController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect()->route('auth.login.index');
});

/*
* Tests Routes
*/
Route::get('/test', [TestController::class, 'test'])->name('test');


Route::resource('users', UserController::class);
Route::resource('products', ProductController::class);
Route::resource('customers', CustomerController::class);
Route::resource('sale-orders', SaleOrderController::class);


Route::get('/dashboard', [LoginController::class, 'index'])->name('admin.dashboard');


/*
* Auth Routes
*/
Route::get('/entrar', [LoginController::class, 'index'])->name('auth.login.index');
Route::post('/entrar', [LoginController::class, 'attempt'])->middleware('throttle:5:3')->name('auth.login.attempt');
Route::get('/sair', [LoginController::class, 'logout'])->middleware('auth')->name('auth.login.logout');
