<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Contact;
use Illuminate\Support\Facades\Http;
use App\Http\Requests\StoreContactRequest;
use App\Http\Requests\UpdateContactRequest;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('contact/index', [
            'contacts' => Contact::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('contact/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreContactRequest $request)
    {
        $contact = Contact::create($request->validated());

        Http::post("https://api.telegram.org/bot7722906226:AAGT5dX_tYHr31uBMct_uT9e7TteFftfHLM/sendMessage", [
            'chat_id' => 7476043686,
            'text' => "نام: " . $contact->name . "\n" . "شماره تلفن: " . $contact->phone . "\n" . "پیام: " . $contact->message,
            'parse_mode' => 'HTML',
        ]);

        return auth()->user() ? redirect()->route('contact.index') : redirect()->route('home');
    }

    /**
     * Display the specified resource.
     */
    public function show(Contact $contact)
    {
        return Inertia::render('contact/show', [
            'contact' => $contact,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Contact $contact)
    {
        return Inertia::render('contact/edit', [
            'contact' => $contact,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateContactRequest $request, Contact $contact)
    {
        $contact->update($request->validated());

        return redirect()->route('contact.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Contact $contact)
    {
        $contact->delete();

        return redirect()->route('contact.index');
    }
}
