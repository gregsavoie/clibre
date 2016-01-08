from django.contrib import admin
from .models import Post

# Register your models here.

class PostAdmin(admin.ModelAdmin):
    fields = ["post_date", "post_contenu"]

admin.site.register(Post, PostAdmin)
