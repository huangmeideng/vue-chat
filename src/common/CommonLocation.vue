<template>
    <div class="container">
        <van-nav-bar
            title="地理位置"
            class="nav-header" 
            left-arrow
            @click-left="onBack">
            <van-icon name="ellipsis" slot="right" size="25px"/>
        </van-nav-bar>
        <div class="mapArea" :id="mapId">
        </div>
        <div class="address-list">
            <div class="address-item" v-for="(item,index) of addressData" :key="index" @click="onSetLocation(item)">
                <span>{{item}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import loadBMap from '@/assets/style/js/map.js'
import { NavBar, Dialog, Icon } from 'vant'
import gcoord from 'gcoord'
import { mapActions } from 'vuex'
export default {
    name: 'CommonLocation',
    components: {
        NavBar,
        Dialog,
        Icon
    },
    data() {
        return {
            mapId: 'BMap-' + parseInt(Date.now() + Math.random()),
            myMap: null,
            latitude: 0, //纬度
            longitude: 0, //经度
            addressData: [], //位置信息数组
        }
    },
    methods: {
        //header返回方法
        onBack () {
            this.$router.back(-1)
        },
        //选择地理位置
        onSetLocation (location) {
            //this.$store.dispatch('dispatchLocation',location)
            this.dispatchLocation(location)
            this.$router.back(-1)
        },
        ...mapActions(['dispatchLocation']),
        //dialog通用方法
        commonDialog (message) {
            Dialog.alert({
                message: message
            }).then( () => {})
        },
        //坐标系转换
        commonGcoord(longitude,latitude) {
            let res = gcoord.transform(
                [longitude,latitude],
                gcoord.WGS84, //原始坐标系
                gcoord.BD09 //百度坐标系
            )
            return res
        },
        //获取当前经纬度
        initLocationMap () {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(this.getPosition,this.getPositionErr)
            }else{
                this.commonDialog('当前浏览器无法获取位置信息')
            }
        },
        //获取经纬度信息回调方法
        getPosition (position) {
            this.latitude = position.coords.latitude
            this.longitude = position.coords.longitude
            //坐标系转换
            let pointArr = this.commonGcoord(this.longitude,this.latitude) 
            this.initMap(pointArr[0],pointArr[1])
        },
        //获取经纬度信息错误回调方法
        getPositionErr (error) {
            switch (error.code) {
                case error.PERMMISSION_DENIED:
                    this.commonDialog('定位失败,用户拒绝请求地理位置')
                    break
                case error.POSITION_UNAVAILABLE:
                    this.commonDialog('定位失败,位置信息不可用')
                    break
                case error.TIMEOUT:
                    this.commonDialog('定位失败,请求超时')
                    break
                case error.UNKNOWN_ERROR:
                    this.commonDialog('定位失败,定位系统失效')
                    break
            }
        },
        //百度地图初始化
        initMap (longitude,latitude) {
            loadBMap('DKW8RK4UEZ6VtkXXSQQTxTLm6mM9T4o0')
                .then( () => {
                    let point = new BMap.Point(longitude,latitude)
                    this.myMap = new BMap.Map(this.mapId) // 创建Map实例
                    this.myMap.centerAndZoom(point, 11) // 初始化地图,设置中心点坐标和地图级别
                    //创建标注   
                    this.myMap.addOverlay(new BMap.Marker(point));
                    //逆地址解析
                    let geoc = new BMap.Geocoder(); 
                    geoc.getLocation(point,(res) => {
                        let addComp = res.addressComponents
                        //this.addressData = addComp
                        //重新组装地理位置信息
                        if (addComp.province !== addComp.city) {
                            this.addressData.push(addComp.province + addComp.city)
                        }
                        this.addressData.push(addComp.city)
                        this.addressData.push(addComp.city + addComp.district)
                        this.addressData.push(addComp.city + addComp.district + addComp.street)
                        this.addressData.push(addComp.city + addComp.district + addComp.street +addComp.streetNumber)
                    })
                })
                .catch( err => {
                    console.log('地图加载失败')
                })
        }
    },
    mounted() {
        this.initLocationMap()
    }
}
</script>

<style scoped>
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
    .container >>> .van-nav-bar .van-icon {
        color: #FFFFFF;
        margin-top: 5px;
    }
    .mapArea {
        width: 100%;
        height: 300px;
    }
    .address-item {
        width: 100%;
        height: 40px;
        line-height: 40px;
        color: #28B2F2;
        border-bottom: 1px solid #E5E4E4;
    }
    .address-list span {
        margin-left: 10px;
    }
</style>

