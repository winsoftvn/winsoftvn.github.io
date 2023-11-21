import { Form, Input, Table, Button, InputNumber, Checkbox, Select } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import ds1 from "../../../../util/data1";
import { useEffect, useState } from "react";
import { DataGrid, GridColumn } from "rc-easyui";
import st from "../../../../util/test";
import ModelDonthuoc from "./modeldonthuoc";

function Donthuoc() {
    const [data, setData] = useState(ds1);
    const [openDonThuoc, setOpenDonthuoc] = useState(false);
    const [thuocdcchon, setValueThuocChon] = useState("");
    const [form] = Form.useForm();
    useEffect(() => {
        form.setFieldsValue({
            tenthuoc: thuocdcchon.TDVVT,
            dvt: thuocdcchon.DVT,
            dvdung: thuocdcchon.TDVVT,
        });
    }, [thuocdcchon]);
    const handleAddDataList = (a) => {
        // let ds = [
        //     {
        //         tenthuoc: "",
        //         dvt: "",
        //         dvdung: "",
        //         ngcap: "",
        //         sang: "",
        //         trua: "",
        //         chieu: "",
        //         toi: "",
        //         tong: "",
        //         cachdung: "",
        //         thtien: "",
        //     },
        // ];
        data.push({
            tenthuoc: a.tenthuoc,
            dvt: a.dvt,
            dvdung: a.dvdung,
            ngcap: a.ngcap,
            sang: a.sang,
            trua: a.trua,
            chieu: a.chieu,
            toi: a.toi,
            tong: a.tong,
            cachdung: a.cachdung,
            thtien: a.thtien,
        });
        console.log(data);
    };

    const handleSetOpen = () => {
        setOpenDonthuoc(true);
    };
    const column0 = [
        {
            title: "Tên Thuốc",
            dataIndex: "TDV",
            fixed: "left",
            render: (TDV) => (
                <div style={{ width: "200px" }} className="p-0 m-0">
                    <Form.Item className="p-0 m-0" name="tenthuoc">
                        <Input
                            onClick={handleSetOpen}
                            className="form-control"
                            value={thuocdcchon}
                        />
                        {/* <Select
                            className="w-100"
                            showSearch
                            style={{
                                width: 200,
                            }}
                            placeholder="Chọn thuốc"
                            optionFilterProp="children"
                            filterOption={(input, option) => (option?.label ?? "").includes(input)}
                            filterSort={(optionA, optionB) =>
                                (optionA?.label ?? "")
                                    .toLowerCase()
                                    .localeCompare((optionB?.label ?? "").toLowerCase())
                            }
                            options={[
                                {
                                    value: "1",
                                    label: "Not Identified",
                                },
                                {
                                    value: "2",
                                    label: "Closed",
                                },
                                {
                                    value: "3",
                                    label: "Communicated",
                                },
                                {
                                    value: "4",
                                    label: "Identified",
                                },
                                {
                                    value: "5",
                                    label: "Resolved",
                                },
                                {
                                    value: "6",
                                    label: "Cancelled",
                                },
                            ]}
                        /> */}
                    </Form.Item>
                </div>
            ),
        },

        {
            title: "ĐVT",
            dataIndex: "TDVVT",
            render: (TDVVT) => (
                <div style={{ width: "100px" }} className="p-0 m-0">
                    <Form.Item className="p-0 m-0" name="dvt">
                        <Select
                            className="w-100"
                            showSearch
                            optionFilterProp="children"
                            filterOption={(input, option) => (option?.label ?? "").includes(input)}
                            filterSort={(optionA, optionB) =>
                                (optionA?.label ?? "")
                                    .toLowerCase()
                                    .localeCompare((optionB?.label ?? "").toLowerCase())
                            }
                            options={[
                                {
                                    value: "1",
                                    label: "Cuộn",
                                },
                                {
                                    value: "2",
                                    label: "Vĩ",
                                },
                                {
                                    value: "3",
                                    label: "Hộp",
                                },
                                {
                                    value: "4",
                                    label: "Sợi",
                                },
                            ]}
                        />
                    </Form.Item>
                </div>
            ),
        },
        {
            title: "Đ.vị dùng",
            dataIndex: "MADVKT",
            render: (TDVVT) => (
                <div style={{ width: "100px" }} className="p-0 m-0">
                    <Form.Item className="p-0 m-0" name="dvdung">
                        <Input className="border-input w-100 form-control" />
                    </Form.Item>{" "}
                </div>
            ),
        },
        {
            title: "Ng.cấp",
            dataIndex: "TDVVT",
            render: (TDVVT) => (
                <div style={{ width: "100px" }} className="p-0 m-0">
                    <Form.Item className="p-0 m-0" name="ngcap">
                        <Input className="border-input w-100 form-control" />
                    </Form.Item>{" "}
                </div>
            ),
        },
        {
            title: "Sáng",
            dataIndex: "MADVKT",
            align: "center",
            render: (TDVVT) => (
                <div style={{ width: "50px" }}>
                    <Form.Item className="p-0 m-0" name="sang">
                        <InputNumber className="border-input w-100 form-control" min={0} />
                    </Form.Item>{" "}
                </div>
            ),
        },

        {
            title: "Trưa",
            dataIndex: "TDVVT",
            render: (TDVVT) => (
                <div style={{ width: "50px" }}>
                    <Form.Item className="p-0 m-0" name="trua">
                        <InputNumber className="border-input w-100 form-control" min={0} />
                    </Form.Item>{" "}
                </div>
            ),
        },
        {
            title: "Chiều",
            dataIndex: "MADVKT",
            render: (TDVVT) => (
                <div style={{ width: "50px" }}>
                    <Form.Item className="p-0 m-0" name="chieu">
                        <InputNumber className="border-input w-100 form-control" min={0} />
                    </Form.Item>{" "}
                </div>
            ),
        },
        {
            title: "Tối ",
            dataIndex: "TDVVT",
            render: (TDVVT) => (
                <div style={{ width: "50px" }}>
                    <Form.Item className="p-0 m-0" name="toi">
                        <InputNumber className="border-input w-100 form-control" min={0} />
                    </Form.Item>{" "}
                </div>
            ),
        },

        {
            title: "Tổng",
            dataIndex: "TDVVT",
            render: (TDVVT) => (
                <div style={{ width: "100px" }} className="p-0 m-0">
                    <Form.Item className="p-0 m-0" name="tong">
                        <InputNumber className="border-input w-100 form-control" />
                    </Form.Item>{" "}
                </div>
            ),
        },
        {
            title: "Cách dùng",
            dataIndex: "MADVKT",
            render: (TDVVT) => (
                <div style={{ width: "200px" }} className="p-0 m-0">
                    <Form.Item className="p-0 m-0" name="cachdung">
                        <Input className="border-input w-100 form-control" />
                    </Form.Item>
                </div>
            ),
        },
        {
            title: "T.Tiền",
            dataIndex: "TDVVT",
            render: (TDVVT) => (
                <div style={{ width: "200px" }} className="p-0 m-0">
                    <Form.Item className="p-0 m-0" name="thtien">
                        <Input className="border-input w-100 form-control" />
                    </Form.Item>
                </div>
            ),
        },
        {
            title: "Thao tác",
            dataIndex: "",
            align: "center",
            fixed: "right",
            render: (_, record) => (
                <div>
                    <Button className="khambenh-btn-icon color-icon-edit green" htmlType="submit">
                        <FontAwesomeIcon icon={faCheck} />
                    </Button>
                </div>
            ),
        },
    ];
    return (
        <>
            <div>
                <ModelDonthuoc
                    open={openDonThuoc}
                    setOpen={setOpenDonthuoc}
                    setValueThuoc={setValueThuocChon}
                />
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
                    <Form onFinish={handleAddDataList} form={form}>
                        <Table
                            columns={column0}
                            dataSource={data ? ds1 : data}
                            // loading={loading}
                            scroll={{ x: true, y: 270 }}
                            size="small"
                            bordered
                            pagination={false}
                        />
                    </Form>
                </div>

                {/* <div>
                    <DataGrid data={st} style={{ height: 250 }}>
                        <GridColumn field="itemid" title="Item ID"></GridColumn>
                        <GridColumn field="name" title="Name"></GridColumn>
                        <GridColumn field="listprice" title="List Price" align="right"></GridColumn>
                        <GridColumn field="unitcost" title="Unit Cost" align="right"></GridColumn>
                        <GridColumn field="attr" title="Attribute" width="30%"></GridColumn>
                        <GridColumn field="status" title="Status" align="center"></GridColumn>
                    </DataGrid>
                </div> */}
            </div>
        </>
    );
}

export default Donthuoc;
