# To-Do List Application

A simple and interactive to-do list web application that allows users to manage their daily tasks.

## Features

- Add new tasks
- Mark tasks as complete/incomplete
- Delete tasks
- Clean and responsive interface

### HTML Structure

- Input field for new tasks
- Add Task button
- Dynamic list container for tasks
- Delete buttons for each task

### JavaScript Functionality

- **Task Addition**: Creates new task items with unique IDs
- **Task Completion**: Toggle tasks as complete/incomplete by clicking
- **Task Deletion**: Remove tasks with dedicated delete buttons
- **Event Handling**: Manages click events and task interactions

### Event Listeners

- `DOMContentLoaded`: Ensures DOM is loaded before running scripts
- Click events for:
  - Adding new tasks
  - Completing tasks
  - Deleting tasks

## Usage

1. Enter a task in the input field
2. Click "Add Task" or press Enter
3. Click on a task to mark it as complete
4. Click the delete button (❌) to remove a task

## File Structure

```plaintext
To-Do-List/
│
├── index.html # Main HTML file
├── style.css # Styling
├── script.js # JavaScript functionality
└── README.md # Documentation
```
