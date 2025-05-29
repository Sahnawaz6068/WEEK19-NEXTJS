import Image from "next/image";

export default function signin() {
  return (
    <div className="">
      <input className="bg-white text-black" type="text" placeholder="Email" />
      <input className="bg-white text-black ml-2"  type="password" placeholder="Password" />
      <button className="bg-green-400 text-black p-2 rounded-md ml-2">Signin</button>
    </div>
  );
}
