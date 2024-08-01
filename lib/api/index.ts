import axios, { AxiosResponse } from 'axios'
import dayjs from 'dayjs'

interface FormData {
    name: string;
    email: string;
    phone?: string;
    message: string;
}

export async function handleSendContact(formData: FormData, setFormData: (data: any) => void, setLoading: (loading: boolean) => void, toast: any) {
    try {
        setLoading(true)
        const response: AxiosResponse | undefined = await axios.post(`/api/submit-form`, formData)
        if(response && response?.status === 201) {
            setLoading(false)
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: ''
            })
            toast({
                title: `Thanks for reaching out! I’ve received your message and will get back to you soon. 😊`,
                description: `${dayjs().format('DD-MM-YYYY HH:mm:ss')}`,
            })
        }
    } catch(e) {
        setLoading(false)
        console.log(e)
    }
}