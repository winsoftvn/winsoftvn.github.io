import { Table } from "antd";
import ds from "../../../util/data";

function Ekipthuchien() {
    const column0 = [
        {
            title: "Tên nhân viên",
            dataIndex: "TDV",
            fixed: "left",
            render: (TDV) => <div style={{ width: "200px" }}> {TDV} </div>,
        },
        {
            title: "Tên vai trò",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "600px" }}> {TDVVT} </div>,
        },
    ];
    return (
        <>
            <div className="px-2">
                <Table
                    columns={column0}
                    dataSource={ds}
                    // loading={loading}
                    scroll={{ x: true, y: 400 }}
                    pagination={false}
                    
                />
            </div>
        </>
    );
}

export default Ekipthuchien;
