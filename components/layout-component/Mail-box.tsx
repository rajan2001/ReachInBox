import { ChevronDown, Reply, Settings2 } from "lucide-react"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import { ReplyIcon } from "./ReplyIcon"
import { useEffect, useState } from "react"
import { SendMailBox } from "./SendMailBox"

const MailBox = ({ data }: any) => {
    const [box, setBox] = useState(false)



    const handelOpen = (e: any) => {

        if (e.key === "R") {
            console.log(e)
            e.preventDefault();
            setBox(true)
        }

        setBox(true)

    }

    useEffect(() => {
        // attach the event listener
        document.addEventListener('keydown', handelOpen);

        // remove the event listener
        return () => {
            document.removeEventListener('keydown', handelOpen);
        };
    }, [handelOpen]);

    if (data.length === 0) {
        return null
    }

    return <>
        <div className=" border-b pt-[85px] bg-secondary flex items-center justify-between px-4  sm:px-6 lg:px-8  pb-4 relative">
            <div>
                {data?.fromName}
                <p className="text-xs text-gray-400">{data?.fromEmail}</p>
            </div>
            <div className="flex items-center gap-6">
                <Button variant={"default"} size={"sm"} className="bg-primary-foreground dark:text-white text-black text-xs " >Meeting Completed <ChevronDown className="ml-2 h-6 w-6" /></Button>
                <Button variant={"default"} size={"sm"} className="bg-primary-foreground dark:text-white text-black text-xs " >Move <ChevronDown className="ml-2 h-6 w-6" /></Button>
                <Button variant={"default"} size={"sm"} className="bg-primary-foreground dark:text-white text-black  text-xs" > <Settings2 className=" h-4 w-4" /></Button>
            </div>
        </div>
        <div className="px-4  mt-2 sm:px-6 lg:px-8 flex  flex-col h-[calc(100vh_-_2*88px)] justify-between">
            <div>
                <div className="relative">
                    <div className="h-5"></div>
                    <div className="before:w-full before:h-[1px] before:bg-primary-foreground before:absolute before:left-1/2 before:-translate-x-1/2 before:top-1/2 before:translate-y-1/2l"></div>
                    <Badge className="dark:text-white text-black absolute left-1/2 -translate-x-1/2 -top-1/2 translate-y-1/2">Toady</Badge>
                </div>
                <div className="bg-primary p-6 pb-8 rounded my-4  ">
                    <div className="flex flex-col gap-y-2" >
                        <p className="text-sm">{data?.subject}</p>
                        <p className="text-xs text-gray-400 ">from:{data?.fromEmail}</p>
                        <p className="text-xs text-gray-400">to:{data?.toEmail}</p>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: `${data?.body}` }} className="text-xs mt-8"></div>
                </div>
                <div className="relative">
                    <div className="h-5"></div>
                    <div className="before:w-full before:h-[1px] before:bg-primary-foreground before:absolute before:left-1/2 before:-translate-x-1/2 before:top-1/2 before:translate-y-1/2l"></div>
                    <Badge className="dark:text-white text-black absolute left-1/2 -translate-x-1/2 -top-1/2 translate-y-1/2"> <Reply className="mr-2 h-4 w-4" />View all 4 replies</Badge>
                </div>
            </div>
            <div>
                <Button className="bg-gradient-to-r from-[#4B63DD] to-[#0524BF] text-white px-8 mt-auto flex-1" onClick={handelOpen}> <span className="mr-4"><ReplyIcon /></span> Reply</Button>
            </div>
            <div className={` ${box ? 'block' : 'hidden'} absolute bottom-4 z-[999999] `}>
                <SendMailBox setBox={setBox} data={data} />
            </div>
        </div>


    </>
}

export default MailBox