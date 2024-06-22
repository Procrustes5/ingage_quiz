import {
  createQuiz,
  deleteQuiz,
  fetchQuizzes,
  updateQuiz,
} from "@/utils/api/quizzes";
import { useCallback, useEffect, useState } from "react";

export const useQuizModule = () => {
  const [quizzes, setQuizzes] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const loadQuizzes = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchQuizzes();
      setQuizzes(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }, []);

  const createQuizHandler = useCallback(async (quizData: any) => {
    setLoading(true);
    setError(null);
    try {
      const newQuiz = await createQuiz(quizData);
      setQuizzes((prevQuizzes) => [...prevQuizzes, newQuiz]);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }, []);

  const updateQuizHandler = useCallback(
    async (quizId: string, quizData: any) => {
      setLoading(true);
      setError(null);
      try {
        const updatedQuiz = await updateQuiz(quizId, quizData);
        setQuizzes((prevQuizzes) =>
          prevQuizzes.map((quiz) => (quiz.id === quizId ? updatedQuiz : quiz))
        );
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const deleteQuizHandler = useCallback(async (quizId: string) => {
    setLoading(true);
    setError(null);
    try {
      await deleteQuiz(quizId);
      setQuizzes((prevQuizzes) =>
        prevQuizzes.filter((quiz) => quiz.id !== quizId)
      );
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadQuizzes();
  }, [loadQuizzes]);

  return {
    quizzes,
    loading,
    error,
    createQuiz: createQuizHandler,
    updateQuiz: updateQuizHandler,
    deleteQuiz: deleteQuizHandler,
  };
};
