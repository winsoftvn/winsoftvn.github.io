import { Button, Checkbox, Form, Input, Modal } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPrint,
    faHandPointRight,
    faCircleXmark,
    faSave,
    faForwardFast,
    faTrashCan,
    faForward,
    faGear,
} from "@fortawesome/free-solid-svg-icons";
import "./chidinh.scss"
function Chidinh(props) {
    const { open, setOpen } = props;
    const items1 = [
        {
            label: <div className="form-input-label khambenh-form-input-label">F2 - Tiếp</div>,
            key: "1",
            icon: (
                <div className="color-icon-edit blue">
                    <FontAwesomeIcon icon={faForward} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label khambenh-form-input-label">F3 - Lưu</div>,
            key: "2",
            icon: <FontAwesomeIcon icon={faSave} />,
        },
        {
            label: <div className="form-input-label khambenh-form-input-label">F6 - In CĐ</div>,
            key: "3",
            icon: (
                <div className="color-icon-edit green">
                    {" "}
                    <FontAwesomeIcon icon={faPrint} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label khambenh-form-input-label">CĐ Trước</div>,
            key: "4",
            icon: (
                <div className="color-icon-edit yellow">
                    <FontAwesomeIcon icon={faHandPointRight} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label khambenh-form-input-label">Bỏ qua</div>,
            key: "5",
            icon: (
                <div className="color-icon-edit blue">
                    <FontAwesomeIcon icon={faForwardFast} />{" "}
                </div>
            ),
        },
        {
            label: <div className="form-input-label khambenh-form-input-label">Xóa</div>,
            key: "6",
            icon: (
                <div className="color-icon-edit red">
                    <FontAwesomeIcon icon={faTrashCan} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label khambenh-form-input-label">Thoát</div>,
            key: "7",
            icon: (
                <div className="color-icon-edit red">
                    <FontAwesomeIcon icon={faCircleXmark} />
                </div>
            ),
        },
    ];
   
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
                width={1000}
            >
                <div>
                    <div className="d-flex h-model-label">
                        <div className="w-30 color-text fw-bold">
                            Chỉ định dịch vụ (X-Quang, Siêu âm, Nội soi, Xét nghiệm, ...)
                        </div>
                        <div className="w-10">
                            <Form>
                                <Form.Item label={<div className="form-input-label">Ngày</div>}>
                                    <Input className="form-control" type="date" />
                                </Form.Item>
                            </Form>
                        </div>
                        <div className="d-flex w-70 justify-content-end">
                            <div>
                                <Checkbox />
                            </div>
                            <div>Giá DV</div>

                            {items1.map((item) => (
                                <Button className="form-btn color-text mx-1 px-1" key={item.key}>
                                    {item.icon}
                                    <div className="mx-1">{item.label}</div>
                                </Button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className="w-75">
                            <div className="row align-items-center">
                                <div className="col-md-2">
                                    <Button>
                                        <FontAwesomeIcon icon={faGear} />
                                    </Button>
                                </div>
                                <div className="d-flex col-md-5">
                                    <div className="fw-bold form-input-label w-30">BS chỉ định:</div>
                                    <div className="w-60"><Input className="form-control" /></div>
                                </div>
                                <div className="col-md-5">
                                    <Input placeholder="Tìm kiếm" className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default Chidinh;
