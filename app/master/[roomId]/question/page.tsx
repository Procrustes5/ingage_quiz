"use client"; // クライアントコンポーネントとしてマーク

import React, { useEffect, useState } from 'react';

export default function Component() {
  const [question, setQuestion] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const response = await fetch('/api/quizzes/1'); // IDを適切に変更する
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched data:', data); // デバッグ用ログ
        setQuestion(data.text); // データの構造に応じてプロパティ名を変更
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
