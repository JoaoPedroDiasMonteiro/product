<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Http\Requests\UserUpdateRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $users = User::query();

        if ($search = $request->search) {
            $users->orWhere('name', 'like', '%' . $search . '%')->orWhere('email', 'like', '%' . $search . '%');;
        }

        return Inertia::render('Users/List', [
            'data' => $users->paginate(15)->appends($request->all())
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Users/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(UserRequest $request)
    {
        try {
            DB::beginTransaction();
            $user = User::query()->create($request->validated());
            DB::commit();
            return redirect()->route('users.index', ['search' => $user->email]);
        } catch (\Throwable $th) {
            DB::rollBack();
            // Fazer alguma coisa (email, slack, etc) com o erro $th
            return redirect()->route('users.index')->withErrors('error', 'Oops! An unexpected error has occurred');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        return Inertia::render('Users/Update', [
            'user' => $user
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(UserUpdateRequest $request, User $user)
    {
        try {
            DB::beginTransaction();
            $user->fill($request->validated());
            $user->saveOrFail();
            DB::commit();
            return redirect()->route('users.index', ['search' => $user->email]);
        } catch (\Throwable $th) {
            DB::rollBack();
            // Fazer alguma coisa (email, slack, etc) com o erro $th
            return redirect()->route('users.index')->withErrors('error', 'Oops! An unexpected error has occurred');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        //
    }
}
