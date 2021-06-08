<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductRequest;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $products = Product::query();

        if ($search = $request->search) {
            $products
            ->orWhere('name', 'like', '%' . $search . '%')
            ->orWhere('cost_price', 'like', '%' . $search . '%')
            ->orWhere('sell_price', 'like', '%' . $search . '%')
            ->orWhere('description', 'like', '%' . $search . '%');
        }

        return Inertia::render('Products/ProductList', [
            'data' => $products->paginate(15)->appends($request->all()),
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
        return Inertia::render('Products/ProductCreate');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ProductRequest $request)
    {
        try {
            DB::beginTransaction();
            $product = Product::query()->create($request->validated());
            DB::commit();
            return redirect()->route('products.index', ['search' => $product->name]);
        } catch (\Throwable $th) {
            DB::rollBack();
            // Fazer alguma coisa (email, slack, etc) com o erro $th
            return redirect()->route('products.index')->withErrors('error', 'Oops! An unexpected error has occurred');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        return Inertia::render('Products/ProductEdit', [
            'product' => $product
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(ProductRequest $request, Product $product)
    {
        try {
            DB::beginTransaction();
            $product->fill($request->validated());
            $product->saveOrFail();
            DB::commit();
            return redirect()->route('products.index', ['search' => $product->name]);
        } catch (\Throwable $th) {
            DB::rollBack();
            // Fazer alguma coisa (email, slack, etc) com o erro $th
            return redirect()->route('products.index')->withErrors('error', 'Oops! An unexpected error has occurred');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        try {
            DB::beginTransaction();
            $product->delete();
            DB::commit();
            return redirect()->route('products.index');
        } catch (\Throwable $th) {
            DB::rollBack();
            // Fazer alguma coisa (email, slack, etc) com o erro $th
            return redirect()->route('products.index')->withErrors('error', 'Oops! An unexpected error has occurred');
        }
    }
}
