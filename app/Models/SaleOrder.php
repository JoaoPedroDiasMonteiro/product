<?php

namespace App\Models;

use App\Traits\PriceFormat;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SaleOrder extends Model
{
    use HasFactory, PriceFormat;

    protected $fillable = [
        'customer_id'
    ];

    protected $appends = ['total'];

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    public function saleOrderItens()
    {
        return $this->hasMany(SaleOrderItem::class);
    }

    public function products()
    {
        return $this->belongsToMany(Product::class, 'sale_order_items', 'sale_order_items.sale_order_id', 'sale_order_items.product_id');
    }

    public function getTotalAttribute()
    {
        $products = SaleOrderItem::query()->with('product:id')->where('sale_order_id', $this->id)->get()->pluck('total_value')->toArray();
        $products = array_map(function ($value) {
            return $this->toFloatNumber($value);
        }, $products);
        $total = array_sum($products);
        return $this->toBrl($total);
    }

    public function scopeWithRelations($query)
    {
        return $query
            ->with('saleOrderItens.product:id,name')
            ->with('saleOrderItens:sale_order_id,product_id,quantity,unitary_value')
            ->with('customer:id,name')
            ->select('id', 'customer_id');
    }
}
