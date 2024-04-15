"use client";
import { useState } from "react";
import {
    AreaChart,
    Bell,
    BookOpenText,
    Coffee,
    HelpCircle,
    Home,
    KeyRound,
    ListOrdered,
    LogOut,
    MenuIcon,
    MessageSquareMore,
    NotebookTabs,
    PanelRightClose,
    PanelRightOpen,
    Pencil,
    User,
    Users,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";

import styles from "./style.module.css";

function DashboardLayout({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();
    const [openSubmenus, setOpenSubmenus] = useState({});

    const toggleSubmenu = (id) => {
        setOpenSubmenus((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

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
            subMenu: [
                {
                    name: "Categories",
                    id: 31,
                    icon: <Coffee size={22} strokeWidth={1} absoluteStrokeWidth />,
                    navigate: "/dashboard/categories",
                },
                {
                    name: "Groups",
                    id: 32,
                    icon: <Coffee size={22} strokeWidth={1} absoluteStrokeWidth />,
                    navigate: "/dashboard/groups",
                },
            ],
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
            subMenu: [
                {
                    name: "Products",
                    id: 51,
                    icon: <Coffee size={22} strokeWidth={1} absoluteStrokeWidth />,
                    navigate: "/dashboard/analytics-products",
                },
                {
                    name: "Sales",
                    id: 52,
                    icon: <Coffee size={22} strokeWidth={1} absoluteStrokeWidth />,
                    navigate: "/dashboard/analytics-sales",
                },
            ],
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
                    Brand
                    <div
                        role="button"
                        className="position-absolute top-50 start-100 translate-middle rounded p-2 "
                        onClick={togglePanel}
                        style={{ backgroundColor: "#31363B" }}
                    >
                        {isOpen ? (
                            <PanelRightClose color="#ffffff" />
                        ) : (
                            <PanelRightOpen color="#ffffff" />
                        )}
                    </div>
                </div>
                <div
                    className="overflow-auto sidebar border-bottom border-2 border-light border-opacity-10"
                    style={{ height: "calc(100% - 8.5%)" }}
                >
                    <div style={{fontSize:"14px"}}>
                        {navList.map((item) => (
                            <div key={item.id}>
                                <div
                                    role="button"
                                    className={`${isOpen ? "text-center" : ""}  ${pathname === item.navigate ? styles.active : ""
                                        } p-3 mb-2 ${styles.sidebar}`}
                                    onClick={() => {
                                        if (item.subMenu) {
                                            toggleSubmenu(item.id);
                                        } else {
                                            router.push(item.navigate);
                                        }
                                    }}
                                >
                                    <span>{item.icon}</span>
                                    {!isOpen && !item.subMenu ? (
                                        <span className="ms-3">{item.name}</span>
                                    ) : (
                                        ""
                                    )}
                                    {item.subMenu && !isOpen ? (
                                        <span className="ms-3">{item.name}</span>
                                    ) : (
                                        ""
                                    )}
                                </div>
                                {!isOpen && item.subMenu && openSubmenus[item.id] && (
                                    <div className="" style={{ borderLeft: "5px solid #747474" }}>
                                        {item.subMenu.map((subItem) => (
                                            <div
                                                key={subItem.id}
                                                role="button"
                                                className={`${pathname === subItem.navigate ? styles.active : ""
                                                    } p-3 mb-2 ${styles.sidebar}`}
                                                onClick={() => router.push(subItem.navigate)}
                                                style={{ fontSize: "14px" }}
                                            >
                                                {!isOpen ? (
                                                    <span style={{ marginLeft: "33px" }}>
                                                        {subItem.name}
                                                    </span>
                                                ) : (
                                                    ""
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

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
                        height: "63px",
                    }}
                >
                    <div className="d-flex justify-content-between">
                        <div
                            style={{
                                marginLeft: "50px",
                                fontWeight: "500",
                                fontSize: "20px",
                            }}
                        >
                            Header
                        </div>
                        <div className="d-flex">
                            <Menu
                                arrow={true}
                                align={"end"}
                                menuButton={
                                    <MenuButton className="btn">
                                        <HelpCircle size={20} /><span className="ms-1" style={{ fontSize: "15px" }}>Help</span>
                                    </MenuButton>
                                }
                                transition
                            >
                                <MenuItem>
                                    <MessageSquareMore />
                                    <span className="ms-2">Chat with us</span>
                                </MenuItem>
                                <MenuItem>
                                    <HelpCircle />
                                    <span className="ms-2">Help center</span>
                                </MenuItem>
                                <MenuItem>
                                    <BookOpenText />
                                    <span className="ms-2">New Features</span>
                                </MenuItem>
                            </Menu>

                            <div class="vr mt-2" style={{ height: "22px" }}></div>
                            <button type="button" className="btn position-relative">
                                <Bell size={20} />{" "}
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-danger">
                                    +99
                                </span>
                            </button>
                            <div className="ms-4 me-5" style={{ marginTop: "-3px" }}>
                                <Menu
                                    arrow={true}
                                    align={"end"}
                                    menuButton={
                                        <MenuButton className="btn">
                                            <MenuIcon size={22} />
                                        </MenuButton>
                                    }
                                    transition
                                >
                                    <MenuItem>
                                        <User />
                                        <span className="ms-2">Deepak Kumar</span>
                                    </MenuItem>
                                    <MenuItem>
                                        <KeyRound />
                                        <span className="ms-2">Change Password</span>
                                    </MenuItem>
                                    <MenuItem>
                                        {" "}
                                        <NotebookTabs />{" "}
                                        <span className="ms-2">Application Log</span>
                                    </MenuItem>
                                    <MenuItem>
                                        <LogOut />
                                        <span className="ms-2">Logout</span>
                                    </MenuItem>
                                </Menu>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-2" style={{ marginTop: "50px" }}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default DashboardLayout;
