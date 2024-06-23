export const fetchRooms = async () => {
  const response = await fetch("/api/rooms");
  if (!response.ok) {
    throw new Error("Failed to fetch rooms");
  }
  return response.json();
};

export const createRoom = async (roomData: unknown) => {
  const response = await fetch("/api/rooms", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(roomData),
  });
  if (!response.ok) {
    throw new Error("Failed to create room");
  }
  return response.json();
};

export const updateRoom = async (roomId: string, roomData: unknown) => {
  const response = await fetch(`/api/rooms/${roomId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(roomData),
  });
  if (!response.ok) {
    throw new Error("Failed to update room");
  }
  return response.json();
};

export const deleteRoom = async (roomId: string) => {
  const response = await fetch(`/api/rooms/${roomId}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete room");
  }
  return response.json();
};
