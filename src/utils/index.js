function getNowTime(params) {
    let dateObject = new Date()
    let hour = dateObject.getHours()
    let min = dateObject.getMinutes()
    return hour + ':' + min
}

function getRandomColor() {
    const rgb = []
    for (let i = 0; i < 3; ++i) {
        let color = Math.floor(Math.random() * 256).toString(16)
        color = color.length == 1 ? '0' + color : color
        rgb.push(color)
    }
    return '#' + rgb.join('')
}

export default {
    getNowTime,
    getRandomColor
}