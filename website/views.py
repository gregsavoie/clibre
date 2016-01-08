from django.shortcuts import get_object_or_404, render
from django.http import Http404
from .models import Post
from .forms import ContactForm
from django.core.mail import send_mail
from django.http import HttpResponse
import json

# Create your views here.
def index(request):
    posts = Post.objects.all().order_by("-post_date")[:3]
    context = {"posts":posts, "form":ContactForm()}
    return render(request, "website/index.html", context)

def merci(request):
    nom = request.GET["nom"]
    context = {"sender":nom}
    return HttpResponse(json.dumps(context), content_type="application/json")
