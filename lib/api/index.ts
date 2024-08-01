import axios, { AxiosResponse } from 'axios'
import dayjs from 'dayjs'

interface FormData {
    name: string;
    email: string;
    phone?: string;
    message: string;
}

export async function handleSendContact(formData: FormData, setFormData: (data: any) => void, toast: any) {
    try {
        const response: AxiosResponse | undefined = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/dikshith_contact`, formData, {
            headers: {
                apiKey: process.env.NEXT_PUBLIC_API_KEY,
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
                "Content-Type": "application/json",
                Prefer: "resolution=merge-duplicates"
            }
        })
        if(response && response?.status === 201) {
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: ''
            })
            toast({
                title: `Form Submitted Successfully!`,
                description: `${dayjs().format('DD-MM-YYYY HH:mm:ss')}`,
            })
        }
    } catch(e) {
        console.log(e)
    }
}