<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class LoginController extends Controller
{
    /*
    *   Show Form Login
    */
    public function index()
    {
        return Inertia::render('Auth/Login');
    }

    public function attempt(LoginRequest $request)
    {
        $credentials = $request->validated();

        if (!Auth::attempt($credentials)) {
            return redirect()->route('auth.login.index')->withErrors(['message' => "Oops! Email and password doesn't match"]);
        }

        return redirect()->route('admin.dashboard');
    }

    public function logout()
    {
        Auth::logout();

        return redirect()->route('auth.login.index')->with(['message' => 'Goodbye.']);
    }
}
