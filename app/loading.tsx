import Image from "next/image";
import loader from "@/public/images/loader.gif";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <Image src={loader} width={150} height={150} alt="Loading..." style={{ width: "auto", height: "auto" }} />
    </div>
  );
};

export default Loading;
