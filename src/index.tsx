import * as React from "react";
import * as ReactDOM from "react-dom";
import { Route,Switch, BrowserRouter } from 'react-router-dom';
import {MediaTransferOnline, MediaTransfer} from './view';

export class App extends React.Component{
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={MediaTransfer}/>
                    <Route path="/transfer" component={MediaTransferOnline}/>
                </Switch>
            </BrowserRouter>
        )
    }
}
ReactDOM.render(
    <App/>,
    document.getElementById("root")
);
