import type { RoomDetails } from '@/app/api/rooms/[id]/route'
import { Button, Input } from '@nextui-org/react'
import { useState } from 'react'

type EditRoomProps = {
  roomDetails: RoomDetails
  onUpdateRoom: (updatedDetails: RoomDetails) => void
}

export default function UiEditRoom({
  roomDetails,
  onUpdateRoom,
}: EditRoomProps) {
  const [editedRoomDetails, setEditedRoomDetails] = useState(roomDetails)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target
    setEditedRoomDetails(prevDetails => ({
      ...prevDetails,
      [id]: value,
    }))
  }

  const handleSave = () => {
    onUpdateRoom(editedRoomDetails)
  }

  return (
    <div className='min-h-screen bg-white'>
      <main className='max-w-3xl mx-auto py-8 px-4'>
        <h1 className='text-3xl font-bold text-center mb-8 text-[#d42f2f]'>
          Edit Quiz Room
        </h1>
        <form className='space-y-8' onSubmit={e => e.preventDefault()}>
          <div className='bg-white rounded-lg shadow-md p-6'>
            <h2 className='text-xl font-semibold mb-4 text-[#d42f2f]'>
              Room Details
            </h2>
            <div className='space-y-4'>
              <div>
                <label htmlFor='roomName' className='block mb-1'>
                  Room Name
                </label>
                <Input
                  id='roomName'
                  value={editedRoomDetails.name}
                  onChange={handleInputChange}
                  placeholder='Enter room name'
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
                  {editedRoomDetails.questions.map(
                    (question, questionIndex) => (
                      <li
                        key={question.id}
                        className='p-4 rounded-md flex justify-between items-center'
                      >
                        <div className='flex-1'>
                          <span className='text-lg font-semibold text-gray-900'>
                            {question.text}
                          </span>
                          <div className='mt-2 space-x-4'>
                            {question.options.map((option, optionIndex) => (
                              <div
                                key={optionIndex} // 修正：keyの値をインデックスに変更
                                className='flex items-center'
                              >
                                <input
                                  type='radio'
                                  id={`option${optionIndex}`}
                                  name={`question-${questionIndex}`}
                                  className='mr-2'
                                  checked={
                                    optionIndex === question.correctOption
                                  }
                                  readOnly
                                />
                                <label
                                  htmlFor={`option${optionIndex}`}
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
                    ),
                  )}
                </ul>
              </div>
            </div>
          </div>
          <div className='flex justify-end'>
            <Button color='primary' onClick={handleSave}>
              Save Changes
            </Button>
          </div>
        </form>
      </main>
    </div>
  )
}
