import UiEditRoom from '@/components/pages/master/UiEditRoom'
import { fetchRoomById } from '@/utils/api/rooms'
import { Suspense } from 'react'

const RoomDetails = async ({ roomId }: { roomId: string }) => {
  const roomDetails = await fetchRoomById(roomId)
  return <UiEditRoom roomDetails={roomDetails} />
}

export default function EditRoomContainer({
  params,
}: { params: { id: string } }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RoomDetails roomId={params.id} />
    </Suspense>
  )
}
