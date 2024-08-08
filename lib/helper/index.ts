import { content, validSocials } from "../constants"

export const greeting = (): string => {
    const time = new Date().getHours()
    if(time < 12) {
        return 'Morning'
    } else if(time < 17) {
        return 'Afternoon'
    }
    return 'Evening'
}

export const getRedirectURL = (path: string): string | undefined => {
    const pathname = path.split('/')[1].toLowerCase()
    if(!validSocials.includes(pathname)) return
    const redirectURL = content.personal.socials.filter(social => social.link.includes(pathname))[0].link
    return redirectURL
}