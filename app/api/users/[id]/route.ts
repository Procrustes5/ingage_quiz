import { prisma } from "@/lib/prisma";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }) {
  const { id } = params;

  const userData = await prisma.users.findUnique({
    where: { id: Number.parseInt(id) },
  });

  return NextResponse.json(userData);
}

export async function PUT(request: NextRequest, { params }) {
  const { id } = params;

  const body = await request.json();
  const updatedUser = await prisma.users.update({
    where: { id: Number.parseInt(id) },
    data: body,
  });

  return NextResponse.json(updatedUser);
}

export async function DELETE(request: NextRequest, { params }) {
  const { id } = params;

  await prisma.users.delete({
    where: { id: Number.parseInt(id) },
  });

  return NextResponse.json({ message: "User deleted" });
}
