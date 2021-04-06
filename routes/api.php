<?php

use App\Http\Controllers\Auth\RegisterController as AuthRegisterController;
use App\Http\Controllers\ChoixController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\TimelineController;
use App\Models\Choix;
use App\Models\Question;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->get('/authenticated', function (){
return true;
});

Route::post('create', [TimelineController::class, 'store']);
Route::post('register', [RegisterController::class, 'register']);
Route::post('login', [LoginController::class, 'login']);
Route::post('logout', [LoginController::class, 'logout']);
Route::delete('delete/{id}', [TimelineController::class, 'destroy']);
Route::put('update/{id}', [TimelineController::class, 'update']);
Route::get('timeline/{id}', [TimelineController::class, 'show']);
Route::get('questions' ,[QuestionController::class, 'index']);
Route::post('storequestion', [QuestionController::class, 'store']);
Route::put('editquestion/{id}', [QuestionController::class, 'update']);
Route::delete('deletequestion/{id}', [QuestionController::class, 'destroy']);
Route::get('choix', [ChoixController::class, 'index']);
Route::post('storechoix', [ChoixController::class, 'store']);
Route::put('editchoix/{id}', [ChoixController::class, 'update']);
Route::delete('deletechoix/{id}', [ChoixController::class, 'destroy']);
