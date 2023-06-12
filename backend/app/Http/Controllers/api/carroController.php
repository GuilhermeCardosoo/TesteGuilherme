<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\carros;
use Illuminate\Validation\Rules\Exists;

class carroController extends Controller
{
   
    public function index()
    {
        return carros::all();
    }

    
    public function create(Request $req)
    {
        if (isset($_POST)) {
           var_dump($req);
            // echo "Existe Post";
        }else{
            echo "Não existe Post";
        }
        // $data = [
        //     'marca' => 'bmw',
        //     'modelo' => 'X6',
        //     'ano' => '2022',
        //     'cor' =>'vermelho',
        //    'defeito' => 'vidro eletrico quebrado'
        // ];
        // return carros::create($data);
    }

   
    public function edit(string $id)
    {
        //
    }

  
    public function update(Request $request, string $id)
    {
        //
    }

 
    public function destroy(string $id)
    {
        //
    }
}
