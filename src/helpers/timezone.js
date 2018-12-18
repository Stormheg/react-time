export const getTimeForTimezone = (timeZone, use24hours) => {
    let options = {
        timeZone,
        hour12: false,
        year: 'numeric', month: 'numeric', day: 'numeric',
        hour: '2-digit', minute: '2-digit', second: '2-digit',
    }
    let hours = 0, minutes = 0, seconds = 0
    let format = new Intl.DateTimeFormat([], options)
        .formatToParts(new Date())
        .map(({type, value}) => {
            switch (type) {
                case 'hour': hours = value
                case 'minute': minutes = value
                case 'second': seconds = value
            }
        })

    return {hours, minutes, seconds}
}
