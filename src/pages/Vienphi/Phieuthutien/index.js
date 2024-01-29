import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyCheckDollar } from "@fortawesome/free-solid-svg-icons";
import "./phieuthutamung.scss";
import { Tabs } from "antd";
import Danhsachchothu from "./Danhsachchothu";
import Bangkekhaitamung from "./Bangkethutien";
function Phieuthutien() {
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
                <div className="tiepnhan-tab">
                    <Danhsachchothu />
                </div>
            ),
        },
        {
            key: "2",
            label: (
                <div className="p-0 m-0">
                    <FontAwesomeIcon icon={faMoneyCheckDollar} /> Bảng kê thu tiền
                </div>
            ),
            children: (
                <div className="tiepnhan-tab">
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

export default Phieuthutien;
