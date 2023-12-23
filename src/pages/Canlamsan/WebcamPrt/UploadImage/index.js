import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Modal, Upload } from "antd";

function Load(prop) {
    const getBase64 = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });

    const { open, setOpen, handlePushImageUpload, dsanh } = prop;
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState("");
    const [previewTitle, setPreviewTitle] = useState("");
    const [fileList, setFileList] = useState([]);
    const handleCancel = () => setPreviewOpen(false);
    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf("/") + 1));
    };
    const handleChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };

    const handleLoadImage = () => {
        fileList.map((item) => {
            let check = 0;
            dsanh.map((item1) => {
                if (item1 === item.thumbUrl) {
                    check = 1;
                }
            });
            if (check === 0) {
                handlePushImageUpload(item.thumbUrl);
            }
        });

        setPreviewImage(null);
        setOpen(false);
    };

    const fileProps = {
        name: "file",
        multiple: true,
        listType: "picture-card",
        onPreview: handlePreview,
        onChange: handleChange,
        className: "upload-img",
        type: "file",
        beforeUpload: () => {
            return false;
        },
    };
    const uploadButton = (
        <div>
            <PlusOutlined />
            <div
                style={{
                    marginTop: 6,
                }}
            >
                Tải ảnh
            </div>
        </div>
    );
    return (
        <>
            <>
                <Modal
                    title={
                        <>
                            <div className="d-flex justify-content-between">
                               
                                <div>Tải ảnh lên</div>
                                <Button
                                    onClick={handleLoadImage}
                                    className="mx-4 form-btn bg fw-bold"
                                >
                                    Chọn
                                </Button>
                            </div>
                            <hr className="p-0 m-0  mt-1" />
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
                    width={1200}
                >
                    <Upload {...fileProps}>{uploadButton}</Upload>
                    <Modal
                        title={previewTitle}
                        open={previewOpen}
                        footer={null}
                        onCancel={handleCancel}
                        width={1200}
                    >
                        <img
                            alt="example"
                            style={{
                                width: "100%",
                            }}
                            src={previewImage}
                        />
                    </Modal>
                </Modal>
            </>
        </>
    );
}

export default Load;
