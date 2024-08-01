import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    try {
        console.log("called")
        const body = await req.json(); 

        const { name, email } = body;

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: process.env.NODE_ENV === 'production' ? 465 : 587,
            secure: process.env.NODE_ENV === 'production', 
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: process.env.GMAIL_USER, 
            to: email, 
            subject: `Thank you for contacting me!`, 
            text: `Hello ${name},\n\nThank you for reaching out. I have received your message and will get back to you shortly.\n\nBest Regards,\nDikshith`, 
        });

        return new NextResponse(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
    } catch (e) {
        console.error('Error:', e);
        return new NextResponse(JSON.stringify({ message: 'Failed to send email' }), { status: 500 });
    }
}
