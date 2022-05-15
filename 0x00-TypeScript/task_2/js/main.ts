interface DirectorInterface {
    workFromHome(): string
    getCoffeeBreak(): string
    workDirectorTasks(): string
}

interface TeacherInterface {
    workFromHome(): string
    getCoffeeBreak(): string
    workTeacherTasks(): string
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Working from home';
    }
    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }
    workDirectorTasks(): string{
        return `Getting to director tasks`;
    }
};

class Teacher implements TeacherInterface{
    workFromHome() {
		return 'Cannot work from home';
	}
	getCoffeeBreak() {
		return 'Cannot have a break';
	}
	workTeacherTasks() {
		return `Getting to work`;
	}
}

function createEmployee(salary: number | string){
    if (typeof(salary) === 'number' && salary < 500)  {
        return new Teacher();
    }
    else{
        return new Director();
    }
}

// Examples
//console.log(createEmployee(200));
//console.log(createEmployee(1000));
//console.log(createEmployee('$500'));

//task 6

function IsDirector(employee: DirectorInterface | TeacherInterface): boolean {
    return(employee instanceof Director);
}

function executeWork(employee: DirectorInterface | TeacherInterface): string {
    if(employee instanceof Director){
        return employee.workDirectorTasks();
    }else if (employee instanceof Teacher){
        return employee.workTeacherTasks();
    }
}

//example
//console.log(executeWork(createEmployee(200)));
//Getting to work
//console.log(executeWork(createEmployee(1000)));
//Getting to director tasks

//task 7

type Subjetcs = 'Math' | 'History';

function teachClass(todayClass: Subjetcs): string {
    if (todayClass === 'Math'){
        return `Teaching Math`;
    } else if (todayClass === 'History'){
        return `Teaching History`;
    }
}

//Example
//console.log(teachClass('Math'));
//Teaching Math
//console.log(teachClass('History'));
//Teaching History