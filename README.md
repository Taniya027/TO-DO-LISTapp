# TO-DO-LISTapp
## Overview

The To-Do List App is a simple yet functional application built with React. It allows users to manage their tasks effectively. Users can create, update, delete, and mark tasks as completed. The app also provides search functionality and sorting options and displays tasks in an expandable list format.

## System Design

The system consists of the following main components:

1. *App Component*: The root component that holds the state and manages the overall functionality of the application.
2. *TodoInput Component*: A component for adding new tasks.
3. *TodoList Component*: A component that displays the list of tasks.
4. *Task Item*: A component that represents an individual task in the list, displaying task details and providing options to edit, delete, and expand tasks.
5. *Search and Filter Controls*: Components that allow the user to search for tasks and filter them based on their status (completed or pending).
6. *Expandable Task Item*: A component that expands to show additional details about a task, such as the last updated timestamp.

## Implementation

### State Management

The application uses React's useState and useEffect hooks to manage the state and side effects. The state includes:

- tasks: An array of task objects.
- searchTerm: A string for the search input.
- filter: A string representing the filter criteria (all, completed, or pending).
- sort: A string representing the sort order (ascending or descending).
- expandedIndex: An index representing which task is currently expanded.

### Components

1. *App.js*: Manages the state and passes down props to other components. It also handles adding, updating, deleting, and marking tasks as done.
2. *TodoInput.js*: Contains an input field for adding new tasks.
3. *TodoList.js*: Maps over the tasks array and renders each task, including options for editing, deleting, and expanding tasks.

### Data Handling

The application uses a dummy JSON file (data.json) as the data repository. This file is loaded into the state when the application starts.

### URL Parameters

The application uses react-router-dom to handle URL parameters for search functionality. The useSearchParams hook is used to read and set query parameters in the URL.

## Setup and Run

Follow these steps to set up and run the application:
