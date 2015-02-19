from django.conf.urls import patterns, include, url
from django.conf.urls.static import static
from django.contrib import admin
from django.conf import settings


urlpatterns = patterns('',
    # Examples:

    url(r'^api-auth/', include('rest_framework.urls',
                               namespace='rest_framework')),
    url(r'^admin/', include(admin.site.urls)),

    #static
    # (r'^static/(?P<path>.*)$', 'django.views.static.serve',
    #      {'document_root': settings.STATIC_ROOT}),

    # index
    url(r'^$', 'mysite.views.home', name='home'),

    # Doing this will allow the server to server the index page
    # in which angular will be able to resolve it when html5mode is
    # set to true.
    url(r'^question/\d+$', 'mysite.views.home', name='home'),
    # Questions
    (r'^questions/', include('main.urls')),
)
