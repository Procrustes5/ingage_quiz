'use client' // クライアントコンポーネントとしてマーク

import { useEffect, useState } from 'react'

type Question = {
  id: string
  text: string
  options: string[]
  correctOption: number
}

export default function Participant() {
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQuizId, setCurrentQuizId] = useState<string | null>(null)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [isAnswerable, setIsAnswerable] = useState<boolean>(true) // マスターの締め切りに応じた状態
  const [roomId, setRoomId] = useState<string>('1') // 部屋のIDを適切に設定

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(`/api/rooms/${roomId}`)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        console.log('Fetched data:', data) // デバッグログ
        setQuestions(data.questions)
        if (data.questions.length > 0) {
          setCurrentQuizId(data.questions[0].id) // 最初のクイズIDを設定
        }
      } catch (error) {
        console.error('Failed to fetch questions', error)
      }
    }
    fetchQuestions()
  }, [roomId])

  const handleAnswerSelection = async (answer: string) => {
    if (isAnswerable) {
      setSelectedAnswer(answer)
      try {
        await fetch(`/api/userChoices`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userId: 1, // ユーザーIDを適切に設定
            choiceId: answer,
          }),
        })
        console.log('Answer submitted')
      } catch (error) {
        console.error('Failed to submit answer', error)
      }
    }
  }

  const handleQuizEnd = () => {
    setIsAnswerable(false)
    setSelectedAnswer(null)
  }

  const handleNextQuiz = () => {
    const currentIndex = questions.findIndex(q => q.id === currentQuizId)
    if (currentIndex < questions.length - 1) {
      setCurrentQuizId(questions[currentIndex + 1].id)
      setIsAnswerable(true)
    } else {
      console.log('Quiz finished')
    }
  }

  if (!currentQuizId) return <div>Loading...</div>

  const currentQuestion = questions.find(q => q.id === currentQuizId)

  if (!currentQuestion) return <div>No question available</div>

  return (
    <div className='flex flex-col h-screen'>
      <header className='bg-background px-4 py-3 shadow'>
        <div className='container mx-auto flex items-center justify-center'>
          <h1 className='text-2xl font-bold text-foreground'>Quiz Night</h1>
        </div>
      </header>
      <main className='flex-1 flex flex-col items-center justify-center gap-8 px-4'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold text-foreground'>
            {currentQuestion.text}
          </h2>
        </div>
        <div className='grid grid-cols-2 gap-4 w-full max-w-md'>
          {currentQuestion.options.map((option, idx) => (
            <button
              key={option}
              onClick={() => handleAnswerSelection(option)}
              className={`bg-background border-2 border-[#d42f2f] rounded-lg py-4 px-6 text-xl font-medium text-foreground transition-colors ${
                selectedAnswer === option
                  ? 'bg-[#d42f2f] text-primary-foreground'
                  : 'hover:bg-[#d42f2f] hover:text-primary-foreground'
              }`}
              disabled={!isAnswerable}
            >
              {String.fromCharCode(65 + idx)}. {option}
            </button>
          ))}
        </div>
        {!isAnswerable && (
          <button
            className='bg-[#d42f2f] text-primary-foreground rounded-lg py-3 px-6 text-xl font-medium hover:bg-[#b72727] transition-colors'
            onClick={handleNextQuiz}
          >
            Next Quiz
          </button>
        )}
        <div>
          <button
            className='bg-[#d42f2f] text-primary-foreground rounded-lg py-3 px-6 text-xl font-medium hover:bg-[#b72727] transition-colors'
            onClick={handleNextQuiz}
          >
            Next Quiz
          </button>
        </div>
      </main>
    </div>
  )
}
