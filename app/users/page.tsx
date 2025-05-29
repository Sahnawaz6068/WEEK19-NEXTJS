import axios from "axios";

export default async function Users() {
  const response = await axios.get(
    "http://localhost:3000/api/v1/users/details"
  );

  await new Promise(r=>setTimeout(r,5000));
  console.log(response);
  const userData = response?.data;
  return <div>
     <div className="flex flex-col justify-center h-screen">
    <div className="flex justify-center">
      <div className="border p-8 rounded">
        <div>Name: {userData?.name}</div>

        {userData?.Skill}
      </div>
    </div>
  </div>
  </div>
 
}
