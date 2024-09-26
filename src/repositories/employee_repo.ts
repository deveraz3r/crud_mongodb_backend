import { EmployeeModel } from "../models/employee_model";

// Fetch all employees
export const getAllEmployees = async () => {
    return await EmployeeModel.find();
}

// Find an employee by ID
export const getEmployeeById = async (id: string) => {
    return await EmployeeModel.findById(id);
}

// Create a new employee
export const createEmployee = async (employeeData: {
    name: string,
    email: string,
    mobile: string,
    dob: string,
    doj: string
}) => {
    const employee = new EmployeeModel(employeeData);
    return await employee.save();
}

// Update an existing employee by ID
export const updateEmployeeById = async (id: string, updateData: {
    name?: string,
    email?: string,
    mobile?: string,
    dob?: string,
    doj?: string
}) => {
    const employee = await EmployeeModel.findById(id);
    if (employee) {
        employee.name = updateData.name || employee.name;
        employee.email = updateData.email || employee.email;
        employee.mobile = updateData.mobile || employee.mobile;
        employee.dob = updateData.dob || employee.dob;
        employee.doj = updateData.doj || employee.doj;
        return await employee.save();
    }
    return null;
}

// Delete an employee by ID
export const deleteEmployeeById = async (id: string) => {
    return await EmployeeModel.findByIdAndDelete(id);
}
