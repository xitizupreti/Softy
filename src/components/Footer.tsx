import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="pt-5 bg-gradient-to-r from-primary via-pink-500 to-primary ">
        <div className=" flex justify-self-center items-center bg-purple-800 rounded-full p-2 w-[90px]">
          <Image src="/logo.png" width={100} height={100} alt="logo" />
        </div>
      </div>
    </>
  );
}
