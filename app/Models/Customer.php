<?php

namespace App\Models;

use App\Traits\StringFormat;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory, StringFormat;

    protected $fillable = [
        'name',
        'document',
        'document_secondary',
        'street',
        'number',
        'complement',
        'zipcode',
        'neighborhood',
    ];

    public function SaleOrders()
    {
        return $this->hasMany(SaleOrder::class);
    }

    public function setDocumentAttribute($value)
    {
        $this->attributes['document'] = $this->onlyNumbers($value);
    }

    public function setZipcodeAttribute($value)
    {
        $this->attributes['zipcode'] = $this->onlyNumbers($value);
    }

    public function getDocumentAttribute($value)
    {
        if (strlen($value) === 11) {
            return $this->toCPF($value);
        } else {
            return $this->toCNPJ($value);
        }
    }

    public function getZipcodeAttribute($value)
    {
        return $this->toZipcode($value);
    }
}
