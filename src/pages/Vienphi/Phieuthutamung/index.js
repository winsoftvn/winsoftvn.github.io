import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyCheckDollar } from "@fortawesome/free-solid-svg-icons";
import "./phieuthutamung.scss";
import { Tabs } from "antd";
import Danhsachchothu from "./Danhsachchothu";
import Bangkekhaitamung from "./Bangthuketamung";
function Phieuthutamung() {
    //truyền props
    const tabvienphi = [
        {
            key: "1",
            label: (
                <div className="p-0 m-0">
                    <FontAwesomeIcon icon={faMoneyCheckDollar} /> Danh sách chờ thu
                </div>
            ),
            children: (
                <div>
                    <Danhsachchothu />
                </div>
            ),
        },
        {
            key: "2",
            label: (
                <div className="p-0 m-0">
                    <FontAwesomeIcon icon={faMoneyCheckDollar} /> Bảng kê thu tạm ứng
                </div>
            ),
            children: (
                <div>
                    <Bangkekhaitamung />
                </div>
            ),
        },
    ];

    return (
        <>
            {/* <Menuvienphi /> */}

            <div className="m-1">
                <Tabs defaultActiveKey="1" type="card" size="small" items={tabvienphi} />
            </div>
        </>
    );
}

export default Phieuthutamung;
