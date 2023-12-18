import { Form, Input, Table, Button, InputNumber, Checkbox } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useRef, useState } from "react";
import SearchFilter from "./search";
import "./donthuoc.scss";
function Donthuoc() {
    const [dsthuoc, setDSThuoc] = useState([]);
    const [thuocdcchon, setValueThuocChon] = useState({});
    const [value, setValue] = useState(false);
    const [form] = Form.useForm();

    const handleDeleteThuoc = (a) => {
        let ds = dsthuoc.filter((item) => item.Ma != a.Ma);
        setDSThuoc(ds);
    };
    useEffect(() => {
        form.setFieldsValue({
            Tenthuoc: thuocdcchon.name,
            // DVT: thuocdcchon.email,
            // Hluong: thuocdcchon.phone,
        });
    }, [thuocdcchon]);

    const column0 = [
        {
            title: "Tên Thuốc",
            dataIndex: "Tenthuoc",
            width: "20%",
        },
        {
            title: "Hàm lượng",
            dataIndex: "Hluong",
            width: "5%",
        },
        {
            title: "ĐVT",
            dataIndex: "DVT",
            width: "5%",
        },

        {
            title: "Ng.cấp",
            dataIndex: "Ncap",
            width: "5%",
        },
        {
            title: "Sáng",
            dataIndex: "Sang",
            width: "5%",
            align: "center",
        },

        {
            title: "Trưa",
            dataIndex: "Trua",
            width: "5%",
            align: "center",
        },
        {
            title: "Chiều",
            dataIndex: "Chieu",
            width: "5%",
            align: "center",
        },
        {
            title: "Tối ",
            dataIndex: "Toi",
            width: "5%",
            align: "center",
        },

        {
            title: "Tổng",
            dataIndex: "Tong",
            width: "10%",
        },
        {
            title: "Cách dùng",
            dataIndex: "Cachdung",
            width: "20%",
        },
        {
            title: "Đơn giá",
            dataIndex: "Dongia",
            width: "10%",
        },
        {
            title: "Xóa",
            dataIndex: "",
            align: "center",
            width: "5%",
            render: (_, record) => (
                <div className="d-flex justify-content-center">
                    <Button
                        className="khambenh-btn-icon color-icon-edit red"
                        onClick={() => handleDeleteThuoc(record)}
                    >
                        <FontAwesomeIcon icon={faXmarkCircle} />
                    </Button>
                </div>
            ),
        },
    ];
    const handlePushThuoc = (e) => {
        let a = {
            Ma: uuidv4(),
            Tenthuoc: thuocdcchon.name,
            ...e,
        };
        setDSThuoc((oldArray) => [...oldArray, a]);
        form.setFieldsValue({
            Tenthuoc: "",
        });
        setValue(!value);
    };
    return (
        <>
            <div className="h-max-donthuoc">
                <div className="scroll">
                    <div className="my-1 px-1 bg-box bg-xam color-border-xam">
                        <div>
                            <Form>
                                <div className="row ">
                                    <Form.Item
                                        className="col-md-2 m-0"
                                        label={<div className="form-input-label">Ngày cấp</div>}
                                    >
                                        <Input className="form-control" />
                                    </Form.Item>
                                    <Form.Item
                                        className="col-md-1 m-0"
                                        label={<div className="form-input-label">Hẹn TK</div>}
                                    >
                                        <Checkbox />
                                    </Form.Item>
                                    <Form.Item
                                        className="col-md-2 m-0"
                                        label={<div className="form-input-label">Ngày TK</div>}
                                    >
                                        <Input className="form-control" type="date" />
                                    </Form.Item>
                                    <Form.Item
                                        className="col-md-3 m-0"
                                        label={<div className="form-input-label">Ng.Nghĩ</div>}
                                    >
                                        <div className="d-flex">
                                            <Input className="form-control w-20" />
                                            <Input className="form-control w-40" />
                                            - <Input className="form-control w-40" />
                                        </div>
                                    </Form.Item>
                                    <Form.Item
                                        className="col-md-2 m-0"
                                        label={<div className="form-input-label">Tao củ</div>}
                                    >
                                        <Input className="form-control" />
                                    </Form.Item>
                                    <Form.Item
                                        className="col-md-2 m-0"
                                        label={<div className="form-input-label">Toa mẫu</div>}
                                    >
                                        <Input className="form-control" />
                                    </Form.Item>
                                </div>
                            </Form>
                        </div>
                    </div>
                    <div className="div-shadow v5 my-1">
                        <div>
                            <div className="label-table">
                                <div className=" w-20">Tên thuốc</div>
                                <div className=" w-5 text-center">H.lượng</div>
                                <div className=" w-5 text-center">ĐVT</div>
                                <div className=" w-5 text-center">N.cấp</div>
                                <div className=" w-5 text-center">Sáng</div>
                                <div className=" w-5 text-center">Trưa</div>
                                <div className=" w-5 text-center">Chiều</div>
                                <div className=" w-5 text-center">Tối</div>
                                <div className=" w-10 text-center">Tổng</div>
                                <div className=" w-20">Cách dùng</div>
                                <div className=" w-10 text-center">Đơn giá</div>
                                <div className=" w-5 text-center">Lưu</div>
                            </div>
                            <Form form={form} onFinish={handlePushThuoc}>
                                <div className="d-flex">
                                    <Form.Item className="p-0 m-0 w-20">
                                        <SearchFilter
                                            setValueThuocChon={setValueThuocChon}
                                            thuocdcchon={thuocdcchon}
                                            form={form}
                                            onFinish={handlePushThuoc}
                                        />
                                    </Form.Item>
                                    <Form.Item className="p-0 m-0 w-5" name="Hluong">
                                        <Input className="form-control" />
                                    </Form.Item>{" "}
                                    <Form.Item className="p-0 m-0 w-5" name="DVT">
                                        <Input className="form-control" />
                                    </Form.Item>
                                    <Form.Item className="p-0 m-0 w-5" name="Ncap">
                                        <Input className="form-control" />
                                    </Form.Item>
                                    <Form.Item className="p-0 m-0 w-5" name="Sang">
                                        <Input
                                            className="form-control"
                                            type="number"
                                            min={0}
                                            classNames="text-center"
                                        />
                                    </Form.Item>
                                    <Form.Item className="p-0 m-0 w-5" name="Trua">
                                        <Input
                                            className="form-control"
                                            classNames="text-center"
                                            type="number"
                                            min={0}
                                        />
                                    </Form.Item>
                                    <Form.Item className="p-0 m-0 w-5" name="Chieu">
                                        <Input
                                            className="form-control"
                                            type="number"
                                            min={0}
                                            classNames="text-center"
                                        />
                                    </Form.Item>
                                    <Form.Item className="p-0 m-0 w-5" name="Toi">
                                        <Input
                                            className="form-control"
                                            type="number"
                                            min={0}
                                            classNames="text-center"
                                        />
                                    </Form.Item>
                                    <Form.Item className="p-0 m-0 w-10" name="Tong">
                                        <Input className="form-control" />
                                    </Form.Item>
                                    <Form.Item className="p-0 m-0 w-20" name="Cachdung">
                                        <Input className="form-control" />
                                    </Form.Item>
                                    <Form.Item className="p-0 m-0 w-10" name="Dongia">
                                        <Input className="form-control" readOnly />
                                    </Form.Item>
                                    <Form.Item className="p-0 m-0 w-5 d-flex justify-content-center">
                                        <Button
                                            className="khambenh-btn-icon color-icon-edit green"
                                            htmlType="submit"
                                        >
                                            <FontAwesomeIcon icon={faCheck} />
                                        </Button>
                                    </Form.Item>
                                </div>
                            </Form>
                            <div className="table-donthuoc">
                                <Table
                                    columns={column0}
                                    dataSource={dsthuoc}
                                    // loading={loading}
                                    scroll={{ x: true, y: 190 }}
                                    size="small"
                                    bordered={true}
                                    pagination={false}
                                    showHeader={false}
                                    locale={{ emptyText: "Chưa có dữ liệu" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Donthuoc;
