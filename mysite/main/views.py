from rest_framework import generics
from rest_framework import permissions
from main.models import Question, Choice
from main.serializers import QuestionSerializer, ChoiceSerializer

# Create your views here.


class QuestionList(generics.ListCreateAPIView):
    """
    List all boards, or create a new board.
    """
    model = Question
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
    #permission_classes = (permissions.IsAuthenticatedOrReadOnly,)


class ChoiceList(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve, update or delete a board instance.
    """
    queryset = Choice.objects.all()
    model = Question
    serializer_class = ChoiceSerializer