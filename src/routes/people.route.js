import { Router } from "express";
import { searchAll , createPeople } from "../controlers/people.controler.js";

const peopleRouter = Router();

peopleRouter.get("/buscar", (req,res)=> {
    let result = searchAll();
    res.status(200).json({result});

});

peopleRouter.post("/criar", (req,res)=> {
    const {id,name, astronomer, awards, biography, category,photo_url} = req.body;
    createPeople(id,name, astronomer, awards, biography, category,photo_url);
    res.status(200).json({message:"sucess"});
    return res 

});

export {peopleRouter}
