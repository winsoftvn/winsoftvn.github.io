import CTScanner from "../pages/Canlamsan/CTScanner";
import Dientim from "../pages/Canlamsan/Dientim";
import Domatdoxuong from "../pages/Canlamsan/Domatdoxuong";
import MRI from "../pages/Canlamsan/MRI";
import Noisoi from "../pages/Canlamsan/Noisoi";
import Canlamsan from "../pages/Canlamsan/Sieuam";
import Xquang from "../pages/Canlamsan/XQuang";
import Duoc from "../pages/Duoc";
import Home from "../pages/Home";
import HSBANgoaitruKB from "../pages/KhambenhHSBA/HSBANgoaitruKB";
import Phieukhambenh from "../pages/KhambenhHSBA/Phieukhambenh";
import Khamsuckhoe from "../pages/Khamsuckhoe";
import LoginPage from "../pages/Login";
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
// import NotFound from "../pages/NotFound";
const PageWeb = [
    //Home
    {
        path: "/home",
        page: Home,
        isMainLayout: true,
    },
    {
        path: "/",
        page: LoginPage,
        isMainLayout: false,
    },
    //Tiếp nhận
    {
        path: "/tiepnhan",
        page: Tiepnhan,
        isMainLayout: true,
    },
    //Khám bệnh

    {
        path: "/khambenh/phieukhambenh",
        page: Phieukhambenh,
        isMainLayout: true,
    },
    {
        path: "/khambenh/HSBANgoaitruKB",
        page: HSBANgoaitruKB,
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
        path: "/vienphi/dmnhomvienphihethong",
        page: Nhomvienphihethong,
        isMainLayout: true,
    },
    {
        path: "/vienphi/dmkhaibaonhomchuyenkhoaBYT",
        page: KhaibaonhomchuyenkhoaBYT,
        isMainLayout: true,
    },
    {
        path: "/vienphi/dmkhaibaonhomvienphipk",
        page: Khaibaonhomvienphipk,
        isMainLayout: true,
    },
    {
        path: "/vienphi/dmkhaibaonhomin",
        page: Khaibaonhomin,
        isMainLayout: true,
    },
    {
        path: "/vienphi/dmkhaibaoloaivienphi",
        page: Khaibaoloaivienphi,
        isMainLayout: true,
    },
    {
        path: "/vienphi/dmkhaibaodichvukythuat",
        page: Khaibaodichvukythuat,
        isMainLayout: true,
    },
    {
        path: "/vienphi/dmkhaibaogiadichvukythuat",
        page: Khaibaogiadichvukythuat,
        isMainLayout: true,
    },
    {
        path: "/vienphi/dmkhaibaogoidichvukythuat",
        page: Khaibaogoidichvukythuat,
        isMainLayout: true,
    },
    {
        path: "/vienphi/dmkhaibaodonvitinh",
        page: Khaibaodonvitinh,
        isMainLayout: true,
    },
    {
        path: "/vienphi/dmkhaibaoquyenso",
        page: Khaibaoquyenso,
        isMainLayout: true,
    },
    {
        path: "/vienphi/dmkhaibaogioihanthoigianchidinhDVKT",
        page: KhaibaogioihanthoigianchidinhDVKT,
        isMainLayout: true,
    },
    {
        path: "/vienphi/dmkhaibaoDVKTkhongchophepchidinhdongthoi",
        page: KhaibaoDVKTkhongchophepchidinhdongthoi,
        isMainLayout: true,
    },
    {
        path: "/vienphi/dmkhaibaodichvucanhcaovietghichutrongchidinh",
        page: Khaibaodichvucanhcaovietghichutrongchidinh,
        isMainLayout: true,
    },
    {
        path: "/vienphi/dmkhaibaoDVKTbatbuoccoketquakhiKQđieutrituvong",
        page: KhaibaoDVKTbatbuoccoketquakhiKQđieutrituvong,
        isMainLayout: true,
    },
    {
        path: "/vienphi/dmmapdanhmucDVKTvoimaythuchiencanlamsan",
        page: MapdanhmucDVKTvoimaythuchiencanlamsan,
        isMainLayout: true,
    },
    {
        path: "/vienphi/dmkhaibaoDVKTthuchienphauthuatxuatXML5",
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
    {
        path: "/canlamsan/noisoi",
        page: Noisoi,
        isMainLayout: true,
    },
    {
        path: "/canlamsan/xquang",
        page: Xquang,
        isMainLayout: true,
    },
    {
        path: "/canlamsan/mri",
        page: MRI,
        isMainLayout: true,
    },
    {
        path: "/canlamsan/dientimhohapky",
        page: Dientim,
        isMainLayout: true,
    },
    {
        path: "/canlamsan/ctscanner",
        page: CTScanner,
        isMainLayout: true,
    },
    {
        path: "/canlamsan/domatdoxuong",
        page: Domatdoxuong,
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
    // {
    //     path: "*",
    //     page: NotFound,
    //     isMainLayout: true,
    // }
];
export default PageWeb;
