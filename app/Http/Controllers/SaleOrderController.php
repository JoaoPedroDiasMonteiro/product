<?php

namespace App\Http\Controllers;

use App\Http\Requests\SaleOrderRequest;
use App\Models\Customer;
use App\Models\Product;
use App\Models\SaleOrder;
use App\Models\SaleOrderItem;
use App\Traits\PriceFormat;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class SaleOrderController extends Controller
{
    use PriceFormat;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $saleOrders = SaleOrder::withRelations();

        // if ($search = $request->search) {
        //     $saleOrders
        //         ->orWhere('name', 'like', '%' . $search . '%');
        // }

        // DB::enableQueryLog();
        // $saleOrders->orderBy('id', 'ASC')->paginate(15)->appends($request->all())->toArray();
        // dd(DB::getQueryLog());
    
        return Inertia::render('SaleOrders/SaleOrderList', [
            'data' => $saleOrders->orderBy('id', 'ASC')->paginate(15)->appends($request->all())->toArray(),
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
            return redirect()->route('sale-orders.index')->withErrors(['error' => 'Oops! An unexpected error has occurred']);
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
    public function edit(SaleOrder $saleOrder, Request $request)
    {
        $customers = Customer::query();
        $products = Product::query();
        $saleOrderId = $saleOrder->id;
        
        $SaleOrderProducts = DB::table('sale_order_items')
        ->where('sale_order_id', $saleOrderId)
        ->join('products', 'product_id', 'products.id')
        // ->join('sale_orders', 'sale_order_id', 'sale_orders.id')
        // ->join('customers', 'sale_orders.customer_id', 'customers.id')
        ->select('sale_order_items.*', 'products.name')
        ->get()->toArray();

        foreach($SaleOrderProducts as $product) {
            $product->unitary_value = $this->toBrl($product->unitary_value);
        }

        if ($request->customer) {
            $customers->where('name', 'like', '%' . $request->customer . '%');
        }

        if ($request->product) {
            $products->where('name', 'like', '%' . $request->product . '%');
        }

        return Inertia::render('SaleOrders/SaleOrderEdit', [
            'saleOrder' => $saleOrder,
            'saleOrderProducts' => $SaleOrderProducts,
            'customers' => $customers->paginate(1500)->appends($request->all()),
            'productsList' => $products->paginate(1500)->appends($request->all()),
            'customer' => $saleOrder->customer
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\SaleOrder  $saleOrder
     * @return \Illuminate\Http\Response
     */
    public function update(SaleOrderRequest $request, SaleOrder $saleOrder)
    {
        // dd($request->only('customer_id'));
        try {
            DB::beginTransaction();
            SaleOrder::query()->where('id', $saleOrder->id)->update($request->only('customer_id'));
            // Trocar para atualizar as ja inseridas e adicionar as novas
            $saleOrder->saleOrderItens()->delete();

            foreach ($request->products as $product) {
                $product['sale_order_id'] = $saleOrder->id;
                SaleOrderItem::query()->create($product);
            }

            DB::commit();
            return redirect()->route('sale-orders.index');
        } catch (\Throwable $th) {
            DB::rollBack();
            dd($th);
            // Fazer alguma coisa (email, slack, etc) com o erro $th
            return redirect()->route('sale-orders.index')->withErrors(['error' => 'Oops! An unexpected error has occurred']);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\SaleOrder  $saleOrder
     * @return \Illuminate\Http\Response
     */
    public function destroy(SaleOrder $saleOrder)
    {
        try {
            DB::beginTransaction();
            $saleOrder->delete();
            DB::commit();
            return redirect()->route('sale-orders.index');
        } catch (\Throwable $th) {
            DB::rollBack();
            dd($th);
            // Fazer alguma coisa (email, slack, etc) com o erro $th
            return redirect()->route('sale-orders.index')->withErrors(['error' => 'Oops! An unexpected error has occurred']);
        }
    }
}
