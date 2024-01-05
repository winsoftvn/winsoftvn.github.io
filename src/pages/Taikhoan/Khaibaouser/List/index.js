import { Button, Table, Checkbox, Input, Space, Dropdown, Modal } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPlus,
    faSearch,
    faEdit,
    faTrashCan,
    faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { useRef, useState, useEffect } from "react";
import Highlighter from "react-highlight-words";
import CtKhaibaouser from "../Detail";
import employeeAPI from "../../../../services/employeeAPI";
import { errorInfo, successInfo } from "../../../../components/Dialog/Dialog";
import { useDispatch } from "react-redux";
import { setDataEmployee } from "../../../../slices/dataAdd";
import uploadsPhongKham from "../../../../services/uploadsPhongKham";
import "./listemployee.scss";
function Khaibaouser() {
    //khai báo
    const [open, setOpen] = useState(false);
    const [openImage, setOpenImage] = useState(false);

    const [loading, setLoading] = useState(false);
    const [listEmployee, setListEmployee] = useState([]);
    console.log("listEmployee: ", listEmployee);

    const [listGroup, setListGroup] = useState([]);
    const [listPosition, setListPosition] = useState([]);

    const [searchText, setSearchText] = useState("");
    const [searchedColumn, setSearchedColumn] = useState("");
    //redux
    const dispatch = useDispatch();
    //Search
    const searchInput = useRef(null);
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };
    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => (
            <div
                style={{
                    padding: 8,
                    width: 200,
                }}
                onKeyDown={(e) => e.stopPropagation()}
            >
                <Input
                    ref={searchInput}
                    placeholder={"Nhập tên"}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: "block",
                    }}
                    className="form-control"
                />
                <Space>
                    <Button
                        className="form-btn"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<FontAwesomeIcon icon={faSearch} />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Tìm kiếm
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => <FontAwesomeIcon icon={faSearch} />,
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: "#ffc069",
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ""}
                />
            ) : (
                text
            ),
    });

    //

    //Thao tac chon phan tu
    const handleThaoTac = (e, record) => {
        if (e.key === "update") {
            dispatch(setDataEmployee(record));
            setOpen(true);
        } else if (e.key === "delete") {
            handleDelete(record.RowID);
        }
    };
    //Hàm load dữ liệu
    const getAllEmployee = async () => {
        try {
            setLoading(true);
            const data = await employeeAPI.getAll();
            setListEmployee(data.data.recordset);
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
        if (data.data.message !== "OK") {
            errorInfo("Thêm mới thất bại");
        } else if (data.data.message === "OK") {
            successInfo("Thêm mới thành công !");
            getAllEmployee();
        }
    };
    //Hàm xóa
    const handleDelete = async (id) => {
        const data = await employeeAPI.delete(id);
        console.log("data: ", data);

        if (data.data[0].ResultMsg !== "ok^Xóa thành công.") {
            errorInfo("Xóa thất bại");
        } else if (data.data[0].ResultMsg === "ok^Xóa thành công.") {
            successInfo("Xóa thành công !");
            getAllEmployee();
        }
    };
    //Hàm cập nhật
    const handleUpdate = async (obj) => {
        console.log("obj: ", obj);
        const data = await employeeAPI.update(obj);
        console.log("data: ", data);
        if (data.data.result.ResultMsg !== "ok^Cập nhật thành công") {
            errorInfo("Cập nhật thất bại");
        } else if (data.data.result.ResultMsg === "ok^Cập nhật thành công") {
            successInfo("Cập nhật thành công !");
            getAllEmployee();
        }
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
            render: (RowID) => <div style={{ width: "120px" }}> {RowID} </div>,
        },
        {
            title: "Họ và tên",
            dataIndex: "EmployeeName",
            fixed: "left",
            ...getColumnSearchProps("EmployeeName"),
            render: (EmployeeName) => <div style={{ width: "200px" }}> {EmployeeName} </div>,
        },
        {
            title: "Giới tính",
            dataIndex: "Sex",
            align: "center",
            render: (Sex) => <div style={{ width: "100px" }}> {Sex === 0 ? "Nam" : "Nữ"} </div>,
        },
        {
            title: "Điện thoại",
            dataIndex: "Mobile",
            render: (Mobile) => <div style={{ width: "150px" }}> {Mobile} </div>,
        },
        {
            title: "CCCD",
            dataIndex: "CCCD",
            render: (CCCD) => <div style={{ width: "150px" }}> {CCCD} </div>,
        },
        {
            title: "Ngày sinh",
            dataIndex: "Birthday",
            render: (Birthday) => <div style={{ width: "200px" }}> {Birthday} </div>,
        },
        {
            title: "Địa chỉ",
            dataIndex: "Address",
            render: (Address) => <div style={{ width: "200px" }}> {Address} </div>,
        },

        {
            title: "Chức danh",
            dataIndex: "PositionID",
            align: "center",
            render: (PositionID) => <div style={{ width: "200px" }}> {PositionID}</div>,
        },

        {
            title: "Tên đăng nhập",
            dataIndex: "UserName",
            align: "center",
            render: (UserName) => <div style={{ width: "200px" }}> {UserName} </div>,
        },
        {
            title: "Mật khẩu",
            dataIndex: "UserPass",
            render: (UserPass) => <div style={{ width: "200px" }}> {UserPass} </div>,
        },
        {
            title: "Nghỉ việc",
            dataIndex: "OffWork",
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
            render: (GroupID) => <div style={{ width: "200px" }}> {GroupID} </div>,
        },
        {
            title: "Mã BS/CCHN",
            dataIndex: "MaCCHN",
            render: (MaCCHN) => <div style={{ width: "200px" }}> {MaCCHN} </div>,
        },
        {
            title: "ĐTQG-Mã BS",
            dataIndex: "DTQG_Ma_BS",
            render: (DTQG_Ma_BS) => <div style={{ width: "200px" }}> {DTQG_Ma_BS} </div>,
        },
        {
            title: "ĐTQG-Mã liên kết BS",
            dataIndex: "DTQG_MK_BS",
            render: (DTQG_MK_BS) => <div style={{ width: "200px" }}> {DTQG_MK_BS} </div>,
        },
        {
            title: "Chữ ký",
            dataIndex: "ImageFile",
            align: "center",
            render: (ImageFile) => (
                <div style={{ width: "200px" }}>
                    <div
                        className="focus-link-image"
                        onClick={() => setOpenImage({ open: true, link: ImageFile })}
                    >
                        {ImageFile}
                    </div>
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
                        />
                    </Modal>
                </div>
            ),
        },
        {
            title: "Mã NV",
            dataIndex: "EmployeeCode",
            align: "center",
            render: (EmployeeCode) => <div style={{ width: "200px" }}> {EmployeeCode} </div>,
        },
        {
            title: "STT",
            dataIndex: "STT",
            render: (STT) => <div style={{ width: "50px" }}> {STT} </div>,
        },
        {
            title: "Thao tác",
            dataIndex: "",
            align: "center",
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
            <div>
                <div className="d-flex justify-content-between align-items-center mt-2 mx-2">
                    <div className="d-flex align-items-center ">
                        <div className="vienphi-danhmuc-title mx-2">Danh sách nhân viên</div>
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
                />
                <div className="mt-2 p-1" style={{ height: "100vh" }}>
                    <Table
                        dataSource={listEmployee}
                        columns={column}
                        scroll={{ x: true, y: "100vh" }}
                        size="small"
                        pagination={false}
                        // pagination={{ pageSize: "50" }}
                        bordered={true}
                    />
                </div>
            </div>
        </>
    );
}

export default Khaibaouser;
