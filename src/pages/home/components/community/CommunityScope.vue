<template>
    <div class="container">
        <div class="scope-header">
            <van-icon  class="scope-arrow" name="arrow-left" size="20px" @click="onBack"></van-icon>
            <span class="scope-title">{{headerTitle}}</span>
            <van-button class="scope-button" @click="onConfirmScope">确定</van-button>
        </div>
        <div class="scope-body">
            <van-radio-group v-model="currentScope">
                <van-cell-group>
                    <van-cell title="朋友" clickable @click="onChangeScope('1')">
                        <van-radio name="1" />
                    </van-cell>
                    <van-cell title="公开" clickable @click="onChangeScope('2')">
                        <van-radio name="2" />
                    </van-cell>
                    <van-cell title="私密" clickable @click="onChangeScope('3')">
                        <van-radio name="3" />
                    </van-cell>
                </van-cell-group>
            </van-radio-group>
        </div>
    </div>
</template>

<script>
import { Icon, Button, Cell, CellGroup, RadioGroup, Radio} from 'vant'
import { mapState, mapActions } from 'vuex'
export default {
    name: 'CommunityScope',
    components: {
        Icon,
        Button,
        Cell,
        CellGroup,
        RadioGroup,
        Radio
    },
    data() {
        return {
            headerTitle: '谁可以看',
            scopeValue: '1',
        }
    },
    computed: {
        ...mapState(['scope']),
        currentScope: {
            get () {
                return this.scope
            },
            set (val) {
                this.dispatchScope(val)
            }
        }
    },
    methods: {
        onBack () {
            this.$router.go(-1)
        },
        onChangeScope (val) {
            this.scopeValue = val
        },
        onConfirmScope () {
            this.dispatchScope(this.scopeValue)
            this.$router.go(-1)
        },
        ...mapActions(['dispatchScope'])

    }
}
</script>

<style scoped>
    .scope-header {
        display: flex;
        flex-direction: row;
        height: 50px;
        background-color: #FFFFFF;
        border-bottom: 1px solid #E5E4E4;
    }
    .scope-arrow {
        margin-left: 10px;
        line-height: 50px;
    }
    .scope-title {
        font-size: 14px;
        width: 240px;
        color: #28B2F2;
        margin-left: 5px;
        font-family: "Microsoft YaHei";
        line-height: 50px;
    }
    .scope-button {
        width: 60px;
        height: 30px;
        margin-top: 10px;
        margin-left: 25px;
        background-color: #4494D5;
        color: #FFFFFF;
        text-align: center;
        font-family: "Microsoft YaHei";
        border-radius: 3px;
        line-height: 30px;
    }
</style>

