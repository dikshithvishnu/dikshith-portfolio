import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const payload = await req.json();
    const { name, email, phone, message } = payload;
    const discordMessage = `
**New Contact Form Submission**\n
**Name:** ${name}\n
**Email:** ${email}\n
**Phone:** ${phone}\n
**Message:**\n${message}
        `;
    const response: NextResponse = await axios.post(
      `${process.env.DISCORD_WH_URL}`,
      {
        content: discordMessage,
      }
    );
    if (response.status === 204) {
      return NextResponse.json({ message: `Notified!` }, { status: 200 });
    }
  } catch (e) {
    console.log(e);
  }
}
