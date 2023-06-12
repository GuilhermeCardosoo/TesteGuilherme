<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use app\Http\Controllers\api\carroController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->post('/addCarro', 'App\Http\Controllers\api\carroController@create');

Route::get('/carro', 'App\Http\Controllers\api\carroController@index');


Route::post('/addCarro', 'App\Http\Controllers\api\carroController@create');
