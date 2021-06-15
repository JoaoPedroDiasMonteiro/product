<?php

namespace App\Models;

use App\Traits\PriceFormat;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory, PriceFormat;

    protected $fillable = [
        'name',
        'cost_price',
        'sell_price',
        'description'
    ];

    public function saleOrderItems()
    {
        return $this->hasMany(SaleOrderItem::class);
    }

    public function setCostPriceAttribute($value)
    {
        $this->attributes['cost_price'] = $this->toFloatNumber($value);
    }

    public function getCostPriceAttribute($value)
    {
        return $this->toBrl($value);
    }

    public function setSellPriceAttribute($value)
    {
        $this->attributes['sell_price'] = $this->toFloatNumber($value);
    }

    public function getSellPriceAttribute($value)
    {
        return $this->toBrl($value);
    }
}
