<template>
    <div class="container">
        <van-cell-group>
            <van-cell title="收藏" icon="star" is-link  @click="onTip"/>
            <van-cell title="相册" icon="photo" is-link @click="onTip"/>
            <van-cell title="钱包" icon="gold-coin" is-link @click="onTip"/>
            <van-cell title="商城" icon="shop" is-link @click="onTip"/>
        </van-cell-group>
        <van-cell-group class="cell-set">
            <van-cell title="设置" icon="setting"  to="/my/myset/" is-link />
        </van-cell-group>
    </div>
</template>

<script>
import { Cell, CellGroup, Dialog} from 'vant'
export default {
    name: 'MyList',
    components: {
        Cell,
        CellGroup,
        Dialog
    },
    methods: {
        onTip () {
            Dialog.alert({
                message: '功能暂未开通'
            }).then( () => {

            })
        }
    }
}
</script>

<style scoped>
    .container {
        margin-top: 10px;
        background-color: #EBEAEA;
    }
    .cell-set {
        margin-top: 40px;
    }
</style>

