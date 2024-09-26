import express from "express";
import employeeController from "../controllers/employee_controller";

const router = express.Router();


router.get('/employees', employeeController.getAllEmployees);   //example: http://localhost:3000/employees
router.get('/employee', employeeController.getEmployee);    //example: http://localhost:3000/employee?id=123
router.post('/createEmployee', employeeController.createEmployee);  //example: http://localhost:3000/createEmployee ,body: {}
router.put('/updateEmployee', employeeController.updateEmployee);   //example: http://localhost:3000/updateEmployee?id=123  ,body: {}
router.delete('/deleteEmployee', employeeController.deleteEmployee);    //example: http://localhost:3000/deleteEmployee?id=123


export default router;