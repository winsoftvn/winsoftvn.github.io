import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleArrowRight,
    faDollarSign,
    faListUl,
    faMoneyCheckDollar,
} from "@fortawesome/free-solid-svg-icons";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./phieuthutien.scss";
function Menuvienphi() {
    //truyền props

    const onClick = (e) => {
        console.log("click ", e);
        setCurrent(e.key);
    };
    const [current, setCurrent] = useState("0");

    const itemmenu = [
        {
            label: (
                <NavLink className="menu-navlink" to="/vienphi/phieuthutien">
                    Phiếu thu tiền
                </NavLink>
            ),
            key: "1",
            icon: <FontAwesomeIcon icon={faDollarSign} style={{ color: "yellow" }} />,
        },
        {
            label: (
                <NavLink className="menu-navlink" to="/vienphi/phieuthutamung">
                    Phiếu thu tạm ứng
                </NavLink>
            ),
            key: "2",
            icon: <FontAwesomeIcon icon={faMoneyCheckDollar} style={{ color: "green" }} />,
        },
        {
            label: (
                <NavLink className="menu-navlink" to="/vienphi/nhantrathebhyt">
                    Nhận trả thẻ BHYT
                </NavLink>
            ),
            key: "3",
            icon: <FontAwesomeIcon icon={faMoneyCheckDollar} style={{ color: "green" }} />,
        },

        {
            label: (
                <div className="fw-bold d-flex align-items-center">
                    <FontAwesomeIcon icon={faListUl} /> <div className="mx-2"> Danh mục</div>
                </div>
            ),
            key: "4",
            children: [
                {
                    label: (
                        <NavLink className="menu-navlink" to="/vienphi/danhmuc/nhomvienphihethong">
                            Nhóm viện phí hệ thống
                        </NavLink>
                    ),
                    key: "4.1",
                },
                {
                    label: (
                        <NavLink
                            className="menu-navlink"
                            to="/vienphi/danhmuc/khaibaonhomchuyenkhoaBYT"
                        >
                            Khai báo nhóm chuyên khoa BYT
                        </NavLink>
                    ),
                    key: "4.2",
                },
                {
                    label: (
                        <NavLink
                            className="menu-navlink"
                            to="/vienphi/danhmuc/khaibaonhomvienphipk"
                        >
                            Khai báo nhóm viện phí (PK)
                        </NavLink>
                    ),
                    key: "4.3",
                },
                {
                    label: (
                        <NavLink className="menu-navlink" to="/vienphi/danhmuc/khaibaonhomin">
                            Khai báo nhóm in
                        </NavLink>
                    ),
                    key: "4.4",
                },
                {
                    label: (
                        <NavLink className="menu-navlink" to="/vienphi/danhmuc/khaibaoloaivienphi">
                            Khai báo nhóm loại viện phí
                        </NavLink>
                    ),
                    key: "4.5",
                },
                {
                    label: (
                        <NavLink
                            className="menu-navlink"
                            to="/vienphi/danhmuc/khaibaodichvukythuat"
                        >
                            Khai báo dịch vụ kỹ thuật
                        </NavLink>
                    ),
                    key: "4.6",
                },
                {
                    label: (
                        <NavLink
                            className="menu-navlink"
                            to="/vienphi/danhmuc/khaibaogiadichvukythuat"
                        >
                            Khai báo giá dịch vụ kỹ thuật
                        </NavLink>
                    ),
                    key: "4.7",
                },
                {
                    label: (
                        <NavLink
                            className="menu-navlink"
                            to="/vienphi/danhmuc/khaibaogoidichvukythuat"
                        >
                            Khai báo gói dịch vụ kỹ thuật
                        </NavLink>
                    ),
                    key: "4.8",
                },
                {
                    label: (
                        <NavLink className="menu-navlink" to="/vienphi/danhmuc/khaibaodonvitinh">
                            Khai báo đơn vị tính
                        </NavLink>
                    ),
                    key: "4.9",
                },
                {
                    label: (
                        <NavLink className="menu-navlink" to="/vienphi/danhmuc/khaibaoquyenso">
                            Khai báo quyển số
                        </NavLink>
                    ),
                    key: "4.10",
                },
                {
                    label: (
                        <NavLink
                            className="menu-navlink"
                            to="/vienphi/danhmuc/khaibaogioihanthoigianchidinhDVKT"
                        >
                            Khai báo giới hạn thời gian chỉ định DVKT
                        </NavLink>
                    ),
                    key: "4.11",
                },
                {
                    label: (
                        <NavLink
                            className="menu-navlink"
                            to="/vienphi/danhmuc/khaibaoDVKTkhongchophepchidinhdongthoi"
                        >
                            Khai báo DVKT không cho phép chỉ định đồng thời
                        </NavLink>
                    ),
                    key: "4.12",
                },
                {
                    label: (
                        <NavLink
                            className="menu-navlink"
                            to="/vienphi/danhmuc/khaibaodichvucanhcaovietghichutrongchidinh"
                        >
                            Khai báo dịch vụ cảnh báo viết ghi chú trong chỉ định
                        </NavLink>
                    ),
                    key: "4.13",
                },
                {
                    label: (
                        <NavLink
                            className="menu-navlink"
                            to="/vienphi/danhmuc/khaibaoDVKTbatbuoccoketquakhiKQđieutrituvong"
                        >
                            Khai báo DVKT bắt buộc có kết quả khi KQ điều trị tử vong
                        </NavLink>
                    ),
                    key: "4.14",
                },
                {
                    label: (
                        <NavLink
                            className="menu-navlink"
                            to="/vienphi/danhmuc/mapdanhmucDVKTvoimaythuchiencanlamsan"
                        >
                            Map danh mục DVKT với máy thực hiện cận lâm sàn
                        </NavLink>
                    ),
                    key: "4.15",
                },
                {
                    label: (
                        <NavLink
                            className="menu-navlink"
                            to="/vienphi/danhmuc/khaibaoDVKTthuchienphauthuatxuatXML5"
                        >
                            Khai báo DVKT thực hiện phẩu thuật xuất XML5{" "}
                        </NavLink>
                    ),
                    key: "4.16",
                },
            ],
        },
    ];
    return (
        <>
            <div className="vienphi-menu">
                <div>
                    <Menu
                        onClick={(e) => {
                            setCurrent(e.key);
                        }}
                        selectedKeys={[current]}
                        mode="horizontal"
                        items={itemmenu}
                        className="rounded b-header d-flex align-items-center"
                    />
                </div>
            </div>
        </>
    );
}

export default Menuvienphi;
