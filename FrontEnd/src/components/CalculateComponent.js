import React,{ Component } from 'react';
import { Card, CardHeader, CardBody, Button} from 'reactstrap';

class Calculate extends Component{
    constructor(props){
        super(props);

        this.state={
            isSettled: true
        };
        //this.Distribute=this.Distribute.bind(this);

    }

    
    render(){
        let name=[],PerHead=0,EachPending=[];
        for(let i=0;i<this.props.names.length;i++)
            PerHead+=this.props.money[i];
        PerHead/=this.props.names.length;
        for(let i=0;i<this.props.names.length;i++)
        {
            EachPending[i]=PerHead-this.props.money[i];
            if(EachPending[i])
            this.state.isSettled=false;
        }
        for(let i=0;i<this.props.names.length;i++)
        {
            if(EachPending[i]===0)
            continue;
            let giveMoney=1;
            if(EachPending[i]<0)
                giveMoney=0;
            for(let j=i+1;j<this.props.names.length;j++)
            {
                if(EachPending[i]===0)
                break;
                let rem=0;
                if(giveMoney)
                {
                    if(EachPending[j]<0)
                    {
                        if(EachPending[i]+EachPending[j]>=0)
                        {
                            EachPending[i]+=EachPending[j];
                            rem=EachPending[j]*-1;
                            EachPending[j]=0;
                        }
                        else
                        {
                            rem=EachPending[i];
                            EachPending[i]=0;
                            EachPending[j]+=rem;
                        }
                        rem=rem.toFixed(2);
                        name.push(<div className="row mt-2">
                            <div className="col-4 justify-content-center">{this.props.names[i]} </div>
                            <div className="col-4">
                            <Button variant="outline-success" className="transfer-button">
                            <i class="fa fa-inr" aria-hidden="true"></i> {rem} {' '}
                            <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                            </Button>
                            </div>
                            <div className="col-4 d-flex justify-content-center"> {this.props.names[j]} </div>
                            </div>
                        );
                    }
                }
                else
                {
                    if(EachPending[j]>0)
                    {
                        if(EachPending[i]+EachPending[j]>=0)
                        {
                            EachPending[j]+=EachPending[i];
                            rem=EachPending[i]*-1;
                            EachPending[i]=0;
                        }
                        else
                        {
                            rem=EachPending[j];
                            EachPending[j]=0;
                            EachPending[i]+=rem;
                        }
                        rem=rem.toFixed(2);
                        name.push(<div className="row mt-2">
                            <div className="col-4 justify-content-center">{this.props.names[j]} </div>
                            <div className="col-4">
                            <Button variant="outline-success" className="transfer-button">
                            <i class="fa fa-inr" aria-hidden="true"></i> {rem} {' '}
                            <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                            </Button>
                            </div>
                            <div className="col-4 d-flex justify-content-center"> {this.props.names[i]} </div>
                            </div>
                        );
                    }
                }
            }
        }

        return(
            <div className="container">
                <div className="row ml-md-2 d-flex justify-content-center">
                    <Card className="result">
                        <CardHeader className="new">
                            <center><h5><i className="fa fa-check-circle fa-lg"></i> Distribution</h5></center>
                        </CardHeader>
                        <CardBody>
                        {this.state.isSettled===false&&<div className="container justify-content-center">
                            {name}
                        </div> }  
                        {this.state.isSettled===true&&<div className="container justify-content-center d-flex">
                            Settled!!</div>} 
                        </CardBody>
                    </Card>
                </div>
            </div>
        );
        
    }
}

export default Calculate;