import json
from django.http import HttpResponse
from django.shortcuts import render
from refs.utils.interface import getCenter
from refs.utils.interface import getBP


# Create your views here.


def index(req):
    return render(req, "index.html")


# 文件写入函数
def writeFile(fileData, path):
    with open(path, "wb+") as f:
        if (fileData.chunks):
            for chunk in fileData.chunks():
                f.write(chunk)
        else:
            f.write(fileData)


# 生成路径信息文件并传入getCenter得到地图中心
def centerMsg(req):
    roadFiles = req.FILES["roadfile"]
    writeFile(roadFiles, 'static/road.csv')
    resJson = getCenter('static/road.csv')
    return HttpResponse(json.dumps(resJson), content_type="application/json")


# 生成文件并将路径传入getBP以生成黑点信息
def upload(req):
    roadFiles = req.FILES["roadfile"]
    timeFiles = req.FILES["timefile"]
    writeFile(roadFiles, 'static/road.csv')
    writeFile(timeFiles, 'static/time.csv')
    resJson = getBP('static/time.csv', 'static/road.csv')
    with open('static/res.json', 'w') as f:
        f.write(resJson)
    return HttpResponse(json.dumps(resJson), content_type="application/json")
