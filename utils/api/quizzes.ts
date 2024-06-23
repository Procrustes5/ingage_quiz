export const fetchQuizzes = async () => {
  const response = await fetch("/api/quizzes");
  if (!response.ok) {
    throw new Error("Failed to fetch quizzes");
  }
  return response.json();
};

export const createQuiz = async (quizData: unknown) => {
  const response = await fetch("/api/quizzes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(quizData),
  });
  if (!response.ok) {
    throw new Error("Failed to create quiz");
  }
  return response.json();
};

export const updateQuiz = async (quizId: string, quizData: unknown) => {
  const response = await fetch(`/api/quizzes/${quizId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(quizData),
  });
  if (!response.ok) {
    throw new Error("Failed to update quiz");
  }
  return response.json();
};

export const deleteQuiz = async (quizId: string) => {
  const response = await fetch(`/api/quizzes/${quizId}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete quiz");
  }
  return response.json();
};
