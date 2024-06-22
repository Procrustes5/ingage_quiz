/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ekVGSiT0xVJ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
// import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className='flex flex-col min-h-screen bg-background'>
      <header className='flex items-center justify-between px-8 py-4 border-b'>
        <div className='flex items-center gap-2'>
          <PuzzleIcon className='w-8 h-8 text-primary' />
          <h1 className='text-2xl font-bold tracking-tight text-foreground'>
            Trivia Blitz
          </h1>
        </div>
        <div className='flex items-center gap-2 text-muted-foreground'>
          <ClockIcon className='w-4 h-4' />
          <span>00:45</span>
        </div>
      </header>
      <main className='flex-1 flex flex-col items-center justify-center px-8 py-16'>
        <div className='max-w-3xl w-full bg-card rounded-lg shadow-lg overflow-hidden'>
          <div className="bg-[url('/geometric-pattern.svg')] bg-cover bg-center bg-no-repeat p-8">
            <h2 className='text-4xl font-bold text-foreground mb-4'>
              What is the capital of Australia?
            </h2>
          </div>
        </div>
      </main>
      <footer className='flex items-center justify-between px-8 py-4 border-t'>
        <div className='px-4 py-2 rounded bg-gray-200 text-gray-700'>
          End Quiz
        </div>
        <div className='flex items-center gap-2'>
          <div className='px-4 py-2 rounded bg-gray-200 text-gray-700'>
            Previous
          </div>
          <div className='px-4 py-2 rounded bg-blue-500 text-white'>
            Next Question
          </div>
          <div className='px-4 py-2 rounded bg-gray-200 text-gray-700'>
            View Results
          </div>
        </div>
      </footer>
    </div>
  )
}

interface IconProps extends React.SVGProps<SVGSVGElement> {}

function ClockIcon(props: IconProps) {
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
      <circle cx='12' cy='12' r='10' />
      <polyline points='12 6 12 12 16 14' />
    </svg>
  )
}

function PuzzleIcon(props: IconProps) {
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
      <path d='M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z' />
    </svg>
  )
}
