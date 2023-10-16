# Django Todo App Documentation

#### Deployment Links

- [https://todoapp-mulearn.up.railway.app/](https://todoapp-mulearn.up.railway.app/)

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
  - [Running the Application](#running-the-application)
  - [User Authentication](#user-authentication)
  - [Managing Todos](#managing-todos)
- [API Endpoints](#api-endpoints)
  - [Viewing Todos](#viewing-todos)
  - [Adding a Todo](#adding-a-todo)
  - [Deleting a Todo](#deleting-a-todo)
  - [Updating Todo State](#updating-todo-state)
- [Styling](#styling)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Django Todo App is a web-based application that allows users to manage their tasks and to-dos. It provides a user-friendly interface for creating, updating, and deleting tasks. The app also includes API endpoints for programmatically interacting with tasks.

## Prerequisites

Before using the Django Todo App, ensure that you have the following prerequisites:

- Python (version 3.7 or higher)
- Django
- Django Rest Framework
- A modern web browser

## Installation

To install the Django Todo App, follow these steps:

1. Clone the repository: `git clone https://github.com/Mishalabdullah/CodingOdyssey/`
2. Navigate to the project directory: `cd todoAppMulearn`
3. Create a virtual environment: `python -m venv venv`
4. Activate the virtual environment: `source venv/bin/activate` (Linux/macOS) or `venv\Scripts\activate` (Windows)
5. Install dependencies: `pip install -r requirements.txt`
6. Perform database migrations: `python manage.py migrate`
7. Create a superuser: `python manage.py createsuperuser`
8. Run the development server: `python manage.py runserver`

## Usage

### Running the Application

To run the application, execute `python manage.py runserver` and access the app through your web browser at `http://localhost:8000`.

### User Authentication

- **Login:** Access the login page to log in with your credentials.
- **Registration:** If you don't have an account, you can register by providing your details.
- **Logout:** Click the "Logout" button to log out.

### Managing Todos

- **Adding a Todo:** Click the "Add New Todo" button and fill in the details.
- **Viewing Todos:** View your list of todos, including incomplete, completed, and expired todos.
- **Deleting a Todo:** Click the delete button (🗑️) next to a todo to remove it.
- **Editing Todo State:** Toggle the checkbox to mark a task as complete or incomplete.

## API Endpoints

### Viewing Todos

- **GET /api/home:** Retrieve the list of todos for the currently logged-in user.

### Adding a Todo

- **POST /api/add_todo:** Add a new todo with details provided in the request body.

### Deleting a Todo

- **DELETE /api/delete_todo/{todo_id}:** Delete a specific todo by its ID.

### Updating Todo State

- **PATCH /api/toggle_task_state/{task_id}:** Toggle the completion state of a specific todo.

## Styling

The application's user interface is designed using Bootstrap, providing a clean and user-friendly design.

## Troubleshooting

If you encounter issues or errors, please refer to the Troubleshooting section of this documentation.

## Contributing

We welcome contributions to improve the Django Todo App. Feel free to fork the repository and submit pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Please remember that this is a basic template, and you should add more specific details and instructions based on your actual application.
