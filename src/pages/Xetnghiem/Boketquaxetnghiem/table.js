import { Checkbox, Table } from "antd";
import ds1 from "../../../util/data1";
import ds from "../../../util/data";

function TableData() {
    const column0 = [
        {
            title: "Duyệt",
            dataIndex: "TDV",
            fixed: "left",
            width: "5%",
            render: (tenthuoc) => (
                <div className="text-center">
                    <Checkbox defaultChecked />
                </div>
            ),
        },
        {
            title: "Chỉ số xét nghiệm",
            dataIndex: "TDVVT",
            width: "25%",
            render: () => <div> {} </div>,
        },
        {
            title: "Kết quả",
            dataIndex: "MADVKT",
            width: "20%",
            render: () => <div> {} </div>,
        },
        {
            title: "Bất thường",
            dataIndex: "MADVKT",
            width: "15%",
            render: () => (
                <div className="text-center">
                    <Checkbox defaultChecked />
                </div>
            ),
        },
        {
            title: "Đơn vị",
            dataIndex: "MADVKT",
            width: "15%",
            render: () => <div> {} </div>,
        },
        {
            title: "BT Nữ",
            dataIndex: "MADVKT",
            width: "10%",
            render: () => <div> {} </div>,
        },
        {
            title: "BT Nam",
            dataIndex: "MADVKT",
            width: "10%",
            render: () => <div> {} </div>,
        },
    ];
    return (
        <>
            <div className="table-collapse">
                <Table
                    columns={column0}
                    dataSource={ds}
                    // loading={loading}
                    size="small"
                    scroll={{ y:250 }}
                    pagination={false}
                    bordered={true}
                    showHeader={false}
                />
            </div>
        </>
    );
}

export default TableData;
