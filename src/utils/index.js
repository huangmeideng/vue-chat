function getNowTime(params) {
    let dateObject = new Date()
    let hour = dateObject.getHours()
    let min = dateObject.getMinutes()
    return hour + ':' + min
}

/**
 * 获取随机颜色
 */
function getRandomColor() {
    const rgb = []
    for (let i = 0; i < 3; ++i) {
        let color = Math.floor(Math.random() * 256).toString(16)
        color = color.length == 1 ? '0' + color : color
        rgb.push(color)
    }
    return '#' + rgb.join('')
}

/**
 * 一位数组转二维数组
 */
function oneArrayToTwoArray(arr,num) {
    let arrLen = Math.ceil(arr.length / num)
    let twoArr = new Array(arrLen)
    for (let i=0; i < arrLen; i++) {
        twoArr[i] = new Array()
    }
    for( let j=0; j < arr.length; j++) {
        twoArr[parseInt(j/num)][j%num] = arr[j]
    }
    return twoArr
}

export default {
    getNowTime,
    getRandomColor,
    oneArrayToTwoArray
}