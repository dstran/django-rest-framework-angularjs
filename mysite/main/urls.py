from django.conf.urls import patterns, url
from rest_framework.urlpatterns import format_suffix_patterns
from main import views

urlpatterns = patterns('',
    url(r'^$', views.QuestionList.as_view(), name='question-list'),

    # 'choice-detail' -> must be this name!!!
    url(r'^(?P<pk>[0-9]+)/$', views.ChoiceList.as_view(), name='choice-detail'),
)


urlpatterns = format_suffix_patterns(urlpatterns)