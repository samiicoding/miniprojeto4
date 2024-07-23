import { People } from "../models/people.model.js";

let peopleList = [];

export const createPeople = (id, name, astronomer, awards, biography, category,photo_url) => {
    let people = new People (id,name, astronomer, awards, biography, category,photo_url);
    peopleList.push(people);
    return people;

}

export const searchAll = () => {
    return peopleList;

}