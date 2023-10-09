from django.urls import path,include
from .import views

urlpatterns = [
    path('',views.todos,name="todos"),
    path('add/', views.add_todo, name="add_todo"),
]