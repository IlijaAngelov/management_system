import React from 'react';
 
export default function Project({ project }) {
    return (
        <div className="flex p-6 flex space-x-2">
            <img src="/project.png" className="w-10 h-10"></img>
            <div className="flex-1">
                <div className="flex justify-between">
                    <div>
                        <p className="text-gray-800 text-lg font-bold capitalize">{project.name}</p>
                        <p className="text-gray-800">{project.description}</p>
                        <p className="text-gray-800">{project.due_date}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}