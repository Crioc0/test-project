"use client";

import { fetchUsers } from "@/lib/feature/users/userSlice";
import { AppDispatch, RootState } from "@/lib/store";
import { Loader } from "lucide-react";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "./UserCard";

function UserList() {
  const dispatch = useDispatch<AppDispatch>();
  const { data, error, loading } = useSelector(
    (state: RootState) => state.users
  );

  useEffect(() => {
    if (!data.length) {
      dispatch(fetchUsers());
    }
  }, [dispatch, data]);

  if (loading)
    return (
      <div className="flex justify-center items-center h10">
        <h1>
          <Loader className="size-15 animate-spin" />
        </h1>
      </div>
    );
  if (error) {
    return <h1>Пользователи не найдены</h1>;
  }

  return (
    <div className="users-container">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((user) => (
          <Link href={`/users/${user.id}`} key={user.id} className="user-link">
            <UserCard user={user} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default UserList;
