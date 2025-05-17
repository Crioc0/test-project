import React from "react";
import Image from "next/image";
import { User } from "@/api/user";

type Props = {
  user: User;
};
function UserCard({ user }: Props) {
  return (
    <section className="mb-2 border p-4 rounded-lg max-w-full bg-white">
      <div className="mx-auto">
        <div className="card  md:flex md:items-center max-w-lg">
          <div className="w-20 h-20 mx-auto sm:mb-6 md:mr-6 md:mb-0 flex-shrink-0">
            <Image
              width={200}
              height={200}
              className="object-cover rounded-full"
              src="/avatar.png"
              alt="User"
            />
          </div>
          <div className="flex-grow text-center md:text-left">
            <h3 className="text-xl heading">{user.name}</h3>
            <p className="mt-2 mb-3">{user.username}</p>
            <p className="mt-2 mb-3">{user.email}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserCard;
