import { Modal } from "antd";
import CardLichsu from "./CardLichsu";
import "./lichsudangnhap.scss";

function Lichsudangnhap(props) {
    const { open, setOpen } = props;
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
                    <CardLichsu />
                    <CardLichsu />
                    <CardLichsu />
                    <CardLichsu />
                    <CardLichsu />
                </div>
            </Modal>
        </>
    );
}

export default Lichsudangnhap;
