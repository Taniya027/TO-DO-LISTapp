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

App.js: Manages the state and passes down props to other components. It also handles adding, updating, deleting, and marking tasks as done.

TodoInput.js: Contains an input field for adding new tasks.

TodoList.js: Maps over the tasks array and renders each task, including options for editing, deleting, and expanding tasks.

Data Handling

The application uses a dummy JSON file (data.json) as the data repository. This file is loaded into the state when the application starts.

URL Parameters

The application uses react-router-dom to handle URL parameters for search functionality.
The useSearchParams hook is used to read and set query parameters in the URL.

Setup and Run

Follow these steps to set up and run the application: 

Prerequisites

Before you begin, ensure you have met the following requirements:

Node.js (v12 or higher)

npm (v6 or higher) or yarn (v1.22 or higher)

Installation

Clone the repository: git clone https://github.com/Taniya027/TO-DO-LISTapp.git

Navigate to the project directory: cd TO-DO-LISTapp

Install the dependencies: npm install

Running the Application

To start the application in development mode, run: npm start
