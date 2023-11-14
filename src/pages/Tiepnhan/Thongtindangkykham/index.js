import { Table } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Search from "antd/es/input/Search";

function Thongtindangkykham() {
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
            title: "Mã bệnh nhân",
            dataIndex: "name",
            key: "name",
            render: (name) => <div style={{ width: "100px" }}>{name}</div>,
        },
        {
            title: "Họ tên",
            dataIndex: "age",
            key: "age",
            render: (age) => <div style={{ width: "200px" }}>{age}</div>,
        },
        {
            title: "Giới tính",
            dataIndex: "name",
            key: "name",
            render: (name) => <div style={{ width: "100px" }}>{name}</div>,
        },
        {
            title: "Năm sinh",
            dataIndex: "age",
            key: "age",
            render: (age) => <div style={{ width: "100px" }}>{age}</div>,
        },
        {
            title: "Đối tượng",
            dataIndex: "age",
            key: "age",
            render: (age) => <div style={{ width: "100px" }}>{age}</div>,
        },
    ];
    //on
    const onSearch = (value, _e, info) => console.log(info?.source, value);

    return (
        <div>
            <div className=" mx-1 tiepnhan-form-right">
                <div className="tiepnhan-title">THÔNG TIN ĐĂNG KÝ KHÁM</div>
                <div>
                    <Search
                        placeholder="Mã, họ tên bệnh nhân..."
                        allowClear
                        onSearch={onSearch}
                        className="w-100 my-1"
                    />
                </div>
                <div>
                    <Table
                        dataSource={dataSource}
                        columns={columns}
                        pagination={false}
                        scroll={{ x: "max-content", y: "100vh" }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Thongtindangkykham;
