import { faDiagramProject, faPoll, faVials } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tabs } from "antd";
import Khaibaohophong from "./Khaibaohopdonggoikham";
import Intraketquahsksk from "./Intraketquahsksk";
import Laymautrakqxetnghiemksk from "./Laymautrakqxetnghiemksk";

function Khamsuckhoe() {
    const items = [
        {
            key: "1",
            label: (
                <div className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faDiagramProject} />
                    <span className="mx-1">Khai báo hợp đồng - Gói khám</span>
                </div>
            ),
            children: (
                <div>
                    <Khaibaohophong />
                </div>
            ),
        },
        {
            key: "2",
            label: (
                <div className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faVials} />
                    <span className="mx-1">Lấy mẫu - Trả KQ xét nghiệm KSK</span>
                </div>
            ),
            children: (
                <div className="">
                    <Laymautrakqxetnghiemksk />
                </div>
            ),
        },
        {
            key: "3",
            label: (
                <div className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faPoll} />
                    <span className="mx-1">In trả kết quả HS KSK</span>
                </div>
            ),
            children: (
                <div className="">
                    <Intraketquahsksk />
                </div>
            ),
        },
    ];
    return (
        <>
            <div>
                <div>
                    <div className="w-100 p-1">
                        <Tabs defaultActiveKey="1" type="card" size="small" items={items} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Khamsuckhoe;
