import Dictionary from "./Dictionary";
import { Breakpoints } from "./Breakpoints";
import { Theme } from "./Theme";


const customizer = (style) => {

  const dictionary = Dictionary; //OBJECT
  const breakPoints = Breakpoints; //OBJECT
  const theme = Theme; //OBJECT

  let output = "";
  

  //functions
  const getBreak = (key, value) => {
    let subOutput = ""
    subOutput += breakPoints[key] + "{"; //@media (min-width: Npx){
            for (const subProp in value) subOutput  += addProperties(subProp, value[subProp]);
    subOutput += "}";
    return subOutput;
  };

  const addProperties = (key, value, object) => {
    let subOutput = ""
    if (typeof value === "string") {
 
      if (value[0] === "[") {
    
        let subString = value.slice(1, -1);
        let res = subString.split(".");

        if(res.length === 1){
          value = theme[res[0]];
        }else if(res.length === 2){
          value = theme[res[0]][res[1]];
        }else if(res.length === 3){
          value = theme[res[0]][res[1]][res[2]];
        }else if(res.length === 4){
          value = theme[res[0]][res[1]][res[2]][res[3]];
        }else if (res.length === 5){
          value = theme[res[0]][res[1]][res[2]][res[3]][res[4]];
        }else if (res.length === 6){
          value = theme[res[0]][res[1]][res[2]][res[3]][res[4]][res[5]];
        }
      }

      subOutput += dictionary[key] + value + ";";

    } else {
      let global = "";
      let normal = "";

      Object.entries(value).map((entry) => {
        let [subKey, subValue] = entry;

        if (key === "break") {

            subOutput += getBreak(subKey, subValue);
        }
        else if (key === "global")
          global += dictionary[subKey] + subValue + ";";
        else normal += addProperties(subKey, subValue);
      });

      subOutput += key + "{" + normal + "}";
      subOutput += global +
        ":hover { " + global + "}" +
        ":active { " + global + "}" +
        ":focus { " + global + "}";
    }

    return subOutput;


  };
  
  Object.entries(style).map((entry) => {
    let [key, value] = entry;

    if (typeof value === "string") {
      if (value[0] === "[" ) {
        let subString = value.slice(1, -1);
        let res = subString.split(".");
        if(res.length === 1){
          value = theme[res[0]];
        }else if(res.length === 2){
          value = theme[res[0]][res[1]];
        }else if(res.length === 3){
          value = theme[res[0]][res[1]][res[2]];
        }else if(res.length === 4){
          value = theme[res[0]][res[1]][res[2]][res[3]];
        }else if (res.length === 5){
          value = theme[res[0]][res[1]][res[2]][res[3]][res[4]];
        }else if (res.length === 6){
          value = theme[res[0]][res[1]][res[2]][res[3]][res[4]][res[5]];
        }
  
      }
      output += dictionary[key] + value + ";";
    } else output += addProperties(key, value, style);
      
   
  });

  return output;
};

export default customizer;
