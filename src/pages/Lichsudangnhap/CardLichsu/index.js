import "./cardlichsu.scss";
function CardLichsu(props) {
    const { data } = props;
    return (
        <>
            <div>
                <div className="box-lichsu">
                    <div className="w-100">
                        <div className="noidung-lichsudangnhap">
                            <div>
                                <span className="label">Địa chỉ IP:</span>
                                <span className="content">{data.IPWan}</span>
                            </div>
                            <div>
                                <span className="label">Máy tính:</span>
                                <span className="content">{data.ComputerName}</span>
                            </div>
                            <div>
                                <span className="label">Thời gian:</span>
                                <span className="content">{data.IDate}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardLichsu;
