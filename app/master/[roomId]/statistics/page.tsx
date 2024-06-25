/**
 * v0 by Vercel.
 * @see https://v0.dev/t/k6q3V3wPXLu
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4 md:px-6 flex flex-col min-h-screen">
      <div className="flex flex-col gap-8 flex-grow">
        <div className="bg-[#d42f2f] rounded-lg p-6 text-white text-center">
          <h1 className="text-3xl font-bold">General Knowledge Quiz</h1>
          <h2 className="text-2xl font-semibold mt-2">Question 12</h2>
        </div>
        <div className="bg-background rounded-lg p-6 flex-grow">
          <h3 className="text-2xl font-bold mb-4">What is the capital city of Australia?</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-red-100 border-2 border-red-500 rounded-lg p-4 flex flex-col gap-2">
              <div className="text-lg font-semibold">A. Sydney</div>
              <div className="text-sm text-muted-foreground">25%</div>
            </div>
            <div className="bg-red-100 border-2 border-red-500 rounded-lg p-4 flex flex-col gap-2">
              <div className="text-lg font-semibold">B. Melbourne</div>
              <div className="text-sm text-muted-foreground">15%</div>
            </div>
            <div className="bg-green-100 border-2 border-green-500 rounded-lg p-4 flex flex-col gap-2">
              <div className="text-lg font-semibold">C. Canberra</div>
              <div className="text-sm text-muted-foreground">50%</div>
            </div>
            <div className="bg-red-100 border-2 border-red-500 rounded-lg p-4 flex flex-col gap-2">
              <div className="text-lg font-semibold">D. Brisbane</div>
              <div className="text-sm text-muted-foreground">10%</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-background rounded-lg p-4 flex flex-col gap-2">
            <div className="text-sm text-muted-foreground">Participants</div>
            <div className="text-3xl font-bold">1,234</div>
          </div>
          <div className="bg-background rounded-lg p-4 flex flex-col gap-2">
            <div className="text-sm text-muted-foreground">Current Question</div>
            <div className="text-3xl font-bold">12</div>
          </div>
          <div className="bg-background rounded-lg p-4 flex flex-col gap-2">
            <div className="text-sm text-muted-foreground">Progress</div>
            <div className="text-3xl font-bold">75%</div>
          </div>
        </div>
        <div className="flex-grow"></div> {/* 追加: 空のスペースを埋めるためのdiv */}
      </div>
    </div>
  );
}