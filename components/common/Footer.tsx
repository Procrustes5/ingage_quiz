import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between'>
      <p className='text-sm'>&copy; 2024 QuizApp. All rights reserved.</p>
      <nav className='flex items-center gap-4'>
        <Link
          href='#'
          className='text-sm hover:underline underline-offset-4'
          prefetch={false}
        >
          Terms of Service
        </Link>
        <Link
          href='#'
          className='text-sm hover:underline underline-offset-4'
          prefetch={false}
        >
          Privacy Policy
        </Link>
      </nav>
    </footer>
  )
}
