/**
 * v0 by Vercel.
 * @see https://v0.dev/t/x82CIK1D4xz
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Index() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <PuzzleIcon className="h-8 w-8" />
          <span className="text-2xl font-bold">QuizApp</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Home
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Join
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Create Quiz
          </Link>
        </nav>
        <button className="md:hidden">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle navigation</span>
        </button>
      </header>
      <main className="flex-1">
        <section className="bg-[url('/quiz-bg.jpg')] bg-cover bg-center py-24 px-6 text-center">
          <div className="max-w-xl mx-auto space-y-6">
            <h1 className="text-4xl font-bold">Learn with fun, challenge together</h1>
            <p className="text-lg text-muted-foreground">
              Engage your audience with interactive quizzes and challenges.
            </p>
            <Link
              href="#"
              className="inline-flex items-center justify-center h-12 px-8 rounded-md bg-[#d42f2f] text-white font-medium transition-colors hover:bg-[#b92828] focus:outline-none focus:ring-2 focus:ring-[#d42f2f] focus:ring-offset-2"
              prefetch={false}
            >
              Join Quiz
            </Link>
          </div>
        </section>
        <section className="py-16 px-6">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background rounded-lg shadow-md p-6 flex flex-col items-center gap-4">
              <SmartphoneIcon className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Easy participation from smartphone</h3>
              <p className="text-muted-foreground">
                Participants can join and participate in quizzes directly from their smartphones.
              </p>
            </div>
            <div className="bg-background rounded-lg shadow-md p-6 flex flex-col items-center gap-4">
              <BarChartIcon className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Real-time aggregation</h3>
              <p className="text-muted-foreground">
                Instantly see the results and leaderboard as participants answer questions.
              </p>
            </div>
            <div className="bg-background rounded-lg shadow-md p-6 flex flex-col items-center gap-4">
              <SettingsIcon className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Customizable quizzes</h3>
              <p className="text-muted-foreground">
                Create your own quizzes with a variety of question types and settings.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-muted py-16 px-6">
          <div className="container mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold text-center">How to Use</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-background rounded-lg shadow-md p-6 flex items-center gap-4">
                <PlusIcon className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="text-xl font-bold">Create a Room</h3>
                  <p className="text-muted-foreground">
                    Start a new quiz by creating a room and customizing the settings.
                  </p>
                </div>
              </div>
              <div className="bg-background rounded-lg shadow-md p-6 flex items-center gap-4">
                <LinkIcon className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="text-xl font-bold">Share the Link</h3>
                  <p className="text-muted-foreground">
                    Invite participants to join the quiz by sharing the unique room link.
                  </p>
                </div>
              </div>
              <div className="bg-background rounded-lg shadow-md p-6 flex items-center gap-4">
                <PlayIcon className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="text-xl font-bold">Start the Quiz</h3>
                  <p className="text-muted-foreground">
                    When ready, begin the quiz and watch the real-time results unfold.
                  </p>
                </div>
              </div>
              <div className="bg-background rounded-lg shadow-md p-6 flex items-center gap-4">
                <SettingsIcon className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="text-xl font-bold">Customize Settings</h3>
                  <p className="text-muted-foreground">
                    Adjust the quiz settings to fit your needs, such as time limits and scoring.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <p className="text-sm">&copy; 2024 QuizApp. All rights reserved.</p>
        <nav className="flex items-center gap-4">
          <Link href="#" className="text-sm hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-sm hover:underline underline-offset-4" prefetch={false}>
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function BarChartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  )
}


function LinkIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function PlayIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  )
}


function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}


function PuzzleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z" />
    </svg>
  )
}


function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function SmartphoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  )
}