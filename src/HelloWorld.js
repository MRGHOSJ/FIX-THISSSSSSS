import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class HelloWorld extends React.Component{
  constructor() {
    super();
    this.state = {
    }
    if(!window.localStorage.getItem('AI')){
      let arr =JSON.stringify([])
      window.localStorage.setItem('AI',arr)
    }
    if(!window.localStorage.getItem('GAME')){
      let arrr =JSON.stringify([])
      window.localStorage.setItem('GAME',arrr)
    }
    if(!window.localStorage.getItem('WEB')){
      let ar =JSON.stringify([])
      window.localStorage.setItem('WEB',ar)
    }
  }

  onSelectTeam=(team)=>{
      this.setState({
        team
      })
     
  } 
  onSelectName=(name)=>{
    this.setState({
      name
    })
  }
  onSelectDesc=(des)=>{
    this.setState({
      des
    })
   
  }
  stateToLocal=()=>{
    let arr = JSON.parse(localStorage.getItem(this.state.team))
    let name = this.state.name
    let team = this.state.team
    let des = this.state.des
    arr.push({
      name:this.state.name,
      team:this.state.team,
      des:this.state.des,
    })
    let arr2 = JSON.stringify(arr)
    window.localStorage.setItem(this.state.team,arr2)
  }
  

  render(){
    var ssselect = {
      fontSize: 20,
      width: 100,
    }
    return(
      <div>
      <center>
      <form>
        <h2>Put Your Infos Here</h2>
        <h5>Name:</h5>
        <input type="text" ref="namee"  onChange={(e)=>this.onSelectName(e.target.value)}/>
        <h5>Choose A Team:</h5>
        <FormGroup>
          <Input type="select" name="select" title="Select A Team"  onChange={(e)=>this.onSelectTeam(e.target.value)} style = {ssselect}>
            <option >Select A Team</option>
            <option value="WEB">WEB</option>
            <option value="GAME">GAME</option>
            <option value="AI">AI</option>
          </Input>
        </FormGroup>
        <h5>Description:</h5>
        <textarea ref="dec" onChange={(e)=> this.onSelectDesc(e.target.value)} ></textarea><br/><br/>
        <input type="button" value="Submit" onClick={()=>this.stateToLocal()} />
      </form>
        <br/><br/><br/><br/>
      </center>
      <ul>
      <h1>AI</h1>
      </ul>
      <ul>
      <h1>WEB</h1>
        <li></li>
      </ul>
      <ul>
      <h1>GAME</h1>
        <li></li>
      </ul>
      </div> 
    );
  }
}

export default HelloWorld;