 
import express = require("express");
import { youtubeRoutes } from "./youtube/youtubeRoutes";
 
 
import {zhihuRoutes} from './zhihu/zhihuRoutes';


var app = express.Router();

 
app.use('/zhihu',new zhihuRoutes().routes)
app.use('/youtube',new youtubeRoutes().routes)
export { app as BaseRoutes }