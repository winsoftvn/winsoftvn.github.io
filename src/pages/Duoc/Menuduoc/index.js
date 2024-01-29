import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faListUl } from "@fortawesome/free-solid-svg-icons";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./menuduoc.scss";
function Menuduoc() {
    //truyền props

    const [current, setCurrent] = useState("0");

    const itemmenu = [
        {
            label: (
                <div className="fw-bold d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleDown} /> <div className="mx-2"> Nhà thuốc</div>
                </div>
            ),
            key: "1",
            children: [
                {
                    label: (
                        <NavLink className="menu-navlink" to="/duoc/nhathuoc/ketoabanle">
                            Kê toa bán lẻ
                        </NavLink>
                    ),
                    key: "1.1",
                },
                {
                    label: (
                        <NavLink className="menu-navlink" to="/duoc/nhathuoc/inphieuthunhathuoc">
                            In phiếu thu nhà thuốc
                        </NavLink>
                    ),
                    key: "1.2",
                },
                {
                    label: (
                        <NavLink
                            className="menu-navlink"
                            to="/duoc/nhathuoc/nhanhoantratoabanlenhathuoc"
                        >
                            Nhận hoàn trả bán lẻ nhà thuốc
                        </NavLink>
                    ),
                    key: "1.3",
                },
            ],
        },
        {
            label: (
                <div className="fw-bold d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleDown} />
                    <div className="mx-2">Duyệt - Cấp phát thuốc</div>
                </div>
            ),
            key: "2",
            children: [
                {
                    label: (
                        <NavLink
                            className="menu-navlink"
                            to="/duoc/duyetcapphatthuoc/duyettoathuocBHYTDV"
                        >
                            Duyệt toa thuốc BHYT - DV
                        </NavLink>
                    ),
                    key: "2.1",
                },
                {
                    label: (
                        <NavLink
                            className="menu-navlink"
                            to="/duoc/duyetcapphatthuoc/danhdaudonthuocphat"
                        >
                            Đánh dấu đơn thuốc phát
                        </NavLink>
                    ),
                    key: "2.2",
                },
                {
                    label: (
                        <NavLink
                            className="menu-navlink"
                            to="/duoc/duyetcapphatthuoc/danhsachtoathuocdaduyet"
                        >
                            Danh sách toa thuốc đã duyệt
                        </NavLink>
                    ),
                    key: "2.3",
                },
            ],
        },
        {
            label: (
                <div className="fw-bold d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleDown} /> <div className="mx-2">Quản lý kho</div>
                </div>
            ),
            key: "3",
            children: [
                {
                    label: (
                        <NavLink className="menu-navlink" to="/duoc/quanlykho/nhapkho">
                            Nhập kho
                        </NavLink>
                    ),
                    key: "3.1",
                },
                {
                    label: (
                        <NavLink className="menu-navlink" to="/duoc/quanlykho/hoantrakho">
                            Hoàn trả kho
                        </NavLink>
                    ),
                    key: "3.2",
                },
                {
                    label: (
                        <NavLink className="menu-navlink" to="/duoc/quanlykho/hoantranhacungcap">
                            Hoàn trả nhà cung cấp
                        </NavLink>
                    ),
                    key: "3.3",
                },
                {
                    label: (
                        <NavLink
                            className="menu-navlink"
                            to="/duoc/quanlykho/dutrulapphieulinhthuoc"
                        >
                            Dự trù - Lập phiếu lĩnh thuốc
                        </NavLink>
                    ),
                    key: "3.4",
                },
                {
                    label: (
                        <NavLink
                            className="menu-navlink"
                            to="/duoc/quanlykho/dutruduyetcapphieulinh"
                        >
                            Dự trù - Duyệt cấp phiếu lĩnh
                        </NavLink>
                    ),
                    key: "3.5",
                },
                {
                    label: (
                        <NavLink className="menu-navlink" to="/duoc/quanlykho/xuathaophikhoaphong">
                            Xuất hao phí khoa phòng
                        </NavLink>
                    ),
                    key: "3.6",
                },
                {
                    label: (
                        <NavLink className="menu-navlink" to="/duoc/quanlykho/dieuchinhsoluongkho">
                            Điều chỉnh số lượng kho
                        </NavLink>
                    ),
                    key: "3.7",
                },
                {
                    label: (
                        <NavLink className="menu-navlink" to="/duoc/quanlykho/xemtonkhadung">
                            Xem tồn khả dụng ( tồn treo )
                        </NavLink>
                    ),
                    key: "3.8",
                },
            ],
        },

        {
            label: (
                <div className="fw-bold d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleDown} />
                    <div className="mx-2">Cập nhật phiếu nhập</div>
                </div>
            ),
            key: "4",
            children: [
                {
                    label: (
                        <NavLink className="menu-navlink" to="/duoc/capnhatphieunhap/phieunhapkho">
                            Cập nhật phiếu nhập kho
                        </NavLink>
                    ),
                    key: "4.1",
                },
                {
                    label: (
                        <NavLink className="menu-navlink" to="/duoc/capnhatphieunhap/lohandung">
                            Cập nhập lô, hạn dùng
                        </NavLink>
                    ),
                    key: "4.2",
                },
            ],
        },
        {
            label: (
                <div className="fw-bold d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleDown} />
                    <div className="mx-2">Liên thông dữ liệu QG</div>
                </div>
            ),
            key: "5",
            children: [
                {
                    label: (
                        <NavLink
                            className="menu-navlink"
                            to="/duoc/lienthongdulieuqg/dmthuoclienthongthuocLTDLQG"
                        >
                            DM thuốc liên thông dữ liệu quốc gia
                        </NavLink>
                    ),
                    key: "5.1",
                },
                {
                    label: (
                        <NavLink
                            className="menu-navlink"
                            to="/duoc/lienthongdulieuqg/mapdanhmucthuocduocQG"
                        >
                            Map danh mục thuốc với DM thuốc dược QG
                        </NavLink>
                    ),
                    key: "5.2",
                },
                {
                    label: (
                        <NavLink
                            className="menu-navlink"
                            to="/duoc/lienthongdulieuqg/lienthonghdthuocbanlecosoGPP"
                        >
                            Liên thông HĐ thuốc bán lẻ cơ sở GPP
                        </NavLink>
                    ),
                    key: "5.3",
                },
                {
                    label: (
                        <NavLink
                            className="menu-navlink"
                            to="/duoc/lienthongdulieuqg/lienthongphieunhaptuCSGPP"
                        >
                            Liên thông phiếu nhập từ cơ sở GPP
                        </NavLink>
                    ),
                    key: "5.4",
                },
                {
                    label: (
                        <NavLink
                            className="menu-navlink"
                            to="/duoc/lienthongdulieuqg/lienthongphieuxuattuCSGPP"
                        >
                            Liên thông phiếu xuất từ cơ sở GPP
                        </NavLink>
                    ),
                    key: "5.5",
                },
            ],
        },
        {
            label: (
                <div className="fw-bold d-flex align-items-center">
                    <FontAwesomeIcon icon={faListUl} /> <div className="mx-2">Danh mục</div>
                </div>
            ),
            key: "6",
            children: [
                {
                    label: (
                        <NavLink className="menu-navlink" to="/duoc/danhmuc/donvitinh">
                            Đơn vị tính
                        </NavLink>
                    ),
                    key: "6.1",
                },
                {
                    label: (
                        <NavLink className="menu-navlink" to="/duoc/danhmuc/duongdung">
                            Đường dùng
                        </NavLink>
                    ),
                    key: "6.2",
                },
                {
                    label: (
                        <NavLink className="menu-navlink" to="/duoc/danhmuc/cachdung">
                            Cách dùng
                        </NavLink>
                    ),
                    key: "6.3",
                },
                {
                    label: (
                        <NavLink className="menu-navlink" to="/duoc/danhmuc/hangsanxuat">
                            Hãng sản xuất
                        </NavLink>
                    ),
                    key: "6.4",
                },
                {
                    label: (
                        <NavLink className="menu-navlink" to="/duoc/danhmuc/nuocsanxuat">
                            Nước sản xuất
                        </NavLink>
                    ),
                    key: "6.5",
                },
                {
                    label: (
                        <NavLink className="menu-navlink" to="/duoc/danhmuc/nhacungcap">
                            Nhà cung cấp
                        </NavLink>
                    ),
                    key: "6.6",
                },
                {
                    label: (
                        <NavLink className="menu-navlink" to="/duoc/danhmuc/phannhom">
                            Phân nhóm
                        </NavLink>
                    ),
                    key: "6.7",
                },
                {
                    label: (
                        <NavLink className="menu-navlink" to="/duoc/danhmuc/phanloai">
                            Phân loại
                        </NavLink>
                    ),
                    key: "6.8",
                },
                {
                    label: (
                        <NavLink className="menu-navlink" to="/duoc/danhmuc/thuocvattuyte">
                            Thuốc & Vật tư y tế
                        </NavLink>
                    ),
                    key: "6.9",
                },
                {
                    label: (
                        <NavLink className="menu-navlink" to="/duoc/danhmuc/danhmucthuocthau">
                            Danh mục thuốc thầu BHYT
                        </NavLink>
                    ),
                    key: "6.10",
                },
                {
                    label: (
                        <NavLink className="menu-navlink" to="/duoc/danhmuc/toamau">
                            Toa mẫu
                        </NavLink>
                    ),
                    key: "6.11",
                },
                {
                    label: (
                        <NavLink className="menu-navlink" to="/duoc/danhmuc/kho">
                            Kho
                        </NavLink>
                    ),
                    key: "6.12",
                },
                {
                    label: (
                        <NavLink className="menu-navlink" to="/duoc/danhmuc/khaibaonhomin">
                            Khai báo nhóm in
                        </NavLink>
                    ),
                    key: "6.13",
                },
            ],
        },
    ];
    return (
        <>
            <div className="duoc-menu">
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

export default Menuduoc;
