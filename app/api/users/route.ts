import { prisma } from "@/lib/prisma";
// app/api/users/route.ts
import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // Prismaを使ったデータベースクエリ
  const users = await prisma.users.findMany();

  return NextResponse.json(users);
}
