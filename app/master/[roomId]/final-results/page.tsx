/**
 * v0 by Vercel.
 * @see https://v0.dev/t/V0N8EST8NUN
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
    return (
      <div className="min-h-screen bg-background">
        <header className="bg-[#d42f2f] py-4">
          <div className="container mx-auto flex items-center justify-center">
            <TrophyIcon className="h-8 w-8 text-background" />
            <h1 className="ml-4 text-2xl font-bold text-background">Final Results</h1>
          </div>
        </header>
        <main className="container mx-auto py-8">
          <section className="mb-8">
            <div className="flex items-center justify-center bg-[#d42f2f] p-8 rounded-lg">
              <div className="flex flex-col items-center">
                <h2 className="text-4xl font-bold text-background">Winner Announcement</h2>
                <div className="flex items-center mt-4">
                  <SnowflakeIcon className="h-12 w-12 text-background" />
                  <span className="ml-4 text-6xl font-bold text-background">John Doe</span>
                </div>
              </div>
            </div>
          </section>
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-[#d42f2f]">Rankings</h2>
            <div className="overflow-x-auto rounded-lg border">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#d42f2f] text-background">
                    <th className="py-2 px-4">Rank</th>
                    <th className="py-2 px-4">Name</th>
                    <th className="py-2 px-4">Score</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-[#ffd7d7]">
                    <td className="py-2 px-4 font-bold">1</td>
                    <td className="py-2 px-4 font-bold">John Doe</td>
                    <td className="py-2 px-4 font-bold">95</td>
                  </tr>
                  <tr className="bg-[#ffbdbd]">
                    <td className="py-2 px-4 font-bold">2</td>
                    <td className="py-2 px-4 font-bold">Jane Smith</td>
                    <td className="py-2 px-4 font-bold">92</td>
                  </tr>
                  <tr className="bg-[#ffa3a3]">
                    <td className="py-2 px-4 font-bold">3</td>
                    <td className="py-2 px-4 font-bold">Bob Johnson</td>
                    <td className="py-2 px-4 font-bold">88</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4">4</td>
                    <td className="py-2 px-4">Alice Williams</td>
                    <td className="py-2 px-4">85</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4">5</td>
                    <td className="py-2 px-4">Tom Brown</td>
                    <td className="py-2 px-4">82</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <section>
            <h2 className="mb-4 text-2xl font-bold text-[#d42f2f]">Final Aggregated Results</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="rounded-lg bg-[#d42f2f] p-4 text-background">
                <h3 className="text-lg font-bold">Total Questions</h3>
                <p className="text-4xl font-bold">100</p>
              </div>
              <div className="rounded-lg bg-[#d42f2f] p-4 text-background">
                <h3 className="text-lg font-bold">Average Score</h3>
                <p className="text-4xl font-bold">88.4</p>
              </div>
              <div className="rounded-lg bg-[#d42f2f] p-4 text-background">
                <h3 className="text-lg font-bold">Highest Score</h3>
                <p className="text-4xl font-bold">95</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    )
  }
  
  function SnowflakeIcon(props) {
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
        <line x1="2" x2="22" y1="12" y2="12" />
        <line x1="12" x2="12" y1="2" y2="22" />
        <path d="m20 16-4-4 4-4" />
        <path d="m4 8 4 4-4 4" />
        <path d="m16 4-4 4-4-4" />
        <path d="m8 20 4-4 4 4" />
      </svg>
    )
  }
  
  
  function TrophyIcon(props) {
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
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
      </svg>
    )
  }