<template>
    <div>
        <div class="address-header">
            <address-list-item :listData="headerData"></address-list-item>
        </div>
        <div class="address-body">
            <address-contact></address-contact>
        </div>
    </div>
</template>

<script>
import AddressListItem from "./AddressListItem"
import AddressContact from "./AddressContact"
export default {
    name: "AddressList",
    components: {
        AddressListItem,
        AddressContact
    },
    data() {
        return {
            headerData: [
                {
                    id: 0,
                    iconUrl: require("@/assets/icon/addresslist/addlinkman.png"),
                    title: "新的朋友",
                    to: "/chat/detail/",
                    tipShow: true,
                    tipCount: 2
                },
                {
                    id: 1,
                    iconUrl: require("@/assets/icon/addresslist/group.png"),
                    title: "群聊",
                    to: "/chat/detail/",
                    tipShow: false,
                    tipCount: 0
                }                
            ] 
        }
    }
}
</script>

<style scoped>

</style>

