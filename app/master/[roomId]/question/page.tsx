"use client"; // クライアントコンポーネントとしてマーク

import React, { useEffect, useState } from 'react';

export default function Component() {
  const [question, setQuestion] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        // room-status/1からon_going_quiz_idを取得
        const roomStatusResponse = await fetch('/api/room-status/1');
        if (!roomStatusResponse.ok) {
          throw new Error('Network response was not ok');
        }
        const roomStatusData = await roomStatusResponse.json();
        const quizId = roomStatusData.on_going_quiz_id;

        // on_going_quiz_idを使用してquizzesから質問を取得
        const quizResponse = await fetch(`/api/quizzes/${quizId}`);
        if (!quizResponse.ok) {
          throw new Error('Network response was not ok');
        }
        const quizData = await quizResponse.json();
        setQuestion(quizData.text); // データの構造に応じてプロパティ名を変更
      } catch (error) {
        console.error('Failed to fetch question', error);
      }
    };

    fetchQuestion();
  }, []);

  return (
    <div className='flex flex-col min-h-screen bg-background'>
      <main className='flex-1 flex flex-col items-center justify-center px-8 py-16'>
        <div className='max-w-3xl w-full bg-card rounded-lg shadow-lg overflow-hidden'>
          <div className="bg-[url('/geometric-pattern.svg')] bg-cover bg-center bg-no-repeat p-8">
            <h2 className='text-4xl font-bold text-foreground mb-4'>
              {question ? question : 'Loading...'}
            </h2>
          </div>
        </div>
      </main>
    </div>
  );
}