
from django.urls import path
from HRLapp import views
urlpatterns = [
    path('index.html',views.index),
    path('upload/',views.upload),
    path('centerMsg/',views.centerMsg),
    path('login/',views.login),
    path('signup/',views.signup),
    path('report/',views.report),
    path('getanswer/',views.getanswer)
]