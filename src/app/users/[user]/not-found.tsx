import { Link } from "lucide-react";

export default function NotFound() {
  return (
    <div className="text-center">
      <Link href="/users" className="block mb-4 text-3xl bold">
        Назад
      </Link>
      <h2 className="text-xl">Пользователь не найден</h2>
      <p>Запрошенный вами пользователь не существует</p>
    </div>
  );
}
