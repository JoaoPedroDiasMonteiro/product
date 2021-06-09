<?php

namespace App\Http\Controllers;

use App\Http\Requests\CustomerRequest;
use App\Models\Customer;
use App\Traits\StringFormat;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class CustomerController extends Controller
{
    use StringFormat;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $customers = Customer::query();

        if ($search = $request->search) {
            $onlyNumbersSearch = $this->onlyNumbers($search);
            $customers
                ->orWhere('name', 'like', '%' . $search . '%')
                ->orWhere('document', 'like', '%' . $onlyNumbersSearch . '%')
                ->orWhere('street', 'like', '%' . $search . '%')
                ->orWhere('zipcode', 'like', '%' . $onlyNumbersSearch . '%')
                ->orWhere('neighborhood', 'like', '%' . $search . '%');
        }

        return Inertia::render('Customers/CustomerList', [
            'data' => $customers->paginate(15)->appends($request->all()),
            'searchProp' => $request->search
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Customers/CustomerCreate');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CustomerRequest $request)
    {
        try {
            DB::beginTransaction();
            $customer = Customer::query()->create($request->validated());
            DB::commit();
            return redirect()->route('customers.index', ['search' => $customer->document]);
        } catch (\Throwable $th) {
            DB::rollBack();
            // Fazer alguma coisa (email, slack, etc) com o erro $th
            return redirect()->route('customers.index')->withErrors('error', 'Oops! An unexpected error has occurred');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function show(Customer $customer)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function edit(Customer $customer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Customer $customer)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function destroy(Customer $customer)
    {
        //
    }
}
