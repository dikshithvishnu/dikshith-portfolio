'use client'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"
import { content } from "@/lib/constants"
import { handleSendContact } from "@/lib/api"
import { useToast } from "@/components/ui/use-toast"

export default function Contact() {
    const { toast } = useToast()
    const data = content
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    })
  return (
    <div className="container mx-auto py-12 md:py-20 px-4 md:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-muted-foreground mb-8">
            {`Have a question or want to work together? Fill out the form below and I'll get back to you as soon as
            possible.`}
          </p>
          <form className="space-y-4" onSubmit={(e) => {
            e.preventDefault()
            handleSendContact(formData, setFormData, toast)
          }}>
            <div>
              <Label htmlFor="name">Name <sup className="text-red-500">*</sup> </Label>
              <Input required id="name" placeholder="Your name" value={formData.name} onChange={(e) => {
                setFormData({
                    ...formData,
                    name: e.target.value
                })
              }} />
            </div>
            <div>
              <Label htmlFor="email">Email <sup className="text-red-500">*</sup></Label>
              <Input required id="email" type="email" placeholder="Your email" value={formData.email} onChange={(e) => {
                setFormData({
                    ...formData,
                    email: e.target.value
                })
              }} />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input required id="phone" type="tel" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={formData.phone} onChange={(e) => {
                setFormData({
                    ...formData,
                    phone: e.target.value
                })
              }} />
            </div>
            <div>
              <Label htmlFor="message">Message <sup className="text-red-500">*</sup></Label>
              <Textarea required value={formData.message} id="message" rows={5} placeholder="Your message" onChange={(e) => {
                setFormData({
                    ...formData,
                    message: e.target.value
                })
              }}  />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
        <div className="flex flex-col items-start space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Find Me On</h2>
            <div className="flex items-center space-x-4">
                {data.personal.socials.map((social, index) => {
                    return (

              <Link key={index} href={social.link} target="_blank" className="text-muted-foreground hover:text-primary" prefetch={false}>
                <social.icon className="h-6 w-6" />
                <span className="sr-only">{social.name}</span>
              </Link>
                    )
                })}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Address</h2>
            <p className="text-muted-foreground">
              {data.personal.address.street}
              <br />
              {data.personal.address.city}, {data.personal.address.state} {data.personal.address.zip}
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Phone</h2>
            <p className="text-muted-foreground"><a target="_blank" href={`tel: ${data.personal.phone}`}>{data.personal.phone}</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}