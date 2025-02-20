import React from 'react';
 
export default function Category({ category }) {
    return (
        <div className="flex p-6 flex space-x-2">
            <div className="flex-1">
                <div className="flex justify-between">
                    <div>
                        <p className="text-gray-800 text-lg font-bold capitalize">{category.name}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}