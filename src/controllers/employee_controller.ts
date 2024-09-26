import express from "express";
import * as employeeRepo from "../repositories/employee_repo";

class EmployeeController {

    // Method to get all employees from the database
    getAllEmployees = async (req: express.Request, res: express.Response) => {
        try {
            const employees = await employeeRepo.getAllEmployees(); // Fetch all employees
            return res.status(200).json({ data: employees }); // Send response with employees data
        } catch (error) {
            return res.status(400).json({
                message: "Error fetching employees",
                error: error,
            }); // Return status 400 on error
        }
    }

    // Method to get a specific employee by ID from the database
    getEmployee = async (req: express.Request, res: express.Response) => {
        try {
            const { id } = req.query; // Get employee ID from query params

            if (!id) {
                return res.status(400).json({
                    message: "Employee ID is required as query parameter"
                });
            }

            const employee = await employeeRepo.getEmployeeById(id as string); // Find employee by ID
            if (employee) {
                return res.status(200).json({ data: employee }); // Send response with employee data
            } else {
                return res.status(404).json({ message: "Employee not found" });
            }
        } catch (error) {
            return res.status(400).json({
                message: "Error fetching employee",
                error: error,
            }); // Return status 400 on error
        }
    }

    // Method to create a new employee
    createEmployee = async (req: express.Request, res: express.Response) => {
        try {
            const { name, email, mobile, dob, doj } = req.body; // Get employee details from request body

            const savedEmployee = await employeeRepo.createEmployee({ name, email, mobile, dob, doj }); // Save the employee to the database

            return res.status(200).json({
                message: "Employee created successfully",
                data: savedEmployee
            });
        } catch (error) {
            return res.status(400).json({
                message: "Error creating employee",
                error: error,
            }); // Return status 400 on error
        }
    }

    // Method to update an existing employee's information
    updateEmployee = async (req: express.Request, res: express.Response) => {
        try {
            const { id } = req.query; // Get the ID from the query parameter
            const { name, email, mobile, dob, doj } = req.body; // Get updated employee details from request body

            if (!id) {
                return res.status(400).json({
                    message: "Employee ID is required as query parameter"
                });
            }

            const updatedEmployee = await employeeRepo.updateEmployeeById(id as string, { name, email, mobile, dob, doj }); // Update the employee
            if (updatedEmployee) {
                return res.status(200).json({
                    message: "Employee updated successfully",
                    data: updatedEmployee,
                });
            } else {
                return res.status(404).json({ message: "Employee not found" });
            }
        } catch (error) {
            return res.status(400).json({
                message: "Error updating employee",
                error: error,
            });
        }
    }

    // Method to delete an employee by ID
    deleteEmployee = async (req: express.Request, res: express.Response) => {
        try {
            const { id } = req.query; // Get employee ID from query params

            if (!id) {
                return res.status(400).json({
                    message: "Employee ID is required as query parameter"
                });
            }

            const result = await employeeRepo.deleteEmployeeById(id as string); // Delete the employee
            if (result) {
                return res.status(200).json({ message: "Employee deleted" });
            } else {
                return res.status(404).json({ message: "Employee not found" });
            }
        } catch (error) {
            return res.status(400).json({
                message: "Error deleting employee",
                error: error,
            }); // Return status 400 on error
        }
    }
}

export default new EmployeeController();
