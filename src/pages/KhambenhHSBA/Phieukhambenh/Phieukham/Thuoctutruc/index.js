import { Modal, Button, Form, Input, Table, Collapse, Typography, Checkbox } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleXmark,
    faFastForward,
    faPowerOff,
    faPrint,
    faSave,
    faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import ds from "../../../../../util/data";
// import Swal from "sweetalert2";
function Thuoctutruc(props) {
    const { open, setOpen } = props;
    const columns = [
        {
            title: "Tên thuốc",
            dataIndex: "TDV",
            fixed: "left",
            render: (TDV) => <div style={{ width: "200px" }}> {TDV} </div>,
        },
        {
            title: "ĐVT",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "100px" }}> {TDVVT} </div>,
        },
        {
            title: "Ngày cấp",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "150px" }}> {TDVVT} </div>,
        },
        {
            title: "S",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "100px" }}> {TDVVT} </div>,
        },
        {
            title: "Tr",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "100px" }}> {TDVVT} </div>,
        },
        {
            title: "C",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "100px" }}> {TDVVT} </div>,
        },
        {
            title: "T",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "100px" }}> {TDVVT} </div>,
        },
        {
            title: "Tổng",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "100px" }}> {TDVVT} </div>,
        },
        {
            title: "T.Tiền",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "150px" }}> {TDVVT} </div>,
        },
        {
            title: "Cách dùng",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Đối tượng",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "100px" }}> {TDVVT} </div>,
        },
        {
            title: "Xóa",
            dataIndex: "",
            align: "center",
            fixed: "right",
            render: (record) => (
                <div>
                    <Button className="khambenh-btn-icon color-icon-edit red">
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </Button>
                </div>
            ),
        },
    ];
    const items1 = [
        {
            label: <div className="form-input-label ">F2 - Mới</div>,
            key: "1",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faPowerOff} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label ">F3 - Lưu</div>,
            key: "2",
            icon: <FontAwesomeIcon icon={faSave} />,
        },
        {
            label: <div className="form-input-label ">Bỏ qua</div>,
            key: "3",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faFastForward} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label ">In CD</div>,
            key: "4",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faPrint} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label ">Hủy</div>,
            key: "5",
            icon: (
                <div className="">
                    <FontAwesomeIcon icon={faTrashCan} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label ">Thoát</div>,
            key: "6",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </div>
            ),
        },
    ];
    const handCloseModal = (a) => {
        if (a === "6") {
            setOpen(false);
        }
    };
    return (
        <>
            <Modal
                title={
                    <>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="">THUỐC TỦ TRỰC</div>
                            <div>
                                <div className="d-flex justify-content-end align-items-center">
                                    <Form.Item
                                        className="m-0 p-0"
                                        label={<div className="form-input-label">Thuốc DV</div>}
                                    >
                                        <Checkbox />
                                    </Form.Item>
                                    {items1.map((item) => (
                                        <Button
                                            className="form-btn bg mx-1 px-1"
                                            key={item.key}
                                            onClick={() => handCloseModal(item.key)}
                                        >
                                            {item.icon}
                                            <div className="mx-1 fw-bold">{item.label}</div>
                                        </Button>
                                    ))}
                                </div>
                            </div>
                        </div>
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
                closable={false}
            >
                <div className="text-center">
                    <Form onFinish={""}>
                        <div className="scroll">
                            <div className="bg-box bg-xam color-border-xam px-2">
                                <div className="row ">
                                    <Form.Item
                                        label={<div className="form-input-label">Ngày cấp</div>}
                                        className="col-md-2 m-0"
                                    >
                                        <Input className="form-control" />
                                    </Form.Item>
                                    <Form.Item
                                        label={<div className="form-input-label">Mạch(l/p)</div>}
                                        className="col-md-1 m-0"
                                    >
                                        <Input className="form-control" />
                                    </Form.Item>
                                    <Form.Item
                                        label={
                                            <div className="form-input-label">
                                                Nh.Độ(<sup>o</sup>C)
                                            </div>
                                        }
                                        className="col-md-1 m-0"
                                    >
                                        <Input className="form-control" />
                                    </Form.Item>
                                    <Form.Item
                                        label={<div className="form-input-label">HA(mmHg)</div>}
                                        className="col-md-2 m-0"
                                    >
                                        <div className="d-flex">
                                            <Input className="form-control" />
                                        </div>
                                    </Form.Item>
                                    <Form.Item
                                        label={<div className="form-input-label">N.Thở(l/p)</div>}
                                        className="col-md-1 m-0"
                                    >
                                        <Input className="form-control" />
                                    </Form.Item>
                                    <Form.Item
                                        label={<div className="form-input-label">Cân nặng(kg)</div>}
                                        className="col-md-2 m-0"
                                    >
                                        <Input className="form-control" />
                                    </Form.Item>
                                    <Form.Item
                                        label={<div className="form-input-label">Ch.Cao(cm)</div>}
                                        className="col-md-1 m-0"
                                    >
                                        <Input className="form-control" />
                                    </Form.Item>
                                    <Form.Item
                                        label={<div className="form-input-label">Ngày kê toa</div>}
                                        className="col-md-2 m-0"
                                    >
                                        <Input className="form-control" type="date" />
                                    </Form.Item>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="w-75 color-border mt-1 p-1">
                                    <Table
                                        columns={columns}
                                        dataSource={ds}
                                        // loading={loading}
                                        scroll={{ x: true, y: 500 }}
                                        size="small"
                                        pagination={false}
                                    />
                                </div>
                                <div className="w-25 color-border m-1 p-1">
                                    <div className="mt-1 fw-bold">Toa thuốc</div>
                                    <div className="d-flex w-100 bg-box bg-xam color-border-xam">
                                        <div className="w-60 color-border-xam">
                                            {" "}
                                            Tên thuốc - VTYT
                                        </div>
                                        <div className="w-20 color-border-xam">DVT</div>
                                        <div className="w-20 color-border-xam">SL</div>
                                    </div>
                                    <div>
                                        <Collapse accordion={true}>
                                            <Collapse.Panel
                                                key={"1"}
                                                header={
                                                    <div className="text-start m-0 ">Khám bệnh</div>
                                                }
                                            >
                                                <Typography.Text>
                                                    <div className="d-flex w-100 align-items-center">
                                                        <div className="w-60 text-start px-2">
                                                            Tên thuốc - VTYT
                                                        </div>
                                                        <div className="w-20">viên</div>
                                                        <div className="w-20">20</div>
                                                    </div>
                                                    <div className="d-flex w-100">
                                                        <div className="w-60 text-start px-2">
                                                            {" "}
                                                            BHYT
                                                        </div>
                                                        <div className="w-20">uống</div>
                                                        <div className="w-20">20</div>
                                                    </div>
                                                </Typography.Text>
                                            </Collapse.Panel>
                                        </Collapse>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="d-flex mt-2 justify-content-end">
                                <div className="d-flex align-items-center mx-2">
                                    <Form.Item
                                        className="m-0 p-0"
                                        label={
                                            <div className="form-input-label khambenh-form-input-label">
                                                Thuốc DV
                                            </div>
                                        }
                                    >
                                        <Checkbox />
                                    </Form.Item>
                                </div>
                                {items1.map((item) => (
                                    <Button
                                        className="form-btn color-text mx-1 px-1"
                                        key={item.key}
                                    >
                                        {item.icon}
                                        <div className="mx-1">{item.label}</div>
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </Form>
                </div>
            </Modal>
        </>
    );
}

export default Thuoctutruc;
