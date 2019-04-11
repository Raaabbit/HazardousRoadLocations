import json
import random
import time

from django.http import HttpResponse
from django.shortcuts import render

from HRLapp.models import User
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
    writeFile(roadFiles, 'files/road.csv')
    resJson = getCenter('files/road.csv')
    return HttpResponse(json.dumps(resJson), content_type="application/json")


# 生成文件并将路径传入getBP以生成黑点信息
def upload(req):
    roadFiles = req.FILES["roadfile"]
    timeFiles = req.FILES["timefile"]
    writeFile(roadFiles, 'files/road.csv')
    writeFile(timeFiles, 'files/time.csv')
    resJson = getBP('files/time.csv', 'files/road.csv')
    return HttpResponse(json.dumps(resJson), content_type="application/json")

# 登录
def login(req):
    print('用户登录')
    reqJson = json.loads(req.body.decode('utf-8'))
    _username = reqJson['username']
    _password = reqJson['password']
    if User.objects.filter(username=_username).exists():
        user = User.objects.get(username=_username)
        if user.password == _password:
            role = user.role
            response = {'code': '1', 'info': 'ok', 'username': _username ,'role':role}
        else:
            response = {'code': '0', 'info': '密码错误'}
    else:
        response = {'code': '0', 'info': '用户不存在'}

    return HttpResponse(json.dumps(response),content_type="application/json")

# 注册
def signup(req):
    print('新用户注册')
    reqJson = json.loads(req.body.decode('utf-8'))
    _username = reqJson['username']
    _password = reqJson['password']
    user = User.objects.filter(username=_username)
    if len(user)>=1:
        response = {'code':'0','info':'用户名已存在'}
    else:
        User.objects.create(username=_username,password=_password,role=1)
        response = {'code': '1', 'info': '注册成功，请登录'}

    return HttpResponse(json.dumps(response),content_type="application/json")


