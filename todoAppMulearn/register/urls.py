from django.urls import path,include
from .import views

urlpatterns = [
    path("",views.register,name="register"),
    # path("",views.home,name="home"),
    # path('todo/', include('todo.urls')),
     
]