import datetime
import json

from django.http import HttpResponse
from django.shortcuts import render

from HRLapp.models import User, Messages, BlackPoints
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

# 用户提出反馈
def report(req):
    print("用户反馈")
    reqJson = json.loads(req.body.decode('utf-8'))
    _username = reqJson['username']
    _message = reqJson['message']
    Messages.objects.create(user=_username,manager='',massage=_message,answer='',time='',status=0)
    response = {'code': '1', 'info': '反馈成功，请耐心等待回复'}
    return HttpResponse(json.dumps(response),content_type="application/json")

# 用户查看被回复的消息
def getanswer(req):
    print("用户查看自己的反馈")
    reqJson = json.loads(req.body.decode('utf-8'))
    _username = reqJson['username']
    msgs = Messages.objects.filter(user=_username)
    response = {'code':'1','messageList':[]}
    for i in range(0, len(msgs)):
        # temp = {'report':msgs[i].massage,'answer':msgs[i].answer,'time':msgs[i].time}
        temp={}
        temp['report'] = msgs[i].massage
        temp['answer'] = msgs[i].answer
        temp['time'] = msgs[i].time.strftime('%Y-%m-%d %H:%M:%S')
        response['messageList'].append(temp)
    return HttpResponse(json.dumps(response), content_type="application/json")

# 普通用户升级为管理员
def userupgrade(req):
    reqJson = json.loads(req.body.decode('utf-8'))
    _username = reqJson['username']
    user = User.objects.filter(username=_username)
    if len(user) == 0:
        response = {'code': '0', 'info': '用户名不存在，请检查用户名或者尝试直接添加管理员'}
    else:
        User.objects.filter(username=_username).update(role=2)
        response = {'code': '1', 'info': '成功升级为管理员'}

    return HttpResponse(json.dumps(response), content_type="application/json")

# 直接添加管理员
def addmanager(req):
    reqJson = json.loads(req.body.decode('utf-8'))
    _username = reqJson['username']
    _password = reqJson['password']
    user = User.objects.filter(username=_username)
    if len(user) >= 1:
        response = {'code': '0', 'info': '用户名已存在'}
    else:
        User.objects.create(username=_username, password=_password, role=2)
        response = {'code': '1', 'info': '新管理员添加成功'}

    return HttpResponse(json.dumps(response), content_type="application/json")

# 回复消息
def answer(req):
    print("管理员回复")
    reqJson = json.loads(req.body.decode('utf-8'))
    _user = reqJson['user']
    _report = reqJson['report']
    _manager = reqJson['manager']
    _answer = reqJson['answer']
    Messages.objects.filter(user=_user, massage=_report).update(answer=_answer,status=1,manager=_manager)
    response = {'code': '1', 'info': '回复成功'}
    return HttpResponse(json.dumps(response), content_type="application/json")

# 删除消息
def deletemsg(req):
    reqJson = json.loads(req.body.decode('utf-8'))
    _user = reqJson['user']
    _report = reqJson['report']
    Messages.objects.filter(user=_user, massage=_report).delete()
    response = {'code': '1', 'info': '删除成功'}
    return HttpResponse(json.dumps(response), content_type="application/json")

# 管理员查看待回复消息
def reportlist(req):
    reqJson = json.loads(req.body.decode('utf-8'))
    _username = reqJson['username']
    msgs = Messages.objects.filter(status=0)
    response = {'code': '1', 'messageList': []}
    for i in range(0, len(msgs)):
        temp = {}
        temp['user'] = msgs[i].user
        temp['report'] = msgs[i].massage
        temp['answer'] = msgs[i].answer
        response['messageList'].append(temp)

    return HttpResponse(json.dumps(response), content_type="application/json")

# 管理员添加黑点
def addbps(req):
    reqJson = json.loads(req.body.decode('utf-8'))
    _country = reqJson['country']
    _city = reqJson['city']
    _data = reqJson['data']
    if len(BlackPoints.objects.filter(country=_country,city=_city) > 0):
        BlackPoints.objects.filter(country=_country, city=_city).update(data=_data);
    else:
        BlackPoints.objects.create(country=_country, city=_city, data=_data);
    response = {'code': '1', 'info': '添加成功'}
    return HttpResponse(json.dumps(response), content_type="application/json")

# 查找已有的国家列表
def countrylist(req):
    allCountry = BlackPoints.objects.all().values('country')
    response = {'code': '1', 'countryList': []}
    for i in range(0, len(allCountry)):
        response['countryList'].append(allCountry[i].country)
    return HttpResponse(json.dumps(response), content_type="application/json")

# 查找对应城市的数据
def citylist(req):
    reqJson = json.loads(req.body.decode('utf-8'))
    _country = reqJson['country']
    citys = BlackPoints.objects.filter(country=_country)
    response = {'code': '1', 'cityList': []}
    for i in range(0, len(citys)):
        response['countryList'].append(citys[i].city)
    return HttpResponse(json.dumps(response), content_type="application/json")

# 查找对应的黑点数据
def bplist(req):
    reqJson = json.loads(req.body.decode('utf-8'))
    _country = reqJson['country']
    _city = reqJson['city']
    bps = BlackPoints.objects.get(country=_country,city=_city).data
    response = {'code': '1', 'info':bps}
    return HttpResponse(json.dumps(response), content_type="application/json")