let convertDate = function(date) {
    let hours, minutes;
    let objDate = new Date(date)
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Des']
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    if (objDate.getHours() < 10) {
        hours = '0' + objDate.getHours().toString()
    } else {
        hours = objDate.getHours().toString()
    }

    if (objDate.getMinutes() < 10) {
        minutes = '0' + objDate.getMinutes().toString()
    } else {
        minutes = objDate.getMinutes().toString()
    }

    let newDate = `${days[objDate.getDay()]}, ${months[objDate.getMonth()]} ${objDate.getFullYear()} ${hours}:${minutes}`
    return newDate
}
module.exports = convertDate