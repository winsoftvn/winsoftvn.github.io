import { Table } from "antd";
import ds from "../../../../../util/data";

function Lichsuthuchien() {
    const column0 = [
        {
            title: "Ngày",
            dataIndex: "TDV",
            fixed: "left",
            render: (TDV) => <div style={{ width: "100px" }}> {TDV} </div>,
        },
        {
            title: "Kỹ thuật",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "600px" }}> {TDVVT} </div>,
        },
        {
            title: "BS Trả kết quả",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
    ];
    return (
        <>
            <div>
                <Table
                    columns={column0}
                    dataSource={ds}
                    // loading={loading}
                    scroll={{ x: true, y: "100vh" }}
                    size="small"
                    pagination={false}
                />
            </div>
        </>
    );
}

export default Lichsuthuchien;
