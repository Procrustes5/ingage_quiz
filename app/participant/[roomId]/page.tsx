'use client' // Mark as a client component

import { useEffect, useState } from 'react'

type Question = {
  id: string
  text: string
  options: string[]
  correctOption: number
}

export default function Participant() {
  const [questions, setQuestions] = useState<Question[]>([])
  const [roomId, _setRoomId] = useState<string>('1') // Change '1' to the appropriate room ID

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(`/api/rooms/${roomId}`)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        console.log('Fetched data:', data) // Debug log
        setQuestions(data.questions)
      } catch (error) {
        console.error('Failed to fetch questions', error)
      }
    }
    fetchQuestions()
  }, [roomId])

  return (
    <div className='flex flex-col h-screen'>
      <header className='bg-background px-4 py-3 shadow'>
        <div className='container mx-auto flex items-center justify-center'>
          <h1 className='text-2xl font-bold text-foreground'>Quiz Night</h1>
        </div>
      </header>
      <main className='flex-1 flex flex-col items-center justify-center gap-8 px-4'>
        {questions.map((question) => (
          <div key={question.id} className='w-full max-w-md'>
            <div className='text-center mb-4'>
              <h2 className='text-3xl font-bold text-foreground'>
                {question.text}
              </h2>
            </div>
            <div className='grid grid-cols-2 gap-4'>
              {question.options.map((option, idx) => (
                <button
                  key={option}
                  className='bg-background border-2 border-[#d42f2f] rounded-lg py-4 px-6 text-xl font-medium text-foreground hover:bg-[#d42f2f] hover:text-primary-foreground transition-colors'
                >
                  {String.fromCharCode(65 + idx)}. {option}
                </button>
              ))}
            </div>
          </div>
        ))}
        <button className='bg-[#d42f2f] text-primary-foreground rounded-lg py-3 px-6 text-xl font-medium hover:bg-[#b72727] transition-colors'>
          Submit Answer
        </button>
      </main>
    </div>
  )
}
