from rest_framework import generics


# Create your views here.
from .models import (
    categories, suppliers, paymenth_methods,
    vacant, candidate, events
    )
from .serializers import (
    categoriesSerializer, suppliersSerializer, paymenth_methodsSerializer,
    vacantSerializer, candidateSerializer, eventsSerializer
)

class categoriesListCreate(generics.ListCreateAPIView):
    queryset = categories.objects.all()
    serializer_class = categoriesSerializer

class categoriesDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = categories.objects.all()
    serializer_class = categoriesSerializer
    
    
    
class suppliersListCreate(generics.ListCreateAPIView):
    queryset = suppliers.objects.all()
    serializer_class = suppliersSerializer

class suppliersDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = suppliers.objects.all()
    serializer_class = suppliersSerializer
    
class paymenth_methodsListCreate(generics.ListCreateAPIView):
    queryset = paymenth_methods.objects.all()
    serializer_class = paymenth_methodsSerializer

class paymenth_methodsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = paymenth_methods.objects.all()
    serializer_class = paymenth_methodsSerializer
    
    
    
class vacantListCreate(generics.ListCreateAPIView):
    queryset = vacant.objects.all()
    serializer_class = vacantSerializer

class vacantDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = vacant.objects.all()
    serializer_class = vacantSerializer
    
class candidateListCreate(generics.ListCreateAPIView):
    queryset = candidate.objects.all()
    serializer_class = candidateSerializer

class candidateDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = candidate.objects.all()
    serializer_class = candidateSerializer
    
    
class eventsListCreate(generics.ListCreateAPIView):
    queryset = events.objects.all()
    serializer_class = eventsSerializer

class eventsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = events.objects.all()
    serializer_class = eventsSerializer
    
