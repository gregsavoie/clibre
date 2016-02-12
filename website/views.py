from django.shortcuts import get_object_or_404, render
from django.http import Http404
from .models import Post
from .forms import ContactForm
from django.core.mail import send_mail, BadHeaderError
from django.http import HttpResponse
import json

# Create your views here.
def index(request):
    posts = Post.objects.all().order_by("-post_date")[:3]
    context = {"posts":posts, "form":ContactForm()}
    return render(request, "website/index.html", context)

def merci(request):
    nom = request.GET["nom"]
    courriel = request.GET["courriel"]
    message = request.GET["message"]
    if nom and courriel and message:
        try:
            send_mail("[CONTACT CLIBRE de " + nom + "]", message, courriel, ["contact@clibre.uqam.ca"])
        except BadHeaderError:
            return HttpResponse(json.dumps({"envoye":0}), content_type="application/json")
        return HttpResponse(json.dumps({"envoye":1}), content_type="application/json")
    return HttpResponse(json.dumps({"envoye":0}), content_type="application/json")
