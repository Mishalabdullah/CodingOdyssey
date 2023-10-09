from django.shortcuts import render,redirect
from .models import Task
from .forms import TaskForm

def todos(request):
    # Retrieve tasks for the currently logged-in user
    user = request.user
    tasks = Task.objects.tasks_for_user(user)

    context = {'todos': tasks}
    return render(request, 'todos.html', context)

def add_todo(request):
    if request.method == 'POST':
        form = TaskForm(user=request.user, data=request.POST)
        if form.is_valid():
            form.save()
            return redirect('todos')  # Redirect to the task list page after adding a new todo
    else:
        form = TaskForm()
    return render(request, 'add_todo.html', {'form': form})