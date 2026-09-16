let employees =[
    {
        id:1,
        name:'John',
        role:'Developer',
        salary:70000
    },
    {
        id: 2,
        name: "David",
        role: "Node Developer",
        salary: 75000
    },
    {
        id: 3,
        name: "Smith",
        role: "Tester",
        salary: 60000
    }
];


export const getEmployees = (req,res)=>{
    res.status(200).json(employees);
};

export const createEmployee = (req,res)=>{
    const {name,role,salary} = req.body;

    const newEmployee = {
        id: employees.length +1,
        name,
        role,
        salary
    }

    employees.push(newEmployee);

    res.status(201).json(newEmployee);
};

export const getEmployeeById =(req,res)=>{
    console.log('req.parmas',req.params);
    const id = parseInt(req.params.id);

    const employee = employees.find(
        ele => ele.id === id
    );

    if(!employee){
        return res.status(404).json({
            message:"Employee not found"
        })
    }

    res.status(200).json(employee);
}

export const updateEmployeeById =(req,res)=>{
    const id = parseInt(req.params.id);

    const employee = employees.find(
        ele=> ele.id === id
    )
    if (!employee) {
        return res.status(404).json({
            message: "Employee not found"
        })
    }
    
    const {name,role,salary} =req.body;

    employee.name = name;
    employee.role = role;
    employee.salary = salary;

    res.status(200).json(employee);
}


export const deleteById = (req,res)=>{
    const id = parseInt(req.params.id);

    const employeeIndex = employees.findIndex(
        ele=> ele.id === id
    )

    if (employeeIndex === -1) {
        return res.status(404).json({
            message: "Employee not found"
        });
    }


    const deletedEmployee = employees.splice(employeeIndex,1);

   res.status(200).json({
        message: "Employee deleted successfully",
        employee: deletedEmployee[0]
    });
}