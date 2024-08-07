'use client'
import { useToast } from "@/components/ui/use-toast"
import { getRedirectURL } from "@/lib/helper"
import { usePathname, useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Socials() {
    const { toast } = useToast()
    const router = useRouter()
    const path = usePathname()

    useEffect(() => {
        if(typeof window !== 'undefined') {
            const redirect = getRedirectURL(path)
            if(!redirect?.length) {
                toast({
                    title: `Check the path and try again`,
                    variant: 'destructive'
                })
                router.push('/')
            }
            redirect?.length && window.open(redirect, "_blank")
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [path])
    
    return (
        <div className="w-screen min-h-[90vh] flex items-center justify-center">
            <p>Redirecting ....</p>
        </div>
    )
}