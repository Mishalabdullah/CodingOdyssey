from django import forms
from .models import Task

class TaskForm(forms.ModelForm):
    def __init__(self, user=None, *args, **kwargs):
        super(TaskForm, self).__init__(*args, **kwargs)
        self.user = user

    class Meta:
        model = Task
        fields = ['title', 'description', 'complete', 'expired', 'dueDate']

    def save(self, commit=True):
        task = super(TaskForm, self).save(commit=False)
        task.user = self.user  # Set the user to the current user
        if commit:
            task.save()
        return task
