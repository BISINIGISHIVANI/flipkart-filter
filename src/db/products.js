import { scarf,shirt1,tshirt} from "../assets" ;
// shoeStyle,shirt3,shirt5,shirt6,shirt2
import { v4 as uuidv4 } from 'uuid';

export const ProductsData=[
    {
        id:uuidv4(),
        name:"kaal",
        price:400,
        idealFor:["Men","Women"],
        brand:"Smile",
        size:["S","M","XL"],
        image:scarf
    },
    {
        id:"3",
        name:"chasma",
        price:200,
        idealFor:["Women"],
        brand:"Peace",
        size:["S"],
        image:shirt1
    },
    {
        id:"4",
        name:"yav",
        price:800,
        idealFor:["Women"],
        brand:"Peace",
        size:["M","XL"],
        image:tshirt
    },
    {
        id:"9",
        name:"chasma",
        price:200,
        idealFor:["Women"],
        brand:"Peace",
        size:["S"],
        image:shirt1
    },
    {
        id:"10",
        name:"yav",
        price:900,
        idealFor:["Women"],
        brand:"Smile",
        size:["M","XL"],
        image:tshirt
    }


]