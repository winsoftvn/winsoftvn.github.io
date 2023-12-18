import axios from "axios";
import { useEffect, useState } from "react";
import "./duoc.scss";
import { Form, Input, Table } from "antd";
function SearchFilter(props) {
    const { setValueThuocChon, form, onFinish, inputRef } = props;
    const [data, setData] = useState([]);
    const [red, setReds] = useState([]);
    const [value, setValue] = useState("");
    const column1 = [
        {
            title: "Tên",
            dataIndex: "name",
            fixed: "left",
            render: (name) => <div style={{ width: "100px" }}> {name} </div>,
        },
        {
            title: "Email",
            dataIndex: "email",
            render: (email) => <div style={{ width: "200px" }}> {email} </div>,
        },
        {
            title: "Phone",
            dataIndex: "phone",
            render: (phone) => <div style={{ width: "200px" }}> {phone} </div>,
        },
    ];
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                setData(res.data);
                setReds(res.data);
            })
            .catch((err) => console.log(err));
    }, []);
    const Filter = (e) => {
        setValue(e.target.value);
        setReds(data.filter((f) => f.name.toLowerCase().includes(e.target.value)));
    };
    return (
        <>
            <div>
                <div className="box">
                    <Form form={form} onFinish={onFinish}>
                        <Form.Item name="Tenthuoc" className="m-0 p-0">
                            <Input
                                type="text"
                                name="tenthuoc"
                                className="form-control"
                                onChange={Filter}
                            />
                        </Form.Item>
                    </Form>{" "}
                    {value && (
                        <div className="box-table-search ">
                            <div className="table-search">
                                <Table
                                    columns={column1}
                                    dataSource={red}
                                    // loading={loading}
                                    scroll={{ x: 700, y: 400 }}
                                    size="small"
                                    bordered={true}
                                    pagination={false}
                                    onRow={(record) => ({
                                        onClick: () => {
                                            setValueThuocChon(record);
                                            setValue(false);
                                        },
                                    })}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default SearchFilter;
