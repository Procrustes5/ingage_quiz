import { prisma } from "@/lib/prisma";
import { type NextRequest, NextResponse } from "next/server";

type RoomParam = {
  id: string;
};

export async function GET(
  request: NextRequest,
  { params }: { params: RoomParam }
) {
  const { id } = params;

  const roomData = await prisma.rooms.findUnique({
    where: { id: Number.parseInt(id, 10) },
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
    where: { id: Number.parseInt(id, 10) },
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
    where: { id: Number.parseInt(id, 10) },
  });

  return NextResponse.json({ message: "Room deleted" });
}
