import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { useForm, Head } from '@inertiajs/react';
import Project from '@/Components/Project';
export default function Index({ auth, projects }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        name: '',
        description: '',
        due_date: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('projects.store'), { onSuccess: () => reset() });
    };

    return (
        <AuthenticatedLayout>
            <Head title="Projects" />

            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <form onSubmit={submit}>
                    <h1>Project Details</h1>
                    <label>
                        Name:
                        <input
                            className='block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm'
                            name="name"
                            value={data.name}
                            onChange={e => setData('name', e.target.value)}
                        />
                    </label>
                    <label>Description:</label>
                    <textarea
                        value={data.description}
                        placeholder="Type the projects name"
                        className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                        onChange={e => setData('description', e.target.value)}
                    ></textarea>
                    <label>Due Date:</label>
                    <input
                        className='block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm'
                        type="date"
                        value={data.due_date}
                        onChange={e => setData('due_date', e.target.value)}
                    />
                    <InputError message={errors.message} className="mt-2" />
                    <PrimaryButton className="mt-4" disabled={processing}>Add</PrimaryButton>
                </form>

                <div className="mt-6 bg-white shadow-sm rounded-lg divide-y">
                    {projects.map(project =>
                        <Project key={project.id} project={project} />
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}