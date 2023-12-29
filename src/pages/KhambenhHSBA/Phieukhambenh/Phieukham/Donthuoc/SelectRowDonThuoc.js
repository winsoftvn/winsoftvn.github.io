import React, { useState, useEffect } from "react";

function SelectRowDonThuoc(props) {
    const { red, setValueThuocChon, setValueInputThuoc, valueInputThuoc, refNcap } = props;
    const [selectedRowIndex, setSelectedRowIndex] = useState(0);

    const handleKeyDown = (e) => {
        if (e.key === "ArrowUp" && selectedRowIndex > 0) {
            setSelectedRowIndex(selectedRowIndex - 1);
        } else if (e.key === "ArrowDown" && selectedRowIndex < red.length - 1) {
            setSelectedRowIndex(selectedRowIndex + 1);
        }
        if (e.key === "Enter") {
            setValueThuocChon(red[selectedRowIndex]);
            setValueInputThuoc(false);
            if (refNcap.current) {
                refNcap.current.focus();
            }
        }
    };

    const clickChooseThuoc = (e) => {
        setValueThuocChon(e);
        setValueInputThuoc(false);
        if (refNcap.current) {
            refNcap.current.focus();
        }
    };
    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [valueInputThuoc, selectedRowIndex]);
    return (
        <>
            <div className="div-box-search">
                <div className="text-center form-input-label thdonthuoc">
                    <div className=" w-25 ">Tên thuốc</div>
                    <div className=" w-25">H.lượng</div>
                    <div className=" w-25">Email</div>
                    <div className=" w-25">Phone</div>
                </div>
                <div className="scroll">
                    <table onKeyDown={handleKeyDown} tabIndex="0" className="w-100">
                        <tbody className="form-input-label">
                            {red.map((row, index) => (
                                <tr
                                    key={index}
                                    className={
                                        index === selectedRowIndex ? "bg-active" : "bg-unactive"
                                    }
                                    onClick={() => clickChooseThuoc(row)}
                                >
                                    <td className=" w-25 ">{row.name}</td>
                                    <td className=" w-25 ">{row.id}</td>
                                    <td className=" w-25 ">{row.email}</td>{" "}
                                    <td className=" w-25 ">{row.phone}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default SelectRowDonThuoc;
