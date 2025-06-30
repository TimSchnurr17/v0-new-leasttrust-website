import { openai } from "@ai-sdk/openai"
import { generateText } from "ai"

export async function GET() {
  try {
    const apiKey = process.env.OPENAI_API_KEY

    if (!apiKey) {
      return Response.json({
        success: false,
        error: "No API key found in environment variables",
        hasApiKey: false,
      })
    }

    // Test if OpenAI API key is working (handles service account keys)
    const result = await generateText({
      model: openai("gpt-4o", {
        apiKey: apiKey,
      }),
      prompt: "Say 'OpenAI connection successful' if you can read this.",
    })

    return Response.json({
      success: true,
      message: result.text,
      hasApiKey: true,
      keyType: apiKey.startsWith("sk-srv") ? "service-account" : "user",
    })
  } catch (error) {
    console.error("OpenAI test failed:", error)
    return Response.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
        hasApiKey: !!process.env.OPENAI_API_KEY,
        keyType: process.env.OPENAI_API_KEY?.startsWith("sk-srv") ? "service-account" : "user",
      },
      { status: 500 },
    )
  }
}
