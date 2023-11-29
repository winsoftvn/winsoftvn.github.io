import Canlamsan from "../pages/Canlamsan/Sieuam";
import Duoc from "../pages/Duoc";
import Home from "../pages/Home";
import Khambenh from "../pages/Khambenh";
import Khamsuckhoe from "../pages/Khamsuckhoe";
import Phauthuatthuthuat from "../pages/Phauthuatthuthuat";
import Khaibaouser from "../pages/Taikhoan/Khaibaouser/List";
import Phanquyen from "../pages/Taikhoan/Phanquyen";
import Tiepnhan from "../pages/Tiepnhan";
import VLTL_YHCT from "../pages/VLTL_YHCT";
import KhaibaoDVKTbatbuoccoketquakhiKQđieutrituvong from "../pages/Vienphi/Danhmuc/KhaibaoDVKTbatbuoccoketquakhiKQđieutrituvong/List";
import KhaibaoDVKTkhongchophepchidinhdongthoi from "../pages/Vienphi/Danhmuc/KhaibaoDVKTkhongchophepchidinhdongthoi/List";
import KhaibaoDVKTthuchienphauthuatxuatXML5 from "../pages/Vienphi/Danhmuc/KhaibaoDVKTthuchienphauthuatxuatXML5/List";
import Khaibaodichvucanhcaovietghichutrongchidinh from "../pages/Vienphi/Danhmuc/Khaibaodichvucanhcaovietghichutrongchidinh/List";
import Khaibaodichvukythuat from "../pages/Vienphi/Danhmuc/Khaibaodichvukythuat/List";
import Khaibaodonvitinh from "../pages/Vienphi/Danhmuc/Khaibaodonvitinh/List";
import Khaibaogiadichvukythuat from "../pages/Vienphi/Danhmuc/Khaibaogiadichvukythuat/List";
import KhaibaogioihanthoigianchidinhDVKT from "../pages/Vienphi/Danhmuc/KhaibaogioihanthoigianchiđinhVKT/List";
import Khaibaogoidichvukythuat from "../pages/Vienphi/Danhmuc/Khaibaogoidichvukythuat/List";
import Khaibaoloaivienphi from "../pages/Vienphi/Danhmuc/Khaibaoloaivienphi/List";
import KhaibaonhomchuyenkhoaBYT from "../pages/Vienphi/Danhmuc/KhaibaonhomchuyenkhoaBYT/List";
import Khaibaonhomin from "../pages/Vienphi/Danhmuc/Khaibaonhomin/List";
import Khaibaonhomvienphipk from "../pages/Vienphi/Danhmuc/KhaibaonhomvienphiPk/List";
import Khaibaoquyenso from "../pages/Vienphi/Danhmuc/Khaibaoquyenso/List";
import MapdanhmucDVKTvoimaythuchiencanlamsan from "../pages/Vienphi/Danhmuc/MapdanhmucDVKTvoimaythuchiencanlamsan/List";
import Nhomvienphihethong from "../pages/Vienphi/Danhmuc/Nhomvienphihethong/List";
import Nhantrathebhyt from "../pages/Vienphi/NhantratheBHYT";
import Phieuthutamung from "../pages/Vienphi/Phieuthutamung";
import Phieuthutien from "../pages/Vienphi/Phieuthutien";
import Xetnghiem from "../pages/Xetnghiem";
const PageWeb = [
    {
        path: "/",
        page: Home,
        isMainLayout: true,
    },
    //Tiếp nhận
    {
        path: "/tiepnhan",
        page: Tiepnhan,
        isMainLayout: true,
    },
    //Khám bệnh
    {
        path: "/khambenh",
        page: Khambenh,
        isMainLayout: true,
    },
    //Viện phí
    {
        path: "/vienphi/phieuthutien",
        page: Phieuthutien,
        isMainLayout: true,
    },
    {
        path: "/vienphi/phieuthutamung",
        page: Phieuthutamung,
        isMainLayout: true,
    },
    {
        path: "/vienphi/nhantrathebhyt",
        page: Nhantrathebhyt,
        isMainLayout: true,
    },
    {
        path: "/vienphi/danhmuc/nhomvienphihethong",
        page: Nhomvienphihethong,
        isMainLayout: true,
    },
    {
        path: "/vienphi/danhmuc/khaibaonhomchuyenkhoaBYT",
        page: KhaibaonhomchuyenkhoaBYT,
        isMainLayout: true,
    },
    {
        path: "/vienphi/danhmuc/khaibaonhomvienphipk",
        page: Khaibaonhomvienphipk,
        isMainLayout: true,
    },
    {
        path: "/vienphi/danhmuc/khaibaonhomin",
        page: Khaibaonhomin,
        isMainLayout: true,
    },
    {
        path: "/vienphi/danhmuc/khaibaoloaivienphi",
        page: Khaibaoloaivienphi,
        isMainLayout: true,
    },
    {
        path: "/vienphi/danhmuc/khaibaodichvukythuat",
        page: Khaibaodichvukythuat,
        isMainLayout: true,
    },
    {
        path: "/vienphi/danhmuc/khaibaogiadichvukythuat",
        page: Khaibaogiadichvukythuat,
        isMainLayout: true,
    },
    {
        path: "/vienphi/danhmuc/khaibaogoidichvukythuat",
        page: Khaibaogoidichvukythuat,
        isMainLayout: true,
    },
    {
        path: "/vienphi/danhmuc/khaibaodonvitinh",
        page: Khaibaodonvitinh,
        isMainLayout: true,
    },
    {
        path: "/vienphi/danhmuc/khaibaoquyenso",
        page: Khaibaoquyenso,
        isMainLayout: true,
    },
    {
        path: "/vienphi/danhmuc/khaibaogioihanthoigianchidinhDVKT",
        page: KhaibaogioihanthoigianchidinhDVKT,
        isMainLayout: true,
    },
    {
        path: "/vienphi/danhmuc/khaibaoDVKTkhongchophepchidinhdongthoi",
        page: KhaibaoDVKTkhongchophepchidinhdongthoi,
        isMainLayout: true,
    },
    {
        path: "/vienphi/danhmuc/khaibaodichvucanhcaovietghichutrongchidinh",
        page: Khaibaodichvucanhcaovietghichutrongchidinh,
        isMainLayout: true,
    },
    {
        path: "/vienphi/danhmuc/khaibaoDVKTbatbuoccoketquakhiKQđieutrituvong",
        page: KhaibaoDVKTbatbuoccoketquakhiKQđieutrituvong,
        isMainLayout: true,
    },
    {
        path: "/vienphi/danhmuc/mapdanhmucDVKTvoimaythuchiencanlamsan",
        page: MapdanhmucDVKTvoimaythuchiencanlamsan,
        isMainLayout: true,
    },
    {
        path: "/vienphi/danhmuc/khaibaoDVKTthuchienphauthuatxuatXML5",
        page: KhaibaoDVKTthuchienphauthuatxuatXML5,
        isMainLayout: true,
    },
    //Phẩu thuật thủ thuật
    {
        path: "/pttt",
        page: Phauthuatthuthuat,
        isMainLayout: true,
    },

    //Cận lâm sàn
    {
        path: "/canlamsan/sieuam",
        page: Canlamsan,
        isMainLayout: true,
    },
    //Xét nghiệm
    {
        path: "/xetnghiem",
        page: Xetnghiem,
        isMainLayout: true,
    },
    //VLTL_YHCT
    {
        path: "/vltl-yhct",
        page: VLTL_YHCT,
        isMainLayout: true,
    },
    //Khám sức khỏe
    {
        path: "/khamsuckhoe",
        page: Khamsuckhoe,
        isMainLayout: true,
    },
    //Dược
    {
        path: "/duoc",
        page: Duoc,
        isMainLayout: true,
    },
    //Tài khoản
    {
        path: "/taikhoan/khaibaouser",
        page: Khaibaouser,
        isMainLayout: true,
    },
    {
        path: "/taikhoan/phanquyen",
        page: Phanquyen,
        isMainLayout: true,
    },
];
export default PageWeb;
