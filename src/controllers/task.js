import { taskRepositories } from "../repositories/task";

class Task {

    async addTask(req, res) {
        try {
            await taskRepositories.add(req.body)
            res.redirect('/tasks');
        } catch (error) {
            res.render(error)
        }
    } 

    async getTasks(req, res) {
        try {
            const tasks = await taskRepositories.get()
            console.log(tasks)
            res.render('index', { tasks: tasks })
        } catch (error) {
            res.render(error)
        }
    }

    async deleteTask(req, res) {

    }
    async updateTask(req, res) {

    }
}

export const taskController = new Task();