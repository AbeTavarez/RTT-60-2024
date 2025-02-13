// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";



// central: database identifies which database the users are stored within
const val = await central(2);
// console.log(val); // returns-> db1


// db1, db2. db3: databases contain the user's basic information, including username, website, and company.
const val2 = await db1(2)
// console.log(val2);


// val: The personal data for each user is contained within the vault database since its access and usage is restricted by law.
const val3 = await vault(2);
// console.log(val3);


central(10).then(db => console.log(db))
db3(10).then(userBasicInfo => console.log(userBasicInfo))
vault(10).then(userPersonalInfo => console.log(userPersonalInfo))



function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3,
  };
}
