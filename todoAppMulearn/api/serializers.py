from rest_framework import serializers
from todos.models import Task

class CustomDateField(serializers.Field):
    def to_representation(self, obj):
        # Format the date as a string in the desired format
        return obj.strftime('%Y-%m-%d')

class TaskSerializer(serializers.ModelSerializer):
    dueDate = CustomDateField()

    class Meta:
        model = Task
        fields = '__all__'
