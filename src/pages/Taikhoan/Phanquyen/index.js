import React, { useEffect, useState } from "react";
import { CarryOutOutlined } from "@ant-design/icons";
import { Button, Checkbox, Tooltip, Tree } from "antd";
import { faCopy, faSave, faPaste } from "@fortawesome/free-solid-svg-icons";
import "./phanquyen.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import menuAPI from "../../../services/menu";
import employeeAPI from "../../../services/employeeAPI";
import loginAPI from "../../../services/loginApi";
import phanquyenAPI from "../../../services/phanquyenAPI";
import { successInfo } from "../../../components/Dialog/Dialog";
import Swal from "sweetalert2";
function Phanquyen() {
    const [showLine, setShowLine] = useState(true);
    const [showLeafIcon, setShowLeafIcon] = useState(false);

    const [listMenu, setListMenu] = useState([]);
    const [listEmployee, setListEmployee] = useState([]);

    const [userPhanQuyen, setUserPhanQuyen] = useState([]);
    const [phanquyenMenu, setphanquyenMenu] = useState();
    const [userlogin, setUserLogin] = useState();

    const [copyphanquyen, setCopyPhanQuyen] = useState();
    console.log("copyphanquyen: ", copyphanquyen);
    const [pastephanquyen, setPastePhanQuyen] = useState();

    const [expandedKeys, setExpandedKeys] = useState([]);
    const [selectedKeys, setSelectedKeys] = useState([]);
    const [autoExpandParent, setAutoExpandParent] = useState(true);

    //xử lý thao tác tree
    const onSelectUser = (selectedKeys) => {
        console.log("selectedKeys: ", selectedKeys);
        setUserPhanQuyen(selectedKeys);
        getPhanQuyenMenu(selectedKeys);
    };

    const onCheckMenu = async (checkedKeys) => {
        setphanquyenMenu(checkedKeys);
    };
    const onChange = (checkedValues) => {
        console.log("checked = ", checkedValues);
    };

    const onSelect = (selectedKeysValue, info) => {
        setSelectedKeys(selectedKeysValue);
    };
    const onExpand = (expandedKeysValue) => {
        setExpandedKeys(expandedKeysValue);
        setAutoExpandParent(false);
    };
    ///////

    // hàm
    const getAllMenu = async () => {
        try {
            const data = await menuAPI.getAll();
            setListMenu(data.data);
            let a = data.data.map((item) => {
                return item.MenuID;
            });
            setExpandedKeys(a);
        } catch (err) {
            throw new Error(err);
        }
    };
    const getAllEmployee = async () => {
        try {
            const data = await employeeAPI.getAll();
            setListEmployee(data.data.recordset);
        } catch (err) {
            throw new Error(err);
        }
    };
    const getAllUser = async () => {
        try {
            const data = await loginAPI.profileFetch();
            setUserLogin(data.data);
        } catch (err) {
            localStorage.removeItem("token");
            throw new Error(err);
        }
    };

    const getPhanQuyenMenu = async (a) => {
        const data = await phanquyenAPI.getPhanQuyen(Number(a));
        let b = data.data.map((item) => {
            return item.MenuID;
        });
        setphanquyenMenu(b);
    };
    // xử lý lưu phân quyền
    const handlePhanQuyen = async () => {
        let a = {
            RowID_Employee: userPhanQuyen[0],
            RowID_Employee_IU: Number(userlogin?.RowID),
        };
        let data = await phanquyenAPI.delete(a);
        console.log("data: ", data);

        let arr = phanquyenMenu?.map((item) => {
            let b = {
                ...a,
                MenuID: item,
            };
            return b;
        });
        let data1 = await phanquyenAPI.create(arr);
        if (data1.data.Code === "ok") {
            successInfo(data1.data.Content);
        }
    };
    useEffect(() => {
        getAllMenu();
        getAllEmployee();
        getAllUser();
    }, []);

    //xử lý dữ liệu phân quyền menu

    let a = listMenu.map((item) => {
        let c = [];
        listMenu.map((item1) => {
            if (item.MenuID === item1.Parent_MenuID) {
                c.push(item1);
            }
        });
        let b = {
            ...item,
            child: c,
        };
        return b;
    });
    let arr = a.filter((item) => item.Parent_MenuID === 0);

    //xử lý copy phân quyền

    const handleCopyPhanQuyen = () => {
        setCopyPhanQuyen(phanquyenMenu);
        successInfo("Đã copy phân quyền");
    };
    const handlePastePhanQuyen = () => {
        Swal.fire({
            text: "Nếu bạn đồng ý thì phân quyền cũ sẽ được thay thế !",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#0067ac",
            cancelButtonColor: "#d33",
            cancelButtonText: "Hủy",
            confirmButtonText: "Đồng ý",
        }).then((result) => {
            if (result.isConfirmed) {
                setphanquyenMenu(copyphanquyen);
                successInfo("Đã dán thành công !");
            }
        });
    };
    //truyền props
    const treeData1 = [
        {
            title: <div className="form-input-label">Tất cả</div>,
            key: 0,
            icon: <CarryOutOutlined />,
            children: arr.map((item) => ({
                title: <div className="form-input-label">{item.MenuName_Full}</div>,
                key: item.MenuID,
                children: item.child.map((item1) => ({
                    title: <div className="form-input-label">{item1.MenuName_Full}</div>,
                    key: item1.MenuID,
                })),
            })),
        },
    ];

    const treeData = listEmployee.map((item) => ({
        title: item.EmployeeName,
        key: item.RowID,
    }));

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

    useEffect(() => {
        getAllMenu();
    }, []);
    return (
        <div>
            <div className="d-flex vh-100">
                <div className="w-20 h-100">
                    <div className="scroll-phanquyen-1">
                        <div className="color-border h-100">
                            <div className=" d-flex bg-label align-items-center">
                                <div className=" fw-bold p-1 form-input-label">
                                    Người dùng WINOSFT_VIETNAM
                                </div>
                                {userPhanQuyen[0] && (
                                    <div>
                                        <Tooltip
                                            placement="bottom"
                                            title={
                                                <div className="form-input-label">
                                                    Sao chép phân quyền
                                                </div>
                                            }
                                            color="#0067ac"
                                        >
                                            <Button
                                                className="btn-icon"
                                                onClick={handleCopyPhanQuyen}
                                            >
                                                <FontAwesomeIcon icon={faCopy} />
                                            </Button>
                                        </Tooltip>
                                    </div>
                                )}
                            </div>
                            <Tree
                                showLine={
                                    showLine
                                        ? {
                                              showLeafIcon,
                                          }
                                        : false
                                }
                                onSelect={onSelectUser}
                                treeData={treeData}
                                className="form-input-label"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-40 h-100">
                    <div className="scroll-phanquyen-1">
                        <div className="color-border vh-100">
                            <div className=" d-flex bg-label align-items-center">
                                <div className=" fw-bold p-1 form-input-label">
                                    Chức năng sử dụng
                                </div>
                                <div>
                                    <Tooltip
                                        placement="bottom"
                                        title={
                                            <div className="form-input-label">Lưu phân quyền</div>
                                        }
                                        color="#0067ac"
                                    >
                                        <Button className="btn-icon" onClick={handlePhanQuyen}>
                                            <FontAwesomeIcon icon={faSave} />
                                        </Button>
                                    </Tooltip>
                                </div>
                                {copyphanquyen && (
                                    <div>
                                        <Tooltip
                                            placement="bottom"
                                            title={
                                                <div className="form-input-label">
                                                    Dán phân quyền
                                                </div>
                                            }
                                            color="#0067ac"
                                        >
                                            <Button
                                                className="btn-icon"
                                                onClick={handlePastePhanQuyen}
                                            >
                                                <FontAwesomeIcon icon={faPaste} />
                                            </Button>
                                        </Tooltip>
                                    </div>
                                )}
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
                                    checkable
                                    onExpand={onExpand}
                                    expandedKeys={expandedKeys}
                                    autoExpandParent={autoExpandParent}
                                    onCheck={onCheckMenu}
                                    checkedKeys={phanquyenMenu}
                                    onSelect={onSelect}
                                    selectedKeys={selectedKeys}
                                    treeData={treeData1}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-50 h-100">
                    <div className="color-border">
                        <div className="h-50">
                            <div className="scroll-phanquyen-2">
                                <div className=" d-flex bg-label align-items-center">
                                    <div className=" fw-bold p-1 form-input-label">
                                        Phân quyền khoa phòng
                                    </div>
                                    <div>
                                        <Button className="btn-icon ">
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
                                <div className=" d-flex bg-label align-items-center">
                                    <div className=" fw-bold p-1 form-input-label">
                                        Kho xuất bán
                                    </div>
                                    <div>
                                        <Button className="btn-icon ">
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
