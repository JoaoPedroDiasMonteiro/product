<?php

namespace App\Traits;


trait StringFormat
{
    private function onlyNumbers($value)
    {
        return preg_replace('/\D/', '', $value);
    }

    private function toCPF($value)
    {
        // 999.999.999-99
        $firstPart = substr($value, 0, 3);
        $secondPart = substr($value, 3, 3);
        $thirdPart = substr($value, 6, 3);
        $fourthPart = substr($value, 9, 2);
        return "{$firstPart}.{$secondPart}.{$thirdPart}-{$fourthPart}";
    }

    private function toCNPJ($value)
    {
        // 99.999.99/9999-99
        $firstPart = substr($value, 0, 2);
        $secondPart = substr($value, 2, 3);
        $thirdPart = substr($value, 5, 2);
        $fourthPart = substr($value, 7, 4);
        $fifthPart = substr($value, 11, 2);
        return "{$firstPart}.{$secondPart}.{$thirdPart}/{$fourthPart}-{$fifthPart}";
    }

    private function toZipcode($value)
    {
        // 99999-999
        $firstPart = substr($value, 0, 5);
        $secondPart = substr($value, 5, 3);
        return "{$firstPart}-{$secondPart}";
    }
}
