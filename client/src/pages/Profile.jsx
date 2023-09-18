import { useParams } from "react-router-dom";
// import { TopBar } from "../components/TopBar";
import UserSideBar from "../components/profile/UserSideBar";
import AccountSetting from "../components/profile/AccountSetting"
import "./profile.css"
import Bookmark from "../components/profile/Bookmark";
import Post from "../components/profile/Post";
import PurchasedProperty from "../components/profile/PurchasedProperty";

export const Profile = () => {
    const {activepage} = useParams();

    return (
        <div className="userprofile">
            {/* <TopBar/> */}
                <div className="userdetails">
                    <AccountSetting/>
                </div>
            <div className="userprofilein">

                <div className="left">
                    <UserSideBar activepage={activepage}/>
                </div>
                <div className="right">
                    {activepage==='bookmarks' && <Bookmark/>}
                    {activepage==='posts' && <Post/>}
                    {activepage==='purchasedproperty' && <PurchasedProperty/>}
                </div>

            </div>
        </div>
    )
}