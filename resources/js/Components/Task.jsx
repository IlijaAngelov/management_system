import React from 'react';
 
export default function Task({ task }) {
    return (
        <div className="flex p-6 flex space-x-2">
            <div className="flex-1">
                <div className="flex justify-between">
                    <div>
                        <p className="text-gray-800">{task.title}</p>
                        <p className="text-gray-800">{task.description}</p>
                        <p className="text-gray-800">{task.status}</p>
                        <p className="text-gray-800">{task.due_date}</p>
                        <p className="text-gray-800">{task.project.name}</p>
                        <p className="text-gray-800">{task.category.name}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}