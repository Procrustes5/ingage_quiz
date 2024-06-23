export default function Component() {
  return (
    <div className='min-h-screen bg-background'>
      <main className='container mx-auto py-8'>
        <section className='mb-8'>
          <div className='flex items-center justify-center bg-[#d42f2f] p-8 rounded-lg'>
            <div className='flex flex-col items-center'>
              <h2 className='text-4xl font-bold text-background'>
                Winner Announcement
              </h2>
              <div className='flex items-center mt-4'>
                <SnowflakeIcon className='h-12 w-12 text-background' />
                <span className='ml-4 text-6xl font-bold text-background'>
                  John Doe
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className='mb-8'>
          <h2 className='mb-4 text-2xl font-bold text-[#d42f2f]'>Rankings</h2>
          <div className='overflow-x-auto rounded-lg border'>
            <table className='w-full'>
              <thead>
                <tr className='bg-[#d42f2f] text-background'>
                  <th className='py-2 px-4'>Rank</th>
                  <th className='py-2 px-4'>Name</th>
                  <th className='py-2 px-4'>Score</th>
                </tr>
              </thead>
              <tbody>
                <tr className='bg-[#ffd7d7]'>
                  <td className='py-2 px-4 font-bold'>1</td>
                  <td className='py-2 px-4 font-bold'>John Doe</td>
                  <td className='py-2 px-4 font-bold'>95</td>
                </tr>
                <tr className='bg-[#ffbdbd]'>
                  <td className='py-2 px-4 font-bold'>2</td>
                  <td className='py-2 px-4 font-bold'>Jane Smith</td>
                  <td className='py-2 px-4 font-bold'>92</td>
                </tr>
                <tr className='bg-[#ffa3a3]'>
                  <td className='py-2 px-4 font-bold'>3</td>
                  <td className='py-2 px-4 font-bold'>Bob Johnson</td>
                  <td className='py-2 px-4 font-bold'>88</td>
                </tr>
                <tr>
                  <td className='py-2 px-4'>4</td>
                  <td className='py-2 px-4'>Alice Williams</td>
                  <td className='py-2 px-4'>85</td>
                </tr>
                <tr>
                  <td className='py-2 px-4'>5</td>
                  <td className='py-2 px-4'>Tom Brown</td>
                  <td className='py-2 px-4'>82</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section>
          <h2 className='mb-4 text-2xl font-bold text-[#d42f2f]'>
            Final Aggregated Results
          </h2>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
            <div className='rounded-lg bg-[#d42f2f] p-4 text-background'>
              <h3 className='text-lg font-bold'>Total Questions</h3>
              <p className='text-4xl font-bold'>100</p>
            </div>
            <div className='rounded-lg bg-[#d42f2f] p-4 text-background'>
              <h3 className='text-lg font-bold'>Average Score</h3>
              <p className='text-4xl font-bold'>88.4</p>
            </div>
            <div className='rounded-lg bg-[#d42f2f] p-4 text-background'>
              <h3 className='text-lg font-bold'>Highest Score</h3>
              <p className='text-4xl font-bold'>95</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
