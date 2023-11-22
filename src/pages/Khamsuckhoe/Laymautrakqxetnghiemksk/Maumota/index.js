import { Table } from "antd";
import ds from "../../../../util/data";

function Maumota() {
    const column0 = [
        {
            title: "Loại xét nghiệm",
            dataIndex: "TDV",
            fixed: "left",
            render: (TDV) => <div style={{ width: "150px" }}> {TDV} </div>,
        },
        {
            title: "Máy xét nghiệm",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "400px" }}> {TDVVT} </div>,
        },
        {
            title: "Tình trạng",
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
                    scroll={{ x: true, y: 300 }}
                    size="small"
                    pagination={false}
                />
            </div>
        </>
    );
}

export default Maumota;
