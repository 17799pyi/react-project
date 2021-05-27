import React from 'react'
import Webcam from "react-webcam";

const videoConstraints = {
    width: 170,
    height: 170,
    facingMode: "user"
};

const WebCam = () => {
    const webcamRef = React.useRef(null);

    const capture = React.useCallback(
        () => {
        const imageSrc = webcamRef.current.getScreenshot();
        },
        [webcamRef]
    );

    return (
        <>
        <Webcam
            audio={false}
            height={170}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={170}
            videoConstraints={videoConstraints}
        />
        {/* <button onClick={capture}>Capture photo</button> */}
        </>
    );
}

export default WebCam
