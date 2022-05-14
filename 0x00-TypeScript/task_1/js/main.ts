interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfEmployee?: number ;
    location: string;
    [propName: string]: any;
}

// Example1: 
const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };

  console.log(teacher3);

//task 2
interface Directors extends Teacher {
    numberOfReports: number
};

//example 2
const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };

  console.log(director1);

//task 3
interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = function (
	firstName: string,
	lastName: string
): string {
	return `${firstName[0]}. ${lastName}`;}

const PT = printTeacher("John", "Doe")

console.log(PT);






