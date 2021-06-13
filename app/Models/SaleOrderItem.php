<?php

namespace App\Models;

use App\Traits\PriceFormat;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SaleOrderItem extends Model
{
    use HasFactory, PriceFormat;

    protected $fillable = [
        'sale_order_id',
        'product_id',
        'quantity',
        'unitary_value',
    ];

    protected $appends = [
        'total_value'
    ];

    public function SaleOrder()
    {
        return $this->belongsTo(SaleOrder::class);
    }

    public function product()
    {
        return $this->hasOne(Product::class, 'id', 'product_id');
    }

    public function setUnitaryValueAttribute($value)
    {
        $this->attributes['unitary_value'] = $this->toFloatNumber($value);
    }

    public function getTotalValueAttribute()
    {
        return $this->toBrl($this->attributes['unitary_value'] * $this->quantity);
    }

    public function getUnitaryValueAttribute($value)
    {
        return $this->toBrl($value);
    }
}
