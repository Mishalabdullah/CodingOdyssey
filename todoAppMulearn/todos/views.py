from django.shortcuts import render,redirect
from .models import Task
from .forms import TaskForm

def todos(request):
    # Retrieve tasks for the currently logged-in user
    user = request.user
    tasks = Task.objects.filter(user=user)

    incomplete_todos = [todo for todo in tasks if not todo.complete and not todo.expired]
    completed_todos = [todo for todo in tasks if todo.complete]
    expired_todos = [todo for todo in tasks if todo.expired]

    return render(request, 'todos.html', {
        'incomplete_todos': incomplete_todos,
        'completed_todos': completed_todos,
        'expired_todos': expired_todos,
    })


def add_todo(request):
    if request.method == 'POST':
        form = TaskForm(user=request.user, data=request.POST)
        if form.is_valid():
            form.save()
            return redirect('todos')  # Redirect to the task list page after adding a new todo
    else:
        form = TaskForm()
    return render(request, 'add_todo.html', {'form': form})

def done_todo(request, task_id, state):
    task = Task.objects.get(pk=task_id)
    task.complete = not state
    task.save()
    return redirect('todos')

def todo_not_done(request, task_id, state):
    task = Task.objects.get(pk=task_id)
    task.complete = True
    task.save()
    return redirect('todos')
