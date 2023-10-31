import Users from "../Users";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import UpdateUser from "../UpdateUser";
import {Outlet} from "react-router-dom"

export default function Dashboard(){
    return (
        <div>
            <TopBar/>
            <div className="content-flex">
            <SideBar/>
            <div style={{ width:"80%" }}>
                <Outlet/>
            </div>
            </div>
        </div>
    )

}