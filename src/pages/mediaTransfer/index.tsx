import * as React from 'react';
import io from 'socket.io-client';
import './index.less'
export default class MediaTransfer extends React.Component{
    componentDidMount () {
        const socket = io.connect('10.1.8.38');
        socket.emit('chat message', 'Aszzo')
    }
    render(){

        return(
            <div className=''>456</div>
        )
    }
}