
from django.urls import path
from HRLapp import views
urlpatterns = [
    path('index.html',views.index),
    path('upload/',views.upload)
]
