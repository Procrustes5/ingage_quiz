/**
 * v0 by Vercel.
 * @see https://v0.dev/t/j2WWhTkgrhZ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Participant() {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-background px-4 py-3 shadow">
        <div className="container mx-auto flex items-center justify-center">
          <h1 className="text-2xl font-bold text-foreground">Quiz Night</h1>
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center gap-8 px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground">What is the capital of France?</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full max-w-md">
          <button className="bg-background border-2 border-[#d42f2f] rounded-lg py-4 px-6 text-xl font-medium text-foreground hover:bg-[#d42f2f] hover:text-primary-foreground transition-colors">
            A. Paris
          </button>
          <button className="bg-background border-2 border-[#d42f2f] rounded-lg py-4 px-6 text-xl font-medium text-foreground hover:bg-[#d42f2f] hover:text-primary-foreground transition-colors">
            B. London
          </button>
          <button className="bg-background border-2 border-[#d42f2f] rounded-lg py-4 px-6 text-xl font-medium text-foreground hover:bg-[#d42f2f] hover:text-primary-foreground transition-colors">
            C. Berlin
          </button>
          <button className="bg-background border-2 border-[#d42f2f] rounded-lg py-4 px-6 text-xl font-medium text-foreground hover:bg-[#d42f2f] hover:text-primary-foreground transition-colors">
            D. Madrid
          </button>
        </div>
        <button className="bg-[#d42f2f] text-primary-foreground rounded-lg py-3 px-6 text-xl font-medium hover:bg-[#b72727] transition-colors">
          Submit Answer
        </button>
      </main>
    </div>
  )
}
