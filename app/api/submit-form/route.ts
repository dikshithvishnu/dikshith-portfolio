import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const baseURL = req.url.split("/api")[0];
    const payload = await req.json();
    if(!process.env.API_BASE_URL) return NextResponse.json({message: 'No env set'}, { status: 400 })

    const response: NextResponse = await axios.post(
      `${process.env.API_BASE_URL}/dikshith_contact`,
      payload,
      {
        headers: {
          apiKey: process.env.API_KEY,
          Authorization: `Bearer ${process.env.API_KEY}`,
          "Content-Type": "application/json",
          Prefer: "resolution=merge-duplicates",
        },
      }
    )
    if (response.status === 201) {
      const res = NextResponse.json(
        { message: `If you're a developer, definitely hit me up!` },
        { status: 201 }
      )

      const emailURL  = `${baseURL}/api/send-email`

      axios.post(emailURL, {
        name: payload.name,
        email: payload.email,
      })
      
      const notificationURL = `${baseURL}/api/notify-me`

      axios.post(notificationURL, payload);

      return res;
    }
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "An error occurred while processing the form data." },
      { status: 500 }
    )
  }
}
