import React from 'react';
import './index.less'
interface Constraints {
    video: boolean,
    audio: boolean
}
export default class MediaTransfer extends React.Component{
    private videoEle    = React.createRef<HTMLVideoElement>();
    private videoEleGet = React.createRef<HTMLVideoElement>();
    componentDidMount () {
        const constraints: Partial<Constraints> = {video: false, audio: true};
        const self = this;
        const videoEle    = self.videoEle.current as HTMLMediaElement;
        

        navigator.mediaDevices.getUserMedia(constraints)
            .then((stream: MediaStream): void =>{
                console.log(stream);
            
                console.log(videoEle)
                // console.log(URL.createObjectURL(stream))
                videoEle.srcObject = stream;
            })
            .catch((err: Object):void => {
                console.log(err)
            })

   }
    transfer = ():void => {
        const videoEle = this.videoEle.current as HTMLMediaElement;
        const videoEleGet = this.videoEleGet.current as HTMLMediaElement;
        
        let stream = videoEle.captureStream();
        videoEleGet.srcObject = stream;
    }
    render(){

        return(
            <div>
                <div className='videoContainer'>
                    <video autoPlay controls ref={this.videoEle}></video>
                    <video autoPlay controls ref={this.videoEleGet}></video>
                </div>
                <button onClick={this.transfer}>传输</button>
            </div>
        )
    }
}