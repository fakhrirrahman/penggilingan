<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Service;

class ServiceSeeder extends Seeder
{
    public function run()
    {
        $services = [
            [
                'title' => 'Layanan Konsultasi',
                'description' => 'Memberikan layanan konsultasi profesional untuk berbagai bidang.',
                'image' => 'gambar1.jpg',  // cukup nama filenya saja
            ],
            [
                'title' => 'Layanan Pengembangan Web',
                'description' => 'Membantu pengembangan website dengan teknologi terbaru dan performa terbaik.',
                'image' => 'gambar1.jpg',  // cukup nama filenya saja
            ],
            [
                'title' => 'Layanan Pelatihan',
                'description' => 'Pelatihan intensif untuk meningkatkan keterampilan teknis dan manajemen.',
                'image' => 'gambar1.jpg',  // cukup nama filenya saja
            ],
        ];

        foreach ($services as $service) {
            Service::create($service);
        }
    }
}
