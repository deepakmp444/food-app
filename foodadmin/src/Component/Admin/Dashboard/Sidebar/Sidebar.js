'use client'

import { usePathname } from 'next/navigation'
import { useRouter } from "next/navigation";
import { AreaChart, Coffee, Home, ListOrdered, Pencil, Users, } from 'lucide-react'
import styles from './style.module.css'

const navList = [
    {
        name: "Dashboard",
        id: 1,
        icon: <Home size={22} strokeWidth={1} absoluteStrokeWidth />,
        navigate: "/admin/dashboard"
    },
    {
        name: "Orders",
        id: 2,
        icon: <ListOrdered size={22} strokeWidth={1} absoluteStrokeWidth />,
        navigate: "/admin/dashboard/order"
    },
    {
        name: "Foods",
        id: 3,
        icon: <Coffee size={22} strokeWidth={1} absoluteStrokeWidth />,
        navigate: "/admin/dashboard/food"
    },
    {
        name: "Users",
        id: 4,
        icon: <Users size={22} strokeWidth={1} absoluteStrokeWidth />,
        navigate: "/admin/dashboard/user"
    },
    {
        name: "Analytics",
        id: 5,
        icon: <AreaChart size={22} strokeWidth={1} absoluteStrokeWidth />,
        navigate: "/admin/dashboard/analytics"
    },
    {
        name: "Reviews",
        id: 6,
        icon: <Pencil size={22} strokeWidth={1} absoluteStrokeWidth />,
        navigate: "/admin/dashboard/reviews"
    },
]

function Sidebar() {
    const router = useRouter();
    const pathname = usePathname();

    return (
        <div style={{ height: "88vh" }}>
            {navList.map((value) => {
                const isActive = pathname === value.navigate;
                return (
                    <div role='button' key={value.id} className={`${isActive ? styles.active : ""} p-3 mt-2 ${styles.sidebar}`} onClick={() => router.push(value.navigate)}>
                        <span>{value.icon}</span><span className='ms-3'>{value.name}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default Sidebar