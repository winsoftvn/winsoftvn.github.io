// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCamera, faBarcode, faFileLines, faUsers } from "@fortawesome/free-solid-svg-icons";
import { Form, Select, Table } from "antd";

function ChidinhKB() {
    //truyền props
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
    ];

    const columns = [
        {
            title: "STT",
            dataIndex: "name",
            key: "name",
            render: (name) => <div style={{ width: "100px" }}> {name} </div>,
        },
        {
            title: "Dịch vụ",
            dataIndex: "age",
            key: "age",
            render: (name) => <div style={{ width: "200px" }}> {name} </div>,
        },
        {
            title: "SL",
            dataIndex: "age",
            key: "age",
            render: (age) => <div style={{ width: "100px" }}> {age} </div>,
        },
        {
            title: "Đơn giá",
            dataIndex: "age",
            key: "age",
            render: (age) => <div style={{ width: "100px" }}> {age} </div>,
        },
        {
            title: "Dối tượng",
            dataIndex: "age",
            key: "age",
            render: (age) => <div style={{ width: "100px" }}> {age} </div>,
        },
    ];
    return (
        <>
            <div className="h-max-chidinh">
                <Form>
                    <div className=" mx-1">
                        <div className="row">
                            <div className="col-md-12">
                                    <Form.Item
                                        label={<div className="form-input-label">Công khám</div>}
                                        className="m-0 mt-1"
                                    >
                                        <div className="input-select">
                                            <Select />
                                        </div>
                                    </Form.Item>
                                    <Table
                                        dataSource={dataSource}
                                        columns={columns}
                                        pagination={false}
                                        scroll={{ x: true, y: 220 }}
                                        bordered={true}
                                    />
                             
                            </div>
                        </div>
                    </div>
                </Form>
            </div>
        </>
    );
}

export default ChidinhKB;
