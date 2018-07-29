from django.db import models
import uuid


class Folder(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.id)


class Note(models.Model):
    text = models.TextField(max_length=None)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    folder = models.ForeignKey(Folder, on_delete=models.CASCADE)

    def __str__(self):
        return "{:.15} ({:%Y-%m-%d %H:%M:%s})".format(self.text, self.created)
