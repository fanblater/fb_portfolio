<?php

namespace App\Http\Controllers;

use App\Models\Timeline;
use Error;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Throwable;

class TimelineController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $timelines = Timeline::groupBy('date')->get();


        return response()->json($timelines, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        try{

            $request->validate([
                'user_id' => ['required', 'integer'],
                'date' => ['required'],
                'formation' => ['required'],
                'titre' => ['required'],
                'projets' => ['required'],
                'content_projets' => ['required'],
                'projets_annexes' => ['required'],
                'content_projets_annexes' => ['required']
            ]);
            Timeline::create($request->all());



            return response()->json(['message' => 'la timeline a été ajouté']);
        }catch(Throwable $e){
            report($e);
        }



    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $timeline = Timeline::find($id);

        return response()->json($timeline);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id, Request $request)
    {

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $timeline = Timeline::find($id);
        $timeline->update($request->all());
        dd(response());
        return response()->json('timeline updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $timeline = Timeline::find($id);
        $timeline->delete();

        return response()->json('timeline deleted');
    }
}
