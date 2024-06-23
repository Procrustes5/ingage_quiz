import { prisma } from "@/lib/prisma";
import { type NextRequest, NextResponse } from "next/server";

type RoomParam = {
  id: number;
};

export async function GET(
  request: NextRequest,
  { params }: { params: RoomParam }
) {
  const { id } = params;

  const roomData = await prisma.rooms.findUnique({
    where: { id },
  });

  return NextResponse.json(roomData);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: RoomParam }
) {
  const { id } = params;

  const body = await request.json();
  const updatedRoom = await prisma.rooms.update({
    where: { id },
    data: body,
  });

  return NextResponse.json(updatedRoom);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: RoomParam }
) {
  const { id } = params;

  await prisma.rooms.delete({
    where: { id },
  });

  return NextResponse.json({ message: "Room deleted" });
}
