'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { HomeIcon, InboxIcon, ListIcon, MailIcon, MenuIcon, SendIcon, UserSearchIcon } from 'lucide-react'
import NavBar from './navbar'
import { Icon } from '../Icon'
import { DropDown } from './dropdown'
import { usePathname, useRouter } from 'next/navigation'

const navigation = [
  { name: 'Home', href: '#', icon: HomeIcon, },
  { name: 'UserSearch', href: '#', icon: UserSearchIcon, },
  { name: 'Mail', href: '#', icon: MailIcon, },
  { name: 'Send', href: '#', icon: SendIcon, },
  { name: 'Inbox', href: '/inbox', icon: InboxIcon, },
  { name: 'List', href: '#', icon: ListIcon, },
]



export default function SideBar() {

  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  return (
    <>

      <div>
        {/* <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 flex">
            <DialogPanel
              transition
              className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
            >
              <TransitionChild>
                <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                  <button type="button" onClick={() => setSidebarOpen(false)} className="-m-2.5 p-2.5">
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon aria-hidden="true" className="h-6 w-6 text-white" />
                  </button>
                </div>
              </TransitionChild>

              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-2 ring-1 ring-white/10">
                <div className="flex h-16 shrink-0 items-center">
                  <img
                    alt="Your Company"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    className="h-8 w-auto"
                  />
                </div>
                <nav className="flex flex-1 flex-col">
                  <ul role="list" className="-mx-2 flex-1 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-800 text-white'
                              : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                            'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                          )}
                        >
                          <item.icon aria-hidden="true" className="h-6 w-6 shrink-0" />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </div>
        </Dialog> */}

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 z-[80] lg:block lg:w-20 lg:overflow-y-auto bg-secondary lg:pb-4 border-r ">
          <div className="flex h-16 shrink-0 items-center justify-center cursor-pointer" onClick={() => router.push("/")}>
            <Icon />

          </div>
          <nav className="mt-8 flex items-center flex-col h-[85%]">
            <ul role="list" className="flex flex-col items-center space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={cn(
                      pathname === item.href ? ' bg-primary-foreground' : ' text-secondary-foreground hover:bg-primary-foreground hover:text-black dark:hover:text-white',
                      'group flex gap-x-3 rounded-md p-3 text-sm font-semibold leading-6',
                    )}
                  >
                    <item.icon aria-hidden="true" className="h-6 w-6 shrink-0" />
                    <span className="sr-only">{item.name}</span>
                  </a>
                </li>
              ))}


            </ul>
            <div className='mt-auto flex-1 flex items-end z-[9999]'>
              <DropDown />
            </div>

          </nav>
        </div>

        <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-gray-900 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
          <button type="button" onClick={() => setSidebarOpen(true)} className="-m-2.5 p-2.5 text-gray-400 lg:hidden">
            <span className="sr-only">Open sidebar</span>
            <MenuIcon aria-hidden="true" className="h-6 w-6" />
          </button>
          <div className="flex-1 text-sm font-semibold leading-6 text-white">Dashboard</div>
          <a href="#">
            <span className="sr-only">Your profile</span>
            <img
              alt=""
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              className="h-8 w-8 rounded-full bg-gray-800"
            />
          </a>
        </div>
        <NavBar />


      </div>
    </>
  )
}
