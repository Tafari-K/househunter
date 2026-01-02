from django.shortcuts import render
from .models import About


# Create your views here.
def about(request):
    about = About.objects.all().first()
    return render(request, 'about.html', {'about': about})
