import { taskRepositories } from "../repositories/task";

class Task {
  async addTask(req, res) {
    try {
      await taskRepositories.add(req.body);
      res.redirect("/");
    } catch (error) {
      res.render(error);
    }
  }

  async getTasks(req, res) {
    try {
      const tasks = await taskRepositories.get();
      res.render('index', { tasks });
    } catch (error) {
      res.render(error);
    }
  }

  async getTaskById(req, res) {

    res.render('edit')
    /* const {id} = req.params;
    try {
      var task = await taskRepositories.getById(id);
      console.log(task._id.toString())
      console.log(task.title)
      res.render('edit', {task: task})
    } catch (error) {
      res.render(error);
    } */
  }

  async deleteTask(req, res) {
    const {id} = req.params;
      try {
          await taskRepositories.delete(id);
      } catch (error) {
          res.render(error)
      }
  }
  
  async updateTask(req, res) {
      const {id} = req.params;
      const data = req.body;

      try {
          const newTask = await taskRepositories.update(id, data)
          /* res.redirect('/tasks') */
      } catch (error) {
          res.render(error)
      }
  }
}

export const taskController = new Task();
