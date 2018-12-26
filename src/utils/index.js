function getNowTime(params) {
    let dateObject = new Date()
    let hour = dateObject.getHours()
    let min = dateObject.getMinutes()
    return hour + ':' + min
}

export default {
    getNowTime
}