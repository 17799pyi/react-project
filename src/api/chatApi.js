import openSocket from "socket.io-client";
import { proxyUrl } from "../configs/config";

let socket;
// let domain = document.location.origin;
let subPath = "/proxy/socket.io";

const ChatApi = {
    startConnection: (sampleRate) => {
        socket = openSocket(proxyUrl, {
            path: subPath,
            transports:["websocket"]
        });
        socket.binaryType = "arraybuffer";
        socket.emit("startConnection", { sampleRate });
    },
    endConnection: () => {
        socket.emit("endConnection");
        socket.close();
    },
    sendData: (data) => {
        socket.emit("sendData", data);
    },

    setupTranscriptionCallback: (callbackFun) => {
        socket.on("sendTranscription", (transcription) => {
            callbackFun(transcription);       
        });
    },

    sendBackTranscription:() => {
        socket.emit('sendBackTranscription');
    }

};
export default ChatApi;
