'use client'

import type { RoomDetails } from '@/app/api/rooms/[id]/route'
import UiEditRoom from '@/components/pages/master/UiEditRoom'
import { fetchRoomById, updateRoom } from '@/utils/api/rooms'
import { Suspense, useEffect, useState } from 'react'

const RoomDetailsComponent = ({
  roomId,
  setRoomDetails,
}: { roomId: string; setRoomDetails: (details: RoomDetails) => void }) => {
  useEffect(() => {
    const loadRoomDetails = async () => {
      try {
        const details = await fetchRoomById(roomId)
        setRoomDetails(details)
      } catch (error) {
        console.error('Failed to fetch room details:', error)
      }
    }

    loadRoomDetails()
  }, [roomId, setRoomDetails])

  return null
}

export default function EditRoomContainer({
  params,
}: { params: { id: string } }) {
  const [roomDetails, setRoomDetails] = useState<RoomDetails | null>(null)

  const handleUpdateRoom = async (updatedDetails: RoomDetails) => {
    try {
      const updatedRoom = await updateRoom(params.id, updatedDetails)
      setRoomDetails(updatedRoom)
    } catch (error) {
      console.error('Failed to update room:', error)
    }
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RoomDetailsComponent
        roomId={params.id}
        setRoomDetails={setRoomDetails}
      />
      {roomDetails && (
        <UiEditRoom roomDetails={roomDetails} onUpdateRoom={handleUpdateRoom} />
      )}
    </Suspense>
  )
}
