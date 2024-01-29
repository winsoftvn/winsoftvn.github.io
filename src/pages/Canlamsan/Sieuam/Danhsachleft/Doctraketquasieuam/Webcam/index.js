import { Button, Checkbox, Form } from "antd";
import { useState, useCallback, useRef } from "react";
import Webcam from "react-webcam";
import "./webcam.scss";
import Load from "./UploadImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import EditorImage from "./EditorImage";

const videoConstraints = {
    width: 345,
    height: 300,
    facingMode: "user",
};

const WebcamCapture = () => {
    const [anh, setAnh] = useState();
    const [dsanh, setDSAnh] = useState([]);
    console.log('dsanh: ', dsanh);
    const [value, setValue] = useState(true);
    const [open, setOpen] = useState(false);
    const [openEditor, setOpenEditor] = useState(false);

    const handlePushImageUpload = (a) => {
        dsanh.push(a);
    };
    const [webcamRef, setWebcamRef] = useState(useRef(null));

    const capture = useCallback(() => {
        setValue(!value);
        const imageSrc = webcamRef.current.getScreenshot();
        setAnh(imageSrc);
        dsanh.push(imageSrc);
    }, [value]);

    const handleDeleteImage = (a) => {
        let b = dsanh.filter((item) => item != a);
        setDSAnh(b);
        setValue(!value);
    };

    // Editor Image

    const [imgChoose, setImgChoose] = useState({});
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
            <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
            />
            <div className="d-flex justify-content-between form-row">
                <Button className="form-btn form-input-label " onClick={capture}>
                    Chụp ảnh
                </Button>
                <Button className="form-btn form-input-label " onClick={() => setOpen(true)}>
                    Tải ảnh lên
                </Button>
                <Load
                    open={open}
                    setOpen={setOpen}
                    dsanh={dsanh}
                    handlePushImageUpload={handlePushImageUpload}
                />
            </div>
            <div className="mt-2">
                {" "}
                <div className="bg-title fw-bold p-1 title-fixed ">Hình ảnh</div>
                <div className="webcam">
                    <div className="d-flex flex-wrap">
                        {" "}
                        {anh === ""
                            ? ""
                            : dsanh.map((item, index) => (
                                  <div className="box-image">
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
                                                      <Checkbox defaultChecked/>
                                                  </Form.Item>
                                              </Form>
                                          </div>
                                      </div>
                                  </div>
                              ))}
                    </div>
                </div>
                <Load />
                <EditorImage
                    open={openEditor}
                    setOpen={setOpenEditor}
                    dsanh={dsanh}
                    imgchoose={imgChoose}
                />
            </div>
        </>
    );
};
export default WebcamCapture;
