import { getUser } from "@/api/user";
import Profile from "@/components/Profile";

import Link from "next/link";
import { notFound } from "next/navigation";

async function UserPage({ params }: { params: Promise<{ user: string }> }) {
  const { user } = await params;
  try {
    const data = await getUser(user);

    return (
      <>
        <Link href="/users" className="block mb-4 text-lg bold">
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
