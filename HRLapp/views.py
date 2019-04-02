import json
from django.http import HttpResponse
from django.shortcuts import render
from refs.utils.interface import getBP
# Create your views here.


def index(req):
    return render(req,"index.html")

# 文件写入函数
def writeFile(fileData,path):
    with open(path,"wb+") as f:
        if(fileData.chunks):
            for chunk in fileData.chunks():
                f.write(chunk)
        else:
            f.write(fileData)

# 生成文件并将路径传入getBP以生成黑点信息
def upload(req):
    roadFiles = req.FILES["roadfile"]
    timeFiles = req.FILES["timefile"]
    writeFile(roadFiles,'static/road.csv')
    writeFile(timeFiles,'static/time.csv')
    resJson = getBP('static/time.csv','static/road.csv')
    with open('static/res.json','w') as f:
        # json.dump(resJson,f)
        f.write(resJson)
    return HttpResponse(json.dumps(resJson),content_type="application/json")

