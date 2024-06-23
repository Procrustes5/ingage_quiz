import { prisma } from "@/lib/prisma";
import { type NextRequest, NextResponse } from "next/server";

type QuizzParam = {
  id: number;
};

export async function GET(
  request: NextRequest,
  { params }: { params: QuizzParam }
) {
  const { id } = params;

  const quizData = await prisma.quizzes.findUnique({
    where: { id },
  });

  return NextResponse.json(quizData);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: QuizzParam }
) {
  const { id } = params;

  const body = await request.json();
  const updatedQuiz = await prisma.quizzes.update({
    where: { id },
    data: body,
  });

  return NextResponse.json(updatedQuiz);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: QuizzParam }
) {
  const { id } = params;

  await prisma.quizzes.delete({
    where: { id },
  });

  return NextResponse.json({ message: "Quiz deleted" });
}
