import { Table } from "antd";
import ds from "../../../util/data";
import Doctraketquaxetnghiem from "./Doctraketquaxetnghiem";
import { useState } from "react";

function Maumota() {
    const [open, setOpen] = useState(false);
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
    const handleOpenModel = (a) => {
        setOpen(true);
    };
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
                    onRow={(record) => ({
                        onDoubleClick: () => {
                            handleOpenModel(record);
                        },
                    })}
                />
                <Doctraketquaxetnghiem open={open} setOpen={setOpen} />
            </div>
        </>
    );
}

export default Maumota;
