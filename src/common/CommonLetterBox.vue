<template>
    <div class="letter-box">
        {{letter}}
    </div>
</template>

<script>
export default {
    name: 'CommonLetterBox',
    props: ['letter'],
}
</script>

<style scoped>
    .letter-box {
        position: fixed;
        top: 250px;
        left: 140px;
        width: 100px;
        height: 100px;
        border-radius: 5px;
        background: rgba(46, 46, 46, .5);
        color: #FFFFFF;
        font-size: 50px;
        line-height: 100px;
        text-align: center;
    }
</style>

