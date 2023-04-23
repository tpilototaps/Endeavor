import startFirebase from '../FirebaseConfig';
import React, { Component } from 'react'
import { ref, set, get, update, remove, child } from 'firebase/database'
import './PilotLogBook.css'


export default class PilotLogBook extends Component {

    constructor(props){
        super(props)
        this.state = {
            db: '',
            airmanName: '',
            medicalExaminer: '',
            issueDate: '',
            expirationDate: ''
          
        }
        this.interface = this.interface.bind(this);
    }

    componentDidMount(){
        this.setState({
             db : startFirebase()
        });
    }


  render() {
    return (
        <div>

        <div className='mainAme'>
        <h1 className='head'> Airman Medical Certificate</h1>
          <label><h6>Airman Name</h6></label>
          <input className='input' type = 'text' id = 'userbox' placeholder='John Doe' 
           value={this.state.airmanName} 
           onChange={(event) => {this.setState({airmanName: event.target.value});}}/>

        <label><h6>Medical Examiner</h6></label>
          <input className='input' type = 'text' id = 'namebox' placeholder='Dr. Jane Doe' 
           value={this.state.medicalExaminer} 
           onChange={(event) => {this.setState({medicalExaminer: event.target.value});}}/>

        <label><h6>Issue Date</h6></label>
          <input className='input' type = 'date' id = 'datebox' placeholder=' date' 
           value={this.state.issueDate} 
           onChange={(event) => {this.setState({issueDate: event.target.value});}}/>

        <label><h6>Expiration Date</h6></label>
          <input className='input' type = 'date' id = 'datebox' placeholder=' date' 
           value={this.state.expirationDate} 
           onChange={(event) => {this.setState({expirationDate: event.target.value});}}/>
        <div/>

        <div>
            <button className='btn btn-primary' id = 'addBtn' onClick = {this.interface}>Add Data</button>
            <button className='btn btn-success' id = 'updateBtn' onClick = {this.interface}>Update Data</button>
            <button className='btn btn-danger' id = 'deleteBtn' onClick = {this.interface}>Delete Data</button>
            <button className='btn btn-success' id = 'selectBtn' onClick = {this.interface}>Get Data</button>
        </div>
  
        </div>
        </div>

    )
  }
  interface(event){
    const id = event.target.id;

    if( id === 'addBtn'){
        this.insertData();
    }
    else if( id === 'updateBtn'){
        this.updateData();
    }
    else if( id === 'deleteBtn'){
        this.deleteData();
    }
    else if( id === 'selectBtn'){
        this.selectData();
    }
  }
  getAllInputs(){
    return{
        airmanName : this.state.airmanName,
        medicalExaminer : this.state.medicalExaminer,
        issueDate : this.state.issueDate,
        expirationDate : this.state.expirationDate
    }
  }

  insertData(){
    console.log('did this work')
        const db = this.state.db;
        const data = this.getAllInputs();
        console.log(data)

        set(ref(db, 'Airman/'+data.airmanName),
        {
            medicalExaminer: data.medicalExaminer,
            IssueDate : data.issueDate,
            ExpirationDate : data.expirationDate
        })
        .then(() => {alert('data was added successfully')})
        .catch((error) => {alert('error')})
        ;
  }

  updateData(){
    console.log('did this work')
        const db = this.state.db;
        const data = this.getAllInputs();
        console.log(data)

        update(ref(db, 'Airman/'+data.airmanName),
        {
            medicalExaminer: data.medicalExaminer,
            issueDate : data.issueDate,
            expirationDate : data.expirationDate
        })
        .then(() => {alert('data was updated successfully')})
        .catch((error) => {alert('error')})
        ;
  }

  deleteData(){
    console.log('did this work')
        const db = this.state.db;
        const username = this.getAllInputs().airmanName;

        remove(ref(db, 'Airman/'+ username))
        .then(() => {alert('data was deleted successfully')})
        .catch((error) => {alert('error')})
        ;
  }

    selectData(){
        const dbref = ref(this.state.db);
        const username = this.getAllInputs().airmanName;

        get(child(dbref, 'Airman/'+ username)).then((snapshot) => {
            if(snapshot.exists()){
                this.setState({
                    medicalExaminer: snapshot.val().medicalExaminer,
                    issueDate : snapshot.val().issueDate,
                    expirationDate : snapshot.val().expirationDate
                })
            }
            else{
                alert('No Data Found!')
            }
        })
        .catch((error) => {alert('there was an error')})
    }

}