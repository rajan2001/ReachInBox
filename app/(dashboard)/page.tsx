
import Image from "next/image";



export default function Page() {

  return (
    // <div className="xl:pl-96">
    <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6 h-screen w-full ">
      <div className="flex h-full w-full items-center justify-center">
        <div className=" flex flex-col items-center gap-y-12">
          <div>
            <Image src={"/home-page-image.png"} alt="home-page-image"
              height={229.4} width={280.02} />
          </div>
          <p className="text-2xl font-bold">
            It’s the beginning of a legendary sales pipeline
          </p>
          <p className=" max-w-[289px] text-center text-gray-500">
            When you have inbound E-mails you’ll see them here
          </p>
        </div>
      </div>
    </div>
    //</div>

  );
}

