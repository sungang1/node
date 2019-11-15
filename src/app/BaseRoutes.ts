 
import express = require("express");
 
import { InitRoutes} from './Init/InitRoutes';
import {classRoutes} from './class/classRoutes'
var app = express.Router();

 
app.use('/my',new  InitRoutes().routes);
app.use('/class',new classRoutes().routes)



export { app as BaseRoutes }