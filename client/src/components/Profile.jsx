import { useParams } from "react-router-dom"

export const Profile = () => {
    const {activepage} = useParams();
    alert(activepage);
    return <>
        
    </>
}