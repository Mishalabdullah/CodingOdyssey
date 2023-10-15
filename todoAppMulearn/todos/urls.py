from django.urls import path,include
from .import views

urlpatterns = [
    path('',views.todos,name="todos"),
    path('add/', views.add_todo, name="add_todo"),
    path('done_todo/<int:task_id>/<str:state>/', views.done_todo, name='done_todo'),
    path('todo_not_done/<int:task_id>/<str:state>/', views.todo_not_done, name='todo_not_done'),
    path('delete_todo/<int:task_id>', views.delete_todo, name='delete_todo'),
    path('edit/<int:task_id>', views.edit_todo, name="edit_todo"),
]