import { Modal, Button, Form, Input, Select, Checkbox } from "antd";
import "./style.scss";
import "../../danhmuc.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
// import Swal from "sweetalert2";
function Ctkhaibaodichvukythuat(props) {
    const { open, setOpen } = props;
    const item = [
        {
            label: "Lần",
            value: "1",
        },
        {
            label: "Mũi",
            value: "2",
        },
        {
            label: "Ống",
            value: "3",
        },
        {
            label: "Cái",
            value: "4",
        },
        {
            label: "Trọn",
            value: "5",
        },
        {
            label: "Que",
            value: "6",
        },
        {
            label: "Bộ",
            value: "7",
        },
        {
            label: "Khác",
            value: "8",
        },
        {
            label: "Hàm",
            value: "9",
        },
        {
            label: "Giờ",
            value: "10",
        },
    ];
    const itemBHYT9324_AX = [
        {
            label: "XÉT NGHIỆM",
            value: "1",
        },
        {
            label: "CHUẨN ĐOÁN HÌNH ẢNH",
            value: "2",
        },
        {
            label: "THĂM DÒ CHỨC NĂNG",
            value: "3",
        },
        {
            label: "THUỐC TRONG DANH MỤC BHYT",
            value: "4",
        },
        {
            label: "THUỐC ĐIỀU TRỊ UNG THƯ, CHỐNG THẢI GHÉP NGOÀI DANH MỤC",
            value: "5",
        },
        {
            label: "THUỐC THANH TOÁN THEO TỈ LỆ",
            value: "6",
        },
        {
            label: "MÁU",
            value: "7",
        },
        {
            label: "PHẨU THUẬT",
            value: "8",
        },
        {
            label: "DVKT CAO CHI PHÍ LỚN",
            value: "9",
        },
        {
            label: "VẬT TƯ Y TẾ TRNG DANH MỤC BHYT",
            value: "10",
        },
        {
            label: "VẬT TƯ Y TẾ THANH TOÁN THEO TỶ LỆ ",
            value: "11",
        },
        {
            label: "VẬN CHUYỂN",
            value: "12",
        },
        {
            label: "KHÁM BỆNH",
            value: "13",
        },
    ];
    const x = [
        {
            label: "PHÒNG KHÁM NHI 1",
            value: "1",
        },
        {
            label: "PHÒNG VẮC XIN",
            value: "2",
        },
        {
            label: "PHÒNG CHĂM SÓC BÉ",
            value: "3",
        },
        {
            label: "PHÒNG KHÁM NỘI 2",
            value: "4",
        },
        {
            label: "PHÒNG SOI CỔ TỬ CUNG",
            value: "5",
        },
        {
            label: "PHÒNG HHK + TEST HP",
            value: "6",
        },
        {
            label: "PHÒNG NỘI SOI TIÊU HÓA",
            value: "7",
        },
        {
            label: "PHÒNG KHÁM MẮT",
            value: "8",
        },
        {
            label: "PHÒNG KHÁM TMH",
            value: "9",
        },
        {
            label: "PHÒNG KHÁM SẢN",
            value: "10",
        },
        {
            label: "PHÒNG KHÁM DA LIỆU",
            value: "11",
        },
        {
            label: "PHÒNG KHÁM NỘI",
            value: "12",
        },
        {
            label: "PHÒNG KHÁM NGOẠI",
            value: "13",
        },
    ];
    const itemNI = [
        {
            label: "Chuẩn đoán hình ảnh",
            value: "1",
        },
        {
            label: "Khám bệnh",
            value: "2",
        },
        {
            label: "Xét nghiệm",
            value: "3",
        },
        {
            label: "Phẩu Thuật - Thủ Thuật",
            value: "4",
        },
        {
            label: "Khác",
            value: "5",
        },
        {
            label: "Thăm dò chức năng",
            value: "6",
        },
        {
            label: "Xquang",
            value: "7",
        },
        {
            label: "Siêu âm",
            value: "8",
        },
        {
            label: "Nội soi",
            value: "9",
        },
    ];
    const [valuePTH, setValuePTH] = useState([]);

    return (
        <>
            <Modal
                title={
                    <>
                        <div className="vienphi-danhmuc-add">
                            Thông tin chi tiết
                        </div>
                        <hr />
                    </>
                }
                centered
                open={open}
                okButtonProps={{
                    style: {
                        display: "none",
                    },
                }}
                cancelButtonProps={{
                    style: {
                        display: "none",
                    },
                }}
                onCancel={() => setOpen(false)}
                width={1000}
            >
                <div className="text-center">
                    <Form onFinish={""}>
                        <div className="scroll">
                            <div className="row vienphi-form-row">
                                <Form.Item
                                    label={<div className="form-input-label">Mã viện phí</div>}
                                    className="col-md-4 m-0 "
                                    rules={[
                                        {
                                            required: true,
                                            message: "Vui lòng nhập thông tin !",
                                        },
                                    ]}
                                >
                                    <Input className="form-control" />
                                </Form.Item>
                                <Form.Item
                                    label={<div className="form-input-label">Nhóm viện phí</div>}
                                    className="col-md-4 m-0 "
                                    rules={[
                                        {
                                            required: true,
                                            message: "Vui lòng nhập thông tin !",
                                        },
                                    ]}
                                >
                                    <Input className="form-control" />
                                </Form.Item>
                                <Form.Item
                                    label={<div className="form-input-label">Loại viện phí</div>}
                                    className="col-md-4 m-0 "
                                    rules={[
                                        {
                                            required: true,
                                            message: "Vui lòng nhập thông tin !",
                                        },
                                    ]}
                                >
                                    <Input className="form-control" />
                                </Form.Item>
                            </div>
                            <div className="row vienphi-form-row">
                                <Form.Item
                                    label={<div className="form-input-label">Mã dịch vụ</div>}
                                    name="id"
                                    hidden={false}
                                    className="col-md-3 m-0 m-0"
                                >
                                    <Input className="form-control" disabled />
                                </Form.Item>
                                <Form.Item
                                    label={<div className="form-input-label">Tên dịch vụ</div>}
                                    className="col-md-6 m-0"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Vui lòng nhập thông tin !",
                                        },
                                    ]}
                                >
                                    <Input className="form-control" />
                                </Form.Item>

                                <Form.Item
                                    label={<div className="form-input-label">Tên DVKT thu gọn</div>}
                                    className="col-md-3 m-0"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Vui lòng nhập thông tin !",
                                        },
                                    ]}
                                >
                                    <Input className="form-control" />
                                </Form.Item>
                            </div>
                            <div className="row vienphi-form-row">
                                <Form.Item
                                    label={<div className="form-input-label">Mã DVKT 9324_AX</div>}
                                    className="col-md-3 m-0 m-0"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Vui lòng nhập thông tin !",
                                        },
                                    ]}
                                >
                                    <Input className="form-control" />
                                </Form.Item>
                                <Form.Item
                                    label={<div className="form-input-label">Tên DVKT 9324_AX</div>}
                                    className="col-md-9 m-0"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Vui lòng nhập thông tin !",
                                        },
                                    ]}
                                >
                                    <Input className="form-control" />
                                </Form.Item>
                            </div>
                            <div className="row vienphi-form-row">
                                <Form.Item
                                    label={<div className="form-input-label">Mã TT3</div>}
                                    className="col-md-3 m-0 "
                                    rules={[
                                        {
                                            required: true,
                                            message: "Vui lòng nhập thông tin !",
                                        },
                                    ]}
                                >
                                    <Input className="form-control" />
                                </Form.Item>
                                <Form.Item
                                    label={<div className="form-input-label">Theo tên TT37</div>}
                                    className="col-md-9 m-0"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Vui lòng nhập thông tin !",
                                        },
                                    ]}
                                >
                                    <Input className="form-control" />
                                </Form.Item>
                            </div>
                            <div className="row vienphi-form-row">
                                <Form.Item
                                    label={<div className="form-input-label">Mã TT50</div>}
                                    className="col-md-3 m-0"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Vui lòng nhập thông tin !",
                                        },
                                    ]}
                                >
                                    <Input className="form-control" />
                                </Form.Item>
                                <Form.Item
                                    label={<div className="form-input-label">Theo tên TT50</div>}
                                    className="col-md-9 m-0"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Vui lòng nhập thông tin !",
                                        },
                                    ]}
                                >
                                    <Input className="form-control" />
                                </Form.Item>
                            </div>
                            <div className="row vienphi-form-row">
                                <Form.Item
                                    label={<div className="form-input-label">DVT</div>}
                                    className="col-md-3 m-0"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Vui lòng nhập thông tin !",
                                        },
                                    ]}
                                >
                                    <div className="input-select">
                                        <Select
                                            options={[
                                                {
                                                    label: "Đơn vị tính",
                                                    options: item.map((item1) => ({
                                                        label: item1.label,
                                                        value: item1.value,
                                                    })),
                                                },
                                            ]}
                                        />
                                    </div>
                                </Form.Item>
                                <Form.Item
                                    label={<div className="form-input-label">Phòng thực hiện</div>}
                                    className="col-md-6 m-0"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Vui lòng nhập thông tin !",
                                        },
                                    ]}
                                >
                                    <div className="input-select">
                                        <Select
                                            onChange={(newValue) => {
                                                setValuePTH(newValue);
                                            }}
                                            // maxTagCount="responsive"
                                            options={x.map((item) => ({
                                                label: item.label,
                                                value: item.value,
                                            }))}
                                        />
                                    </div>
                                </Form.Item>
                                <Form.Item
                                    label={<div className="form-input-label">Loại bệnh nhân</div>}
                                    className="col-md-3 m-0"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Vui lòng nhập thông tin !",
                                        },
                                    ]}
                                >
                                    <div className="input-select">
                                        <Select
                                            placeholder="Chọn loại bệnh nhân"
                                            style={{
                                                width: "100%",
                                            }}
                                            options={[
                                                {
                                                    label: "Khám bệnh",
                                                    value: "1",
                                                },
                                                {
                                                    label: "Cấp cứu",
                                                    value: "2",
                                                },
                                            ]}
                                        />
                                    </div>
                                </Form.Item>
                            </div>
                            <div className="row vienphi-form-row">
                                <Form.Item
                                    label={<div className="form-input-label">Mã KPBHYT</div>}
                                    className="col-md-3 m-0 m-0"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Vui lòng nhập thông tin !",
                                        },
                                    ]}
                                >
                                    <Input className="form-control" />
                                </Form.Item>

                                <Form.Item
                                    label={<div className="form-input-label">Mã T.Đương BHYT</div>}
                                    className="col-md-4 m-0"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Vui lòng nhập thông tin !",
                                        },
                                    ]}
                                >
                                    <Input className="form-control" />
                                </Form.Item>
                                <Form.Item
                                    label={
                                        <div className="form-input-label">Mã nhóm BHYT 9324_A</div>
                                    }
                                    className="col-md-5 m-0"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Vui lòng nhập thông tin !",
                                        },
                                    ]}
                                >
                                    <div className="input-select">
                                        <Select
                                            showSearch
                                            className="w-100"
                                            optionFilterProp="children"
                                            filterOption={(input, option) =>
                                                (option?.label ?? "").includes(input)
                                            }
                                            filterSort={(optionA, optionB) =>
                                                (optionA?.label ?? "")
                                                    .toLowerCase()
                                                    .localeCompare(
                                                        (optionB?.label ?? "").toLowerCase()
                                                    )
                                            }
                                            options={itemBHYT9324_AX.map((item) => ({
                                                label: item.value + " - " + item.label,
                                                value: item.value,
                                            }))}
                                        />
                                    </div>
                                </Form.Item>
                            </div>
                            <div className="row vienphi-form-row">
                                <Form.Item
                                    label={<div className="form-input-label">ST</div>}
                                    className="col-md-2 m-0"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Vui lòng nhập thông tin !",
                                        },
                                    ]}
                                >
                                    <Input className="form-control" />
                                </Form.Item>
                                <Form.Item
                                    label={<div className="form-input-label">VAT Xuất hóa đơn</div>}
                                    className="col-md-4 m-0 "
                                    rules={[
                                        {
                                            required: true,
                                            message: "Vui lòng nhập thông tin !",
                                        },
                                    ]}
                                >
                                    <Input className="form-control" />
                                </Form.Item>
                                <Form.Item
                                    label={<div className="form-input-label">Nhóm in</div>}
                                    className="col-md-6 m-0"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Vui lòng nhập thông tin !",
                                        },
                                    ]}
                                >
                                    <div className="input-select">
                                        <Select
                                            showSearch
                                            className="w-100"
                                            optionFilterProp="children"
                                            filterOption={(input, option) =>
                                                (option?.label ?? "").includes(input)
                                            }
                                            filterSort={(optionA, optionB) =>
                                                (optionA?.label ?? "")
                                                    .toLowerCase()
                                                    .localeCompare(
                                                        (optionB?.label ?? "").toLowerCase()
                                                    )
                                            }
                                            options={itemNI.map((item) => ({
                                                label: item.label,
                                                value: item.value,
                                            }))}
                                        />
                                    </div>
                                </Form.Item>
                            </div>
                            <div className="row vienphi-form-row">
                                <Form.Item
                                    label={<div className="form-input-label">Gửi mẫu</div>}
                                    className="text-center col-md-1 m-0"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Vui lòng nhập thông tin !",
                                        },
                                    ]}
                                >
                                    <Checkbox />
                                </Form.Item>
                                <Form.Item
                                    label={<div className="form-input-label">Khóa</div>}
                                    className="text-center col-md-1 m-0"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Vui lòng nhập thông tin !",
                                        },
                                    ]}
                                >
                                    <Checkbox />
                                </Form.Item>
                                <Form.Item
                                    label={<div className="form-input-label">Giấy CĐ</div>}
                                    className="text-center col-md-1 m-0"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Vui lòng nhập thông tin !",
                                        },
                                    ]}
                                >
                                    <Checkbox />
                                </Form.Item>
                                <Form.Item
                                    label={<div className="form-input-label">Hội chuẩn</div>}
                                    className="text-center w-10 m-0"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Vui lòng nhập thông tin !",
                                        },
                                    ]}
                                >
                                    <Checkbox />
                                </Form.Item>
                                <Form.Item
                                    label={
                                        <div className="form-input-label">
                                            C.Định trước theo lượt (VLTL,RHM):
                                        </div>
                                    }
                                    className="text-center w-25 m-0"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Vui lòng nhập thông tin !",
                                        },
                                    ]}
                                >
                                    <Checkbox />
                                </Form.Item>{" "}
                                <Form.Item
                                    label={<div className="form-input-label">C.Định hẹn TK</div>}
                                    className="text-center w-15 m-0"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Vui lòng nhập thông tin !",
                                        },
                                    ]}
                                >
                                    <Checkbox />
                                </Form.Item>{" "}
                                <Form.Item
                                    label={
                                        <div className="form-input-label">
                                            C.Định trước theo lượt(TMH)
                                        </div>
                                    }
                                    className="text-center m-0 w-25"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Vui lòng nhập thông tin !",
                                        },
                                    ]}
                                >
                                    <Checkbox />
                                </Form.Item>
                            </div>
                            <div className="row vienphi-form-row-last">
                                <Form.Item
                                    label={<div className="form-input-label">Ghi chú</div>}
                                    rules={[
                                        {
                                            required: true,
                                            message: "Vui lòng nhập thông tin !",
                                        },
                                    ]}
                                >
                                    <Input className="form-control" />
                                </Form.Item>
                            </div>
                        </div>
                        <Form.Item className="text-center">
                            <hr />
                            <Button
                                htmlType="submit"
                                className="mx-2 vienphi-danhmuc-btn"
                            >
                                <FontAwesomeIcon icon={faFloppyDisk} className="mx-1" /> Lưu
                            </Button>
                            <Button danger className="mx-2" onClick={() => setOpen(false)}>
                                Thoát <FontAwesomeIcon icon={faRightFromBracket} className="mx-1" />
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Modal>
        </>
    );
}

export default Ctkhaibaodichvukythuat;
