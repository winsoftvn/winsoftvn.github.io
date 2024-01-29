import { Button, Table, Checkbox, Dropdown, Modal, Input } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEdit, faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import CtKhaibaouser from "../Detail";
import employeeAPI from "../../../../services/employeeAPI";
import { errorInfo, infoRes, successInfo } from "../../../../components/Dialog/Dialog";
import { useDispatch } from "react-redux";
import { setDataEmployee } from "../../../../slices/dataAdd";
import uploadsPhongKham from "../../../../services/uploadsPhongKham";
import "./listemployee.scss";
import Swal from "sweetalert2";
function Khaibaouser() {
    //khai báo
    const [open, setOpen] = useState(false);
    const [openImage, setOpenImage] = useState(false);

    const [loading, setLoading] = useState(false);
    const [listEmployee, setListEmployee] = useState([]);

    const [listEmployeeTimkiem, setListEmployeeTimkiem] = useState(listEmployee);
    const [listGroup, setListGroup] = useState([]);
    const [listPosition, setListPosition] = useState([]);

    //redux
    const dispatch = useDispatch();

    //Thao tac chon phan tu
    const handleThaoTac = (e, record) => {
        if (e.key === "update") {
            dispatch(setDataEmployee(record));
            setOpen(true);
        } else if (e.key === "delete") {
            Swal.fire({
                text: "Bạn có muốn xóa user này ?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#0067ac",
                cancelButtonColor: "#d33",
                cancelButtonText: "Hủy",
                confirmButtonText: "Đồng ý",
            }).then((result) => {
                if (result.isConfirmed) {
                    handleDelete(record.RowID);
                    successInfo("Đã xóa thành công !");
                }
            });
        }
    };
    //Hàm load dữ liệu
    const getAllEmployee = async () => {
        try {
            setLoading(true);
            const data = await employeeAPI.getAll();
            setListEmployee(data.data.recordset);
            setListEmployeeTimkiem(data.data.recordset);

            setLoading(false);
        } catch (err) {
            throw new Error(err);
        }
    };
    const getAllGroup = async () => {
        try {
            const data = await employeeAPI.getAllGroup(0);
            setListGroup(data.data);
        } catch (err) {
            throw new Error(err);
        }
    };
    const getAllPosition = async () => {
        try {
            const data = await employeeAPI.getAllPosition(0);
            setListPosition(data.data);
        } catch (err) {
            throw new Error(err);
        }
    };

    //Hàm thêm
    const handleCreate = async (obj) => {
        const data = await employeeAPI.create(obj);
        if (data.data.Code === "err") {
            infoRes(data.data.Content);
        } else if (data.data.Code === "ok") {
            successInfo(data.data.Content);
            getAllEmployee();
        }
    };
    //Hàm xóa
    const handleDelete = async (id) => {
        const data = await employeeAPI.delete(id);
        if (data.data.Code === "ok") {
            successInfo(data.data.Content);
            getAllEmployee();
        } else {
            errorInfo(data.data.Content);
        }
    };
    //Hàm cập nhật
    const handleUpdate = async (obj) => {
        const data = await employeeAPI.update(obj);
        if (data.data.Code === "ok") {
            successInfo(data.data.Content);
            getAllEmployee();
        } else {
            errorInfo(data.data.Content);
        }
    };

    //Hàm tìm kiếm
    const handleTimkiem = (e) => {
        let a = listEmployee.filter(
            (f) =>
                f.EmployeeName.includes(e.target.value) ||
                f.EmployeeName.toUpperCase().includes(e.target.value) ||
                f.EmployeeName.toLowerCase().includes(e.target.value) ||
                f.CCCD.includes(e.target.value) ||
                f.Mobile.includes(e.target.value)
        );
        setListEmployeeTimkiem(a);
    };
    useEffect(() => {
        getAllEmployee();
        getAllGroup();
        getAllPosition();
    }, []);

    const handleDataCreate = () => {
        setOpen(true);
    };
    const items = [
        {
            key: "delete",
            label: "Xóa",
            icon: <FontAwesomeIcon icon={faTrashCan} />,
        },
        {
            key: "update",
            label: "Sửa",
            icon: <FontAwesomeIcon icon={faPenToSquare} />,
        },
    ];
    const column = [
        {
            title: "RowID",
            dataIndex: "RowID",
            fixed: "left",
            key: "1",
            render: (RowID) => <div style={{ width: "120px" }}> {RowID} </div>,
        },
        {
            title: "Họ và tên",
            dataIndex: "EmployeeName",
            fixed: "left",
            key: "2",
            render: (EmployeeName) => <div style={{ width: "200px" }}> {EmployeeName} </div>,
        },
        {
            title: "Giới tính",
            dataIndex: "Sex",
            align: "center",
            key: "3",
            render: (Sex) => <div style={{ width: "100px" }}> {Sex === 0 ? "Nam" : "Nữ"} </div>,
        },
        {
            title: "Điện thoại",
            dataIndex: "Mobile",
            key: "4",
            render: (Mobile) => <div style={{ width: "150px" }}> {Mobile} </div>,
        },
        {
            title: "CCCD",
            dataIndex: "CCCD",
            key: "5",
            render: (CCCD) => <div style={{ width: "150px" }}> {CCCD} </div>,
        },
        {
            title: "Ngày sinh",
            dataIndex: "Birthday",
            key: "6",
            render: (Birthday) => <div style={{ width: "200px" }}> {Birthday} </div>,
        },
        {
            title: "Địa chỉ",
            dataIndex: "Address",
            key: "7",
            render: (Address) => <div style={{ width: "200px" }}> {Address} </div>,
        },

        {
            title: "Chức danh",
            dataIndex: "PositionID",
            key: "8",
            render: (PositionID) => (
                <div style={{ width: "200px" }}>
                    {listPosition.map((item) => {
                        //thông báo map do mong đợi return
                        let b = PositionID.split(",");
                        let a = b.map((item1) => {
                            if (item.PositionID === parseInt(item1)) {
                                return item.PositionName + " ,";
                            }
                        });
                        return a;
                    })}
                </div>
            ),
        },

        {
            title: "Tên đăng nhập",
            dataIndex: "UserName",
            key: "9",
            render: (UserName) => <div style={{ width: "200px" }}> {UserName} </div>,
        },
        {
            title: "Mật khẩu",
            dataIndex: "UserPass",
            key: "10",
            render: (UserPass) => <div style={{ width: "200px" }}> {UserPass} </div>,
        },
        {
            title: "Nghỉ việc",
            dataIndex: "OffWork",
            key: "11",
            align: "center",
            render: (OffWork) => (
                <div style={{ width: "50px" }}>
                    <Checkbox checked={OffWork} />
                </div>
            ),
        },
        {
            title: "Nhóm",
            dataIndex: "GroupID",
            key: "12",
            render: (GroupID) => (
                <div style={{ width: "200px" }}>
                    {listGroup.map((item) => {
                        let a = [];
                        if (item.GroupID === parseInt(GroupID)) {
                            a.push(item.GroupName);
                        }
                        return a;
                    })}
                </div>
            ),
        },
        {
            title: "Mã BS/CCHN",
            dataIndex: "MaCCHN",
            key: "13",
            render: (MaCCHN) => <div style={{ width: "200px" }}> {MaCCHN} </div>,
        },
        {
            title: "ĐTQG-Mã BS",
            dataIndex: "DTQG_Ma_BS",
            key: "14",
            render: (DTQG_Ma_BS) => <div style={{ width: "200px" }}> {DTQG_Ma_BS} </div>,
        },
        {
            title: "ĐTQG-Mã liên kết BS",
            dataIndex: "DTQG_MK_BS",
            key: "15",
            render: (DTQG_MK_BS) => <div style={{ width: "200px" }}> {DTQG_MK_BS} </div>,
        },
        {
            title: "Chữ ký",
            dataIndex: "ImageFile",
            align: "center",
            key: "16",
            render: (ImageFile) => (
                <div style={{ width: "200px" }}>
                    {ImageFile === "null" ? (
                        ImageFile
                    ) : (
                        <div
                            className="focus-link-image"
                            onClick={() => setOpenImage({ open: true, link: ImageFile })}
                        >
                            {ImageFile}
                        </div>
                    )}

                    <Modal
                        centered
                        open={openImage.open}
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
                        onCancel={() => setOpenImage(false)}
                        width={500}
                        className="text-center"
                    >
                        <img
                            src={uploadsPhongKham.uploadsImageEmployee(openImage.link)}
                            width={400}
                            height={550}
                            alt="anh"
                        />
                    </Modal>
                </div>
            ),
        },
        {
            title: "Mã NV",
            dataIndex: "StaffCode_PK",
            key: "17",
            align: "center",
            render: (StaffCode_PK) => <div style={{ width: "100px" }}> {StaffCode_PK} </div>,
        },
        {
            title: "STT",
            dataIndex: "STT",
            key: "18",
            render: (STT) => <div style={{ width: "50px" }}> {STT} </div>,
        },
        {
            title: "Thao tác",
            dataIndex: "",
            align: "center",
            key: "19",
            fixed: "right",
            render: (record) => (
                <div className="d-flex justify-content-center">
                    <Dropdown
                        menu={{
                            items,
                            onClick: (e) => handleThaoTac(e, record),
                        }}
                        placement="left"
                        arrow={{
                            pointAtCenter: true,
                        }}
                    >
                        <Button className="bg-light vienphi-danhmuc-icon-modify">
                            <FontAwesomeIcon
                                icon={faEdit}
                                style={{ fontSize: "10px" }}
                                className="text-dark"
                            />
                        </Button>
                    </Dropdown>
                </div>
            ),
        },
    ];

    return (
        <>
            <div className="vh-100">
                <div className="d-flex justify-content-between align-items-center mt-2 mx-2">
                    <div className="d-flex align-items-center ">
                        <div className="vienphi-danhmuc-title mx-2">Danh sách nhân viên</div>
                        <Input
                            className="form-control mx-4"
                            placeholder="Tìm kiếm"
                            onChange={handleTimkiem}
                            style={{
                                width: 200,
                            }}
                        />
                    </div>
                    <div className="text-end">
                        <Button className="form-btn bg" onClick={handleDataCreate}>
                            <FontAwesomeIcon icon={faPlus} className="mx-1" />
                            Thêm mới
                        </Button>
                    </div>
                </div>
                <CtKhaibaouser
                    open={open}
                    setOpen={setOpen}
                    handleCreate={handleCreate}
                    handleUpdate={handleUpdate}
                    listPosition={listPosition}
                    listGroup={listGroup}
                    key="ctKhaibaouser"
                />
                <div className="mt-2 p-1">
                    <Table
                        dataSource={listEmployeeTimkiem}
                        columns={column}
                        scroll={{ x: true, y: "100vh" }}
                        size="small"
                        pagination={false}
                        loading={loading}
                        bordered={true}
                        rowKey={(record) => record?.RowID}
                    />
                </div>
            </div>
        </>
    );
}

export default Khaibaouser;
