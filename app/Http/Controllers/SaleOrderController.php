<?php

namespace App\Http\Controllers;

use App\Http\Requests\SaleOrderRequest;
use App\Models\Customer;
use App\Models\Product;
use App\Models\SaleOrder;
use App\Models\SaleOrderItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
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
    public function create(Request $request)
    {
        $customers = Customer::query();
        $products = Product::query();

        if ($request->customer) {
            $customers->where('name', 'like', '%' . $request->customer . '%');
        }

        if ($request->product) {
            $products->where('name', 'like', '%' . $request->product . '%');
        }

        return Inertia::render('SaleOrders/SaleOrderCreate', [
            'customers' => $customers->paginate(1500)->appends($request->all()),
            'products' => $products->paginate(1500)->appends($request->all()),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(SaleOrderRequest $request)
    {
        try {
            DB::beginTransaction();
            $saleOrder = SaleOrder::query()->create($request->validated());

            foreach ($request->products as $product) {
                $product['sale_order_id'] = $saleOrder->id;
                $a = SaleOrderItem::query()->create($product);
            }

            DB::commit();
            return redirect()->route('sale-orders.index');
        } catch (\Throwable $th) {
            DB::rollBack();
            // Fazer alguma coisa (email, slack, etc) com o erro $th
            return redirect()->route('sale-orders.index')->withErrors('error', 'Oops! An unexpected error has occurred');
        }
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
