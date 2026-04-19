export interface Faculty{
    id:string;
    faculty_name:string;
    createDate:string;
    faculty_logo:string
    description:string;
}

export interface Department{
    id:string;
    department_name:string;
    createDate:string;
    faculty_name:string;
}

export interface Subjects{
    id:string;
    subject_name:string;
    credite:number;
    faculty_name:string;
    department_name:string;
    semester:string;
}

export interface Comments{
    id:string;
    name:string;
    email:string;
    comment:string;
}


export interface Score{
    id:string;
    student_name:string;
    faculty_name:string;
    department_name:string;
    subject_name:string;
    semester:string;
    score:number;
}
