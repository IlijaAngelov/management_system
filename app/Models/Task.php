<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;   

class Task extends Model
{
    protected $fillable = [
        'id',
        'project_id',
        'category_id',
        'title',
        'description',
        'status',
        'due_date',
        'created_at',
        'updated_at'
    ];

    public function project(): BelongsTo
    {
        return $this->belongsTo(Project::class);
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }
}
