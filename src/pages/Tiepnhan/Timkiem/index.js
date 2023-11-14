import { Button, Form, Input, Table } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./timkiem.scss";
function Timkiem() {
    //data
    const dataSource = [
        {
            key: "1",
            name: "Mike",
            age: 32,
        },
        {
            key: "2",
            name: "John",
            age: 42,
        },
        {
            key: "1",
            name: "Mike",
            age: 32,
        },
        {
            key: "2",
            name: "John",
            age: 42,
        },
        {
            key: "1",
            name: "Mike",
            age: 32,
        },
        {
            key: "2",
            name: "John",
            age: 42,
        },
        {
            key: "1",
            name: "Mike",
            age: 32,
        },
        {
            key: "2",
            name: "John",
            age: 42,
        },
        {
            key: "1",
            name: "Mike",
            age: 32,
        },
        {
            key: "2",
            name: "John",
            age: 42,
        },
        {
            key: "1",
            name: "Mike",
            age: 32,
        },
        {
            key: "2",
            name: "John",
            age: 42,
        },
        {
            key: "1",
            name: "Mike",
            age: 32,
        },
        {
            key: "2",
            name: "John",
            age: 42,
        },
        {
            key: "1",
            name: "Mike",
            age: 32,
        },
        {
            key: "2",
            name: "John",
            age: 42,
        },
        {
            key: "1",
            name: "Mik",
            age: 32,
        },
        {
            key: "2",
            name: "John",
            age: 42,
        },
        {
            key: "1",
            name: "Mike",
            age: 32,
        },
        {
            key: "2",
            name: "John",
            age: 42,
        },
    ];

    const columns = [
        {
            title: "Mã bệnh nhân",
            dataIndex: "name",
            key: "name",
            render: (name) => <div style={{ width: "30px" }}>{name}</div>,
        },
        {
            title: "Họ tên",
            dataIndex: "age",
            key: "age",
            render: (age) => <div style={{ width: "40px" }}>{age}</div>,
        },
        {
            title: "Giới tính",
            dataIndex: "age",
            key: "age",
            render: (age) => <div style={{ width: "20px" }}>{age}</div>,
        },
        {
            title: "Ngày sinh",
            dataIndex: "age",
            key: "age",
            render: (age) => <div style={{ width: "20px" }}>{age}</div>,
        },
        {
            title: "Tuổi",
            dataIndex: "age",
            key: "age",
            render: (name) => <div style={{ width: "20px" }}>{name}</div>,
        },
        {
            title: "CMND",
            dataIndex: "age",
            key: "age",
            render: (name) => <div style={{ width: "20px" }}>{name}</div>,
        },
    ];
    return (
        <>
            <div className="m-1">
                <div className="tiepnhan-timkiem-form">
                    <Form>
                        <div className="row">
                            <Form.Item
                                label={<div className="form-input-label">Mã BN</div>}
                                className="w-15 m-0"
                            >
                                <Input className="form-control" />
                            </Form.Item>
                            <Form.Item
                                label={<div className="form-input-label">Họ và tên </div>}
                                className="w-25 m-0"
                            >
                                <Input className="form-control" />
                            </Form.Item>
                            <Form.Item
                                label={<div className="form-input-label">N.Sinh(Tuổi)</div>}
                                className="w-15 m-0"
                            >
                                <Input className="form-control" />
                            </Form.Item>
                            <Form.Item
                                label={<div className="form-input-label">Điện thoại</div>}
                                className="w-15 m-0"
                            >
                                <Input className="form-control" />
                            </Form.Item>
                            <Form.Item
                                label={<div className="form-input-label">CMND </div>}
                                className="w-15 m-0"
                            >
                                <Input className="form-control" />
                            </Form.Item>
                            <Form.Item className="w-10 m-0 d-flex align-items-end">
                                <Button htmlType="submit" className="form-btn">
                                    <FontAwesomeIcon icon={faMagnifyingGlass} size="small" />
                                    <div className="mx-2"> Tìm kiếm</div>
                                </Button>
                            </Form.Item>
                        </div>
                    </Form>
                </div>{" "}
                <div className="my-2">
                    <Table
                        dataSource={dataSource}
                        columns={columns}
                        pagination={false}
                        scroll={{ x: "max-content", y: "100vh" }}
                    />
                </div>
            </div>
        </>
    );
}

export default Timkiem;
