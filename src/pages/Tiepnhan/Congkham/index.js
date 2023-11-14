import imguser from "../../../assets/image/user.png";
import imgiconcheck from "../../../assets/image/icons-check.png";
import "./congkham.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faBarcode, faFileLines, faUsers } from "@fortawesome/free-solid-svg-icons";
import { Form, Input, Checkbox, Select, Table } from "antd";

function Congkham() {
    //truyền props
    const dataSource = [
        {
            key: "1",
            name: "Mike",
            age: 32,
        },
        {
            key: "2",
            name: "John",
            age: 42,
        },
        {
            key: "1",
            name: "Mike",
            age: 32,
        },
        {
            key: "2",
            name: "John",
            age: 42,
        },
        {
            key: "1",
            name: "Mike",
            age: 32,
        },
        {
            key: "2",
            name: "John",
            age: 42,
        },
        {
            key: "1",
            name: "Mike",
            age: 32,
        },
        {
            key: "2",
            name: "John",
            age: 42,
        },
    ];

    const columns = [
        {
            title: "STT",
            dataIndex: "name",
            key: "name",
            render: (name) => <div style={{ width: "100px" }}> {name} </div>,
        },
        {
            title: "Dịch vụ",
            dataIndex: "age",
            key: "age",
            render: (name) => <div style={{ width: "200px" }}> {name} </div>,
        },
        {
            title: "SL",
            dataIndex: "age",
            key: "age",
            render: (age) => <div style={{ width: "100px" }}> {age} </div>,
        },
        {
            title: "Đơn giá",
            dataIndex: "age",
            key: "age",
            render: (age) => <div style={{ width: "100px" }}> {age} </div>,
        },
        {
            title: "Dối tượng",
            dataIndex: "age",
            key: "age",
            render: (age) => <div style={{ width: "100px" }}> {age} </div>,
        },
    ];
    return (
        <>
            <div className="tiepnhan-congkham">
                <Form>
                    <div className="d-flex">
                        <div className="w-70 m-1">
                            <div className="tiepnhan-congkham-title">THÔNG TIN HÀNH CHÍNH</div>
                            <div className="row">
                                <div className="col-md-2 ">
                                    <div className="d-flex justify-content-center ">
                                        <div className="text-center align-items-center">
                                            <img src={imguser} width={100} />
                                            <div className="tiepcan-congkham-icon">
                                                <div>
                                                    <FontAwesomeIcon icon={faCamera} />
                                                </div>
                                                <div>
                                                    <FontAwesomeIcon icon={faBarcode} />
                                                </div>
                                                <div>
                                                    <FontAwesomeIcon icon={faFileLines} />
                                                </div>
                                                <div>
                                                    <FontAwesomeIcon icon={faUsers} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-10">
                                    <div>
                                        <div className="row tiepnhan-congkham-row">
                                            <Form.Item
                                                label={
                                                    <div className="tiepnhan-congkham-form-input-label">
                                                        QR Code
                                                    </div>
                                                }
                                                name="qrcode"
                                                className="col-md-10 m-0"
                                            >
                                                <Input className="form-control" />
                                            </Form.Item>
                                            <div className="col-md-2">
                                                <img src={imgiconcheck} width={30} />
                                            </div>
                                        </div>
                                        <div className="row tiepnhan-congkham-row">
                                            <Form.Item
                                                className="col-md-3 m-0"
                                                label={
                                                    <div className="tiepnhan-congkham-form-input-label">
                                                        Mã BN
                                                    </div>
                                                }
                                            >
                                                <Input className="form-control"></Input>
                                            </Form.Item>
                                            <Form.Item
                                                className="col-md-6 m-0"
                                                label={
                                                    <div className="tiepnhan-congkham-form-input-label">
                                                        Họ và tên
                                                    </div>
                                                }
                                            >
                                                <Input className="form-control"></Input>
                                            </Form.Item>
                                            <Form.Item
                                                className="col-md-3 m-0"
                                                label={
                                                    <div className="tiepnhan-congkham-form-input-label">
                                                        Giới tính
                                                    </div>
                                                }
                                            >
                                                <Input className="form-control"></Input>
                                            </Form.Item>
                                        </div>
                                        <div className="row tiepnhan-congkham-row">
                                            <Form.Item
                                                className="col-md-4 m-0"
                                                label={
                                                    <div className="tiepnhan-congkham-form-input-label">
                                                        N.sinh
                                                    </div>
                                                }
                                            >
                                                <div className="d-flex">
                                                    <Input
                                                        className="form-control w-75"
                                                        type="date"
                                                    ></Input>
                                                    <Input readOnly className="form-control w-25" />
                                                </div>
                                            </Form.Item>

                                            <Form.Item
                                                className="col-md-4 m-0"
                                                label={
                                                    <div className="tiepnhan-congkham-form-input-label">
                                                        Dân tộc
                                                    </div>
                                                }
                                            >
                                                <Input className="form-control"></Input>
                                            </Form.Item>
                                            <Form.Item
                                                className="col-md-4 m-0"
                                                label={
                                                    <div className="tiepnhan-congkham-form-input-label">
                                                        Số điện thoại
                                                    </div>
                                                }
                                            >
                                                <Input className="form-control"></Input>
                                            </Form.Item>
                                        </div>
                                        <div className="row tiepnhan-congkham-row">
                                            <Form.Item
                                                label={
                                                    <div className="tiepnhan-congkham-form-input-label">
                                                        Địa chỉ
                                                    </div>
                                                }
                                                className="w-100 m-0"
                                            >
                                                <Input className="form-control" />
                                            </Form.Item>
                                        </div>
                                        <div className="row tiepnhan-congkham-row">
                                            <Form.Item
                                                className="col-md-4 m-0"
                                                label={
                                                    <div className="tiepnhan-congkham-form-input-label">
                                                        Tỉnh
                                                    </div>
                                                }
                                            >
                                                <Input className="form-control "></Input>
                                            </Form.Item>

                                            <Form.Item
                                                className="col-md-4 m-0"
                                                label={
                                                    <div className="tiepnhan-congkham-form-input-label">
                                                        Quận
                                                    </div>
                                                }
                                            >
                                                <Input className="form-control"></Input>
                                            </Form.Item>
                                            <Form.Item
                                                className="col-md-4 m-0"
                                                label={
                                                    <div className="tiepnhan-congkham-form-input-label">
                                                        Xã
                                                    </div>
                                                }
                                            >
                                                <Input className="form-control"></Input>
                                            </Form.Item>
                                        </div>
                                        <div className="row tiepnhan-congkham-row">
                                            <Form.Item
                                                className="col-md-6 m-0"
                                                label={
                                                    <div className="tiepnhan-congkham-form-input-label">
                                                        Quốc gia
                                                    </div>
                                                }
                                            >
                                                <Input className="form-control "></Input>
                                            </Form.Item>

                                            <Form.Item
                                                className="col-md-6 m-0"
                                                label={
                                                    <div className="tiepnhan-congkham-form-input-label">
                                                        Nghề nghiệp
                                                    </div>
                                                }
                                            >
                                                <div className="input-select">
                                                    <Select />
                                                </div>
                                            </Form.Item>
                                        </div>
                                        <div className="row tiepnhan-congkham-row">
                                            <Form.Item
                                                className="col-md-6 m-0"
                                                label={
                                                    <div className="tiepnhan-congkham-form-input-label">
                                                        Người thân
                                                    </div>
                                                }
                                            >
                                                <Input className="form-control "></Input>
                                            </Form.Item>
                                            <Form.Item
                                                className="col-md-6 m-0"
                                                label={
                                                    <div className="tiepnhan-congkham-form-input-label">
                                                        Quan hệ
                                                    </div>
                                                }
                                            >
                                                <div className="input-select">
                                                    <Select />
                                                </div>
                                            </Form.Item>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-30 p-1 tiepnhan-congkham-border">
                            <div className="tiepnhan-congkham-title">
                                THÔNG TIN THẺ BẢO HIỂM Y TẾ
                            </div>
                            <div className="row">
                                <div className="row tiepnhan-congkham-row">
                                    <Form.Item
                                        label={
                                            <div className="tiepnhan-congkham-form-input-label-right">
                                                Đối tượng
                                            </div>
                                        }
                                        className="col-md-6 m-0"
                                    >
                                        <Input className="form-control" />
                                    </Form.Item>
                                    <Form.Item
                                        label={
                                            <div className="tiepnhan-congkham-form-input-label-right">
                                                Mã BHYT
                                            </div>
                                        }
                                        className="col-md-6 m-0"
                                    >
                                        <Input className="form-control" />
                                    </Form.Item>
                                </div>
                                <div className="row tiepnhan-congkham-row">
                                    <Form.Item
                                        label={
                                            <div className="tiepnhan-congkham-form-input-label-right">
                                                ĐK KCBBĐ
                                            </div>
                                        }
                                        className="col-md-6 m-0"
                                    >
                                        <div className="d-flex">
                                            <Input className="form-control w-75" />
                                            <Input className="form-control w-25" />
                                        </div>
                                    </Form.Item>

                                    <Form.Item
                                        label={
                                            <div className="tiepnhan-congkham-form-input-label-right">
                                                Ngày miễn
                                            </div>
                                        }
                                        className="col-md-6 m-0"
                                    >
                                        <Input className="form-control" type="date" />
                                    </Form.Item>
                                </div>
                                <div className="row tiepnhan-congkham-row">
                                    <Form.Item
                                        label={
                                            <div className="tiepnhan-congkham-form-input-label-right">
                                                Từ ngày
                                            </div>
                                        }
                                        className="col-md-6 m-0"
                                    >
                                        <Input className="form-control" type="date" />
                                    </Form.Item>
                                    <Form.Item
                                        label={
                                            <div className="tiepnhan-congkham-form-input-label-right">
                                                Đến ngày
                                            </div>
                                        }
                                        className="col-md-6  m-0"
                                    >
                                        <Input className="form-control" type="date" />
                                    </Form.Item>
                                </div>
                                <div className="row tiepnhan-congkham-row">
                                    <Form.Item
                                        label={
                                            <div className="tiepnhan-congkham-form-input-label-right">
                                                Đủ 5 năm
                                            </div>
                                        }
                                        className="col-md-6 m-0"
                                    >
                                        <Input className="form-control" type="date" />
                                    </Form.Item>
                                    <Form.Item
                                        label={
                                            <div className="tiepnhan-congkham-form-input-label-right">
                                                Khu vực
                                            </div>
                                        }
                                        className="col-md-6 m-0"
                                    >
                                        <Input className="form-control" />
                                    </Form.Item>
                                </div>
                                <div className="row tiepnhan-congkham-row">
                                    <Form.Item
                                        label={
                                            <div className="tiepnhan-congkham-form-input-label-right">
                                                Mã Q.Lợi
                                            </div>
                                        }
                                        className="col-md-6 m-0"
                                    >
                                        <Input className="form-control" />
                                    </Form.Item>
                                    <Form.Item
                                        label={
                                            <div className="tiepnhan-congkham-form-input-label-right">
                                                Quyền lợi
                                            </div>
                                        }
                                        className="col-md-6 m-0"
                                    >
                                        <Input className="form-control" />
                                    </Form.Item>
                                </div>
                                <div className="row tiepnhan-congkham-row">
                                    <Form.Item
                                        label={
                                            <div className="tiepnhan-congkham-form-input-label-right-form-last">
                                                Lý do Đ.Tuyến
                                            </div>
                                        }
                                        className="col-md-12 m-0"
                                    >
                                        <Input className="form-control" />
                                    </Form.Item>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="m-1">
                        <div className="tiepnhan-congkham-title mt-2">THÔNG TIN ĐĂNG KÝ KHÁM</div>
                        <div className="row">
                            <div className="col-md-7">
                                <div className="row tiepnhan-congkham-row">
                                    <Form.Item
                                        label={
                                            <div className="tiepnhan-congkham-form-input-label">
                                                Lý do khám
                                            </div>
                                        }
                                        className=" m-0"
                                    >
                                        <Input className="form-control " />
                                    </Form.Item>
                                </div>
                                <div className="row tiepnhan-congkham-row">
                                    <Form.Item
                                        label={
                                            <div className="tiepnhan-congkham-form-input-label">
                                                Ưu đãi
                                            </div>
                                        }
                                        className="col-md-7 m-0"
                                    >
                                        <Input className="form-control " />
                                    </Form.Item>
                                    <Form.Item
                                        label={
                                            <div className="tiepnhan-congkham-form-input-label">
                                                BS giới thiệu
                                            </div>
                                        }
                                        className="col-md-5 m-0 mt-1"
                                    >
                                        <div className="input-select">
                                            <Select />
                                        </div>
                                    </Form.Item>
                                </div>
                                <div className="row tiepnhan-congkham-row">
                                    <Form.Item
                                        label={
                                            <div className="tiepnhan-congkham-form-input-label">
                                                H.Áp(mm/Hg)
                                            </div>
                                        }
                                        className="col-md-4 m-0"
                                    >
                                        <div className="d-flex">
                                            <Input className="form-control " />
                                            <Input className="form-control " />
                                        </div>
                                    </Form.Item>
                                    <Form.Item
                                        label={
                                            <div className="tiepnhan-congkham-form-input-label">
                                                Nhịp mạch
                                            </div>
                                        }
                                        className="col-md-3 m-0"
                                    >
                                        <Input className="form-control" />
                                    </Form.Item>

                                    <Form.Item
                                        label={
                                            <div className="tiepnhan-congkham-form-input-label">
                                                Tai nạn
                                            </div>
                                        }
                                        className="col-md-5 m-0 mt-1"
                                    >
                                        <div className="input-select">
                                            <Select />
                                        </div>
                                    </Form.Item>
                                </div>
                                <div className="row tiepnhan-congkham-row">
                                    <Form.Item
                                        label={
                                            <div className="tiepnhan-congkham-form-input-label">
                                                Nhịp thở(l/p)
                                            </div>
                                        }
                                        className="col-md-4 m-0"
                                    >
                                        <Input className="form-control " />
                                    </Form.Item>

                                    <Form.Item
                                        label={
                                            <div className="tiepnhan-congkham-form-input-label">
                                                Nhiệt độ
                                            </div>
                                        }
                                        className="col-md-3 m-0"
                                    >
                                        <Input className="form-control" />
                                    </Form.Item>
                                    <Form.Item
                                        label={
                                            <div className="tiepnhan-congkham-form-input-label">
                                                Cấp cứu
                                            </div>
                                        }
                                        className="col-md-2 m-0 mt-1"
                                    >
                                        <Checkbox />
                                    </Form.Item>
                                    <Form.Item
                                        label={
                                            <div className="tiepnhan-congkham-form-input-label">
                                                Nơi khác đến
                                            </div>
                                        }
                                        className="col-md-3 m-0 mt-1"
                                    >
                                        <Checkbox />
                                    </Form.Item>
                                </div>
                                <div className="row tiepnhan-congkham-row">
                                    <Form.Item
                                        label={
                                            <div className="tiepnhan-congkham-form-input-label">
                                                Chiều cao
                                            </div>
                                        }
                                        className="col-md-4 m-0"
                                    >
                                        <Input className="form-control " />
                                    </Form.Item>

                                    <Form.Item
                                        label={
                                            <div className="tiepnhan-congkham-form-input-label">
                                                Cân nặng
                                            </div>
                                        }
                                        className="col-md-3 m-0"
                                    >
                                        <Input className="form-control" />
                                    </Form.Item>

                                    <Form.Item
                                        label={
                                            <div className="tiepnhan-congkham-form-input-label">
                                                Khám sức khỏe
                                            </div>
                                        }
                                        className="col-md-3 m-0 mt-1"
                                    >
                                        <Checkbox />
                                    </Form.Item>
                                </div>
                                <div className="row">
                                    <Form.Item
                                        label={
                                            <div className="tiepnhan-congkham-form-input-label">
                                                SPO2
                                            </div>
                                        }
                                        className="col-md-4 m-0 "
                                    >
                                        <Input className="form-control" />
                                    </Form.Item>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="m-1">
                                    <Form.Item
                                        label={
                                            <div className="tiepnhan-congkham-form-input-label">
                                                Công khám
                                            </div>
                                        }
                                        className="m-0 mt-1"
                                    >
                                        <div className="input-select">
                                            <Select />
                                        </div>
                                    </Form.Item>
                                    <Table
                                        dataSource={dataSource}
                                        columns={columns}
                                        pagination={false}
                                        scroll={{ x: true, y: "10vh" }}
                                        size="small"
                                        bordered={true}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Form>
            </div>
        </>
    );
}

export default Congkham;
