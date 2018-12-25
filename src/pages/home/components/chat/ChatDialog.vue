<template>
    <div class="container">
        <div class="chatdialog-box">
            <div class="dialog-other">
                <div class="other-time">
                    昨天 19:00
                </div>
                <div class="other-content">
                    <div class="other-content-avatar">
                        <img src="@/assets/temp/avatar_one.jpg" alt="">
                    </div>
                    <div class="other-content-text">
                        我是other
                    </div>
                </div>
            </div>
            <div class="dialog-me">
                <div class="me-time">
                    21:11
                </div>
                <div class="me-content">
                    <div class="me-content-avatar">
                        <img src="@/assets/temp/avatar_two.jpg" alt="">
                    </div>
                    <div class="me-content-text">
                        我是me
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ChatDialog"
}
</script>

<style scoped>
    /*
    * other style
    */
    .dialog-other {
        display: flex;
        flex-direction: column;
    }
    .other-time {
        margin: 5px auto;
        background: rgba(209, 227, 223, 0.5);
        color: #FFFFFF;
        border-radius: 2px;
        font-size: 4px;
        padding: 3px;
    }
    .other-content {
        display: flex;
        flex-direction: row;
    }
    .other-content-avatar {
        margin-left: 10px;
        width: 35px;
        height: 35px;
    }
    .other-content-avatar img {
        width: 100%;
        height: 100%;
        border-radius: 5%;
    }
    .other-content-text {
        margin-top: 5px;
        margin-left: 10px;
        border-radius: 2px;
        min-width: 130px;
        max-width: 220px;
        height: 100%;
        min-height: 40px;
        background-color: #4494D5;
        color: #FFFFFF;
    }

    /*
    * me style    
    */
    .dialog-me {
        display: flex;
        flex-direction: column;
    }
    .me-time {
        margin: 5px auto;
        background: rgba(209, 227, 223, 0.5);
        color: #FFFFFF;
        border-radius: 2px;
        font-size: 4px;
        padding: 3px;
    }
    .me-content {
        display: flex;
        flex-direction: row-reverse;
    }
    .me-content-avatar {
        margin-right: 10px;
        width: 35px;
        height: 35px;
    }
    .me-content-avatar img {
        width: 100%;
        height: 100%;
        border-radius: 5%;
    }
    .me-content-text {
        margin-top: 5px;
        margin-right: 10px;
        border-radius: 2px;
        min-width: 130px;
        max-width: 220px;
        height: 100%;
        min-height: 40px;
        background-color: #B0E36F;
        color: #FFFFFF;
    }
</style>

