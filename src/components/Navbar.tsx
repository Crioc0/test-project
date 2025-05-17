import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="flex gap-6 mb-2 border p-4 rounded-lg max-w-full bg-white ">
      <Link href={"/"}>Главная</Link>
      <Link href={"/users"}>Список пользователей</Link>
    </div>
  );
};
