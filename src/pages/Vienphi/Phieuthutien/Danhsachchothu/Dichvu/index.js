import { Checkbox, Table } from "antd";
import ds from "../../../../../util/data";
import { useState } from "react";

function Dichvu() {
    const columns = [
        {
            title: "Thu",
            dataIndex: "K",
            align: "center",
            render: (K) => (
                <div style={{ width: "80px" }}>
                    <Checkbox checked={K === 0 ? true : false}></Checkbox>
                </div>
            ),
        },
        {
            title: "Đối tượng",
            dataIndex: "TDV",
            fixed: "left",
            render: (TDV) => <div style={{ width: "200px" }}> {TDV} </div>,
        },
        {
            title: "Dịch vụ",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "160px" }}> {TDVVT} </div>,
        },
        {
            title: "ĐVT",
            dataIndex: "MADVKT",
            align: "center",
        },
        {
            title: "SL",
            dataIndex: "TDVKT",
            render: (TDV) => <div style={{ width: "160px" }}> {TDV} </div>,
        },

        {
            title: "Đơn giá",
            dataIndex: "MKPBYT",
            align: "center",
        },
        {
            title: "Thành tiền",
            dataIndex: "MTDBHYT",
            align: "center",
        },
        {
            title: "BHYT Trả",
            dataIndex: "MTT37",
            render: (MTT37) => (
                <div
                    style={{
                        width: "80px",
                    }}
                >
                    {MTT37}
                </div>
            ),
        },
        {
            title: "SYT Trả",
            dataIndex: "TTTT37",
            render: (TTTT37) => (
                <div
                    style={{
                        width: "80px",
                    }}
                >
                    {TTTT37}
                </div>
            ),
        },
        {
            title: "BN Trả",
            dataIndex: "MTT50",
            render: (MTT50) => <div style={{ width: "80px" }}> {MTT50} </div>,
        },
        {
            title: "Phụ thu BHYT",
            dataIndex: "TTT50",
            render: (TTT50) => <div style={{ width: "80px" }}>{TTT50} </div>,
        },
        {
            title: "Ưu đãi",
            dataIndex: "GM",
            align: "center",
            render: (TTT50) => <div style={{ width: "80px" }}>{TTT50}</div>,
        },
        {
            title: "Ưu đãi phụ thu",
            dataIndex: "MTT50",
            render: (MTT50) => <div style={{ width: "80px" }}> {MTT50} </div>,
        },
        {
            title: "Miễn giảm",
            dataIndex: "TTT50",
            render: (TTT50) => <div style={{ width: "80px" }}>{TTT50} </div>,
        },
        {
            title: "Thực thu",
            dataIndex: "GM",
            align: "center",
            render: (TTT50) => <div style={{ width: "80px" }}>{TTT50}</div>,
        },
        {
            title: "Nhóm",
            dataIndex: "GM",
            align: "center",
            render: (TTT50) => <div style={{ width: "80px" }}>{TTT50}</div>,
        },
    ];
    const [select, setSelect] = useState({
        selectedRowKeys: [],
        loading: false,
    });

    console.log("selectedRowKeys", select);

    const { selectedRowKeys, loading } = select;
    const rowSelection = {
        selectedRowKeys,
        onChange: (selectedRowKeys) => {
            setSelect({
                ...select,
                selectedRowKeys: selectedRowKeys,
            });
        },
    };
    return (
        <>
            <div className=" shadow v6">
                <Table
                    className=""
                    columns={columns}
                    dataSource={ds}
                    bordered={true}
                    scroll={{ x: true }}
                    size="small"
                    pagination={{ pageSize: 9 }}
                />
            </div>
        </>
    );
}

export default Dichvu;
