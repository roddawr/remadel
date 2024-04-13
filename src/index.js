// task-scheduler.js

class TaskScheduler {
    constructor() {
      this.tasks = [];
      this.intervalId = null;
    }
  
    scheduleTask(task, intervalInSeconds) {
      const taskObject = { task, intervalInSeconds };
      this.tasks.push(taskObject);
      if (!this.intervalId) {
        this.intervalId = setInterval(this.runTasks.bind(this), 1000);
      }
    }
  
    runTasks() {
      for (const taskObj of this.tasks) {
        const { task, intervalInSeconds } = taskObj;
        if (taskObj.lastRun === undefined || Date.now() - taskObj.lastRun >= intervalInSeconds * 1000) {
          task();
          taskObj.lastRun = Date.now();
        }
      }
    }
  
    stop() {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
  
  module.exports = TaskScheduler;
  