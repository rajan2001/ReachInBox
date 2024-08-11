import Header from "@/components/auth/header"

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <div className="bg-black h-screen w-screen">

                {children}
            </div>
        </>

    )
}