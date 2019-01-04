<template>
    <div class="container">
        <div class="publish-header">
            <van-icon  class="header-arrow" name="arrow-left" size="20px" @click="onBack"></van-icon>
            <van-button class="header-button" :disabled="buttonAble">发表</van-button>
        </div>
        <div class="publish-body">
            <div class="body-text">
                <van-field v-model="publishText" 
                            placeholder="说说现在的想法"
                            type="textarea"
                            :autosize="autoSizeOption"
                            >
                </van-field>
            </div>
            <community-upload></community-upload>
        </div>
        <div class="publish-footer">
            footer
        </div>
    </div>
</template>

<script>
import { Icon, Field, Button } from 'vant'
import CommunityUpload from './CommunityUpload'
export default {
    name: 'CommunityPublish',
    components: {
        Icon,
        Field,
        Button,
        CommunityUpload
    },
    data() {
        return {
            publishText: '',
            autoSizeOption: {
                minHeight: 100
            },
            buttonAble: true
        }
    },
    watch: {
        publishText () {
            if (this.publishText) {
                this.buttonAble = false
            } else {
                this.buttonAble = true
            }
        }
    },
    methods: {
        onBack () {
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
    .publish-header {
        display: flex;
        flex-direction: row;
        height: 50px;
        background-color: #FFFFFF;
        border-bottom: 1px solid #E5E4E4;
    }
    .header-arrow {
        margin-left: 10px;
        line-height: 50px;
    }
    .header-button {
        width: 60px;
        height: 30px;
        margin-top: 10px;
        margin-left: 270px;
        background-color: #4494D5;
        color: #FFFFFF;
        text-align: center;
        font-family: "Microsoft YaHei";
        border-radius: 3px;
        line-height: 30px;
    }
    .publish-body {
        border-bottom: 1px solid #D9D9D9;
    }
    .body-text {
        margin-bottom: 10px;
    }
</style>

