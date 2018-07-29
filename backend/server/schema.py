import graphene
import server.api.schema


class Query(server.api.schema.Query, graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query)
