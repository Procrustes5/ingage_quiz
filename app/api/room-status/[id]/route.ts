import { prisma } from "@/lib/prisma";
import { type NextRequest, NextResponse } from "next/server";

type RoomStatusParam = {
  id: string;
};

export async function GET(
  _request: NextRequest,
  { params }: { params: RoomStatusParam }
) {
  const { id } = params;

  const roomStatus = await prisma.roomStatus.findUnique({
    where: { id: Number.parseInt(id, 10) },
  });

  if (!roomStatus) {
    return NextResponse.json({ error: "RoomStatus not found" }, { status: 404 });
  }

  return NextResponse.json(roomStatus);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: RoomStatusParam }
) {
  const { id } = params;
  const body = await request.json();

  try {
    const updatedRoomStatus = await prisma.roomStatus.update({
      where: { id: Number.parseInt(id, 10) },
      data: body,
    });

    return NextResponse.json(updatedRoomStatus);
  } catch (error) {
    return NextResponse.json({ error: "Failed to update RoomStatus" }, { status: 500 });
  }
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: RoomStatusParam }
) {
  const { id } = params;

  try {
    await prisma.roomStatus.delete({
      where: { id: Number.parseInt(id, 10) },
    });

    return NextResponse.json({ message: "RoomStatus deleted" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete RoomStatus" }, { status: 500 });
  }
}