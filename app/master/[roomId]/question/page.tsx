/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ekVGSiT0xVJ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
// import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className='flex flex-col min-h-screen bg-background'>
      <main className='flex-1 flex flex-col items-center justify-center px-8 py-16'>
        <div className='max-w-3xl w-full bg-card rounded-lg shadow-lg overflow-hidden'>
          <div className="bg-[url('/geometric-pattern.svg')] bg-cover bg-center bg-no-repeat p-8">
            <h2 className='text-4xl font-bold text-foreground mb-4'>
              What is the capital of Australia?
            </h2>
          </div>
        </div>
      </main>
    </div>
  )
}
