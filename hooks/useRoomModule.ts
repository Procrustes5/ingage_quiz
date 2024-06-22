import {
  createRoom,
  deleteRoom,
  fetchRooms,
  updateRoom,
} from "@/utils/api/rooms";
import { useCallback, useEffect, useState } from "react";

export const useRoomModule = () => {
  const [rooms, setRooms] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const loadRooms = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchRooms();
      setRooms(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }, []);

  const createRoomHandler = useCallback(async (roomData: any) => {
    setLoading(true);
    setError(null);
    try {
      const newRoom = await createRoom(roomData);
      setRooms((prevRooms) => [...prevRooms, newRoom]);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }, []);

  const updateRoomHandler = useCallback(
    async (roomId: string, roomData: any) => {
      setLoading(true);
      setError(null);
      try {
        const updatedRoom = await updateRoom(roomId, roomData);
        setRooms((prevRooms) =>
          prevRooms.map((room) => (room.id === roomId ? updatedRoom : room))
        );
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const deleteRoomHandler = useCallback(async (roomId: string) => {
    setLoading(true);
    setError(null);
    try {
      await deleteRoom(roomId);
      setRooms((prevRooms) => prevRooms.filter((room) => room.id !== roomId));
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadRooms();
  }, [loadRooms]);

  return {
    rooms,
    loading,
    error,
    createRoom: createRoomHandler,
    updateRoom: updateRoomHandler,
    deleteRoom: deleteRoomHandler,
  };
};
