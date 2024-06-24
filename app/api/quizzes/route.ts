import { prisma } from '@/lib/prisma'
import { type NextRequest, NextResponse } from 'next/server'

export async function GET(_request: NextRequest) {
  const quizzes = await prisma.quizzes.findMany()
  return NextResponse.json(quizzes)
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { roomId, order, correctChoiceId, text, choices } = body

  const newQuiz = await prisma.quizzes.create({
    data: {
      // biome-ignore lint/style/useNamingConvention: <explanation>
      room_id: roomId,
      order: order,
      // biome-ignore lint/style/useNamingConvention: <explanation>
      correct_choice_id: correctChoiceId,
      text: text,
      choices: {
        create: choices.map((choice: string) => ({
          content: choice,
        })),
      },
    },
  })

  return NextResponse.json(newQuiz)
}
