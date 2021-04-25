import logo from './logo.svg';
import './App.css';
import React from 'react'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      employee: {
        "id": "1",
        "jobTitleName": "Developer",
        "firstName": "Ahmed",
        "lastName": "Ali",
        "preferredFullName": "Ahmed Ali",
        "employeeCode": "E1",
        "region": "CA",
        "phoneNumber": "408-1234567",
        "emailAddress": "ahmed.ali@gmail.com"
      }
    }
  }
  render() {
    return (
      <div>
        <Obj Employee= {this.state.employee} />
      </div>
    );
  }
}


class Obj extends React.Component {
  constructor(props){
    super();
    this.state={
      obj:props.Employee
    }
  }
  render() {
    return (
      <div>
        Id: {this.state.obj.id} <br/>
        Name: {this.state.obj.preferredFullName}<br/>
        Job: {this.state.obj.jobTitleName}<br/>
        Region: {this.state.obj.region}<br/>
        Number: {this.state.obj.phoneNumber}

      </div>
      );
  }
}

export default App;
