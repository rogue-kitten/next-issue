type Users = {
  id: number;
  name: string;
  email: string;
};

type UserProps = {
  users: Users[];
};

export default function Users({ users }: UserProps) {
  return (
    <>
      <h2>List of users</h2>
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const resp = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await resp.json();
  return {
    props: {
      users: data,
    },
  };
}
