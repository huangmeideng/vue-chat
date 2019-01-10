<template>
    <div class="container">
        <van-nav-bar class="nav-header" 
                    left-text="设置" 
                    left-arrow
                    @click-left="onBack"
                    fixed>
        </van-nav-bar>
        <set-list></set-list>
    </div>
</template>

<script>
import SetList from './Set/SetList'
import { NavBar, Icon} from 'vant'
export default {
    name: 'MySet',
    components: {
        NavBar,
        Icon,
        SetList
    },
    methods: {
        onBack () {
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
    .container {
        background-color: #EBEAEA;
    }
    .nav-header {
        background-color: #4494D5;
        color: #FFFFFF;
    }
    .container >>> .van-nav-bar__text {
        color: #FFFFFF;
    }
    .container >>> .van-icon-arrow-left:before {
        color: #FFFFFF;
    }
</style>

