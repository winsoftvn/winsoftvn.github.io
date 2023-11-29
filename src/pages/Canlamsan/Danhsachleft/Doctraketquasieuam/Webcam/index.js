import { Button } from "antd";
import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";
import "./webcam.scss";
const videoConstraints = {
    width: 345,
    height: 250,
    facingMode: "user",
};

const WebcamCapture = () => {
    const [anh, setAnh] = useState();
    const [dsanh, setDSAnh] = useState([]);
    const handlePush = () => {
        dsanh.push(anh);
    };
    const webcamRef = React.useRef(null);
    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setAnh(imageSrc);
        dsanh.push(imageSrc);
    }, [webcamRef]);

    useEffect(() => {
        handlePush();
    }, [webcamRef]);
    return (
        <>
            <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
            />
            <div className="d-flex justify-content-center">
                <Button className="form-btn " onClick={capture}>
                    Capture photo
                </Button>
            </div>
            <div className="scroll1">
                <div className="d-flex flex-wrap justify-content-between mt-2">
                    {anh === ""
                        ? ""
                        : dsanh.map((item, index) =>
                              index > 1 ? (
                                  <img
                                      className="m-1"
                                      src={item}
                                      width={100}
                                      height={100}
                                      key={index}
                                  ></img>
                              ) : (
                                  ""
                              )
                          )}
                </div>
            </div>
        </>
    );
};
export default WebcamCapture;
