import { prisma } from '@/lib/prisma'
import { type NextRequest, NextResponse } from 'next/server'

type UserParam = {
  id: string
}

export async function GET(
  _request: NextRequest,
  { params }: { params: UserParam },
) {
  const { id } = params

  const userData = await prisma.users.findUnique({
    where: { id: Number.parseInt(id, 10) },
  })

  return NextResponse.json(userData)
}

export async function PUT(
  request: NextRequest,
  { params }: { params: UserParam },
) {
  const { id } = params

  const body = await request.json()
  const updatedUser = await prisma.users.update({
    where: { id: Number.parseInt(id, 10) },
    data: body,
  })

  return NextResponse.json(updatedUser)
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: UserParam },
) {
  const { id } = params

  await prisma.users.delete({
    where: { id: Number.parseInt(id, 10) },
  })

  return NextResponse.json({ message: 'User deleted' })
}
