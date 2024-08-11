
import { ModeToggle } from "../mode/Mode"

const NavBar = () => {

    return <div className="border-b bg-primary fixed top-0 w-full z-50">
        <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6 w-[calc(100%_-_10rem)]  mx-auto pl-8 h-[68px] items-center justify-between">
            Onebox
            <div className="flex items-center gap-x-4 lg:gap-x-6 ">
                <ModeToggle />
            </div>
        </div>
    </div>

}

export default NavBar