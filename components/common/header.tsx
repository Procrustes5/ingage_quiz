import Link from 'next/link'
import { MenuIcon, PuzzleIcon } from '../ui/icons'

export default function Header() {
  return (
    <header className='bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between'>
      <Link href='#' className='flex items-center gap-2' prefetch={false}>
        <PuzzleIcon className='h-8 w-8' />
        <span className='text-2xl font-bold'>QuizApp</span>
      </Link>
      <nav className='hidden md:flex items-center gap-6'>
        <Link
          href='#'
          className='text-sm font-medium hover:underline underline-offset-4'
          prefetch={false}
        >
          Home
        </Link>
        <Link
          href='#'
          className='text-sm font-medium hover:underline underline-offset-4'
          prefetch={false}
        >
          Join
        </Link>
        <Link
          href='#'
          className='text-sm font-medium hover:underline underline-offset-4'
          prefetch={false}
        >
          Create Quiz
        </Link>
      </nav>
      <button className='md:hidden'>
        <MenuIcon className='h-6 w-6' />
        <span className='sr-only'>Toggle navigation</span>
      </button>
    </header>
  )
}
