import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selectedStudent = null;

  tempStudentName = "";
  tempStudentRollno = null;

  viewedStudent = null;

  studentarray = [
    { name : "rushi",rollno : 101},
    { name : "pandya",rollno : 102}
  ] as any;

  deleteStudent(i:any)
  {
    this.studentarray.splice(i,1);
  }

  addStudent()
  {
    let tempStu = { name : this.tempStudentName, rollno : this.tempStudentRollno };
    this.studentarray.push(tempStu);
    this.tempStudentName = "";
    this.tempStudentRollno = null;
  }

  selectStudent(i:any)
  {
    this.selectedStudent = i;
    this.tempStudentName = this.studentarray[i].name;
    this.tempStudentRollno = this.studentarray[i].rollno;
  }

  editStudent()
  {
    this.studentarray[this.selectedStudent as any].name = this.tempStudentName;
    this.studentarray[this.selectedStudent as any].rollno = this.tempStudentRollno;
    this.tempStudentName = "";
    this.tempStudentRollno = null;
    this.selectedStudent = null;
  }

  viewStudent(i : any)
  {
    this.viewedStudent = i;
  }


  constructor() { }

  ngOnInit(): void {
     
  }
}
