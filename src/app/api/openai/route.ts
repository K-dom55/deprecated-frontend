import Error from 'next/error';
import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
});

export async function POST(req: NextRequest) {
  const { answer, customQ } = (await req.json()) as {
    answer: string;
    customQ: string;
  };

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: customQ,
      },
      {
        role: 'user',
        content: `${answer}`,
      },
    ],
  });

  if (!response.choices) return;

  return NextResponse.json({
    success: true,
    message: response.choices,
  });
}
