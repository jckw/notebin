import graphene
from graphene_django.types import DjangoObjectType
from .models import Folder, Note


class FolderType(DjangoObjectType):
    class Meta:
        model = Folder


class NoteType(DjangoObjectType):
    class Meta:
        model = Note


class Query(object):
    folder = graphene.Field(FolderType, id=graphene.String())
    note = graphene.Field(NoteType, id=graphene.Int())

    def resolve_folder(self, info, **kwargs):
        folder_id = kwargs.get("id")

        if id is not None:
            return Folder.objects.get(id=folder_id)

        return None

    def resolve_note(self, info, **kwargs):
        note_id = kwargs.get("id")

        if id is not None:
            return Note.objects.get(id=note_id)

        return None
