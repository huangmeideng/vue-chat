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
            <community-upload @uploadImg="onUploadImg" @emptyImg="onEmptyImg"></community-upload>
        </div>
        <div class="publish-footer">
            <router-link  tag="div" 
                        class="footer-item" 
                        to="/community/scope/">
                <van-icon class="item-icon" name="friends-o" size="25px"></van-icon>
                <span class="item-text">谁可以看</span>
                <van-icon class="item-arrow" name="arrow" size="20px"></van-icon>
            </router-link>
            <router-link  tag="div" 
                        class="footer-item"  
                        to="/common/location/">
                <van-icon class="item-icon" name="location-o" size="25px"></van-icon>
                <span class="item-text">{{publishLocation}}</span>
                <van-icon class="item-arrow" name="arrow" size="20px"></van-icon>
            </router-link>
        </div>
    </div>
</template>

<script>
import { Icon, Field, Button } from 'vant'
import CommunityUpload from './CommunityUpload'
import store from '@/store'
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
            publishImgs: [],
            hasImg: false,
            autoSizeOption: {
                minHeight: 100
            },
            buttonAble: true,
            footerData: [
                {
                    id: 0,
                    to: '/community/scope/',
                    iconName: 'friends-o',
                    textValue: '谁可以看',
                },
                {
                    id: 1,
                    to: '/common/location/',
                    iconName: 'location-o',
                    textValue: '所在位置'
                }
            ]
        }
    },
    computed: {
        publishLocation () {
            return store.state.location
        }
    },
    watch: {
        publishText () {
            if (this.publishText || this.hasImg) {
                this.buttonAble = false
            } else {
                this.buttonAble = true
            }
        },
        hasImg () {
            if (this.hasImg || this.publishText) {
                this.buttonAble = false
            } else {
                this.buttonAble = true
            }
        }
    },
    methods: {
        onBack () {
            this.$router.go(-1)
        },
        onUploadImg (val) {
            if ( this.hasImg ){
                this.publishImgs.push(val)
            } else{
                this.publishImgs.push(val)
                this.hasImg = true
            }
        },
        onEmptyImg (val) {
            this.publishImgs.splice(val,1)
            if (val === 0) {
                this.hasImg = false
            }
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
    .publish-footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #F2F2F2;
    }
    .footer-item {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        height: 50px;
        background-color: #FFFFFF;
        border-bottom: 1px solid #D9D9D9;
    }
    .item-icon {
        width: 30px;
        margin-left: 10px;
    }
    .item-text {
        width: 280px;
        color: #28B2F2;
        margin-left: 10px;
    }
    .item-arrow {
        margin-left: 10px;
    }
</style>

