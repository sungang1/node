 
import express = require("express");
 
import { InitRoutes} from './Init/InitRoutes';
import {classRoutes} from './class/classRoutes';
import {zhihuRoutes} from './zhihu/zhihuRoutes';


var app = express.Router();

app.use('/my',new  InitRoutes().routes);
app.use('/class',new classRoutes().routes)
app.use('/zhihu',new zhihuRoutes().routes)

export { app as BaseRoutes }