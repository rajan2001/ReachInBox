"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { signOut, useSession } from "next-auth/react"
import { UserIcon } from "lucide-react"

export function DropDown() {
    const session = useSession()

    return (
        <DropdownMenu >
            <DropdownMenuTrigger asChild >
                <Button className="bg-secondary hover:bg-secondary"> {session.data?.user?.image ? <img
                    alt='user'
                    src={session.data?.user?.image}
                    height={32}
                    width={32}
                    className="h-8 w-8 rounded-full "
                /> : <UserIcon className="h-8 w-8 rounded-full " />}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className=" w-14">
                <DropdownMenuRadioItem value="top" onClick={() => signOut()} className=" cursor-pointer">Signout</DropdownMenuRadioItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
