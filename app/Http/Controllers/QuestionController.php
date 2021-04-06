<?php

namespace App\Http\Controllers;

use App\Models\Question;
use Illuminate\Http\Request;
use Throwable;

class QuestionController extends Controller
{
    public function index(){
        $question = Question::groupBy('id')->get();

        return response()->json($question,200);
    }

    public function store(Request $request){
        try{
            $request->validate([
                'user_id' => ['required', 'integer'],
                'question' => ['required'],
                'is_active' => ['required'],

            ]);
            Question::create($request->all());
            return response()->json(['message' => 'la question a été ajouté']);
        }catch(Throwable $e){
            report($e);
        }
    }
    public function update(Request $request, $id){

        $questions = Question::find($id);
        $questions->update($request->all);
        return response()->json('Question mise à jour');
    }

    public function destroy($id){
        $questions = Question::find($id);
        $questions->delete();
        return response()->json('question supprimé');
    }
}