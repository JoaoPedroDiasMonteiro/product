<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\SaleOrderController;
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

Route::get('/dashboard', function () {
    return redirect()->route('users.index');
})->name('admin.dashboard');

Route::group(['middleware' => 'auth'], function () { 
    Route::resource('users', UserController::class);
    Route::resource('products', ProductController::class);
    Route::resource('customers', CustomerController::class);
    Route::resource('sale-orders', SaleOrderController::class);

    Route::group(['middleware' => 'admin'], function () {
        Route::delete('users/{user}', [UserController::class, 'destroy'])->name('users.destroy');
        Route::delete('products/{product}', [ProductController::class, 'destroy'])->name('products.destroy');
        Route::delete('customers/{customer}', [CustomerController::class, 'destroy'])->name('customers.destroy');
        Route::delete('sale-orders/{sale_order}', [SaleOrderController::class, 'destroy'])->name('sale-orders.destroy'); 
    });
});


/*
* Auth Routes
*/
Route::get('/entrar', [LoginController::class, 'index'])->middleware('guest')->name('auth.login.index');
Route::post('/entrar', [LoginController::class, 'attempt'])->middleware('throttle:5:1', 'guest')->name('auth.login.attempt');
Route::get('/sair', [LoginController::class, 'logout'])->middleware('auth')->name('auth.login.logout');
