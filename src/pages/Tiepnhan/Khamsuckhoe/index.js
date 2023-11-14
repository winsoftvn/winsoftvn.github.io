import { Button, Form, Input, Select, Table } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./khamsuckhoe.scss";

function Khamsuckhoe() {
    //data
    const dataSource = [
        {
            key: "1",
            name: "Mikehjjjjjjjjjjjjjj",
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
            title: "Mã duyệt",
            dataIndex: "name",
            key: "name",
            render: (name) => <div style={{ width: "100px" }}>{name}</div>,
        },
        {
            title: "Mã NV CTY",
            dataIndex: "age",
            key: "age",
            render: (age) => <div style={{ width: "100px" }}>{age}</div>,
        },
        {
            title: "Họ và tên",
            dataIndex: "age",
            key: "age",
            render: (age) => <div style={{ width: "200px" }}>{age}</div>,
        },
        {
            title: "Giới tính",
            dataIndex: "age",
            key: "age",
            render: (age) => <div style={{ width: "100px" }}>{age}</div>,
        },
        {
            title: "Năm sinh",
            dataIndex: "age",
            key: "age",
            render: (name) => <div style={{ width: "100px" }}>{name}</div>,
        },
        {
            title: "Mã",
            dataIndex: "age",
            key: "age",
            render: (name) => <div style={{ width: "100px" }}>{name}</div>,
        },
        {
            title: "Mã bệnh nhân",
            dataIndex: "age",
            key: "age",
            render: (name) => <div style={{ width: "100px" }}>{name}</div>,
        },
    ];
    return (
        <>
            <div className="m-1">
                <div className="tiepnhan-timkiem-form">
                    <Form>
                        <div className="row">
                            <Form.Item
                                label={<div className="form-input-label">Họ và tên:</div>}
                                className="w-40 m-0"
                            >
                                <Input className="form-control" />
                            </Form.Item>
                            <Form.Item
                                label={<div className="form-input-label">Công ty: </div>}
                                className="w-40 m-0"
                            >
                                <div className="input-select">
                                    <Select />
                                </div>
                            </Form.Item>
                            <Form.Item className="w-10 m-0 d-flex align-items-center">
                                <Button htmlType="submit" className="form-btn">
                                    <FontAwesomeIcon icon={faMagnifyingGlass} size="small" />
                                    <div className="mx-2"> Tìm kiếm</div>
                                </Button>
                            </Form.Item>
                        </div>
                    </Form>
                </div>
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

export default Khamsuckhoe;
