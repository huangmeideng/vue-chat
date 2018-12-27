<template>
    <div>
        <div class="Contact-item" v-for="(item,index) of contactData" :key="index">
            <div class="item-letter">
                <span>{{item.letter}}</span>
            </div>
            <address-list-item :listData="item.data"></address-list-item>
        </div>
    </div>
</template>

<script>
import AddressListItem from "./AddressListItem"
export default {
    name: "AddressContact",
    components: {
        AddressListItem
    },
    data() {
        return {
            contactData: [
                {
                    letter: 'A',
                    data: [
                        {
                            id: 1,
                            iconUrl: require("@/assets/temp/avatar_0.jpg"),
                            title: "Annayi",
                            to: "/chat/detail/",
                            tipShow: false,
                            tipCount: 0
                        },
                        {
                            id: 2,
                            iconUrl: require("@/assets/temp/avatar_1.jpg"),
                            title: "Amio",
                            to: "/chat/detail/",
                            tipShow: false,
                            tipCount: 0
                        }
                    ]
                },
                {
                    letter: 'B',
                    data: [
                        {
                            id: 3,
                            iconUrl: require("@/assets/temp/avatar_2.jpeg"),
                            title: "邦迪",
                            to: "/chat/detail/",
                            tipShow: false,
                            tipCount: 0
                        },
                        {
                            id: 4,
                            iconUrl: require("@/assets/temp/avatar_3.jpg"),
                            title: "本杰明",
                            to: "/chat/detail/",
                            tipShow: false,
                            tipCount: 0
                        },
                        {
                            id: 5,
                            iconUrl: require("@/assets/temp/avatar_4.jpg"),
                            title: "贝克",
                            to: "/chat/detail/",
                            tipShow: false,
                            tipCount: 0
                        }
                    ]
                },
                {
                    letter: 'C',
                    data: [
                        {
                            id: 13,
                            iconUrl: require("@/assets/temp/avatar_11.jpg"),
                            title: "陈陈",
                            to: "/chat/detail/",
                            tipShow: false,
                            tipCount: 0
                        },
                        {
                            id: 14,
                            iconUrl: require("@/assets/temp/avatar_12.jpg"),
                            title: "CsdOO--3",
                            to: "/chat/detail/",
                            tipShow: false,
                            tipCount: 0
                        }
                    ]
                },
                {
                    letter: 'H',
                    data: [
                        {
                            id: 15,
                            iconUrl: require("@/assets/temp/avatar_14.jpg"),
                            title: "黄美登",
                            to: "/chat/detail/",
                            tipShow: false,
                            tipCount: 0
                        },
                        {
                            id: 16,
                            iconUrl: require("@/assets/temp/avatar_13.jpg"),
                            title: "Himdad",
                            to: "/chat/detail/",
                            tipShow: false,
                            tipCount: 0
                        }
                    ]
                },
                {
                    letter: 'K',
                    data: [
                        {
                            id: 6,
                            iconUrl: require("@/assets/temp/avatar_one.jpg"),
                            title: "Kinano",
                            to: "/chat/detail/",
                            tipShow: false,
                            tipCount: 0
                        },
                        {
                            id: 12,
                            iconUrl: require("@/assets/temp/avatar_10.jpeg"),
                            title: "可le",
                            to: "/chat/detail/",
                            tipShow: false,
                            tipCount: 0
                        }
                    ]
                },
                {
                    letter: 'M',
                    data: [
                        {
                            id: 7,
                            iconUrl: require("@/assets/temp/avatar_7.jpg"),
                            title: "momTrue",
                            to: "/chat/detail/",
                            tipShow: false,
                            tipCount: 0
                        },
                        {
                            id: 8,
                            iconUrl: require("@/assets/temp/avatar_5.jpeg"),
                            title: "梦",
                            to: "/chat/detail/",
                            tipShow: false,
                            tipCount: 0
                        },
                        {
                            id: 9,
                            iconUrl: require("@/assets/temp/avatar_6.jpg"),
                            title: "魅力",
                            to: "/chat/detail/",
                            tipShow: false,
                            tipCount: 0
                        },
                    ]
                },
                {
                    letter: 'S',
                    data: [
                        {
                            id: 17,
                            iconUrl: require("@/assets/temp/avatar_15.jpg"),
                            title: "孙大翠",
                            to: "/chat/detail/",
                            tipShow: false,
                            tipCount: 0
                        },
                        {
                            id: 18,
                            iconUrl: require("@/assets/temp/avatar_16.jpg"),
                            title: "孙影儿",
                            to: "/chat/detail",
                            tipShow: false,
                            tipCount: 0
                        }
                    ]
                },
                {
                    letter: 'W',
                    data: [
                        {
                            id: 10,
                            iconUrl: require("@/assets/temp/avatar_8.jpeg"),
                            title: "悟空",
                            to: "/chat/detail/",
                            tipShow: false,
                            tipCount: 0
                        },
                        {
                            id: 11,
                            iconUrl: require("@/assets/temp/avatar_9.jpg"),
                            title: "无悔",
                            to: "/chat/detail/",
                            tipShow: false,
                            tipCount: 0
                        }
                    ]
                }
            ]
        }
    },
}
</script>

<style scoped>
    .item-letter {
        width: 100%;
        height: 20px;
        background-color: #EBEAEA;
        line-height: 20px;
    }
    .item-letter span {
        padding-left: 7px;
    }
</style>

