<template>
  <div class="g-container">
    <header class="g-header">
      <router-link to="/">
        <img src="./assets/logo.png">
      </router-link>
      <nav class="g-header-nav">
        <div class="common-btns" v-if="islogin == false">
          <button @click="loginDialogVisible = true">登录</button>
          <button @click="signupDialogvisible = true">注册</button>
        </div>
        <div class="user-btns" v-else-if="userRole == 1">
          <router-link to="/citysearch">
            <button>城市查询</button>
          </router-link>
          <router-link to="/fileanalysis">
            <button>文件分析</button>
          </router-link>
          <router-link to="/report">
            <button>提出反馈</button>
          </router-link>
          <button>退出登录</button>
        </div>
        <div class="manager-btns" v-else-if="userRole == 2">
          <router-link to="/dealreport">
            <button>处理用户反馈</button>
          </router-link>
          <router-link to="/addbps">
            <button>添加路网黑点</button>
          </router-link>
          <router-link to="/addmanager">
            <button>添加新管理员</button>
          </router-link>
          <button>退出登录</button>
        </div>
      </nav>
      <!-- 登录表单 -->
      <el-dialog title="登录" :visible.sync="loginDialogVisible">
        <el-form :model="loginForm" class="modal-form" label-width="90px" label-position="left">
          <el-form-item label="用户名">
            <el-input v-model="loginForm.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="loginForm.password" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="loginDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="loginDialogVisible = false">登 录</el-button>
        </div>
      </el-dialog>
      <!-- 注册表单 -->
      <el-dialog title="注册" :visible.sync="signupDialogvisible">
        <el-form :model="signupForm" class="modal-form" label-width="90px" label-position="left">
          <el-form-item label="输入用户名">
            <el-input v-model="signupForm.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="输入密码">
            <el-input v-model="signupForm.password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码">
            <el-input v-model="signupForm.passwordConfirm" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="signupDialogvisible = false">取 消</el-button>
          <el-button type="primary" @click="signupDialogvisible = false">注 册</el-button>
        </div>
      </el-dialog>
    </header>
    <div class="g-main">
      <router-view></router-view>
    </div>
    <footer class="g-footer">
      <p>BSI路网黑点在线识别系统</p>
      <p>邮箱：yangflo@126.com</p>
      <p>东南大学软件工程学院、交通学院</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  data() {
    return {
      username: "", // string 用户名
      loginForm: {
        username: "",
        password: ""
      },
      signupForm: {
        username: "",
        password: "",
        passwordConfirm: ""
      },
      islogin: true, // bool 是否登录
      userRole: 1, // number 用户身份标记
      loginDialogVisible: false,
      signupDialogvisible: false
    };
  }
};
</script>

<style>
html,body {height: 100%;}
body,ol,ul,h1,h2,h3,h4,h5,h6,p,th,td,dl,dd,form,fieldset,legend,input,textarea,select {margin: 0;padding: 0;}
body {font: 12px "PingFang SC", "Microsoft Yahei", "Arial Narrow", HELVETICA,sans-serlf;background: #fff;-webkit-text-size-adjust: 100%;}
a {color: #2d374b;text-decoration: none;}
a:hover {color: #cd0200;text-decoration: underline;}
em {font-style: normal;}
li {list-style: none;}
img {border: 0;vertical-align: middle;}
table {border-collapse: collapse;border-spacing: 0;}
p {word-wrap: break-word;}

.g-container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100%;
}
.g-header {
  flex-shrink: 0;
  width: 100%;
  height: 80px;
  color: #fff;
  background-color: #000;
  overflow: hidden;
}
.g-header img {
  float: left;
  height: 60px;
  margin: 10px 60px;
}
.g-header-nav {
  float: right;
  margin-right: 60px;
  color: #fff;
}
.g-header-nav button {
  height: 60px;
  margin: 10px 0;
  padding: 0 20px;
  outline: none;
  border: none;
  font-size: 16px;
  color: #fff;
  background-color: #000;
}
.g-header-nav button:hover {
  background-color: #2d374b;
}
.g-header-nav .router-link-exact-active > button {
  background-color: #2d374b;
}
.modal-form{
  margin:auto;
  width: 400px;
}
.g-main {
  flex: 1 1 auto;
}
.g-footer {
  width: 100%;
  padding: 10px;
  border-top: 1px solid #eee;
  text-align: center;
  font-size: 12px;
  color: #909399;
}
</style>
