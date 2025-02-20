import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { useForm, Head } from '@inertiajs/react';
import Category from '@/Components/Category';
export default function Index({ auth, categories }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        name: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('categories.store'), { onSuccess: () => reset() });
    };

    return (
        <AuthenticatedLayout>
            <Head title="Categories" />

            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <form onSubmit={submit}>
                    <h1>Category Details</h1>
                    <label>
                        Name:
                        <input
                            className='block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm'
                            name="name"
                            value={data.name}
                            onChange={e => setData('name', e.target.value)}
                        />
                    </label>
                    <InputError message={errors.message} className="mt-2" />
                    <PrimaryButton className="mt-4" disabled={processing}>Add</PrimaryButton>
                </form>

                <div className="mt-6 bg-white shadow-sm rounded-lg divide-y">
                    {categories.map(category =>
                        <Category key={category.id} category={category} />
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}