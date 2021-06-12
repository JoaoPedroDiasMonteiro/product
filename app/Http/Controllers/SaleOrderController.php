<?php

namespace App\Http\Controllers;

use App\Models\SaleOrder;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SaleOrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $saleOrders = SaleOrder::withRelations();
        // $saleOrders = SaleOrder::query()->with('products');
        // $a = $saleOrders->get()->toArray();
        // $b = $saleOrders->get()->pluck('products')->toArray();
        // $c = $saleOrders->get()->pluck('products')->collapse()->toArray();


        if ($search = $request->search) {
            $saleOrders
            ->orWhere('name', 'like', '%' . $search . '%')
            ->orWhere('cost_price', 'like', '%' . $search . '%')
            ->orWhere('sell_price', 'like', '%' . $search . '%')
            ->orWhere('description', 'like', '%' . $search . '%');
        }

        return Inertia::render('SaleOrders/SaleOrderList', [
            'data' => $saleOrders->paginate(15)->appends($request->all())->append('total')->toArray(),
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
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\SaleOrder  $saleOrder
     * @return \Illuminate\Http\Response
     */
    public function show(SaleOrder $saleOrder)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\SaleOrder  $saleOrder
     * @return \Illuminate\Http\Response
     */
    public function edit(SaleOrder $saleOrder)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\SaleOrder  $saleOrder
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, SaleOrder $saleOrder)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\SaleOrder  $saleOrder
     * @return \Illuminate\Http\Response
     */
    public function destroy(SaleOrder $saleOrder)
    {
        //
    }
}
