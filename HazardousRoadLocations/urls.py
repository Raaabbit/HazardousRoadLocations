
from django.urls import path
from HRLapp import views
urlpatterns = [
    path('index.html',views.index),
    path('upload/',views.upload),
    path('centerMsg/',views.centerMsg),
    path('login/',views.login),
    path('signup/',views.signup),
    path('report/',views.report),
    path('getanswer/',views.getanswer),
    path('addmanager/',views.addmanager),
    path('userupgrade/',views.userupgrade),
    path('answer/',views.answer),
    path('reportlist/',views.reportlist),
    path('deletemsg/',views.deletemsg),
    path('addbps/',views.addbps),
    path('countrylist/',views.countrylist),
    path('citylist/',views.citylist),
    path('bplist/',views.bplist)
]