import { NextRequest, NextResponse } from "next/server";
import { ai } from "@/lib/gemini"
import { buildPrompt } from "@/lib/ prompts";


export async function POST(req: NextRequest) {
    try{
    const body = await req.json()

    const  {
        persona,
        message,
        history = []
    } = body

    if (!persona || !message) {
         return NextResponse.json({
            error: "Missing persona or message",
        },
        {
            status: 400
        }
      )
    }

    const prompt = buildPrompt(
        persona,
        history,
        message
    )

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
    })

    return NextResponse.json({
        reply: response.text,
    })

} catch (error) {
    console.error(error);

    return NextResponse.json(
        {
            error: "Internal Server Error",
        },
        {
        status: 500,
      }
    )

}
   
} 