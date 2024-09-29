interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: Boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}. ${lastName}`;
};

interface StudentConstructor {
    firstName: string;
    lastName: string;
}


interface Student {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements Student {

    private firstName: string;
    private lastName: string;

    constructor({ firstName, lastName }: StudentConstructor) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}


const student = new StudentClass({ firstName: 'John', lastName: 'Doe' });
console.log(student.workOnHomework());
console.log(student.displayName());
