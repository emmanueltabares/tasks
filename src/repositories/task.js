import taskModel from "../models/Task";

class Task {

    async get() {
        return await taskModel.find().lean()
    }

    async add(task) {
        const newTask = taskModel(task);
        await newTask.save();
    }

    async update() {

    }

    async delete() {

    }
}

export const taskRepositories = new Task()