import { Modal, Button, Form, Input, Select, Checkbox } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import FormItem from "antd/es/form/FormItem";
import "./khaibaouser.scss";
import { useState, useEffect } from "react";
import { RiImageAddLine } from "react-icons/ri";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import uploadsPhongKham from "../../../../services/uploadsPhongKham";
import { setDataEmployee } from "../../../../slices/dataAdd";

function CtKhaibaouser(props) {
    //khai báo
    const { open, setOpen, handleCreate, handleUpdate, listPosition, listGroup } = props;

    const [imageUpload, setImageUpload] = useState();
    const [form] = Form.useForm();
    //redux
    const dispatch = useDispatch();
    const { employee } = useSelector((state) => state.dataAdd);
    //custum data
    let groupid = employee?.GroupID?.split(",");
    let positionid = employee?.PositionID?.split(",");

    //dữ liẹu ảo
    const options = [];

    for (let i = 10; i < 36; i++) {
        options.push({
            label: i.toString(36) + i,
            value: i.toString(36) + i,
        });
    }
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    //xử lý dư liệu

    //Xử lý hình ảnh
    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        file.preview = URL?.createObjectURL(file);
        setImageUpload(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        const data = new FormData();
        if (employee !== undefined) {
            data.append("RowID", e?.RowID);
        }
        data.append("EmployeeName", e?.EmployeeName);
        data.append("UserName", e?.UserName);
        data.append("UserPass", e?.UserPass);
        data.append("StaffCode_PK", e?.StaffCode_PK);
        data.append("Sex", e?.Sex);
        data.append("Mobile", e?.Mobile);
        data.append("CCCD", e?.CCCD);
        data.append("Address", e?.Address);
        data.append("Birthday", e?.Birthday);
        data.append("PositionID", e?.PositionID);
        data.append("OffWork", e?.OffWork ? 1 : 0);
        data.append("GroupID", e?.GroupID);
        data.append("ImageFile", imageUpload);
        data.append("STT", e?.STT);
        data.append("MaCCHN", e?.MaCCHN);
        data.append("DTQG_Ma_BS", e?.DTQG_Ma_BS);
        data.append("DTQG_MK_BS", e?.DTQG_MK_BS);
        data.append("PermissionModule_KSK", e.PermissionModule_KSK);
        console.log("12", ...data);
        Swal.fire({
            title: "BẠN CÓ MUỐN LƯU THÔNG TIN?",
            confirmButtonText: "Lưu",
            showCancelButton: true,
            cancelButtonText: "Hủy",
            customClass: {
                title: "fs-5 text-dark",
                confirmButton: "bg-primary shadow-none",
                cancelButton: "bg-warning shadow-none",
            },
        }).then((result) => {
            if (result.isConfirmed) {
                // UPDATE
                if (employee?.RowID) {
                    handleUpdate(data);
                    dispatch(setDataEmployee());
                    setImageUpload();
                    form.resetFields();
                    setOpen(false);
                }
                // CREATE
                else {
                    handleCreate(data);
                    setImageUpload();
                    form.resetFields();
                }
            }
        });
    };
    //hàm xử lý load dữu liệu

    useEffect(() => {
        form.setFieldsValue({
            RowID: employee?.RowID,
            EmployeeName: employee?.EmployeeName,
            UserName: employee?.UserName,
            UserPass: employee?.UserPass,
            StaffCode_PK: employee?.StaffCode_PK,
            Sex: employee?.Sex,
            Mobile: employee?.Mobile,
            CCCD: employee?.CCCD,
            Address: employee?.Address,
            Birthday: employee?.Birthday,
            PositionID: positionid,
            OffWork: employee?.OffWork,
            GroupID: groupid,
            STT: employee?.STT,
            MaCCHN: employee?.MaCCHN,
            DTQG_Ma_BS: employee?.DTQG_Ma_BS,
            DTQG_MK_BS: employee?.DTQG_MK_BS,
            PermissionModule_KSK: employee?.PermissionModule_KSK,
        });
    }, [employee]);

    return (
        <>
            <Modal
                title={
                    <>
                        <div className="modal-label">Thông tin chi tiết</div>
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
                closable={false}
                width={1200}
                forceRender
            >
                <div className="text-center">
                    <Form onFinish={handleSubmit} form={form}>
                        <Form.Item
                            label={
                                <div className="form-input-label input-label-khaibaouser ">
                                    RowID
                                </div>
                            }
                            className="col-md-4"
                            name="RowID"
                            hidden={true}
                        >
                            <Input className="form-control" />
                        </Form.Item>
                        <div className="d-flex">
                            <div className="w-20">
                                <Form.Item name="ImageFile" className="imgupload">
                                    <div className="box-imageupload d-flex justify-content-center align-items-center">
                                        {(imageUpload || employee?.RowID) && (
                                            <img
                                                src={
                                                    imageUpload?.preview ||
                                                    (employee !== undefined
                                                        ? uploadsPhongKham.uploadsImageEmployee(
                                                              employee?.ImageFile
                                                          )
                                                        : "")
                                                }
                                                alt=""
                                                name="image"
                                                className="img-preview"
                                            />
                                        )}
                                        {imageUpload || employee?.RowID ? (
                                            ""
                                        ) : (
                                            <>
                                                <div className="d-flex justify-content-center align-items-center px-3 w-75">
                                                    <RiImageAddLine className="mx-1" />
                                                    <span className="fw-bold text-muted">
                                                        Chọn ảnh
                                                    </span>
                                                </div>
                                            </>
                                        )}
                                        <Input
                                            type="file"
                                            placeholder="Chọn hình ảnh"
                                            accept="image/*"
                                            onChange={(e) => handleImageUpload(e)}
                                        />
                                    </div>
                                </Form.Item>
                            </div>
                            <div className="w-80">
                                <div className="row form-row">
                                    <Form.Item
                                        label={
                                            <div className="form-input-label input-label-khaibaouser ">
                                                Họ và tên
                                            </div>
                                        }
                                        className="col-md-4"
                                        name="EmployeeName"
                                    >
                                        <Input className="form-control" />
                                    </Form.Item>
                                    <Form.Item
                                        label={<div className="form-input-label">Giới tính</div>}
                                        className="col-md-2 input-select"
                                        name="Sex"
                                    >
                                        <Select
                                            placeholder="Chọn"
                                            style={{
                                                width: "100%",
                                            }}
                                            options={[
                                                {
                                                    value: 0,
                                                    label: "Nam",
                                                },
                                                {
                                                    value: 1,
                                                    label: "Nữ",
                                                },
                                            ]}
                                        />
                                    </Form.Item>
                                    <FormItem
                                        label={<div className="form-input-label ">Ngày sinh</div>}
                                        className="col-md-3"
                                        name="Birthday"
                                    >
                                        <Input className="form-control" type="date" />
                                    </FormItem>
                                    <FormItem
                                        label={<div className="form-input-label">CCCD</div>}
                                        className="col-md-3"
                                        name="CCCD"
                                    >
                                        <Input className="form-control" />
                                    </FormItem>
                                </div>
                                <div className="row form-row">
                                    <FormItem
                                        label={
                                            <div className="form-input-label input-label-khaibaouser ">
                                                Số điện thoại
                                            </div>
                                        }
                                        className="col-md-3"
                                        name="Mobile"
                                    >
                                        <Input className="form-control" />
                                    </FormItem>
                                    <FormItem
                                        label={
                                            <div className="form-input-label input-label-khaibaouser ">
                                                Địa chỉ
                                            </div>
                                        }
                                        className="col-md-9"
                                        name="Address"
                                    >
                                        <Input className="form-control" />
                                    </FormItem>
                                </div>

                                <div className="row form-row">
                                    <FormItem
                                        label={
                                            <div className="form-input-label input-label-khaibaouser ">
                                                ĐTQG - Mã BS
                                            </div>
                                        }
                                        className="col-md-3"
                                        name="DTQG_Ma_BS"
                                    >
                                        <Input className="form-control" />
                                    </FormItem>
                                    <FormItem
                                        label={
                                            <div className="form-input-label input-label-khaibaouser ">
                                                Mã CCHN
                                            </div>
                                        }
                                        className="col-md-4"
                                        name="MaCCHN"
                                    >
                                        <Input className="form-control" />
                                    </FormItem>
                                    <FormItem
                                        label={
                                            <div className="form-input-label">
                                                ĐTQG - Mã liên kết BS
                                            </div>
                                        }
                                        className="col-md-5"
                                        name="DTQG_MK_BS"
                                    >
                                        <Input className="form-control" />
                                    </FormItem>
                                </div>
                                <div className="row form-row mb-1">
                                    <FormItem
                                        label={
                                            <div className="form-input-label input-label-khaibaouser ">
                                                Tên đăng nhập
                                            </div>
                                        }
                                        className="col-md-3"
                                        name="UserName"
                                    >
                                        <Input className="form-control" />
                                    </FormItem>
                                    <FormItem
                                        label={<div className="form-input-label">Mât khẩu</div>}
                                        className="col-md-4"
                                        name="UserPass"
                                    >
                                        <Input className="form-control" type="password" />
                                    </FormItem>
                                    <FormItem
                                        label={<div className="form-input-label ">Mã NV</div>}
                                        className="col-md-2"
                                        name="StaffCode_PK"
                                    >
                                        <Input className="form-control" />
                                    </FormItem>
                                    <FormItem
                                        label={<div className="form-input-label">STT</div>}
                                        className="col-md-1"
                                        name="STT"
                                    >
                                        <Input className="form-control" />
                                    </FormItem>
                                    <FormItem
                                        label={<div className="form-input-label">N.việc</div>}
                                        className="col-md-1"
                                        name="OffWork"
                                        valuePropName="checked"
                                    >
                                        <Checkbox onChange={(e) => console.log(e)} />
                                    </FormItem>
                                </div>
                                <div className="row">
                                    <FormItem
                                        label={
                                            <div className="form-input-label input-label-khaibaouser ">
                                                Chức danh
                                            </div>
                                        }
                                        className=" select-khaibao-user"
                                        name="PositionID"
                                    >
                                        <Select
                                            mode="multiple"
                                            allowClear
                                            style={{
                                                width: "100%",
                                            }}
                                            placeholder="Chọn"
                                            onChange={handleChange}
                                            options={listPosition.map((item) => ({
                                                value: item.PositionID,
                                                label: item.PositionName,
                                            }))}
                                        />
                                    </FormItem>
                                </div>
                                <div className="row">
                                    <FormItem
                                        label={
                                            <div className="form-input-label input-label-khaibaouser ">
                                                Nhóm
                                            </div>
                                        }
                                        className="select-khaibao-user m-0 "
                                        name="GroupID"
                                    >
                                        <Select
                                            mode="multiple"
                                            allowClear
                                            style={{
                                                width: "100%",
                                            }}
                                            placeholder="Chọn"
                                            onChange={handleChange}
                                            options={listGroup.map((item) => ({
                                                value: item.GroupID,
                                                label: item.GroupName,
                                            }))}
                                            className="m-0 p-0"
                                        />
                                    </FormItem>
                                </div>
                            </div>
                        </div>
                        <div className="p-0 mt-2">
                            <Form.Item className="text-center">
                                <hr />
                                <Button htmlType="submit" className="mx-2 vienphi-danhmuc-btn">
                                    <FontAwesomeIcon icon={faFloppyDisk} className="mx-1" /> Lưu
                                </Button>
                                <Button danger className="mx-2" onClick={() => setOpen(false)}>
                                    Thoát
                                    <FontAwesomeIcon icon={faRightFromBracket} className="mx-1" />
                                </Button>
                            </Form.Item>
                        </div>
                    </Form>
                </div>
            </Modal>
        </>
    );
}

export default CtKhaibaouser;
