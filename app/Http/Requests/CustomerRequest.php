<?php

namespace App\Http\Requests;

use App\Traits\StringFormat;
use Illuminate\Foundation\Http\FormRequest;

class CustomerRequest extends FormRequest
{
    use StringFormat;
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
        $this->merge(['document' => $this->onlyNumbers($this->document)]);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $except = $this->customer->id ?? null;
        return [
            'name' => 'required|min:3|max:200',
            'document' => 'required|min:11|max:13|unique:customers,document,' . $except,
            'document_secondary' => 'required|min:6|max:33',
            'street' => 'required|min:3|max:200',
            'number' => 'required|min:1|max:200',
            'complement' => 'nullable|min:3|max:200',
            'zipcode' => 'required|min:3|max:200',
            'neighborhood' => 'required|min:3|max:200',
        ];
    }
}
