"use client";
import { useState } from "react";
import {
    AreaChart,
    Coffee,
    Home,
    ListOrdered,
    PanelRightClose,
    PanelRightOpen,
    Pencil,
    Users,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import styles from "./style.module.css";

function DashboardLayout({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();
    const navList = [
        {
            name: "Dashboard",
            id: 1,
            icon: <Home size={22} strokeWidth={1} absoluteStrokeWidth />,
            navigate: "/dashboard",
        },
        {
            name: "Orders",
            id: 2,
            icon: <ListOrdered size={22} strokeWidth={1} absoluteStrokeWidth />,
            navigate: "/dashboard/orders",
        },
        {
            name: "Products",
            id: 3,
            icon: <Coffee size={22} strokeWidth={1} absoluteStrokeWidth />,
            navigate: "/dashboard/allproducts",
            subMenu: [
                {
                    name: "Categories",
                    id: 3,
                    icon: <Coffee size={22} strokeWidth={1} absoluteStrokeWidth />,
                    navigate: "/dashboard/categories",
                },
                {
                    name: "Groups",
                    id: 3,
                    icon: <Coffee size={22} strokeWidth={1} absoluteStrokeWidth />,
                    navigate: "/dashboard/groups",
                },
            ]
        },
        {
            name: "Audience",
            id: 4,
            icon: <Users size={22} strokeWidth={1} absoluteStrokeWidth />,
            navigate: "/dashboard/audience",
        },
        {
            name: "Analytics",
            id: 5,
            icon: <AreaChart size={22} strokeWidth={1} absoluteStrokeWidth />,
            navigate: "/dashboard/analytics-products",
            subMenu: [
                {
                    name: "Products",
                    id: 3,
                    icon: <Coffee size={22} strokeWidth={1} absoluteStrokeWidth />,
                    navigate: "/dashboard/analytics-products",
                },
                {
                    name: "Sales",
                    id: 3,
                    icon: <Coffee size={22} strokeWidth={1} absoluteStrokeWidth />,
                    navigate: "/dashboard/analytics-sales",
                },
            ]
        },
        {
            name: "Reviews",
            id: 6,
            icon: <Pencil size={22} strokeWidth={1} absoluteStrokeWidth />,
            navigate: "/dashboard/reviews",
        },
    ];

    const togglePanel = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="d-flex">
            <div
                className="bg-dark text-white position-fixed"
                style={{
                    height: "100vh",
                    width: isOpen ? "5vw" : "15vw", // Adjusted width based on isOpen state
                    position: "relative",
                    // transition: "width 0.5s ease-in-out", // CSS transition for smooth width change with ease-in-out timing
                    zIndex: 100,
                }}
            >
                <div className="p-3 text-center border-bottom border-2 border-light border-opacity-10 position-relative">
                    Brand Name
                    <div
                        className="position-absolute top-50 start-100 translate-middle rounded p-2 "
                        onClick={togglePanel}
                        style={{ backgroundColor: "#31363B" }}
                    >
                        {isOpen ? <PanelRightClose color="#ffffff" /> : <PanelRightOpen color="#ffffff" />}
                    </div>
                </div>
                <div
                    className="overflow-auto sidebar border-bottom border-2 border-light border-opacity-10"
                    style={{ height: "calc(100% - 8.5%)" }}
                >
                    <div className="">
                        {navList.map((value) => {
                            const isActive = pathname === value.navigate;
                            return (
                                <div
                                    role="button"
                                    key={value.id}
                                    className={`${isOpen ? "text-center" : ""}  ${isActive ? styles.active : ""
                                        } p-3 mb-2 ${styles.sidebar}`}
                                    onClick={() => router.push(value.navigate)}
                                >
                                    <span>{value.icon}</span>
                                    {!isOpen ? <span className="ms-3">{value.name}</span> : ""}
                                </div>
                            );
                        })}

                        {/* Add more content here */}
                    </div>
                </div>
            </div>
            <div
                className="container-fluid"
                style={{
                    marginLeft: isOpen ? "5vw" : "15vw",
                    width: "calc(100vw - " + (isOpen ? "5vw" : "15vw") + ")",
                    // transition: "margin-left 0.5s ease-in-out",
                    zIndex: 99,
                }}
            >
                <div
                    className="bg-white p-3 border-bottom border-2 fixed-top"
                    style={{
                        marginLeft: isOpen ? "5vw" : "15vw",
                        // transition: "margin-left 0.5s ease-in-out"
                    }}
                >
                    Header
                </div>
                <div className="p-2" style={{ marginTop: "50px" }}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default DashboardLayout;
