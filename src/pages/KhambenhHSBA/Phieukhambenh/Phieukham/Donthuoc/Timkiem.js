// import axios from "axios";
import "./donthuoc.scss";
import { Form, Input } from "antd";
import SelectRowDonThuoc from "./SelectRowDonThuoc";
function SearchFilter(props) {
    const {
        form,
        data,
        red,
        setReds,
        onFinish,
        setValueThuocChon,
        setValueInputThuoc,
        valueInputThuoc,
        refNcap,
        refTenthuoc,
        clickTenThuoc,
        setClickTenThuoc,
    } = props;

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

    const Filter = (e) => {
        setReds(
            data.filter(
                (f) =>
                    f.name.includes(e.target.value) ||
                    f.email.includes(e.target.value) ||
                    f.name.toUpperCase().includes(e.target.value) ||
                    f.email.toUpperCase().includes(e.target.value) ||
                    f.name.toLowerCase().includes(e.target.value) ||
                    f.email.toLowerCase().includes(e.target.value)
            )
        );
        setValueInputThuoc(e.target.value);
    };
    return (
        <>
            <div>
                <div className="box">
                    <Form
                        form={form}
                        onKeyDown={(e) => (e.key === "Enter" ? e.preventDefault() : "")}
                        onFinish={onFinish}
                    >
                        <Form.Item name="Tenthuoc" className="m-0 p-0">
                            <Input
                                type="text"
                                name="tenthuoc"
                                className="form-control"
                                onChange={Filter}
                                ref={refTenthuoc}
                                onClick={() => setClickTenThuoc(!clickTenThuoc)}
                            />
                        </Form.Item>
                    </Form>

                    {valueInputThuoc || clickTenThuoc ? (
                        red.length === 0 ? (
                            ""
                        ) : (
                            <div className="box-table-search ">
                                <div className="table-search">
                                    <SelectRowDonThuoc
                                        setClickTenThuoc={setClickTenThuoc}
                                        red={red}
                                        columns={column1}
                                        setValueThuocChon={setValueThuocChon}
                                        setValueInputThuoc={setValueInputThuoc}
                                        valueInputThuoc={valueInputThuoc}
                                        refNcap={refNcap}
                                    />
                                </div>
                            </div>
                        )
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </>
    );
}

export default SearchFilter;
