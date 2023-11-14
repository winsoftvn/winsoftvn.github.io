import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowsRotate,
    faCircleArrowRight,
    faClipboardCheck,
    faFileInvoice,
    faForwardStep,
    faGear,
    faHandHoldingDollar,
    faMoneyCheckDollar,
    faPrint,
    faRectangleList,
} from "@fortawesome/free-solid-svg-icons";
import "./phieuthutamung.scss";
import Menuvienphi from "../Menuvienphi";
import { Button, Dropdown, Tabs } from "antd";
import Danhsachchothu from "./Danhsachchothu";
import { useState } from "react";
import Bangkekhaitamung from "./Bangthuketamung";
function Phieuthutamung() {
    const [open, setOpen] = useState(false);
    //handle
    const handleDataCreate = () => {
        setOpen(true);
    };
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
                    <FontAwesomeIcon icon={faMoneyCheckDollar} /> Bảng kê thu tạm ứng
                </div>
            ),
            children: (
                <div className="tiepnhan-tab">
                    <Bangkekhaitamung />
                </div>
            ),
        },
    ];
    const items1 = [
        {
            label: "Tiếp",
            key: "1",
            icon: <FontAwesomeIcon icon={faForwardStep} />,
        },
        {
            label: "Thu",
            key: "2",
            icon: <FontAwesomeIcon icon={faHandHoldingDollar} />,
        },
        {
            label: "Bỏ qua",
            key: "3",
            icon: <FontAwesomeIcon icon={faCircleArrowRight} />,
        },
        {
            label: "In phiếu",
            key: "4",
            icon: <FontAwesomeIcon icon={faPrint} />,
        },
        {
            label: "In HĐ",
            key: "4",
            icon: <FontAwesomeIcon icon={faFileInvoice} />,
        },
        {
            label: "Hoàn",
            key: "4",
            icon: <FontAwesomeIcon icon={faArrowsRotate} />,
        },
        {
            label: "BV01",
            key: "4",
            icon: <FontAwesomeIcon icon={faClipboardCheck} />,
        },
    ];
    const menuProps = {
        items: items1,
    };
    return (
        <>
            <Menuvienphi />

            <div className="m-1">
                <Tabs defaultActiveKey="1" type="card" size="small" items={tabvienphi} />
            </div>
        </>
    );
}

export default Phieuthutamung;
