import inquirer from "inquirer"
let isFriend = await inquirer.prompt({
    name : "Friend", type : "input", message : "Enter friend name"
})
if(isFriend.Friend === "Kashif" || isFriend.Friend === "Ali")
    {console.log(`${isFriend.Friend} is your friend`)}
else{{console.log(`${isFriend.Friend} is not your friend`)}}