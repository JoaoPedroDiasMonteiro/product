<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SaleOrderItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'sale_order_id',
        'product_id',
        'quantity',
        'unitary_value',       
    ];

    public function SaleOrder()
    {
        return $this->belongsTo(SaleOrder::class);
    }
}
