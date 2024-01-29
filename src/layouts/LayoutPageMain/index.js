import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, Dropdown, Tooltip } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
    faCaretRight,
    faDollarSign,
    faMoneyCheckDollar,
    fas,
} from "@fortawesome/free-solid-svg-icons";
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
    faHouseMedical,
    faNoteSticky,
    faListCheck,
    faPenToSquare,
    faRectangleList,
    faCircleArrowRight,
    faSyringe,
    faChartLine,
    faBox,
    faMinus,
} from "@fortawesome/free-solid-svg-icons";
import "./style.scss";
import logo from "../../assets/image/logo.png";
import menuAPI from "../../services/menu";
import loginAPI from "../../services/loginApi";
import Lichsudangnhap from "../../pages/Lichsudangnhap";
import phanquyenAPI from "../../services/phanquyenAPI";
import Doimatkhau from "../../pages/Lichsudangnhap/Doimatkhau";

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
    faHorse,
    faDollarSign,
    faMoneyCheckDollar,
    faCaretRight,
    faHouseMedical,
    faNoteSticky,
    faListCheck,
    faPenToSquare,
    faRectangleList,
    faCircleArrowRight,
    faSyringe,
    faChartLine,
    faBox,
    faMinus
);
const { Sider, Content } = Layout;
function LayoutPageMain({ children }) {
    //khai báo
    const navigate = useNavigate();

    const [collapsed, setCollapsed] = useState(false);
    const [listMenu, setListMenu] = useState([]);
    const [listUser, setlistUser] = useState([]);
    const [openlichsu, setOpenLichSu] = useState(false);
    const [opendoimk, setOpenDoiMK] = useState(false);

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
        setOpenLichSu(true);
    };
    const openDoiMK = () => {
        setOpenDoiMK(true);
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
                    <NavLink className="menu-navlink" to={item.MenuLink}>
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
                            <Tooltip title={item1.MenuName_Full} placement="right">
                                <NavLink className="menu-navlink-child" to={item1.MenuLink}>
                                    <div className="over-link w-100">{item1.MenuName_Full}</div>
                                </NavLink>
                            </Tooltip>,
                            item1.MenuID,
                            <FontAwesomeIcon icon={`solid + ${item.MenuIcon}`} />
                        )
                    )
                )
            );
        }
    });

    //dropdown username
    const dropuser = [
        {
            key: "1",
            label: (
                <div onClick={openDoiMK}>
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
                width={250}
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
                                onClick={() => navigate("/home")}
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

                <Lichsudangnhap open={openlichsu} setOpen={setOpenLichSu} employee={listUser} />
                <Doimatkhau open={opendoimk} setOpen={setOpenDoiMK} employee={listUser} />
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
