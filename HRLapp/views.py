import json
from django.http import HttpResponse
from django.shortcuts import render
from refs.utils.interface import getBP
# Create your views here.


def index(req):
    return render(req,"index.html")

def writeFile(fileData,path):
    with open(path,"wb+") as stfk:
        for chunk in fileData.chunks():
            stfk.write(chunk)

def upload(req):
    roadFiles = req.FILES["roadfile"]
    timeFiles = req.FILES["timefile"]
    writeFile(roadFiles,'static/road.csv')
    writeFile(timeFiles,'static/time.csv')
    resJson = getBP('static/time.csv','static/road.csv')
    return HttpResponse(json.dumps(resJson),content_type="application/json")

