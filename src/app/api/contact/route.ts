import { NextRequest, NextResponse } from "next/server";

const API_URL = "http://65.20.79.24:9005/api/EmailServiceAsh/EmailSend";
const API_AUTH = "jklgljkadshf&&&&###@@@12578961423uyyfDFGHJ779078hgljkdha$kfsjda$ls79876lksdjfg*sKJDllll89";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": API_AUTH
      },
      body: JSON.stringify({
        fullname: body.fullname,
        fromemail: body.fromemail,
        body: body.body
      })
    });

    if (response.ok) {
      const data = await response.json().catch(() => ({}));
      return NextResponse.json({ success: true, data });
    } else {
      const errorText = await response.text().catch(() => "Unknown error");
      return NextResponse.json(
        { success: false, error: errorText },
        { status: response.status }
      );
    }
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send message" },
      { status: 500 }
    );
  }
}
