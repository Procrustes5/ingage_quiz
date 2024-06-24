import { prisma } from '@/lib/prisma'
import { createClient } from '@/utils/supabase/server'
// app/api/rooms/route.ts
import { type NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const supabase = createClient()

  // Supabaseを使った認証チェック
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
  }

  const body = await request.json()
  const { name } = body

  // Prismaを使ったデータベース操作
  const newRoom = await prisma.rooms.create({
    data: {
      name,
      // biome-ignore lint/style/useNamingConvention: <explanation>
      created_by: Number.parseInt(user.id, 10),
    },
  })

  return NextResponse.json(newRoom)
}
