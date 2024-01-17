import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, Dropdown } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUserPlus,
    faStethoscope,
    faCircleDollarToSlot,
    faBedPulse,
    faRestroom,
    faHospitalUser,
    faVial,
    faPersonDotsFromLine,
    faBriefcaseMedical,
    faCapsules,
    faChartSimple,
    faLightbulb,
    faTools,
    faUser,
    faCogs,
    faUserAltSlash,
    faHorse,
    faRightFromBracket,
    faClockRotateLeft,
    faKey,
    faAngleUp,
} from "@fortawesome/free-solid-svg-icons";
import "./style.scss";
import logo from "../../assets/image/logo.png";
import menuAPI from "../../services/menu";
import loginAPI from "../../services/loginApi";
import Lichsudangnhap from "../../pages/Lichsudangnhap";
import phanquyenAPI from "../../services/phanquyenAPI";

library.add(
    fas,
    faUserPlus,
    faStethoscope,
    faCircleDollarToSlot,
    faBedPulse,
    faRestroom,
    faHospitalUser,
    faVial,
    faPersonDotsFromLine,
    faBriefcaseMedical,
    faCapsules,
    faChartSimple,
    faLightbulb,
    faTools,
    faUser,
    faCogs,
    faUserAltSlash,
    faHorse
);
const { Sider, Content } = Layout;
function LayoutPageMain({ children }) {
    //khai báo
    const navigate = useNavigate();

    const [collapsed, setCollapsed] = useState(true);
    const [listMenu, setListMenu] = useState([]);
    const [listUser, setlistUser] = useState([]);
    const [open, setOpen] = useState(false);
    const [phanquyenUser, setPhanQuyenUser] = useState([]);

    // hàm

    //xử lý user

    const getAllUser = async () => {
        try {
            const data = await loginAPI.profileFetch();
            setlistUser(data.data);
        } catch (err) {
            localStorage.removeItem("token");
            throw new Error(err);
        }
    };

    const getAllMenu = async () => {
        try {
            const data = await menuAPI.getAll();
            setListMenu(data.data);
        } catch (err) {
            throw new Error(err);
        }
    };

    const getPhanQuyenMenu = async () => {
        if (listUser.RowID) {
            const data = await phanquyenAPI.getPhanQuyen(Number(listUser?.RowID));
            console.log("data: ", data);
            setPhanQuyenUser(data.data);
        }
    };

    //xử ly menu khi phân quyên user

    let temp = phanquyenUser.map((item) => {
        return item.MenuID;
    });

    //lấy giá trị của danh mục
    let arrlaygiatri = temp.map((item) => {
        let c = {};
        listMenu.map((item1) => {
            if (item === item1.MenuID) {
                c = item1;
            }
        });
        return c;
    });
    //lấy obj của menuID
    arrlaygiatri.map((item) => {
        let a = "";
        if (item.Parent_MenuID !== 0) {
            a = item.Parent_MenuID;

            temp.push(a);
        }
    });
    const uniqueSet = new Set(temp);
    const loctrung = [...uniqueSet];
    const arrconvert = loctrung.sort((a, b) => a - b);
    //lấy thông tin lại của các khóa
    let arrtongket = arrconvert.map((item) => {
        let c = {};
        listMenu.map((item1) => {
            if (item === item1.MenuID) {
                c = item1;
            }
        });
        return c;
    });

    //lấy dữu liệu thông tin đầy đủ
    let a = arrtongket.map((item) => {
        let c = [];
        arrtongket.map((item1) => {
            if (item.MenuID === item1.Parent_MenuID) {
                c.push(item1);
            }
        });
        let b = {
            ...item,
            child: c,
        };
        return b;
    });
    let arr = a.filter((item) => item.Parent_MenuID === 0);
    ////////////////////////////////////

    useEffect(() => {
        getAllUser();
        getAllMenu();
    }, []);
    useEffect(() => {
        getPhanQuyenMenu();
    }, [listUser.RowID]);

    //xử lý user
    const logout = (event) => {
        event.preventDefault();
        localStorage.removeItem("token");
        window.location.href = "/";
    };

    const openLichsudangnhap = () => {
        setOpen(true);
    };
    //truyền props

    //menu load
    function getItem(label, key, icon, children, type) {
        return {
            key,
            icon,
            children,
            label,
            type,
        };
    }
    const items = [getItem(<div className="fw-bold">Chức năng</div>, "grp1", null, [], "group")];
    arr.map((item) => {
        if (item.Parent_MenuID === 0 && item.MenuLink !== "#") {
            items.push(
                getItem(
                    <NavLink
                        className="menu-navlink"
                        onClick={() => setCollapsed(true)}
                        to={item.MenuLink}
                    >
                        {item.MenuName_Full}
                    </NavLink>,
                    item.MenuID,
                    <FontAwesomeIcon icon={`solid + ${item.MenuIcon}`} />
                )
            );
        } else {
            items.push(
                getItem(
                    <div className="fw-bold">{item.MenuName_Full}</div>,
                    item.MenuName_Full,
                    <FontAwesomeIcon icon={`solid + ${item.MenuIcon}`} />,
                    item.child.map((item1) =>
                        getItem(
                            <NavLink
                                className="menu-navlink"
                                onClick={() => setCollapsed(true)}
                                to={item1.MenuLink}
                            >
                                {item1.MenuName_Full}
                            </NavLink>,
                            item1.MenuID,
                            <FontAwesomeIcon icon={`solid + ${item.MenuIcon}`} />
                        )
                    )
                )
            );
        }
    });

    // const items1 = [
    //     getItem(<div className="fw-bold">Chức năng</div>, "grp1", null, [], "group"),
    //     getItem(
    //         <NavLink className="menu-navlink" onClick={() => setCollapsed(true)} to="/tiepnhan">
    //             Tiếp nhận
    //         </NavLink>,
    //         "1",
    //         <FontAwesomeIcon icon={faUserPlus} />
    //     ),

    //     getItem(
    //         <div className="fw-bold">Khám Bệnh - HSBA</div>,
    //         "2",
    //         <FontAwesomeIcon icon={faStethoscope} />,
    //         [
    //             getItem(
    //                 <NavLink
    //                     className="menu-navlink"
    //                     onClick={() => setCollapsed(true)}
    //                     to="/khambenh/phieukhambenh"
    //                 >
    //                     Phiếu khám bệnh
    //                 </NavLink>,
    //                 "2.1",
    //                 <FontAwesomeIcon icon={faHospitalUser} />
    //             ),
    //             getItem(
    //                 <NavLink
    //                     className="menu-navlink"
    //                     onClick={() => setCollapsed(true)}
    //                     to="/khambenh/HSBANgoaitruKB"
    //                 >
    //                     HSBA - Ngoại Trú KB
    //                 </NavLink>,
    //                 "2.2",
    //                 <FontAwesomeIcon icon={faHospitalUser} />
    //             ),
    //             getItem(
    //                 <NavLink
    //                     className="menu-navlink"
    //                     onClick={() => setCollapsed(true)}
    //                     to="/khambenh/ngoaitruRHM"
    //                 >
    //                     HSBA - Ngoại Trú RHM
    //                 </NavLink>,
    //                 "2.3",
    //                 <FontAwesomeIcon icon={faHospitalUser} />
    //             ),
    //             getItem(
    //                 <NavLink
    //                     className="menu-navlink"
    //                     onClick={() => setCollapsed(true)}
    //                     to="/khambenh/ngoaitrummat"
    //                 >
    //                     HSBA - Ngoại Trú Mắt
    //                 </NavLink>,
    //                 "2.4",
    //                 <FontAwesomeIcon icon={faHospitalUser} />
    //             ),
    //             getItem(
    //                 <NavLink
    //                     className="menu-navlink"
    //                     onClick={() => setCollapsed(true)}
    //                     to="/khambenh/ngoaitruTMH"
    //                 >
    //                     HSBA - Ngoại Trú TMH
    //                 </NavLink>,
    //                 "2.5",
    //                 <FontAwesomeIcon icon={faHospitalUser} />
    //             ),
    //             getItem(
    //                 <NavLink
    //                     className="menu-navlink"
    //                     onClick={() => setCollapsed(true)}
    //                     to="/khambenh/ngoaitruYHCT"
    //                 >
    //                     HSBA - Ngoại Trú YHCT
    //                 </NavLink>,
    //                 "2.6",
    //                 <FontAwesomeIcon icon={faHospitalUser} />
    //             ),
    //         ]
    //     ),
    //     getItem(
    //         <NavLink
    //             className="menu-navlink"
    //             onClick={() => setCollapsed(true)}
    //             to="/vienphi/phieuthutien"
    //         >
    //             Viện phí
    //         </NavLink>,
    //         "3",
    //         <FontAwesomeIcon icon={faCircleDollarToSlot} />
    //     ),
    //     getItem(
    //         <NavLink className="menu-navlink" onClick={() => setCollapsed(true)} to="/pttt">
    //             Phẩu thuật thủ thuật
    //         </NavLink>,
    //         "4",
    //         <FontAwesomeIcon icon={faBedPulse} />
    //     ),

    //     getItem(
    //         <div className="fw-bold">Cận lâm sàn</div>,
    //         "5",
    //         <FontAwesomeIcon icon={faRestroom} />,
    //         [
    //             getItem(
    //                 <NavLink
    //                     className="menu-navlink"
    //                     onClick={() => setCollapsed(true)}
    //                     to="/canlansan/sieuam"
    //                 >
    //                     Siêu âm
    //                 </NavLink>,
    //                 "5.1",
    //                 <FontAwesomeIcon icon={faRestroom} />
    //             ),
    //             getItem(
    //                 <NavLink
    //                     className="menu-navlink"
    //                     onClick={() => setCollapsed(true)}
    //                     to="/canlamsan/noisoi"
    //                 >
    //                     Nội soi
    //                 </NavLink>,
    //                 "5.2",
    //                 <FontAwesomeIcon icon={faRestroom} />
    //             ),
    //             getItem(
    //                 <NavLink
    //                     className="menu-navlink"
    //                     onClick={() => setCollapsed(true)}
    //                     to="/canlamsan/xquang"
    //                 >
    //                     X-Quang
    //                 </NavLink>,
    //                 "5.3",
    //                 <FontAwesomeIcon icon={faRestroom} />
    //             ),
    //             getItem(
    //                 <NavLink
    //                     className="menu-navlink"
    //                     onClick={() => setCollapsed(true)}
    //                     to="/canlamsan/ctscanner"
    //                 >
    //                     CT Scanner
    //                 </NavLink>,
    //                 "5.4",
    //                 <FontAwesomeIcon icon={faRestroom} />
    //             ),
    //             getItem(
    //                 <NavLink
    //                     className="menu-navlink"
    //                     onClick={() => setCollapsed(true)}
    //                     to="/canlamsan/mri"
    //                 >
    //                     MRI
    //                 </NavLink>,
    //                 "5.5",
    //                 <FontAwesomeIcon icon={faRestroom} />
    //             ),
    //             getItem(
    //                 <NavLink
    //                     className="menu-navlink"
    //                     onClick={() => setCollapsed(true)}
    //                     to="/canlamsan/dientimhohapky"
    //                 >
    //                     Điện tim - Hô hấp ký
    //                 </NavLink>,
    //                 "5.6",
    //                 <FontAwesomeIcon icon={faRestroom} />
    //             ),
    //             getItem(
    //                 <NavLink
    //                     className="menu-navlink"
    //                     onClick={() => setCollapsed(true)}
    //                     to="/canlamsan/domatdoxuong"
    //                 >
    //                     Đo mật độ xương
    //                 </NavLink>,
    //                 "5.7",
    //                 <FontAwesomeIcon icon={faRestroom} />
    //             ),
    //         ]
    //     ),

    //     getItem(
    //         <NavLink className="menu-navlink" onClick={() => setCollapsed(true)} to="/xetnghiem">
    //             Xét nghiệm
    //         </NavLink>,
    //         "6",
    //         <FontAwesomeIcon icon={faVial} />
    //     ),

    //     getItem(
    //         <NavLink className="menu-navlink" onClick={() => setCollapsed(true)} to="/vltl-yhct">
    //             VLTL-YHCT
    //         </NavLink>,
    //         "7",
    //         <FontAwesomeIcon icon={faPersonDotsFromLine} />
    //     ),

    //     getItem(
    //         <NavLink className="menu-navlink" onClick={() => setCollapsed(true)} to="/khamsuckhoe">
    //             Khám sức khỏe
    //         </NavLink>,
    //         "8",
    //         <FontAwesomeIcon icon={faBriefcaseMedical} />
    //     ),

    //     getItem(
    //         <NavLink className="menu-navlink" onClick={() => setCollapsed(true)} to="/duoc">
    //             Dược
    //         </NavLink>,
    //         "9",
    //         <FontAwesomeIcon icon={faCapsules} />
    //     ),
    //     getItem(
    //         <NavLink className="menu-navlink" onClick={() => setCollapsed(true)} to="/baocao">
    //             Báo cáo
    //         </NavLink>,
    //         "10",
    //         <FontAwesomeIcon icon={faChartSimple} />
    //     ),

    //     getItem(
    //         <NavLink className="menu-navlink" onClick={() => setCollapsed(true)} to="/tienich">
    //             Tiện ích
    //         </NavLink>,
    //         "11",
    //         <FontAwesomeIcon icon={faLightbulb} />
    //     ),

    //     getItem(
    //         <NavLink
    //             className="menu-navlink"
    //             onClick={() => setCollapsed(true)}
    //             to="/cauhinhdanhmuc"
    //         >
    //             Cấu hình danh mục
    //         </NavLink>,
    //         "12",
    //         <FontAwesomeIcon icon={faTools} />
    //     ),
    //     getItem(<div className="fw-bold">Quản lý</div>, "grp2", null, [], "group"),

    //     getItem(<div className="fw-bold">Tài khoản</div>, "13", <FontAwesomeIcon icon={faUser} />, [
    //         getItem(
    //             <NavLink
    //                 className="menu-navlink"
    //                 onClick={() => setCollapsed(true)}
    //                 to="/taikhoan/khaibaouser"
    //             >
    //                 Khai báo user
    //             </NavLink>,
    //             "13.1",
    //             <FontAwesomeIcon icon={faUserPlus} />
    //         ),
    //         getItem(
    //             <NavLink
    //                 className="menu-navlink"
    //                 onClick={() => setCollapsed(true)}
    //                 to="/taikhoan/phanquyen"
    //             >
    //                 Phân quyền
    //             </NavLink>,
    //             "13.2",
    //             <FontAwesomeIcon icon={faUserAltSlash} />
    //         ),
    //     ]),
    //     getItem(
    //         <NavLink className="menu-navlink" onClick={() => setCollapsed(true)} to="/caidat">
    //             Cài đặt
    //         </NavLink>,
    //         "14",
    //         <FontAwesomeIcon icon={faCogs} />
    //     ),
    // ];

    //dropdown username
    const dropuser = [
        {
            key: "1",
            label: (
                <div>
                    <FontAwesomeIcon icon={faKey} className="mx-2" /> Đổi mật khẩu
                </div>
            ),
        },
        {
            key: "2",
            label: (
                <div onClick={openLichsudangnhap}>
                    <FontAwesomeIcon icon={faClockRotateLeft} className="mx-2" /> Lịch sử đăng nhập
                </div>
            ),
        },
        {
            key: "3",
            label: (
                <div onClick={logout}>
                    <FontAwesomeIcon icon={faRightFromBracket} className="mx-2" /> Đăng xuất
                </div>
            ),
        },
    ];

    return (
        <Layout className="min-vh-100">
            <Sider
                breakpoint="lg"
                width={220}
                trigger={null}
                collapsible
                collapsedWidth={0}
                collapsed={collapsed}
                className="bg-light b-menu"
            >
              
                    <div className={collapsed ? "menu-box-icon" : "menu-box-icon-click"}>
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)}
                            className={!collapsed ? "menu-btn-icon " : "menu-btn-icon-avtive "}
                        />
                    </div>
                    {collapsed ? (
                        ""
                    ) : (
                        <div className="scroll-menu">
                            <div className="d-block text-center mx-auto my-2">
                                <div
                                    className="d-flex align-items-center justify-content-start mx-2"
                                    onClick={() => navigate("/")}
                                >
                                    <img src={logo} className="img-logo" alt="logoweb" />
                                    <div className="fs-6 fw-bold mx-2">e-Medlink</div>
                                </div>
                            </div>
                            <hr className="m-0" />

                            <Menu theme="light" mode="inline" items={items}></Menu>

                            <div className="login-user">
                                <Dropdown
                                    menu={{
                                        items: dropuser,
                                    }}
                                    placement="top"
                                >
                                    <div className="user-name">
                                        {listUser.EmployeeName}{" "}
                                        <FontAwesomeIcon icon={faAngleUp} className="mx-2" />
                                    </div>
                                </Dropdown>
                            </div>
                        </div>
                    )}
            
                <Lichsudangnhap open={open} setOpen={setOpen} />
            </Sider>
            <Layout className="bg-frame">
                <Content className="b-content" style={{ backgroundColor: "#fff" }}>
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
}
export default LayoutPageMain;
