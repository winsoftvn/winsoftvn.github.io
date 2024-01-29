import { Table, Button, Dropdown } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashCan, faPenToSquare, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { motion } from "framer-motion";
import "../../danhmuc.scss";
import ds from "../../../../../util/data";
import CtkhaibaonhomvienphiPK from "../Detail";
import Swal from "sweetalert2";
import { successInfo } from "../../../../../components/Dialog/Dialog";

function Khaibaonhomvienphipk() {
    const [open, setOpen] = useState(false);

    const handleDataCreate = () => {
        setOpen(true);
    };

    const handleThaoTac = (e, record) => {
        if (e.key === "update") {
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
                    // handleDelete(record.RowID);
                    successInfo("Đã xóa thành công !");
                }
            });
        }
    };
    const items = [
        {
            key: "1",
            label: "Xóa",
            icon: <FontAwesomeIcon icon={faTrashCan} />,
        },
        {
            key: "2",
            label: "Sửa",
            icon: <FontAwesomeIcon icon={faPenToSquare} />,
        },
    ];
    const columns = [
        {
            title: "Mã nhóm",
            dataIndex: "TDV",
            fixed: "left",
            render: (TDV) => <div style={{ width: "200px" }}> {TDV} </div>,
        },
        {
            title: "Tên nhóm",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "500px" }}> {TDVVT} </div>,
        },
        {
            title: "Phân hệ",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Nhóm BC BHYT",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "STT",
            dataIndex: "MADVKT",
            align: "center",
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
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.8 } }}
            >
                <div className="text-muted">
                    <div className="d-flex justify-content-between align-items-center mt-2 mx-2">
                        <div className="d-flex align-items-center ">
                            <div className="vienphi-danhmuc-title mx-2">
                                Khai báo nhóm viện phí (PK)
                            </div>
                        </div>
                        <div className="text-end">
                            <Button className="form-btn bg" onClick={handleDataCreate}>
                                <FontAwesomeIcon icon={faPlus} className="mx-1" />
                                Thêm mới
                            </Button>
                        </div>
                    </div>
                    <CtkhaibaonhomvienphiPK open={open} setOpen={setOpen} />
                    <hr className="w-100 my-1" />
                    <div className="m-1">
                        <Table
                            columns={columns}
                            dataSource={ds}
                            // loading={loading}
                            scroll={{ x: true }}
                            size="small"
                            pagination={{ pageSize: 20 }}
                        />
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default Khaibaonhomvienphipk;
