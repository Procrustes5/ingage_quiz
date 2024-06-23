import {
  BarChartIcon,
  PlayIcon,
  PlusIcon,
  SettingsIcon,
  SmartphoneIcon,
} from '@/components/ui/icons'
import { LinkIcon } from '@nextui-org/react'
import Link from 'next/link'

export default function Index() {
  return (
    <main className='flex-1'>
      <section className="bg-[url('/quiz-bg.jpg')] bg-cover bg-center py-24 px-6 text-center">
        <div className='max-w-xl mx-auto space-y-6'>
          <h1 className='text-4xl font-bold'>
            Learn with fun, challenge together
          </h1>
          <p className='text-lg text-muted-foreground'>
            Engage your audience with interactive quizzes and challenges.
          </p>
          <Link
            href='#'
            className='inline-flex items-center justify-center h-12 px-8 rounded-md bg-[#d42f2f] text-white font-medium transition-colors hover:bg-[#b92828] focus:outline-none focus:ring-2 focus:ring-[#d42f2f] focus:ring-offset-2'
            prefetch={false}
          >
            Join Quiz
          </Link>
        </div>
      </section>
      <section className='py-16 px-6'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='bg-background rounded-lg shadow-md p-6 flex flex-col items-center gap-4'>
            <SmartphoneIcon className='h-12 w-12 text-primary' />
            <h3 className='text-xl font-bold'>
              Easy participation from smartphone
            </h3>
            <p className='text-muted-foreground'>
              Participants can join and participate in quizzes directly from
              their smartphones.
            </p>
          </div>
          <div className='bg-background rounded-lg shadow-md p-6 flex flex-col items-center gap-4'>
            <BarChartIcon className='h-12 w-12 text-primary' />
            <h3 className='text-xl font-bold'>Real-time aggregation</h3>
            <p className='text-muted-foreground'>
              Instantly see the results and leaderboard as participants answer
              questions.
            </p>
          </div>
          <div className='bg-background rounded-lg shadow-md p-6 flex flex-col items-center gap-4'>
            <SettingsIcon className='h-12 w-12 text-primary' />
            <h3 className='text-xl font-bold'>Customizable quizzes</h3>
            <p className='text-muted-foreground'>
              Create your own quizzes with a variety of question types and
              settings.
            </p>
          </div>
        </div>
      </section>
      <section className='bg-muted py-16 px-6'>
        <div className='container mx-auto max-w-4xl space-y-8'>
          <h2 className='text-3xl font-bold text-center'>How to Use</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='bg-background rounded-lg shadow-md p-6 flex items-center gap-4'>
              <PlusIcon className='h-8 w-8 text-primary' />
              <div>
                <h3 className='text-xl font-bold'>Create a Room</h3>
                <p className='text-muted-foreground'>
                  Start a new quiz by creating a room and customizing the
                  settings.
                </p>
              </div>
            </div>
            <div className='bg-background rounded-lg shadow-md p-6 flex items-center gap-4'>
              <LinkIcon />
              <div>
                <h3 className='text-xl font-bold'>Share the Link</h3>
                <p className='text-muted-foreground'>
                  Invite participants to join the quiz by sharing the unique
                  room link.
                </p>
              </div>
            </div>
            <div className='bg-background rounded-lg shadow-md p-6 flex items-center gap-4'>
              <PlayIcon className='h-8 w-8 text-primary' />
              <div>
                <h3 className='text-xl font-bold'>Start the Quiz</h3>
                <p className='text-muted-foreground'>
                  When ready, begin the quiz and watch the real-time results
                  unfold.
                </p>
              </div>
            </div>
            <div className='bg-background rounded-lg shadow-md p-6 flex items-center gap-4'>
              <SettingsIcon className='h-8 w-8 text-primary' />
              <div>
                <h3 className='text-xl font-bold'>Customize Settings</h3>
                <p className='text-muted-foreground'>
                  Adjust the quiz settings to fit your needs, such as time
                  limits and scoring.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
