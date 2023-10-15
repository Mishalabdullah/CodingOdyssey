from django.db import models
from django.contrib.auth.models import User

class TaskManager(models.Manager):
    def tasks_for_user(self, user):
        return self.filter(user=user)

class Task(models.Model):
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, null=True, blank=True)
    title = models.CharField(max_length=200)
    description = models.TextField(null=True, blank=True)
    complete = models.BooleanField(default=False)
    expired = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now_add=True)
    dueDate = models.DateField(null=True, blank=True)  

    objects = TaskManager()

    def __str__(self):
        return self.title

    class Meta:
        order_with_respect_to = 'user'
