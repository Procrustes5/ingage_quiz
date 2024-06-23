import { prisma } from "@/lib/prisma";
import { type NextRequest, NextResponse } from "next/server";

type UserParam = {
  id: number;
};

export async function GET(
  request: NextRequest,
  { params }: { params: UserParam }
) {
  const { id } = params;

  const userData = await prisma.users.findUnique({
    where: { id },
  });

  return NextResponse.json(userData);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: UserParam }
) {
  const { id } = params;

  const body = await request.json();
  const updatedUser = await prisma.users.update({
    where: { id },
    data: body,
  });

  return NextResponse.json(updatedUser);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: UserParam }
) {
  const { id } = params;

  await prisma.users.delete({
    where: { id },
  });

  return NextResponse.json({ message: "User deleted" });
}
