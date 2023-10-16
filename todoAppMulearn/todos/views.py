from django.shortcuts import render,redirect
from .models import Task
from .forms import TaskForm
from django.utils import timezone
from datetime import datetime
from django.shortcuts import redirect, get_object_or_404
from django.views.decorators.csrf import csrf_exempt


def todos(request):
    user = request.user
    todos = Task.objects.filter(user=user)
    
    # Iterate through todos and check due dates
    for todo in todos:
        if not todo.complete and todo.dueDate:
            if isinstance(todo.dueDate, datetime):
                todo.dueDate = todo.dueDate.date()  # Convert to datetime.date

            if todo.dueDate < timezone.now().date():
                todo.expired = True
                todo.save()
    
    # Separate todos into different lists
    incomplete_todos = [todo for todo in todos if not todo.complete and not todo.expired]
    completed_todos = [todo for todo in todos if todo.complete]
    expired_todos = [todo for todo in todos if todo.expired]

    return render(request, 'todos.html', {
        'incomplete_todos': incomplete_todos,
        'completed_todos': completed_todos,
        'expired_todos': expired_todos,
    })
@csrf_exempt
def add_todo(request):
    if request.method == 'POST':
        form = TaskForm(user=request.user, data=request.POST)
        if form.is_valid():
            form.save()
            return redirect('todos')  # Redirect to the task list page after adding a new todo
    else:
        form = TaskForm()
    return render(request, 'add_todo.html', {'form': form})

def edit_todo(request, task_id):
    task = get_object_or_404(Task, pk=task_id)
    if task.user != request.user:
        return HttpResponseForbidden("You don't have permission to edit this task.")

    if request.method == 'POST':
        form = TaskForm(request.POST, instance=task)  # Use your TaskForm if you have one
        if form.is_valid():
            updated_task = form.save()
            return redirect('todos')
       
    else:
        form = TaskForm(instance=task)  # Use your TaskForm if you have one
    
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
from django.shortcuts import redirect, get_object_or_404

def delete_todo(request, task_id):
    task = get_object_or_404(Task, pk=task_id)
    if task.user != request.user:
        return HttpResponseForbidden("You don't have permission to delete this task.")

    task.delete()

    return redirect('todos')