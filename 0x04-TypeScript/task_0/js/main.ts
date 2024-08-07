interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}


const student1 : Student  = {
    firstName : 'Mohamed',
    lastName : 'Zouine',
    age: 21,
    location : 'Casablanca'
}

const student2 : Student  = {
    firstName : 'Ahmed',
    lastName : 'Zioz',
    age: 21,
    location : 'Casablanca'
}


const studentsList : Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement('table');
studentsList.forEach((student) => {
  const row = table.insertRow();
  const firstNameCell = row.insertCell(0);
  const locationCell = row.insertCell(1);
  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
});
document.body.appendChild(table);