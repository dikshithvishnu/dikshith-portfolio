export const greeting = () => {
    const time = new Date().getHours()
    if(time < 12) {
        return 'Morning'
    } else if(time < 16) {
        return 'Afternoon'
    }
    return 'Evening'
}