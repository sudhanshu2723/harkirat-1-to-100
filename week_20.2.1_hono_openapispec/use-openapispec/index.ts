import { DefaultService } from "./generated";

async function main(){
const response=await DefaultService.getUser("12323");
console.log(response)
}

main();