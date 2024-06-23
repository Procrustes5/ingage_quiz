/**
 * v0 by Vercel.
 * @see https://v0.dev/t/4xgTjN3ufpl
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
'use client'
import type { SVGProps } from 'react'

export default function MasterIndex() {
  return (
    <div className='flex flex-col h-screen'>
      <main className='flex-1 p-8'>
        <div className='mb-8'>
          <h1 className='text-2xl font-bold'>Welcome, Game Master!</h1>
          <p className='text-muted-foreground'>
            Manage your quiz rooms and create new ones from here.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='bg-background rounded-lg shadow-md p-6'>
            <h2 className='text-xl font-bold mb-4'>Create a Room</h2>
            <p className='text-muted-foreground mb-6'>
              Create a new quiz room for your players to join.
            </p>
            <button
              className='w-full'
              onClick={() => (window.location.href = '/create-room')}
            >
              Create Room
            </button>
          </div>
          <div className='bg-background rounded-lg shadow-md p-6'>
            <h2 className='text-xl font-bold mb-4'>Manage Rooms</h2>
            <p className='text-muted-foreground mb-6'>
              View, edit, and delete your existing quiz rooms.
            </p>
            <div className='grid gap-4'>
              <div className='bg-muted rounded-md p-4'>
                <div className='flex items-center justify-between'>
                  <div>
                    <h3 className='text-lg font-bold'>General Knowledge</h3>
                    <p className='text-sm text-muted-foreground'>
                      10 questions, 5 minutes
                    </p>
                  </div>
                  <div className='flex items-center gap-2'>
                    <button className='hover:bg-accent hover:text-accent-foreground'>
                      <FilePenIcon className='w-5 h-5' />
                    </button>
                    <button className='hover:bg-accent hover:text-accent-foreground'>
                      <TrashIcon className='w-5 h-5' />
                    </button>
                  </div>
                </div>
              </div>
              <div className='bg-muted rounded-md p-4'>
                <div className='flex items-center justify-between'>
                  <div>
                    <h3 className='text-lg font-bold'>Science Trivia</h3>
                    <p className='text-sm text-muted-foreground'>
                      15 questions, 10 minutes
                    </p>
                  </div>
                  <div className='flex items-center gap-2'>
                    <button className='hover:bg-accent hover:text-accent-foreground'>
                      <FilePenIcon className='w-5 h-5' />
                    </button>
                    <button className='hover:bg-accent hover:text-accent-foreground'>
                      <TrashIcon className='w-5 h-5' />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function FilePenIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10' />
      <path d='M14 2v4a2 2 0 0 0 2 2h4' />
      <path d='M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z' />
    </svg>
  )
}

function GamepadIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <line x1='6' x2='10' y1='12' y2='12' />
      <line x1='8' x2='8' y1='10' y2='14' />
      <line x1='15' x2='15.01' y1='13' y2='13' />
      <line x1='18' x2='18.01' y1='11' y2='11' />
      <rect width='20' height='12' x='2' y='6' rx='2' />
    </svg>
  )
}

function TrashIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M3 6h18' />
      <path d='M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6' />
      <path d='M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2' />
    </svg>
  )
}
