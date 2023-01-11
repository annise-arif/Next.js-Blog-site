import Image from "next/image";
import { useRouter } from "next/router";

export default function Error() {
  const router = useRouter();
  return (
    <>
      <button
        className="font-bold flex justify-center bg-green-600 rounded-lg px-8 py-3 my-3 mx-4 text-white"
        onClick={() => router.push("/")}
      >
        Back to Home
      </button>
      <Image src="/error.png" height={0} width={1920}></Image>
    </>
  );
}
