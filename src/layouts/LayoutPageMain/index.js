import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUserPlus,
    faStethoscope,
    faCircleDollarToSlot,
    faBedPulse,
    faRestroom,
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
} from "@fortawesome/free-solid-svg-icons";
import "./style.scss";
import logo from "../../assets/image/logo.png";

const { Sider, Content } = Layout;

function LayoutPageMain({ children }) {
    //khai báo
    const [collapsed, setCollapsed] = useState(false);
    // hàm

    //truyền props
    function getItem(label, key, icon, children, type) {
        return {
            key,
            icon,
            children,
            label,
            type,
        };
    }
    const items = [
        getItem(<div className="fw-bold">Chức năng</div>, "grp", null, [], "group"),
        getItem(
            <NavLink className="menu-navlink" to="/tiepnhan">
                Tiếp nhận
            </NavLink>,
            "1",
            <FontAwesomeIcon icon={faUserPlus} />
        ),

        getItem(
            <NavLink className="menu-navlink" to="/khambenh">
                Khám bệnh
            </NavLink>,
            "2",
            <FontAwesomeIcon icon={faStethoscope} />
        ),
        getItem(
            <NavLink className="menu-navlink" to="/vienphi/phieuthutien">
                Viện phí
            </NavLink>,
            "3",
            <FontAwesomeIcon icon={faCircleDollarToSlot} />
        ),
        getItem(
            <NavLink className="menu-navlink" to="/pttt">
                Phẩu thuật thủ thuật
            </NavLink>,
            "4",
            <FontAwesomeIcon icon={faBedPulse} />
        ),

        getItem(
            <div className="fw-bold">Cận lâm sàn</div>,
            "5",
            <FontAwesomeIcon icon={faRestroom} />,
            [
                getItem(
                    <NavLink className="menu-navlink" to="/canlamsan/sieuam">
                        Siêu âm
                    </NavLink>,
                    "5.1",
                    <FontAwesomeIcon icon={faRestroom} />
                ),
                getItem(
                    <NavLink className="menu-navlink" to="/canlamsan/noisoi">
                        Nội soi
                    </NavLink>,
                    "5.2",
                    <FontAwesomeIcon icon={faRestroom} />
                ),
                getItem(
                    <NavLink className="menu-navlink" to="/canlamsan/xquang">
                        X-Quang
                    </NavLink>,
                    "5.3",
                    <FontAwesomeIcon icon={faRestroom} />
                ),
                getItem(
                    <NavLink className="menu-navlink" to="/canlamsan/scanner">
                        CT Scanner
                    </NavLink>,
                    "5.4",
                    <FontAwesomeIcon icon={faRestroom} />
                ),
                getItem(
                    <NavLink className="menu-navlink" to="/canlamsan/mri">
                        MRI
                    </NavLink>,
                    "5.5",
                    <FontAwesomeIcon icon={faRestroom} />
                ),
                getItem(
                    <NavLink className="menu-navlink" to="/canlamsan/dientimhohapky">
                        Điện tim - Hô hấp ký
                    </NavLink>,
                    "5.6",
                    <FontAwesomeIcon icon={faRestroom} />
                ),
                getItem(
                    <NavLink className="menu-navlink" to="/canlamsan/domatdxuong">
                        Đo mật độ xương
                    </NavLink>,
                    "5.7",
                    <FontAwesomeIcon icon={faRestroom} />
                ),
            ]
        ),

        getItem(
            <NavLink className="menu-navlink" to="/xetnghiem">
                Xét nghiệm
            </NavLink>,
            "6",
            <FontAwesomeIcon icon={faVial} />
        ),

        getItem(
            <NavLink className="menu-navlink" to="/vltl-yhct">
                VLTL-YHCT
            </NavLink>,
            "7",
            <FontAwesomeIcon icon={faPersonDotsFromLine} />
        ),

        getItem(
            <NavLink className="menu-navlink" to="/khamsuckhoe">
                Khám sức khỏe
            </NavLink>,
            "8",
            <FontAwesomeIcon icon={faBriefcaseMedical} />
        ),

        getItem(
            <NavLink className="menu-navlink" to="/duoc">
                Dược
            </NavLink>,
            "9",
            <FontAwesomeIcon icon={faCapsules} />
        ),
        getItem(
            <NavLink className="menu-navlink" to="/baocao">
                Báo cáo
            </NavLink>,
            "10",
            <FontAwesomeIcon icon={faChartSimple} />
        ),

        getItem(
            <NavLink className="menu-navlink" to="/tienich">
                Tiện ích
            </NavLink>,
            "11",
            <FontAwesomeIcon icon={faLightbulb} />
        ),

        getItem(
            <NavLink className="menu-navlink" to="/cauhinhdanhmuc">
                Cấu hình danh mục
            </NavLink>,
            "12",
            <FontAwesomeIcon icon={faTools} />
        ),
        getItem(<div className="fw-bold">Quản lý</div>, "grp", null, [], "group"),

        getItem(<div className="fw-bold">Tài khoản</div>, "13", <FontAwesomeIcon icon={faUser} />, [
            getItem(
                <NavLink className="menu-navlink" to="/taikhoan/khaibaouser">
                    Khai báo user
                </NavLink>,
                "13.1",
                <FontAwesomeIcon icon={faUserPlus} />
            ),
            getItem(
                <NavLink className="menu-navlink" to="/taikhoan/phanquyen">
                    Phân quyền
                </NavLink>,
                "13.2",
                <FontAwesomeIcon icon={faUserAltSlash} />
            ),
        ]),
        getItem(
            <NavLink className="menu-navlink" to="/caidat">
                Cài đặt
            </NavLink>,
            "14",
            <FontAwesomeIcon icon={faCogs} />
        ),
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
                    <div>
                        <div className="d-block text-center mx-auto my-3">
                            <div className="d-flex align-items-center justify-content-center">
                                <img src={logo} className="img-logo" />
                                <div className="fs-4 fw-bold mx-2 ">e-Medlink</div>
                            </div>
                        </div>
                        <hr />
                        <Menu theme="light" mode="inline" items={items}></Menu>
                    </div>
                )}
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
