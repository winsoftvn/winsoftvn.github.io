import { Table } from "antd";
import ds from "../../../util/data";

function Thongtinkythuat() {
    const column0 = [
        {
            title: "Vị trí",
            dataIndex: "TDV",
            fixed: "left",
            render: (TDV) => <div style={{ width: "100px" }}> {TDV} </div>,
        },
        {
            title: "Bên",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "100px" }}> {TDVVT} </div>,
        },
        {
            title: "Cường độ",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Đơn vị đo",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Thuốc",
            dataIndex: "MADVKT",
            align: "center",
        },
        {
            title: "Ghi chú",
            dataIndex: "MADVKT",
            align: "center",
        },
        {
            title: "STT",
            dataIndex: "MADVKT",
            align: "center",
        },
    ];
    return (
        <>
            <div className="px-1 py-2">
                <Table
                    columns={column0}
                    dataSource={ds}
                    // loading={loading}
                    scroll={{ x: true, y: 200 }}
                    size="small"
                    bordered
                    pagination={false}
                />
            </div>
        </>
    );
}

export default Thongtinkythuat;
