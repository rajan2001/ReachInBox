"use client"
import InboxCard from "@/components/layout-component/Inbox-card"
import MailBox from "@/components/layout-component/Mail-box"
import { Input } from "@/components/ui/input"
import { TokenContext } from "@/lib/context"
import axios from "axios"
import { ChevronDown, RotateCw } from "lucide-react"
import { useContext, useEffect, useState } from "react"
import toast from "react-hot-toast"

const Page = () => {
    const [inbox, setInbox] = useState<any>([])
    const [loading, setLoading] = useState(true)
    const [input, setInput] = useState('')
    const [mail, setMail] = useState([])


    const response = async () => {
        try {
            setLoading(true)
            const data = await axios.get("https://hiring.reachinbox.xyz/api/v1/onebox/list", {
                headers: {
                    Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_TOKEN
                }
            })

            setInbox(data.data?.data)
        } catch (error) {
            console.log(error)
        }
        finally {
            setLoading(false)
        }

    }

    const formattedData = inbox.filter((data: any) => data?.fromEmail.toLowerCase().includes(input.toLowerCase()))

    async function MailData(id: any) {
        // try {
        //     const thread = await axios.get(`https://hiring.reachinbox.xyz/api/v1/onebox/messages/:${id}`, {
        //         headers: {
        //             Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_TOKEN
        //         }
        //     })
        //     setMail(thread.data)
        //     toast.success("thread List")
        // } catch (error: any) {
        //     console.log(error)
        //     toast.error(error.response.data.message)

        // }

        const threadIdDummy = inbox.find((data: any) => data.id === id);
        setMail(threadIdDummy)


    }


    useEffect(() => {
        response()
    }, [])

    if (loading) {
        return <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6 mt-40">...loading</div>
    }

    return <>
        <aside className=" inset-y-0 left-20 fixed overflow-y-auto  w-96  border-r pt-[85px] px-4 py-6 sm:px-6 lg:px-8 xl:block">
            <div className="flex flex-col gap-6">
                <div className=" flex items-start justify-between ">
                    <div>
                        <div className=" text-xl text-[#4285F4] font-bold flex items-center">All inbox(s) <ChevronDown className="ml-2" /></div>
                        <p className="text-sm mt-2 font-bold">25/25 <span className=" text-gray-400 font-normal">inboxes selected</span></p>
                    </div>
                    <div className=" bg-primary-foreground p-2 rounded cursor-pointer" onClick={() => response()}>
                        <RotateCw className="h-4 w-4" />
                    </div>
                </div>

                <Input type="email" placeholder="Search" value={input} onChange={(e) => setInput(e.target.value)} />
                {formattedData.map((mail: any) => {
                    return <InboxCard key={mail.id} data={mail} MailData={MailData} />
                })}

            </div>
        </aside>
        <div className="xl:pl-96  w-[calc(100%_-_2*9rem)]">
            <MailBox data={mail} />
        </div>
        <aside className=" inset-y-0 right-0 bg-background fixed overflow-y-auto  w-72  border-l pt-[68px] px-4 py-6 sm:px-6 lg:px-8 xl:block">

        </aside>
    </>
}


export default Page