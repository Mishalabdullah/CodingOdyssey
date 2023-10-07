from django.shortcuts import render,HttpResponse

def home(request):
    return HttpResponse("Todo App")

# Create your views here.
