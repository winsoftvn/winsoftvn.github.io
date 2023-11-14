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
} from "@fortawesome/free-solid-svg-icons";
import "./style.scss";
import logo from "../../assets/image/logo.png";

const { Sider, Content, Header } = Layout;

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
            <NavLink className="menu-navlink" to="/phauthuatthuthuat">
                Phẩu thuật thủ thuật
            </NavLink>,
            "4",
            <FontAwesomeIcon icon={faBedPulse} />
        ),

        getItem(
            <NavLink className="menu-navlink" to="/canlamsan">
                Cận lâm sàn
            </NavLink>,
            "5",
            <FontAwesomeIcon icon={faRestroom} />
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
        getItem(
            <NavLink className="menu-navlink" to="/khaibaodichvukythuat">
                Tài khoản
            </NavLink>,
            "13",
            <FontAwesomeIcon icon={faUser} />
        ),
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
                <Content className="m-1 b-content" style={{ backgroundColor: "#fff" }}>
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
}
export default LayoutPageMain;
