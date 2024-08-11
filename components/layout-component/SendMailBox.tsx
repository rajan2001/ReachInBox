import { ChevronDown, EllipsisVertical, Eye, Image, Smile, X, Zap } from "lucide-react"



import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"
import { Editor } from "./editor"

export const SendMailBox = ({ setBox, data }: any) => {
    const [reply, setreply] = useState({
        subject: '',
    })
    const [value, setValue] = useState('');

    const handleChange = (e: any) => {
        const { value, name } = e.target
        setreply({ ...reply, [name]: value })
    }
    const response = async () => {
        try {
            await axios.post(`https://hiring.reachinbox.xyz/api/v1/onebox/reply/:${data.id}`, {
                from: data?.fromEmail,
                to: data?.toEmail,
                subject: reply.subject,
                body: value
            }, {
                headers: {
                    Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_TOKEN
                }

            })

            toast.success("Mail send Succesfully")
        } catch (error: any) {
            toast.error(error.response.data.message)
        }
    }


    return <div className="w-[752px] border  rounded-md h-[534px] flex flex-col justify-between   bg-secondary ">
        <div>
            <div className="flex items-center border-b py-2 px-4 pl-8 bg-primary  justify-between"><span className="text-xs font-bold text-gray-400">Reply</span> <Badge variant={"default"} className="bg-transparent cursor-pointer" onClick={() => {
                setBox(false)
                setreply({
                    subject: '',
                })
                setValue('')
            }}><X className="h-4 w-4 dark:text-white text-black" /></Badge></div>
            <div className="flex items-center gap-x-2 border-b py-2 px-4 pl-8 text-xs"><span className="text-gray-400">To:</span> {data?.toEmail}</div>
            <div className="flex items-center gap-x-2 border-b py-2 px-4 pl-8 text-xs"><span className="text-gray-400">From:</span>{data?.fromEmail}</div>
            <div className="flex items-center gap-x-2 border-b py-2 px-4 pl-8 text-xs"><span className="text-gray-400">Subject:</span> <Input value={reply.subject} name="subject" onChange={handleChange} className="p-0 outline-none ring-0 ring-offset-0 focus-visible:ring-transparent border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0" /></div>
        </div>

        <Editor value={value} setValue={setValue} />

        <div className="py-2 px-4 border-t flex items-center gap-8">
            <Button className="bg-gradient-to-r from-[#4B63DD] to-[#0524BF] px-6 text-white text-sm" onClick={() => response()} >  Send <ChevronDown className="ml-2 h-4 w-4" /></Button>
            <div className="flex items-center gap-4 text-gray-400 text-sm"><Zap className="h-4 w-4" /> <span>Variables</span></div>
            <div className="flex items-center gap-4 text-gray-400 text-sm"><Eye className="h-4 w-4" /> <span>Preview Email</span></div>
            <div className="flex items-end text-gray-400 text-sm"> <span>A</span><EllipsisVertical className="h-3 w-3" /> </div>
            <div className="flex items-center gap-4 text-gray-400 text-sm"><Image className="h-5 w-5" />
                <Smile className="h-5 w-5" />
            </div>

        </div>

    </div >
}

