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
            $cleanSearch = $this->onlyLettersNumbers($search);
            $customers
                ->orWhere('name', 'like', '%' . $search . '%')
                ->when($cleanSearch, function($query) use($cleanSearch) {
                    $query->orWhere('document', 'like', '%' . $cleanSearch . '%');
                    $query->orWhere('zipcode', 'like', '%' . $cleanSearch . '%');
                })
                ->orWhere('street', 'like', '%' . $search . '%')
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
            return redirect()->route('customers.index')->withErrors(['error' => 'Oops! An unexpected error has occurred']);
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
        return Inertia::render('Customers/CustomerEdit', [
            'customer' => $customer
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function update(CustomerRequest $request, Customer $customer)
    {
        try {
            DB::beginTransaction();
            $customer = $customer->fill($request->validated());
            $customer->saveOrFail();
            DB::commit();
            return redirect()->route('customers.index', ['search' => $customer->document]);
        } catch (\Throwable $th) {
            DB::rollBack();
            // Fazer alguma coisa (email, slack, etc) com o erro $th
            return redirect()->route('customers.index')->withErrors(['error' => 'Oops! An unexpected error has occurred']);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function destroy(Customer $customer)
    {
        try {
            DB::beginTransaction();
            if ($customer->saleOrders->count()) {
                return redirect()->route('customers.index')->withErrors(['error' => 'This Customer has a Sale Order Associed']);
            }
            $customer->delete();
            DB::commit();
            return redirect()->route('customers.index');
        } catch (\Throwable $th) {
            DB::rollBack();
            // Fazer alguma coisa (email, slack, etc) com o erro $th
            return redirect()->route('customers.index')->withErrors(['error' => 'Oops! An unexpected error has occurred']);
        }
    }
}
