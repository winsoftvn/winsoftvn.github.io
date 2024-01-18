import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./home.scss";
import loginAPI from "../../services/loginApi";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
function Home() {
    const [listUser, setlistUser] = useState([]);
    const getAllUser = async () => {
        try {
            const data = await loginAPI.profileFetch();
            setlistUser(data.data);
        } catch (err) {
            localStorage.removeItem("token");
            throw new Error(err);
        }
    };
    const logout = (event) => {
        event.preventDefault();
        localStorage.removeItem("token");
        window.location.href = "/";
    };
    useEffect(() => {
        getAllUser();
    }, []);

    return (
        <>
            <div className="homemain">
                <div className="p-4 text-muted fw-bold text-center emed-clinic">
                    <div className="emde-m">
                        <div className="name-tile">E-MED</div>
                        <div className="name-content">PHẦN MỀM QUẢN LÝ PHÒNG KHÁM</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
