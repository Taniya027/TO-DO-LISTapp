# TO-DO-LISTapp
Overview

To-Do List App - with React. Simple and usefulReact based solution to learn how we can work on the project functionality and connect things together in an app . This is because it helps in organising the tasks that users do. Create, read/list, update and delete given a task ID (user can mark it for marking it as done) The app offers search and sorts tasks displayed in an expandable list style.

System Design

This system is composed of the basic components below:

App Component: This is the First or Root component where state and everything else needed for this application can be managed.

TodoInput Component : This component will be used for adding new tasks.

TodoList Component: This component is where our list of tasks will be shown.

Task Item: For an individual task in the list, showing details of a task and offering ways to edit or delete tasks as well as to see the full detail.

Search and Filter Controls: Search component to search for tasks, filter based on the status (completed or pending).

Expandable Task Item: expands to show more details of a task, such as last updated timestamp.

Implementation

State Management

The application handles the state and side effects using React useState and useEffect hooks The state includes:

tasks: Array of task object.

searchTerm : A string for the search input..

filter - A string representing the filter criteria.

sort: A value of a string indicating the order to apply for sorting (asc or desc)

expandIndex: The index of the open task (basically which task is currently expanded)

Components
