from django.shortcuts import render
from .forms import LoginForm

from django.contrib.auth import authenticate, login

def login(request):
    if request.method == "POST":
        form = LoginForm(request, request.POST)
        if form.is_valid():
            # Authenticate the user
            username = form.cleaned_data["username"]
            password = form.cleaned_data["password"]
            user = authenticate(request, username=username, password=password)

            if user is not None:
                login(request, user)
                # Redirect to a success page or do something else
            else:
                # Handle authentication failure
                pass
        else:
            # Handle form validation errors
            pass
    else:
        form = LoginForm()

    return render(request, "login.html", {"form": form})
