import type { RoomDetails } from '@/app/api/rooms/[id]/route'
import { Button, Input, Textarea } from '@nextui-org/react'

type EditRoomProps = {
  roomDetails: RoomDetails
}

export default function UiEditRoom({ roomDetails }: EditRoomProps) {
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
                <Input id='roomName' placeholder='Enter room name' />
              </div>
              <div>
                <label htmlFor='description' className='block mb-1'>
                  Description
                </label>
                <Textarea
                  id='description'
                  placeholder='Enter room description'
                  rows={3}
                />
              </div>
            </div>
          </div>
          <div className='bg-white rounded-lg shadow-md p-6'>
            <h2 className='text-xl font-semibold mb-4 text-[#d42f2f]'>
              Edit Quiz Questions
            </h2>
            <div className='space-y-4'>
              <Button color='default'>Add Multiple Choice Question</Button>
              <div>
                <h3 className='text-lg font-semibold mb-2'>
                  Existing Questions
                </h3>
                <ul className='space-y-2'>
                  {roomDetails.questions.map(question => (
                    <li
                      key={question.id}
                      className='p-4 rounded-md flex justify-between items-center'
                    >
                      <div className='flex-1'>
                        <span className='text-lg font-semibold text-gray-900'>
                          {question.text}
                        </span>
                        <div className='mt-2 space-x-4'>
                          {question.options.map((option, index) => (
                            <div
                              key={question.id}
                              className='flex items-center'
                            >
                              <input
                                type='radio'
                                id={`option${index}`}
                                name='option'
                                className='mr-2'
                                defaultChecked={
                                  index === question.correctOption
                                }
                              />
                              <label
                                htmlFor={`option${index}`}
                                className='text-sm text-gray-700'
                              >
                                {option}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className='flex space-x-2'>
                        <Button color='primary'>Edit</Button>
                        <Button color='primary'>Remove</Button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  )
}
