import { Collapse, Table } from "antd";
import ds from "../../../util/data";
import "./boketquaxetnghiem.scss";
import TableData from "./table";

function Boketquaxetnghiem() {
    const item = [
        {
            key: "1",
            label: (
                <div className="form-input-label fw-bold">
                    Xét nghiệm:11 _Tổng phân tích tế bào máu ngoại vi
                </div>
            ),
            children: (
                <div>
                    <TableData />
                </div>
            ),
        },
        {
            key: "2",
            label: <div className="form-input-label fw-bold">Xét nghiệm:12 _Sinh hóa</div>,
            children: (
                <div>
                    <TableData />
                </div>
            ),
        },
    ];
    return (
        <>
            <div className="h-max-boketquaxetnghiem">
                <div className="scroll">
                    <div className="label-table-collapse">
                        <div className=" w-5 text-center p-0">Duyệt</div>
                        <div className=" w-25">Chỉ số xét nghiệm</div>
                        <div className=" w-20">Kết quả</div>
                        <div className=" w-15">Bất thường</div>
                        <div className=" w-15">Đơn vị</div>
                        <div className=" w-10">BT Nữ</div>
                        <div className=" w-10">BT Nam</div>
                    </div>
                    <Collapse size="small" items={item} />
                </div>
            </div>
        </>
    );
}

export default Boketquaxetnghiem;
