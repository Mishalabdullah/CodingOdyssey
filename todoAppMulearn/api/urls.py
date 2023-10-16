from django.urls import path
from . import views
from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


urlpatterns = [
  path('', views.api_home, name='api_home'),
  path('add_todo/', views.api_add_todo, name='api_add_todo'),
  path('delete_todo/<int:todo_id>/', views.api_delete_todo, name='api_delete_todo'),  
  path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
  path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
