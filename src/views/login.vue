<template>
  <div class="login">
    <div class="container">
      <img src="../assets/avatar.jpg" alt="" class="avatar">
      <!-- 表单验证 -->
      <!-- 在防止用户犯错的前提下，尽可能让用户更早地发现并纠正错误。 -->
      <!-- model：表单所有的元素所绑定的属性的对象集合 -->
      <!-- ref:当前表单的标识   label-width：标签的宽度  model：表单所有的元素所绑定的属性的对象集合
      rules：当前所有表单元素的规则的集合 -->
      <el-form :model="loginForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <!-- v-model：数据绑定属性  prop：定义验证规则，注意一般需要将这个prop属性的值和你需要校验的属性名称以及校验规则名称完全一致 -->
          <!-- 用户 -->
        <el-form-item prop= 'username'>
          <!-- clearable：可清空 -->
          <!--prefix-icon 前置图标  -->
          <el-input placeholder="请输入内容"
            prefix-icon="icon-user-check"
            v-model="loginForm.username"
            clearable>
          </el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop= 'password'>
          <el-input placeholder="请输入内容"
            prefix-icon="icon-key"
            v-model="loginForm.password"
            clearable>
          </el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item>
          <el-button type="primary" class="login-btn">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      // rules规则：
      // rules是一个对象，必须要定义在data里
      // 每一个规则都是一个数组，数组中可以创建一个一个的规则
      // 所有元素的验证规则都是在这个对象中定义
      rules: {
        username: [
          // required：必填项，页面上标签前面会出现一个红色的小星星
          // message：如果不符合规则时的提示信息
          // trigger：触发时机：blur失去焦点时触发
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 16, message: '请输入6-16位的密码', trigger: 'blur' }
        ]
      }
    }
  }
}
</script>

<style lang='less' scoped>
.login {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #2f4050;
  .container {
    position: absolute;
    left: 0;
    right: 0;
    width: 400px;
    padding: 0px 40px 15px 40px;
    margin: 200px auto;
    background: white;
    .avatar {
      position: relative;
      left: 50%;
      width: 120px;
      height: 120px;
      margin-left: -60px;
      margin-top: -60px;
      box-sizing: border-box;
      border-radius: 50%;
      border: 10px solid #fff;
      box-shadow: 0 1px 5px #ccc;
      overflow: hidden;
    }
    .login-btn {
      width: 100%;
    }
    /deep/.el-form-item__content{
      margin-left: 0 !important;
    }
  }
}
</style>
