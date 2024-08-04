export const greeting = (): string => {
    const time = new Date().getHours()
    if(time < 12) {
        return 'Morning'
    } else if(time < 17) {
        return 'Afternoon'
    }
    return 'Evening'
}