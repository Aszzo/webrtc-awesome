import React from 'react';
import './index.less'
interface Constraints {
    video: boolean,
    audio: boolean
}
export default class MediaTransfer extends React.Component{
    private videoEle = React.createRef<HTMLVideoElement>();

    componentDidMount () {
       const constraints: Partial<Constraints> = {video: false, audio: true};
       const self = this;
        navigator.mediaDevices.getUserMedia(constraints)
            .then((stream: MediaStream): void =>{
                console.log(stream);
            
                console.log(self.videoEle.current)
                self.videoEle.current.srcObject = stream;
            })
            .catch((err: Object):void => {
                console.log(err)
            })

   }
    render(){

        return(
            <div>
                123
               <video ref={this.videoEle}></video>
            </div>
        )
    }
}