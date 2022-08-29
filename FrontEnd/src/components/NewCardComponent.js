import React,{ Component, useState } from 'react';
import { Jumbotron, Card, CardTitle, CardText, CardSubtitle, CardHeader, CardBody, Button, Row, Col, Label } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

let names=[];

const NewCard=(props)=>{

    const [inputList, setInputList] = useState([{ what: "", money: "" }]);

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
      };

      const handleAddClick = () => {
        setInputList([...inputList, { what: "", money: "" }]);
      };

      const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
      };

      

      const Submit=(values)=>{
          names.push(values.name);
          var amt=0;
          {names.map((i)=>{
            alert("Name="+JSON.stringify(names));
          })}
          {inputList.map((x,i)=>{
            amt=amt+parseInt(x.money);
          })}
          alert("Amount="+JSON.stringify(amt/props.count));
        //console.log("Current State is: "+JSON.stringify(values));
        //alert("Current State is: "+JSON.stringify(values));
        //alert("Current State is: "+JSON.stringify(inputList));
        //alert("name="+JSON.stringify(values.name));
        //<Calculate inputList={inputList} name={values.name} />
      };
      let rows=[];
    if(props.isNew){
        for(let i=1;i<=props.count;i++)
        rows.push(
            <Card className="mt-1 NewCard">
                    <CardBody>
                    <LocalForm onSubmit={(values) =>Submit(values)}>
                                <Row className="form-group">
                                <Label htmlFor="name"><i className="fa fa-users fa-lg"></i></Label>
                                    <Col xs={8}>
                                    <Control.text model=".name" id="name" placeholder="Name" className="form-control"></Control.text>
                                    </Col>
                                </Row>
                    {inputList.map((x, i) => {
                            return (
                                <>
                                <Row className="form-group">
                                    <Col xs={6}>
                                        <Control.text model=".what" id="what" name="what" placeholder="What?" className="form-control" value={x.what} onChange={e => handleInputChange(e, i)}/>
                                            </Col>
                                            <Col xs={6}>
                                                <Control.input model=".money" id="money" name="money" placeholder="How Much?" className="form-control" value={x.money} onChange={e => handleInputChange(e, i)}/>
                                            </Col>
                                </Row>
                                {inputList.length - 1 === i &&  
                                <Row className="form-group">
                                    <Col >
                                        <Button className="dash-button" onClick={handleAddClick}>
                                        <i className="fa fa-plus-square fa-lg"></i> More
                                        </Button>
                                    </Col>
                                    <Col>
                                            {inputList.length !== 1 &&
                                                <Button className="dash-button" onClick={()=>handleRemoveClick(i)}>
                                                <i className="fa fa-minus-circle fa-lg"></i>
                                                </Button>
                                            }
                                            </Col>
                                </Row>  }
                                </>
                            );
                        })}
                        <Button type="submit" color="success" className="dash-button">
                            Calculate!
            </Button>
                        </LocalForm>
                    </CardBody>
                </Card>
        )
        
              
    }
    return(
        <div className="col-12">
    {rows}
    
    </div>
); 
}

export default NewCard;