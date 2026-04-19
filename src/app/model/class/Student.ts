export class Student{
    id:string;
    student_name:string;
    student_fname:string;
    student_lastname:string;
    email:string;
    phone:string;
    address:string;
    gender:boolean;
    age:number;
    date_of_birth:string;
    date_of_join:string;
    faculty_name:string;
    department_name:string;
    semster:string;

    constructor(){
        this.id = "";
        this.student_name = "";
        this.student_fname = "";
        this.student_lastname = "";
        this.email = "";
        this.phone = "";
        this.address = "";
        this.gender = false;
        this.age = 0;
        this.date_of_birth = "";
        this.date_of_join = "";
        this.faculty_name = "";
        this.department_name = "";
        this.semster = "";
    }
}