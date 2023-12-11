import { Modal, Button, Form, Input, Table, Space } from "antd";
import ds from "../../../../util/data";
// import Swal from "sweetalert2";
import { SearchOutlined } from "@ant-design/icons";
import React, { useRef, useState } from "react";
import Highlighter from "react-highlight-words";
function ModelDonthuoc(props) {
    const { open, setOpen, setValueThuoc } = props;

    const [searchText, setSearchText] = useState("");
    const [searchedColumn, setSearchedColumn] = useState("");
    const searchInput = useRef(null);
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => (
            <div
                style={{
                    padding: 8,
                }}
                onKeyDown={(e) => e.stopPropagation()}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: "block",
                    }}
                    className="form-control"
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Tìm kiếm
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? "#1677ff" : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: "#ffc069",
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ""}
                />
            ) : (
                text
            ),
    });

    const columns = [
        {
            title: "Hoạt chất",
            dataIndex: "TDV",
            key: "TDV",
            ...getColumnSearchProps("TDV"),
        },
        {
            title: "Tên thuốc",
            dataIndex: "TDVVT",
            key: "TDVVT",
            ...getColumnSearchProps("TDVVT"),
        },
        {
            title: "Hàm lượng",
            dataIndex: "MADVKT",
            ...getColumnSearchProps("MADVKT"),
        },
        {
            title: "Đơn vị tính",
            dataIndex: "DVT",
            ...getColumnSearchProps("DVT"),
        },
        {
            title: "Giá dịch vụ",
            dataIndex: "PTH",
            ...getColumnSearchProps("PTH"),
        },
    ];

    const handleChonThuoc = (a) => {
        setValueThuoc(a);
        console.log(a);
        setOpen(false);
    };
    return (
        <>
            <Modal
                title={
                    <>
                        <div className="modal-title">DANH SÁCH THUỐC</div>
                        <hr />
                    </>
                }
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
                <div className="text-center">
                    <Table
                        columns={columns}
                        dataSource={ds}
                        pagination={false}
                        scroll={{ x: true, y: 300 }}
                        onRow={(r) => ({
                            onClick: () => handleChonThuoc(r),
                        })}
                    />
                </div>
            </Modal>
        </>
    );
}

export default ModelDonthuoc;
