<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SaleOrderRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    protected function prepareForValidation()
    {
        $products = array_filter($this->products);

        $this->merge(['products' => $products]);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'customer_id' => 'required|int|min:1',
            'products' => 'required|array|min:1',
            'products.*' => 'array',
            'products.*.product_id' => 'required|exists:products,id',
            'products.*.quantity' => 'required|int|min:1|max:99',
            'products.*.unitary_value' => 'required|min:1',
        ];
    }
}
