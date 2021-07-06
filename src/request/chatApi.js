import openSocket from "socket.io-client";
import { translate_server_url } from '../configuration/config'

let socket;
let subPath = "/proxy/socket.io";
const ChatApi = {
    startConnection: (sampleRate) => {
        if(translate_server_url.indexOf('aflac.platformerfuji.com') > -1){
            subPath = '/apigw/va2roleplay/mvp2/webapp/proxy/socket.io';
        }
        socket = openSocket(translate_server_url, {
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
    }
};
export default ChatApi;
