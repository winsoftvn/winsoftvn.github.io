import { Modal } from "antd";
import CardLichsu from "./CardLichsu";
import "./lichsudangnhap.scss";
import { useEffect, useState } from "react";
import loginAPI from "../../services/loginApi";

function Lichsudangnhap(props) {
    const { open, setOpen, employee } = props;
    const [lichsudangnhap, setLichSuDangNhap] = useState();

    // hàm
    const getLichSuDangNhap = async () => {
        if (employee.RowID) {
            console.log(employee.RowID);
            let a = await loginAPI.lichsu(employee.RowID);
            setLichSuDangNhap(a.data);
        }
    };

    useEffect(() => {
        getLichSuDangNhap();
    }, [employee]);
    return (
        <>
            <Modal
                centered
                open={open}
                okButtonProps={{
                    style: {
                        display: "none",
                    },
                }}
                cancelButtonProps={{
                    style: {
                        display: "none",
                    },
                }}
                onCancel={() => setOpen(false)}
                width={600}
                forceRender
            >
                <div className="scroll-lichsu">
                    {lichsudangnhap?.map((item, index) => {
                        return <CardLichsu key={index} data={item} />;
                    })}
                </div>
            </Modal>
        </>
    );
}

export default Lichsudangnhap;
