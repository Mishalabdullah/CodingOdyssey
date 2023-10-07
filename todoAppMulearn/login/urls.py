# urls.py
from django.contrib import admin
from django.urls import path, include
from .import views

urlpatterns = [
    # path('admin/', admin.site.urls),
    path("",views.login,name="login"),
    # path("register/", v.register, name="register"),
    # path('', include("todo.urls")),
    # path('', include("django.contrib.auth.urls")),
]