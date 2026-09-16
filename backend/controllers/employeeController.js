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