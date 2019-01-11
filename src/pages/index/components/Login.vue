<template>
    <panel class="container" title="登录">
        <van-cell-group>
            <van-field
                v-model="userMobile"
                clearable
                label="用户名"
                left-icon="contact"
                placeholder="请输入手机号"/>
            <van-field
                v-model="userPassword"
                type="password"
                label="密码"
                left-icon="closed-eye"
                placeholder="请输入密码"/>
        </van-cell-group>
        <div slot="footer">
            <van-button size="small" @click="onCancel">取消</van-button>
            <van-button size="small" type="danger" class="button-sure" @click="onSure">确定</van-button>
        </div>
    </panel>
</template>

<script>
import { Panel ,CellGroup, Field, Button } from 'vant'
export default {
    name:'Login',
    components: {
        Panel,
        CellGroup,
        Field,
        Button
    },
    data() {
        return {
            userMobile: '',
            userPassword: ''
        }
    },
    methods: {
        //取消按钮事件
        onCancel () {
            this.$emit('cancelLogin')
        },
        //登录事件
        onSure () {
            this.$router.push('/home/')
        }
    },
}
</script>

<style scoped>
    .container {
        position: absolute;
        z-index: 999;
        width: 260px;
        border-radius: 2px;
        background-color: #FFFFFF;
    }
    .container >>> .van-button--danger {
        background-color: #4494D5;
        border: 1px solid #4494D5;
    }
</style>
