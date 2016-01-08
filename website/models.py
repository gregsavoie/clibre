from django.db import models

# Create your models here.
class Post(models.Model):
    post_date = models.DateTimeField()
    post_contenu = models.TextField()
    post_apercu = models.CharField(max_length=150)

    def racourcir_contenu(self):
        """ Méthode ajustant l'aperçu du poste à une
            longueur de 150 caratères...
        """
        post_apercu = ""
        if(len(self.post_contenu) > 150):
            post_apercu = str(self.post_contenu)[:147]
            post_apercu += "..."
        else:
            post_apercu = self.post_contenu
        return post_apercu

    def save(self, *args, **kwargs):
        self.post_apercu = self.racourcir_contenu()
        super(Post, self).save(*args, **kwargs)

    def __str__(self):
        return str(self.post_date) + " - " + self.post_apercu
