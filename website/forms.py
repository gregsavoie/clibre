from django import forms

class ContactForm(forms.Form):
    nom = forms.CharField(label="Nom", max_length=50)
    courriel = forms.EmailField(label="Courriel")
    message = forms.CharField(label="Message", widget=forms.Textarea)
