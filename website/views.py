from django.shortcuts import get_object_or_404, render
from django.http import Http404

# Create your views here.
def index(request):
    return render(request, "website/index.html")
