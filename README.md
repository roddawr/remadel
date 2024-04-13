# Task Scheduler

Task Scheduler is a simple Node.js package that allows you to schedule tasks to run at specified intervals within your applications.

## Installation

You can install Task Scheduler via npm:

```bash
npm install task-scheduler
```

## Usage

```javascript
const TaskScheduler = require('task-scheduler');

// Create an instance of TaskScheduler
const scheduler = new TaskScheduler();

// Define a task function
function myTask() {
  console.log('Running my task...');
}

// Schedule the task to run every 5 seconds
scheduler.scheduleTask(myTask, 5);

// To stop the scheduler (optional)
// scheduler.stop();
```

## API

### `constructor()`

Initializes the TaskScheduler instance.

### `scheduleTask(task, intervalInSeconds)`

Schedules a task to run at a specified interval.

- `task`: A function representing the task to be scheduled.
- `intervalInSeconds`: The interval in seconds at which the task should run.

### `stop()`

Stops the task scheduler.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
