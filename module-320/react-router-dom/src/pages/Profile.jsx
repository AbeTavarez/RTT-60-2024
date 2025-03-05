import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Profile() {
  const [user, setUser] = useState(null);

  const params = useParams();
  console.log(params);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${params.id}`
        );
        const data = await res.json();
        console.log(data);
        setUser(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchUser();
  }, [params.id]);

  if (!user) return <h1>Loading...</h1>;


  return (
    <main>
      <h1>Profile Page</h1>

      <h2>Name: {user.name}</h2>
      <h2>Username: {user.username}</h2>
      <h2>Email: {user.email}</h2>
    </main>
  );
}

export default Profile;
