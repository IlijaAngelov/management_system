import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { useForm, Head } from '@inertiajs/react';
import Task from '@/Components/Task';
export default function Index({ auth, tasks, projects, categories }) {    
    const { data, setData, post, processing, reset, errors } = useForm({
        title: '',
        description: '',
        status: '',
        due_date: '',
        project_id: '',
        category_id: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('tasks.store'), { onSuccess: () => reset() });
    };

    return (
        <AuthenticatedLayout>
            <Head title="Tasks" />

            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <form onSubmit={submit}>
                    <h1>Tasks Details</h1>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Project:
                            <select
                                className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                                name="project_id"
                                value={data.project_id}
                                onChange={e => setData('project_id', e.target.value)}
                            >
                                <option value="">Select a project</option>
                                {projects.map(project => (
                                    <option key={project.id} value={project.id}>
                                        {project.name}
                                    </option>
                                ))}
                            </select>
                        </label>
                        <InputError message={errors.project_id} className="mt-2" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Category:
                            <select
                                className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                                name="category_id"
                                value={data.category_id}
                                onChange={e => setData('category_id', e.target.value)}
                            >
                                <option value="">Select a category</option>
                                {categories.map(category => (
                                    <option key={category.id} value={category.id}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                        </label>
                        <InputError message={errors.category_id} className="mt-2" />
                    </div>
                    <label>
                        Title:
                        <input
                            className='block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm'
                            name="title"
                            value={data.title}
                            onChange={e => setData('title', e.target.value)}
                        />
                    </label>
                    <label>Description:</label>
                    <textarea
                        value={data.description}
                        placeholder="Type the projects name"
                        className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                        onChange={e => setData('description', e.target.value)}
                    ></textarea>
                    <label>
                        Status:
                        <select
                            className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                            name="status"
                            value={data.status}
                            onChange={e => setData('status', e.target.value)}
                        >
                            <option value="">Select status</option>
                            <option value="pending">Pending</option>
                            <option value="in_progress">In Progress</option>
                            <option value="completed">Completed</option>
                        </select>
                    </label>
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
                    {tasks.map(task =>
                        <Task key={task.id} task={task} />
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}