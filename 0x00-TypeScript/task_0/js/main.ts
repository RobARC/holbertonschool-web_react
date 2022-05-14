interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Robert",
    lastName: "Rondon",
    age: 50,
    location: "Colombia",
}

const student2: Student = {
    firstName: "Richard",
    lastName: "Rondon",
    age: 52,
    location: "Venezuela",
}

const studentList = [student1, student2];

const table = document.createElement("table");

studentList.forEach((student) => {
    let row = table.insertRow();
    for(let [k, v] of Object.entries(student)){
        let cell = row.insertCell();
        let text = document.createTextNode(v);
        cell.appendChild(text);
    }
});

document.body.appendChild(table);