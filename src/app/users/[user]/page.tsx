import { getUser } from "@/api/user";
import Profile from "@/components/Profile";

import Link from "next/link";
import { notFound } from "next/navigation";

async function UserPage({ params }: { params: { user: string } }) {
  try {
    const data = await getUser(params.user);

    return (
      <>
        <Link href="/users" className="block mb-4 text-3xl bold">
          Назад
        </Link>
        <Profile user={data} />
      </>
    );
  } catch (error) {
    if (error === 404) {
      notFound();
    }
  }
}

export default UserPage;
