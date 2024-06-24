import { prisma } from '@/lib/prisma'
import { type NextRequest, NextResponse } from 'next/server'

type RoomParam = {
  id: string
}

export type RoomDetails = {
  name: string
  questions: {
    id: string
    text: string
    options: string[]
    correctOption: number
  }[]
}

export async function GET(
  _request: NextRequest,
  { params }: { params: RoomParam },
) {
  const { id } = params

  const roomData = await prisma.rooms.findUnique({
    where: { id: Number.parseInt(id, 10) },
    include: {
      RoomParticipants: {
        include: {
          user: true,
        },
      },
      Quizzes: {
        include: {
          choices: true,
        },
      },
    },
  })

  if (!roomData) {
    return NextResponse.json({ error: 'Room not found' }, { status: 404 })
  }

  const roomDetails: RoomDetails = {
    name: roomData.name,
    questions: roomData.Quizzes.map(quiz => ({
      id: quiz.id.toString(),
      text: quiz.text,
      options: quiz.choices.map(choice => choice.content),
      correctOption: quiz.correct_choice_id, // Adjust based on your actual schema
    })),
  }

  return NextResponse.json(roomDetails)
}

export async function PUT(
  request: NextRequest,
  { params }: { params: RoomParam },
) {
  const { id } = params

  const body = await request.json()
  const updatedRoom = await prisma.rooms.update({
    where: { id: Number.parseInt(id, 10) },
    data: body,
  })

  return NextResponse.json(updatedRoom)
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: RoomParam },
) {
  const { id } = params

  await prisma.rooms.delete({
    where: { id: Number.parseInt(id, 10) },
  })

  return NextResponse.json({ message: 'Room deleted' })
}
