import { Button, Table, Checkbox, Input, Space } from "antd";
import ds from "../../../../util/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import CtKhaibaouser from "../Detail";

function Khaibaouser() {
    const [open, setOpen] = useState(false);

    const handleDataCreate = () => {
        setOpen(true);
    };

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
                    width: 200,
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
                        icon={<FontAwesomeIcon icon={faSearch} />}
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
        filterIcon: (filtered) => <FontAwesomeIcon icon={faSearch} />,
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

    const column0 = [
        {
            title: "Họ tên",
            dataIndex: "TDV",
            fixed: "left",
            ...getColumnSearchProps("TDV"),
            render: (TDV) => <div style={{ width: "200px" }}> {TDV} </div>,
        },
        {
            title: "Giới tính",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "130px" }}> {TDVVT} </div>,
        },
        {
            title: "Điện thoại",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "TAX/CMND",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Địa chỉ",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Ngày sinh",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Chức danh",
            dataIndex: "MADVKT",
            align: "center",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Tên đăng nhập",
            dataIndex: "MADVKT",
            align: "center",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Mật khẩu",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Nghỉ việc",
            dataIndex: "MADVKT",
            align: "center",
            render: (TDVVT) => (
                <div style={{ width: "200px" }}>
                    {" "}
                    <Checkbox />{" "}
                </div>
            ),
        },
        {
            title: "Phòng",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Nhóm",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Mã BS/CCHN",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Chữ ký",
            dataIndex: "MADVKT",
            align: "center",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "STT",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
    ];
    return (
        <>
            <div>
                <div className="d-flex justify-content-between align-items-center mt-2 mx-2">
                    <div className="d-flex align-items-center ">
                        <div className="vienphi-danhmuc-title mx-2">Khai báo user</div>
                    </div>
                    <div className="text-end">
                        <Button className="form-btn bg" onClick={handleDataCreate}>
                            <FontAwesomeIcon icon={faPlus} className="mx-1" />
                            Thêm mới
                        </Button>
                    </div>
                </div>
                <CtKhaibaouser open={open} setOpen={setOpen} />
                <div className="mt-2 p-1" style={{ height: "100vh" }}>
                    <Table
                        dataSource={ds}
                        columns={column0}
                        scroll={{ x: true, y: "100vh" }}
                        size="small"
                        pagination={false}
                        // pagination={{ pageSize: "50" }}
                        bordered={true}
                    />
                </div>
            </div>
        </>
    );
}

export default Khaibaouser;
