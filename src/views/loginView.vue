<template>
  <div class="login">
    <div class="forms">
      <el-form :model="params" :rules="rules" label-width="120px">
        <el-form-item label="用户名" label-width="80px" prop="userName">
          <el-input v-model="params.userName" :prefix-icon="User" placeholder="请输入用户名" class="inp" />
        </el-form-item>
        <el-form-item label="密码" label-width="80px" prop="passWord">
          <el-input v-model="params.passWord" :prefix-icon="Search" placeholder="请输入密码" type="passWord" show-password
            class="inp" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登陆</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
const params = reactive({
  userName: '',
  passWord: ''
})

const rules = reactive({
  userName: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
  ],
  passWord: [
    { required: true, message: '请输入密码', trigger: 'blur', },
  ]
})

const onSubmit = ()=> {

}
</script>

<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .forms {
    width: 5rem;
    height: 2rem;
    border: 1px solid #ebebeb;
    display: flex;
    justify-content: center;
    align-items: center;

    .inp {
      width: 2rem;
    }
  }
}</style>