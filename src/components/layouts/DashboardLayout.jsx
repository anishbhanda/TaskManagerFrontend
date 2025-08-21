import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";
import SideMenu from "./SideMenu";
import Navbar from "./Navbar";

function DashboardLayout({ children, activeMenu }) {
    const { user } = useContext(UserContext);
    return (
        <div className="">
            <Navbar activeMenu={activeMenu}>
                {user && (
                    <div className="flex">
                        <div className="max-[100px]:hidden">
                            <SideMenu activeMenu={activeMenu} />
                        </div>
                        <div className="grow mx-5">{children}</div>
                    </div>
                )}
            </Navbar>
        </div>
    );
}

export default DashboardLayout;
