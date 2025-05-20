<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Service;

class ServiceController extends Controller
{
    public function index()
    {
        $services = Service::all();
        return Inertia::render('Layanan', [
            'services' => $services,
        ]);
    }

    public function create()
    {
        return Inertia::render('CreateLayanan');
    }
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'required',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $imagePath = null;
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $imagePath = 'images/services/' . $imageName;
            $image->move(public_path('images/services'), $imageName);
        } 


       Service::create([
            'title' => $request->title,
            'description' => $request->description,
            'image' => $imagePath,
            'created_at' => now(),
        ]);

        return to_route('service.index')->with('success', 'Layanan berhasil ditambahkan.');
    }


}
