import taskModel from "../models/Task";

class Task {

    async get() {
        return await taskModel.find().lean();
    }

    async getById(id) {
        return await taskModel.findById(id).lean();
    }

    async add(task) {
        const newTask = taskModel(task);
        await newTask.save();
    }

    async update(id, data) {
        return await taskModel.findByIdAndUpdate(id, data);
    }

    async delete() {
        await taskModel.findByIdAndDelete(id);
    }
}

export const taskRepositories = new Task()