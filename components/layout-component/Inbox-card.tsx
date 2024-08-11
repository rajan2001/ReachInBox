import { SendIcon } from "lucide-react"
import { Badge } from "../ui/badge"
import { format } from "date-fns"

const InboxCard = ({ data, MailData }: any) => {
    return <div className="border-t py-3 px-2 cursor-pointer" onClick={() => MailData(data.id)}>
        <div >
            <div className=" flex items-start justify-between">

                <div className=" text-[14px]">  <span className="h-3 w-3 rounded-full inline-block bg-[#4285F4] mr-4 "></span>
                    {data?.fromEmail}
                    <div className="flex flex-col gap-1 ml-7">
                        <p className="text-xs text-gray-400">{data?.subject.slice(0, 20)}</p>
                        <div className="flex mt-2 gap-2">
                            <Badge className="bg-green-300/45 dark:text-green-200 text-green-800 text-[10px]">
                                <div className="h-2 w-2 rounded-full dark:bg-green-200  bg-green-800 mr-2"></div>Intreseted</Badge>
                            <Badge className="bg-primary-foreground text-gray-600 dark:text-gray-300 text-[10px]">
                                <SendIcon className="mr-2 h-4 w-4 text-gray-600 dark:text-gray-300" />Campaign Name</Badge>

                        </div>
                    </div></div>
                <p className="text-gray-600 text-[10px]">{format(data?.createdAt, "MMMM/dd")}</p>
            </div>


        </div>

    </div>
}

export default InboxCard