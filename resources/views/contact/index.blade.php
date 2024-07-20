<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {{ __('Contact') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900 dark:text-gray-100">
                    <table class="w-full">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>name</th>
                                <th>phone</th>
                                <th>decription</th>
                                <th>actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($contacts as $contact)
                                <tr>
                                    <td>{{ $contact->id }}</td>
                                    <td>{{ $contact->user->name }}</td>
                                    <td>{{ $contact->user->phone }}</td>
                                    <td>{{ str()->limit($contact->description, 50) }}</td>
                                    <td>
                                        <a href="{{ route('contact.show', ['contact' => $contact]) }}">show</a>
                                    </td>
                                </tr>

                            @endforeach
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>id</th>
                                <th>name</th>
                                <th>phone</th>
                                <th>decription</th>
                                <th>actions</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
