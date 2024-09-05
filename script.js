let employees = [];
let idCounter = 1;

function addEmployee() {
    const name = document.getElementById('name').value.trim();
    const profession = document.getElementById('profession').value.trim();
    const age = document.getElementById('age').value.trim();
    const messageElement = document.getElementById('message');

    // Validate inputs
    if (!name || !profession || !age) {
        messageElement.textContent = "All fields are required!";
        messageElement.className = "message error";
        return;
    }

    // Create a new employee object
    const employee = {
        id: idCounter++,
        name: name,
        profession: profession,
        age: parseInt(age, 10)
    };

    // Add to employees array
    employees.push(employee);

    // Reset form
    document.getElementById('employeeForm').reset();

    // Show success message
    messageElement.textContent = "Employee added successfully!";
    messageElement.className = "message success";

    // Update the employee list
    updateEmployeeList();
}

function updateEmployeeList() {
    const employeeList = document.getElementById('employeeList');
    employeeList.innerHTML = ''; // Clear the list

    employees.forEach(employee => {
        const employeeItem = document.createElement('div');
        employeeItem.className = 'employee-item';

        employeeItem.innerHTML = `
            <span>${employee.id}. Name:${employee.name}Profession:${employee.profession  }    Age:${employee.age}</span>
            <button class="delete-btn" onclick="deleteEmployee(${employee.id})">Delete</button>
        `;

        employeeList.appendChild(employeeItem);
    });
}

function deleteEmployee(id) {
    employees = employees.filter(employee => employee.id !== id);

    // Update the employee list
    updateEmployeeList();
}
