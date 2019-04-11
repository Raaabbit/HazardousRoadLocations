from django.db import models

# 用户名-密码-角色
class User(models.Model):
    username = models.CharField(max_length=30)
    password = models.CharField(max_length=30)
    role = models.IntegerField()
# 国家-城市-黑点信息
class BlackPoints(models.Model):
    country = models.CharField(max_length=30)
    city = models.CharField(max_length=30)
    data = models.TextField(max_length=500)
# 用户用户名-管理员用户名-消息-回复-回复时间-状态
class Messages(models.Model):
    user = models.CharField(max_length=255)
    manager = models.CharField(max_length=255)
    massage = models.TextField(max_length=500)
    answer = models.TextField(max_length=500)
    time = models.DateTimeField(auto_now=True)
    status = models.IntegerField()