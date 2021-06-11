<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SaleOrder extends Model
{
    use HasFactory;

    protected $fillable = [
        'customer_id'
    ];

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    public function products()
    {
        return $this->hasMany(SaleOrderItem::class);
    }

    public function scopeWithRelations($query)
    {
        return $query
            ->with('products.product:id,name')
            ->with('products:sale_order_id,product_id,quantity,unitary_value')
            ->with('customer:id,name')
            ->select('id', 'customer_id');
    }
}
