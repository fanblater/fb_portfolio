<?php

namespace App\Http\Controllers;

use App\Models\Choix;
use Illuminate\Http\Request;
use Throwable;
use Illuminate\Support\Facades\DB;

class ChoixController extends Controller
{
    public function index()
    {
        $choix = DB::table('choix')->join('question', 'question.id' ,'=', 'choix.id_question')
        ->select('question','id_question','is_active', 'choix', 'is_valide')->get();
        return response()->json([$choix], 200);
    }

    public function store(Request $request)
    {
        try {
            $request->validate([
                'id_question' => ['required', 'integer'],
                'choix' => ['required'],
                'is_valide' => ['required']
            ]);
            Choix::create($request->all());
            dd($request->all());
            return response()->json(['message' => 'le choix a été ajouté']);
        } catch (Throwable $e) {
            report($e);
        }
    }
    public function update(Request $request, $id)
    {

        $choix = Choix::find($id);
        $choix->update($request->all);
        return response()->json('Choix mise à jour');
    }

    public function destroy($id)
    {
        $choix = Choix::find($id);
        $choix->delete();
        return response()->json('Choix supprimé');
    }
}
