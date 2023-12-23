import { Button } from "antd";
import { useCallback, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import { HiOutlineVideoCamera } from "react-icons/hi";
import "./recording.scss";
const Recording = () => {
    const webcamRef = useRef(null);
    const mediaRecorderRef = useRef(null);
    const [capturing, setCapturing] = useState(false);
    const [recordedChunks, setRecordedChunks] = useState([]);

    const [videoRecord, setVideo] = useState();
    const handleStartCaptureClick = useCallback(() => {
        setCapturing(true);
        mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
            mimeType: "video/webm",
        });
        mediaRecorderRef.current.addEventListener("dataavailable", handleDataAvailable);
        mediaRecorderRef.current.start();
    }, [webcamRef, setCapturing, mediaRecorderRef]);

    const handleDataAvailable = useCallback(
        ({ data }) => {
            if (data.size > 0) {
                setRecordedChunks((prev) => prev.concat(data));
            }
        },
        [setRecordedChunks]
    );

    const handleStopCaptureClick = useCallback(() => {
        mediaRecorderRef.current.stop();
        setCapturing(false);
        if (recordedChunks.length) {
            const blob = new Blob(recordedChunks, {
                type: "video/webm",
            });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            document.body.appendChild(a);
            a.style = "display: none";
            a.href = url;
            setVideo(a.href);
        }
    }, [mediaRecorderRef, webcamRef, setCapturing]);

    const handleDownload = useCallback(() => {
        if (recordedChunks.length) {
            const blob = new Blob(recordedChunks, {
                type: "video/webm",
            });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            document.body.appendChild(a);
            a.style = "display: none";
            a.href = url;
            a.download = "react-webcam-stream-capture.webm";
            a.click();
            window.URL.revokeObjectURL(url);
            setRecordedChunks([]);
        }
    }, [recordedChunks]);

    return (
        <>
            <Webcam audio={false} ref={webcamRef} />
            <div className="d-flex">
                {capturing ? (
                    <Button className="form-btn" onClick={handleStopCaptureClick}>
                        Dừng
                    </Button>
                ) : (
                    <Button
                        className="form-btn d-flex align-items-center "
                        onClick={handleStartCaptureClick}
                    >
                        <HiOutlineVideoCamera />
                        <div className="mx-2">Bắt đầu quay</div>
                    </Button>
                )}
                {recordedChunks.length > 0 && (
                    <Button className="form-btn mx-2" onClick={handleDownload}>
                        Tải xuống
                    </Button>
                )}
            </div>
            <div></div>
        </>
    );
};

export default Recording;
