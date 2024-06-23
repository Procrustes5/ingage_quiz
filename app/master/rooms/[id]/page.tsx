export default function EditRoom() {
  return (
    <div className='min-h-screen bg-white'>
      <main className='max-w-3xl mx-auto py-8 px-4'>
        <h1 className='text-3xl font-bold text-center mb-8 text-[#d42f2f]'>
          Edit Quiz Room
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
                <input
                  id='roomName'
                  placeholder='Enter room name'
                  defaultValue='My Quiz Room'
                />
              </div>
              <div>
                <label htmlFor='description' className='block mb-1'>
                  Description
                </label>
                <textarea
                  id='description'
                  placeholder='Enter room description'
                  rows={3}
                  defaultValue='This is a quiz room for testing your knowledge.'
                />
              </div>
            </div>
          </div>
          <div className='bg-white rounded-lg shadow-md p-6'>
            <h2 className='text-xl font-semibold mb-4 text-[#d42f2f]'>
              Edit Quiz Questions
            </h2>
            <div className='space-y-4'>
              <button className='bg-[#d42f2f] hover:bg-[#c22b2b] text-white'>
                Add Multiple Choice Question
              </button>
              <div>
                <h3 className='text-lg font-semibold mb-2'>
                  Existing Questions
                </h3>
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
                            defaultChecked
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
