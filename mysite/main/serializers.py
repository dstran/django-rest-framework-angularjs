from rest_framework import serializers
from main.models import Question, Choice


class QuestionSerializer(serializers.HyperlinkedModelSerializer):
    #question_text = serializers.Field()
    # api_url = serializers.SerializerMethodField('get_api_url')

    class Meta:
        model = Question
        fields = ('question_text', 'pub_date', 'was_published_recently',)

    # def get_api_url(self, obj):
    #     return "#/post/%s" % obj.id


class ChoiceSerializer(serializers.HyperlinkedModelSerializer):
    question = QuestionSerializer(read_only=True)

    class Meta:
        model = Choice
        fields = ('choice_text', 'votes', 'question')
        # 'url' allows us to serialize the url
        # fields = ('choice_text', 'votes', 'question', 'url')