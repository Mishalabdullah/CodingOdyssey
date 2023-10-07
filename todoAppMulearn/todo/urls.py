from django.urls import path,include
from .import views

urlpatterns = [
    path('',views.home,name="home"),
    # path('register/', include('register.urls')),
    # path('login/',include(login.urls))
]