import type { SVGProps } from 'react'

export default function masterCreateRoom() {
  return (
    <div className='min-h-screen bg-white'>
      <main className='max-w-3xl mx-auto py-8 px-4'>
        <h1 className='text-3xl font-bold text-center mb-8 text-[#d42f2f]'>
          Create New Quiz Room
        </h1>
        <form className='space-y-8'>
          <div className='bg-white rounded-lg shadow-md p-6'>
            <h2 className='text-xl font-semibold mb-4 text-[#d42f2f]'>
              Room Details
            </h2>
            <div className='space-y-4'>
              <div>
                <label htmlFor='roomName' className='block mb-1'>
                  Room Name
                </label>
                <input id='roomName' placeholder='Enter room name' />
              </div>
              <div>
                <label htmlFor='description' className='block mb-1'>
                  Description
                </label>
                <textarea
                  id='description'
                  placeholder='Enter room description'
                  rows={3}
                />
              </div>
            </div>
          </div>
          <div className='bg-white rounded-lg shadow-md p-6'>
            <h2 className='text-xl font-semibold mb-4 text-[#d42f2f]'>
              Add Quiz Questions
            </h2>
            <div className='space-y-4'>
              <button className='bg-[#d42f2f] hover:bg-[#c22b2b] text-white'>
                Add Multiple Choice Question
              </button>
              <div>
                <h3 className='text-lg font-semibold mb-2'>Added Questions</h3>
                <ul className='space-y-2'>
                  <li className='bg-gray-100 p-4 rounded-md flex justify-between items-center'>
                    <div className='flex-1'>
                      <span>What is the capital of France?</span>
                      <div className='mt-2 space-x-4'>
                        <div className='flex items-center'>
                          <input
                            type='radio'
                            id='option1'
                            name='option'
                            className='mr-2'
                          />
                          <label htmlFor='option1' className='text-sm'>
                            Paris
                          </label>
                        </div>
                        <div className='flex items-center'>
                          <input
                            type='radio'
                            id='option2'
                            name='option'
                            className='mr-2'
                          />
                          <label htmlFor='option2' className='text-sm'>
                            Berlin
                          </label>
                        </div>
                        <div className='flex items-center'>
                          <input
                            type='radio'
                            id='option3'
                            name='option'
                            className='mr-2'
                          />
                          <label htmlFor='option3' className='text-sm'>
                            London
                          </label>
                        </div>
                        <div className='flex items-center'>
                          <input
                            type='radio'
                            id='option4'
                            name='option'
                            className='mr-2'
                          />
                          <label htmlFor='option4' className='text-sm'>
                            Madrid
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className='flex space-x-2'>
                      <button className='text-[#d42f2f] hover:bg-[#d42f2f] hover:text-white'>
                        Edit
                      </button>
                      <button className='text-[#d42f2f] hover:bg-[#d42f2f] hover:text-white'>
                        Remove
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  )
}

function ArrowLeftIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d='m12 19-7-7 7-7' />
      <path d='M19 12H5' />
    </svg>
  )
}

function PuzzleIcon(props: SVGProps<SVGSVGElement>) {
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
