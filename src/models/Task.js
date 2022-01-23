import { Schema, Model } from 'mongoose';

const taskSchema = Schema({
    title: { 
        type: String, 
        required: true, 
        unique: true, 
        trim: true 
    },
    description: { type: String, required: true},
    done: { type: Boolean, default: false }
}, {
    timestamps: true,
    versionKey: false
});

export const taskModel = new Model('Task', taskSchema);