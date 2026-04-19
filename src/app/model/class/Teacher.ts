export class Teacher{
    id:string;
    teacher_name:string;
    teacher_fname:string;
    teacher_lastname:string;
    email:string;
    phone:string;
    address:string;
    education:string;
    date_of_Birth:string;
    date_of_Join:string;
    gender:boolean;
    age:number;
    salary:number;
    over_time:number;
    faculty_name:string;
    department_name:string;

    constructor(){
        this.id= "";
        this.teacher_name = "";
        this.teacher_fname= "";
        this.teacher_lastname = "";
        this.email = "";
        this.phone = "",
        this.address = "";
        this.education = "";
        this.date_of_Birth = "";
        this.date_of_Join = "";
        this.gender = false;
        this.age = 0;
        this.salary = 0;
        this.over_time = 0;
        this.faculty_name = "";
        this.department_name = "";


    }

}