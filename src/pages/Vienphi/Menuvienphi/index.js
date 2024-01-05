import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faListUl, faMoneyCheckDollar } from "@fortawesome/free-solid-svg-icons";
import { Dropdown } from "antd";
import { NavLink } from "react-router-dom";
import "./phieuthutien.scss";
function Menuvienphi() {
    //truyền props

    const items = [
        {
            label: (
                <NavLink
                    className="menu-navlink form-input-label"
                    to="/vienphi/danhmuc/nhomvienphihethong"
                >
                    Nhóm viện phí hệ thống
                </NavLink>
            ),
            key: "4.1",
        },
        {
            label: (
                <NavLink
                    className="menu-navlink form-input-label"
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
                    className="menu-navlink form-input-label"
                    to="/vienphi/danhmuc/khaibaonhomvienphipk"
                >
                    Khai báo nhóm viện phí (PK)
                </NavLink>
            ),
            key: "4.3",
        },
        {
            label: (
                <NavLink
                    className="menu-navlink form-input-label"
                    to="/vienphi/danhmuc/khaibaonhomin"
                >
                    Khai báo nhóm in
                </NavLink>
            ),
            key: "4.4",
        },
        {
            label: (
                <NavLink
                    className="menu-navlink form-input-label"
                    to="/vienphi/danhmuc/khaibaoloaivienphi"
                >
                    Khai báo nhóm loại viện phí
                </NavLink>
            ),
            key: "4.5",
        },
        {
            label: (
                <NavLink
                    className="menu-navlink form-input-label"
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
                    className="menu-navlink form-input-label"
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
                    className="menu-navlink form-input-label"
                    to="/vienphi/danhmuc/khaibaogoidichvukythuat"
                >
                    Khai báo gói dịch vụ kỹ thuật
                </NavLink>
            ),
            key: "4.8",
        },
        {
            label: (
                <NavLink
                    className="menu-navlink form-input-label"
                    to="/vienphi/danhmuc/khaibaodonvitinh"
                >
                    Khai báo đơn vị tính
                </NavLink>
            ),
            key: "4.9",
        },
        {
            label: (
                <NavLink
                    className="menu-navlink form-input-label"
                    to="/vienphi/danhmuc/khaibaoquyenso"
                >
                    Khai báo quyển số
                </NavLink>
            ),
            key: "4.10",
        },
        {
            label: (
                <NavLink
                    className="menu-navlink form-input-label"
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
                    className="menu-navlink form-input-label"
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
                    className="menu-navlink form-input-label"
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
                    className="menu-navlink form-input-label"
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
                    className="menu-navlink form-input-label"
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
                    className="menu-navlink form-input-label"
                    to="/vienphi/danhmuc/khaibaoDVKTthuchienphauthuatxuatXML5"
                >
                    Khai báo DVKT thực hiện phẩu thuật xuất XML5{" "}
                </NavLink>
            ),
            key: "4.16",
        },
    ];
    return (
        <>
            <div className="vienphi-menu">
                <div>
                    {/* <Menu
                        onClick={onClick}
                        selectedKeys={[current]}
                        mode="horizontal"
                        items={itemmenu}
                        activeKey={true}
                        className="rounded b-header d-flex align-items-center"
                    /> */}
                    <div className="d-flex mt-1">
                        <div className="d-flex menu-link-vienphi align-items-center">
                            <NavLink
                                className="menu-navlink"
                                to="/vienphi/phieuthutien"
                                activeClassName="active"
                                exact={true}
                            >
                                <div className="d-flex align-items-center box-link-vienphi">
                                    <FontAwesomeIcon icon={faDollarSign} />
                                    <div className="px-1">Phiếu thu tiền</div>
                                </div>
                            </NavLink>
                            <NavLink className="menu-navlink" to="/vienphi/phieuthutamung">
                                <div className="d-flex align-items-center box-link-vienphi">
                                    <FontAwesomeIcon icon={faMoneyCheckDollar} />
                                    <div className="px-1">Phiếu thu tạm ứng</div>
                                </div>
                            </NavLink>
                            <NavLink className="menu-navlink" to="/vienphi/nhantrathebhyt">
                                <div className="d-flex align-items-center box-link-vienphi">
                                    <FontAwesomeIcon icon={faMoneyCheckDollar} />
                                    <div className="px-1">Nhận trả thẻ BHYT</div>
                                </div>
                            </NavLink>
                            <NavLink className="menu-navlink" to="/12">
                                <Dropdown
                                    menu={{
                                        items,
                                    }}
                                >
                                    <div className="d-flex align-items-center box-link-vienphi">
                                        <FontAwesomeIcon icon={faListUl} />
                                        <div className="px-1">Danh mục</div>
                                    </div>
                                </Dropdown>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Menuvienphi;
