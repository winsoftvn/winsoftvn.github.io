import { Button, Checkbox, Form, Image } from "antd";
import { useEffect, useState } from "react";
import "./webcam.scss";
import Load from "./UploadImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose} from "@fortawesome/free-solid-svg-icons";
import { RiImageAddLine } from "react-icons/ri";

import EditorImage from "./EditorImage";
const WebcamCapture = () => {
    const [anh, setAnh] = useState();
    const [dsanh, setDSAnh] = useState([]);
    const [value, setValue] = useState(true);
    const [open, setOpen] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);

    const handlePushImageUpload = (a) => {
        dsanh.push(a);
    };
    const handleDeleteImage = (a) => {
        let b = dsanh.filter((item) => item != a);
        setDSAnh(b);
        setValue(!value);
    };
    const [imgChoose, setImgChoose] = useState({});
    const [openEditor, setOpenEditor] = useState(false);

    const handleOpenEditor = (a, b) => {
        setOpenEditor(true);
        let img = {
            vitri: b,
            linkanh: a,
        };
        setImgChoose(img);
    };
    return (
        <>
            <div>
                <div className="bg-title fw-bold p-1 title-fixed d-flex justify-content-between">
                    <div>Hình ảnh</div>{" "}
                    <div>
                        <Button
                            className="form-btn form-input-label d-flex "
                            onClick={() => setOpen(true)}
                        >
                             <RiImageAddLine className="mx-2" />
                            Tải ảnh lên
                        </Button>
                        <Load
                            open={open}
                            setOpen={setOpen}
                            dsanh={dsanh}
                            handlePushImageUpload={handlePushImageUpload}
                        />
                    </div>
                </div>
                <div className="webcam">
                    <div className="d-flex flex-wrap ">
                        {" "}
                        {anh === ""
                            ? ""
                            : dsanh.map((item, index) => (
                                  <div className="box-image m-1">
                                      <img
                                          src={item}
                                          width={105}
                                          height={100}
                                          key={index}
                                          onClick={() => handleOpenEditor(item, index)}
                                      />
                                      <div className="btn-close-webcam m-1">
                                          <Button
                                              className="btn-icon-close"
                                              onClick={() => handleDeleteImage(item)}
                                          >
                                              <FontAwesomeIcon icon={faClose} size="10px" />
                                          </Button>
                                      </div>
                                      <div className="content m-1">
                                          <div>H{index + 1}</div>
                                      </div>
                                      <div className="cb-img m-1">
                                          <div>
                                              <Form className="m-0 p-0">
                                                  <Form.Item className="m-0 p-0">
                                                      <Checkbox defaultChecked />
                                                  </Form.Item>
                                              </Form>
                                          </div>
                                      </div>
                                  </div>
                              ))}
                    </div>
                </div>
                <Load />
                {openEditor && (
                    <EditorImage
                        open={openEditor}
                        setOpen={setOpenEditor}
                        dsanh={dsanh}
                        imgchoose={imgChoose}
                    />
                )}
            </div>
        </>
    );
};
export default WebcamCapture;
