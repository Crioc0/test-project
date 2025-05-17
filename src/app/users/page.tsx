import ErrorMessage from "@/components/ErrorMessage";
import UserList from "@/components/UserList";

function UsersPage() {
  return (
    <div className="users-container">
      <h1 className="block mb-4 text-3xl bold">Users Page</h1>
      <UserList />
      <ErrorMessage />
    </div>
  );
}



export default UsersPage;
