<?php

namespace App\Traits;


trait PriceFormat
{
    private function toFloatNumber($value)
    {
        if (empty($value)) {
            return 0;
        }
        $value = preg_replace('/[^\d,\.]/', '', $value);
        return (float)str_replace(",", ".", str_replace(".", "", $value));
    }

    private function toBrl(string $value): string
    {
        if ($value <= 0) {
            return 'Não disponível';
        }
        return 'R$ ' . number_format($value, 2, ',', '.');
    }
}

