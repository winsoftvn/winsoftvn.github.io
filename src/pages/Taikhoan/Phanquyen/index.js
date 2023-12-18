import React, { useState } from "react";
import { CarryOutOutlined, CheckOutlined, FormOutlined } from "@ant-design/icons";
import { Button, Checkbox, Tree } from "antd";
import "./phanquyen.scss";
import { faSave } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Phanquyen() {
    const [showLine, setShowLine] = useState(true);
    const [showIcon, setShowIcon] = useState(false);
    const [showLeafIcon, setShowLeafIcon] = useState(false);
    const [selectedKeys, setSelectedKeys] = useState([]);
    const [autoExpandParent, setAutoExpandParent] = useState(true);
    const [expandedKeys, setExpandedKeys] = useState(["6", "7"]);

    const onSelect = (selectedKeys, info) => {
        console.log("selected", selectedKeys, info);
    };

    const onCheck = (checkedKeys, info) => {
        console.log("onCheck", checkedKeys, info);
    };

    const onChange = (checkedValues) => {
        console.log("checked = ", checkedValues);
    };
    const onExpand = (expandedKeysValue) => {
        console.log("onExpand", expandedKeysValue);
        setExpandedKeys(expandedKeysValue);
        setAutoExpandParent(false);
    };
    const treeData = [
        {
            title: <div className="form-input-label">Medic</div>,
            key: "1",
        },
        {
            title: <div className="form-input-label">X-Quang</div>,
            key: "2",
        },
        {
            title: <div className="form-input-label">ABC</div>,
            key: "3",
        },
        {
            title: <div className="form-input-label">VPCN</div>,
            key: "4",
        },
        {
            title: <div className="form-input-label">PHCN</div>,
            key: "5",
        },
        {
            title: <div className="form-input-label">Điều dưỡng </div>,
            key: "6",
            icon: <CarryOutOutlined />,
            children: [
                {
                    title: <div className="form-input-label">Bùi Thị Bé </div>,
                    key: "6.1",
                },
            ],
        },
        {
            title: <div className="form-input-label">BGĐ </div>,
            key: "7",
            icon: <CarryOutOutlined />,
            children: [
                {
                    title: <div className="form-input-label">Thiều Khắc Thành</div>,
                    key: "7.1",
                },
            ],
        },
        {
            title: <div className="form-input-label">Hành chánh</div>,
            key: "8",
            icon: <CarryOutOutlined />,
            children: [
                {
                    title: <div className="form-input-label">Hoàng Thi Bích </div>,
                    key: "8.1",
                },
            ],
        },
        {
            title: <div className="form-input-label">KTV CĐHA</div>,
            key: "9",
            icon: <CarryOutOutlined />,
            children: [
                {
                    title: <div className="form-input-label">Phạm Minh Hoàng </div>,
                    key: "9.1",
                },
            ],
        },
        {
            title: <div className="form-input-label">KTV Xét nghiệm</div>,
            key: "10",
            icon: <CarryOutOutlined />,
            children: [
                {
                    title: <div className="form-input-label">CN.Hoàng Xuân </div>,
                    key: "10.1",
                },
            ],
        },
        {
            title: <div className="form-input-label">Tiếp nhận</div>,
            key: "11",
        },
        {
            title: <div className="form-input-label">Dược sĩ</div>,
            key: "12",
            icon: <CarryOutOutlined />,
            children: [
                {
                    title: <div className="form-input-label">Phạm Hoàng Nguyên</div>,
                    key: "12.1",
                },
            ],
        },
        {
            title: <div className="form-input-label">Thu ngân</div>,
            key: "13",
            icon: <CarryOutOutlined />,
            children: [
                {
                    title: <div className="form-input-label">Nguyễn Tú vi</div>,
                    key: "13.1",
                },
            ],
        },
        {
            title: <div className="form-input-label">Bác sĩ</div>,
            key: "14",
            icon: <CarryOutOutlined />,
            children: [
                {
                    title: <div className="form-input-label">Phan Trọng Hiếu</div>,
                    key: "14.1",
                },
            ],
        },
    ];
    const treeData1 = [
        {
            title: <div className="form-input-label">Tất cả</div>,
            key: "0",
            icon: <CarryOutOutlined />,
            children: [
                {
                    title: <div className="form-input-label">Tiếp nhận</div>,
                    key: "1",
                    children: [
                        {
                            title: <div className="form-input-label">Tiếp nhận - Nhận bệnh</div>,
                            key: "1.1",
                            children: [
                                {
                                    title: (
                                        <div className="form-input-label">
                                            Tiếp nhận - Nhận bệnh
                                        </div>
                                    ),
                                    key: "1.1.1",
                                },
                                {
                                    title: <div className="form-input-label">Hẹn khám bệnh</div>,
                                    key: "1.1.2",
                                    children: [
                                        {
                                            title: (
                                                <div className="form-input-label">
                                                    Quản lý lịch hẹn
                                                </div>
                                            ),
                                            key: "1.1.2.1",
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    title: <div className="form-input-label">Khám bệnh</div>,
                    key: "2",
                    children: [
                        {
                            title: <div className="form-input-label">Khám bệnh - Nghiệp vụ</div>,
                            key: "2.1",
                            children: [
                                {
                                    title: <div className="form-input-label">Kh.Bệnh - P.Khám</div>,
                                    key: "2.1.1",
                                },
                                {
                                    title: <div className="form-input-label">Truyền dịch</div>,
                                    key: "2.1.2",
                                },
                                {
                                    title: (
                                        <div className="form-input-label">
                                            Hồ sơ bệnh án nghoại trú
                                        </div>
                                    ),
                                    key: "2.1.3",
                                },
                                {
                                    title: (
                                        <div className="form-input-label">
                                            Xuất thuốc tủ trực && vật tư
                                        </div>
                                    ),
                                    key: "2.1.4",
                                },
                            ],
                        },
                        {
                            title: <div className="form-input-label">Khám bệnh - Danh mục</div>,
                            key: "2.2",
                            children: [
                                {
                                    title: <div className="form-input-label">Danh mục</div>,
                                    key: "2.2.1",
                                    children: [
                                        {
                                            title: (
                                                <div className="form-input-label">
                                                    Chuẩn đoán bệnh chính ICD-10
                                                </div>
                                            ),
                                            key: "2.2.1.1",
                                        },
                                        {
                                            title: (
                                                <div className="form-input-label">
                                                    Triệu chúng bệnh
                                                </div>
                                            ),
                                            key: "2.2.1.2",
                                        },
                                        {
                                            title: <div className="form-input-label">Lời dặn</div>,
                                            key: "2.2.1.3",
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    title: <div className="form-input-label">Viện phí</div>,
                    key: "3",
                    children: [
                        {
                            title: <div className="form-input-label">VP - Phiếu thu</div>,
                            key: "3.1",
                            children: [
                                {
                                    title: <div className="form-input-label">Phiếu thu tiền</div>,
                                    key: "3.1.1",
                                },
                                {
                                    title: (
                                        <div className="form-input-label">Phiếu thu tạm ứng</div>
                                    ),
                                    key: "3.1.2",
                                },
                                {
                                    title: (
                                        <div className="form-input-label">Nhận trả thẻ BHYT</div>
                                    ),
                                    key: "3.1.3",
                                },
                            ],
                        },
                        {
                            title: <div className="form-input-label">VP - Danh mục</div>,
                            key: "3.2",
                            children: [
                                {
                                    title: <div className="form-input-label">Danh mục</div>,
                                    key: "3.2.1",
                                    children: [
                                        {
                                            title: (
                                                <div className="form-input-label">
                                                    Nhóm viện phí hệ thống
                                                </div>
                                            ),
                                            key: "3.2.1.1",
                                        },
                                        {
                                            title: (
                                                <div className="form-input-label">
                                                    Khai báo nhóm chuyển khoa BYT
                                                </div>
                                            ),
                                            key: "3.2.1.2",
                                        },
                                        {
                                            title: (
                                                <div className="form-input-label">
                                                    Khai báo nhóm viện phí (PK)
                                                </div>
                                            ),
                                            key: "3.2.1.3",
                                        },
                                        {
                                            title: (
                                                <div className="form-input-label">
                                                    Khai báo nhóm in
                                                </div>
                                            ),
                                            key: "3.2.1.4",
                                        },
                                        {
                                            title: (
                                                <div className="form-input-label">
                                                    Khai báo loại viện phí
                                                </div>
                                            ),
                                            key: "3.2.1.5",
                                        },
                                        {
                                            title: (
                                                <div className="form-input-label">
                                                    Khai báo dịch vụ kỹ thuật
                                                </div>
                                            ),
                                            key: "3.2.1.6",
                                        },
                                        {
                                            title: (
                                                <div className="form-input-label">
                                                    Khai báo giá dịch vụ kỹ thuật
                                                </div>
                                            ),
                                            key: "3.2.1.7",
                                        },
                                        {
                                            title: (
                                                <div className="form-input-label">
                                                    Khai báo gói dịch vụ kỹ thuật
                                                </div>
                                            ),
                                            key: "3.2.1.8",
                                        },
                                        {
                                            title: (
                                                <div className="form-input-label">Đơn vị tính</div>
                                            ),
                                            key: "3.2.1.9",
                                        },
                                        {
                                            title: (
                                                <div className="form-input-label">
                                                    Khai báo quyển sổ
                                                </div>
                                            ),
                                            key: "3.2.1.10",
                                        },
                                        {
                                            title: (
                                                <div className="form-input-label">
                                                    Khai báo giới hạn thời gian chỉ định DVKT
                                                </div>
                                            ),
                                            key: "3.2.1.11",
                                        },
                                        {
                                            title: (
                                                <div className="form-input-label">
                                                    Khai báo DVKT không cho phép chỉ định đông thời
                                                </div>
                                            ),
                                            key: "3.2.1.12",
                                        },
                                        {
                                            title: (
                                                <div className="form-input-label">
                                                    Khai báo dịch vụ cảnh báo viết ghi chú trong chỉ
                                                    định"
                                                </div>
                                            ),
                                            key: "3.2.1.13",
                                        },
                                        {
                                            title: (
                                                <div className="form-input-label">
                                                    Khai báo DVKT bắt buộc có kết quả khi KQ điều
                                                    trị
                                                </div>
                                            ),
                                            key: "3.2.1.14",
                                        },
                                        {
                                            title: (
                                                <div className="form-input-label">
                                                    Map dịch vụ DVKT với máy thực hiện cận lâm sàn
                                                </div>
                                            ),
                                            key: "3.2.1.15",
                                        },
                                        {
                                            title: (
                                                <div className="form-input-label">
                                                    Khai báo DVKT thuật hiện phẩu thuật xuất XML5
                                                </div>
                                            ),
                                            key: "3.2.1.16",
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ];

    const options = [
        {
            label: <div className="form-input-label">PK KSK</div>,
            value: "1",
        },
        {
            label: <div className="form-input-label">OK TAI MŨI HỌNG</div>,
            value: "2",
        },
        {
            label: <div className="form-input-label">PK RĂNG HÀM MẶT</div>,
            value: "3",
        },
        {
            label: <div className="form-input-label">PK NHI</div>,
            value: "4",
        },
        {
            label: <div className="form-input-label">PK NỘI</div>,
            value: "5",
        },
        {
            label: <div className="form-input-label">PK DA LIỄU</div>,
            value: "6",
        },
        {
            label: <div className="form-input-label">PHÒNG CHÂM CỨU</div>,
            value: "7",
        },
        {
            label: <div className="form-input-label">PHÒNG PHẨU THUẬT</div>,
            value: "8",
        },
        {
            label: <div className="form-input-label">NỌI SOI TAI MUI HỌNG</div>,
            value: "9",
        },
        {
            label: <div className="form-input-label">PK SÀNG LỌC TIÊM CHỦNG</div>,
            value: "10",
        },
        {
            label: <div className="form-input-label">PHÒNG ĐIỆN TIM</div>,
            value: "11",
        },
        {
            label: <div className="form-input-label">NỌI SOI PHỤ SẢN</div>,
            value: "12",
        },
        {
            label: <div className="form-input-label">PHÒNG CHÂM CỨU - XOA BÓP - BẤM HUYỆT</div>,
            value: "13",
        },
    ];
    const treeData2 = [
        {
            title: "parent 1",
            key: "0-0",
            children: [
                {
                    title: "parent 1-0",
                    key: "0-0-0",
                    disabled: true,
                    children: [
                        {
                            title: "leaf",
                            key: "0-0-0-0",
                            disableCheckbox: true,
                        },
                        {
                            title: "leaf",
                            key: "0-0-0-1",
                        },
                    ],
                },
                {
                    title: "parent 1-1",
                    key: "0-0-1",
                    children: [
                        {
                            title: (
                                <span
                                    style={{
                                        color: "#1677ff",
                                    }}
                                >
                                    sss
                                </span>
                            ),
                            key: "0-0-1-0",
                        },
                    ],
                },
            ],
        },
    ];
    return (
        <div>
            <div className="d-flex vh-100">
                <div className="w-20 h-100">
                    {" "}
                    <div className="scroll-phanquyen-1">
                        <div className="color-border h-100">
                            <div className="bg-label fw-bold p-1 form-input-label">
                                Người dùng WINOSFT_VIETNAM
                            </div>

                            <Tree
                                showLine={
                                    showLine
                                        ? {
                                              showLeafIcon,
                                          }
                                        : false
                                }
                                showIcon={showIcon}
                                defaultExpandedKeys={[
                                    "1",
                                    "2",
                                    "3",
                                    "4",
                                    "5",
                                    "6",
                                    "7",
                                    "8",
                                    "9",
                                    "10",
                                    "11",
                                    "12",
                                    "13",
                                    "14",
                                ]}
                                onSelect={onSelect}
                                treeData={treeData}
                            />
                        </div>
                    </div>
                </div>
                <div className="w-40 h-100">
                    {" "}
                    <div className="scroll-phanquyen-1">
                        <div className="color-border ">
                            <div className="bg-label fw-bold p-1 form-input-label">
                                Chức năng sử dụng
                            </div>

                            <div className="treenode py-1">
                                <Tree
                                    showLine={
                                        showLine
                                            ? {
                                                  showLeafIcon,
                                              }
                                            : false
                                    }
                                    showIcon={showIcon}
                                    defaultExpandedKeys={[
                                        "1",
                                        "1.1",
                                        "1.1.1",
                                        "1.1.2",
                                        "2",
                                        "2.1",
                                        "2.2",
                                        "2.2.1",
                                        "3",
                                        "3.1",
                                        "3.2",
                                        "3.2.1",
                                    ]}
                                    defaultSelectedKeys={["6.1", "7.1"]}
                                    onSelect={onSelect}
                                    onCheck={onCheck}
                                    treeData={treeData1}
                                    checkable
                                    onExpand={onExpand}
                                    expandAction={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-50 h-100">
                    <div className="color-border">
                        <div className="h-50">
                            <div className="scroll-phanquyen-2">
                                <div className=" d-flex bg-label">
                                    <div className=" fw-bold p-1 form-input-label">
                                        Phân quyền khoa phòng
                                    </div>
                                    <div>
                                        <Button className="form-btn ">
                                            <FontAwesomeIcon icon={faSave} />
                                        </Button>
                                    </div>
                                </div>

                                <div className="phanquyenkhoaphong px-2 py-1">
                                    <Checkbox.Group options={options} onChange={onChange} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="color-border">
                        <div className="h-50">
                            <div className="scroll-phanquyen-2">
                                <div className=" d-flex bg-label">
                                    <div className=" fw-bold p-1 form-input-label">
                                        Kho xuất bán
                                    </div>
                                    <div>
                                        <Button className="form-btn ">
                                            <FontAwesomeIcon icon={faSave} />
                                        </Button>
                                    </div>
                                </div>

                                <div className="px-2 py-1">
                                    <Checkbox.Group options={options} onChange={onChange} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Phanquyen;
