import {
  createUser,
  deleteUser,
  fetchUsers,
  updateUser,
} from "@/utils/api/users";
// hooks/useUserModule.ts
import { useCallback, useEffect, useState } from "react";

export const useUserModule = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const loadUsers = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchUsers();
      setUsers(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }, []);

  const createUserHandler = useCallback(async (userData: any) => {
    setLoading(true);
    setError(null);
    try {
      const newUser = await createUser(userData);
      setUsers((prevUsers) => [...prevUsers, newUser]);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }, []);

  const updateUserHandler = useCallback(
    async (userId: string, userData: any) => {
      setLoading(true);
      setError(null);
      try {
        const updatedUser = await updateUser(userId, userData);
        setUsers((prevUsers) =>
          prevUsers.map((user) => (user.id === userId ? updatedUser : user))
        );
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const deleteUserHandler = useCallback(async (userId: string) => {
    setLoading(true);
    setError(null);
    try {
      await deleteUser(userId);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  return {
    users,
    loading,
    error,
    createUser: createUserHandler,
    updateUser: updateUserHandler,
    deleteUser: deleteUserHandler,
  };
};
