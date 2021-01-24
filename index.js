const readLineSync= require('readline-sync');
const chalk = require('chalk');
function menu()
{

  console.clear();
console.log('************ This is all we offer ************\n ')



console.log('1. Miles to KM\n2. KM to Miles\n3. Yard to Foot\n4. Foot to Yard\n')
  const choice=readLineSync.question(chalk.green.bold('Which conversion you want to use?\n'));

// const choice=readLineSync.question(chalk.green.bold('Which app you want to use?\n'));
return choice;
}

const choice = menu();
proceedChoice(choice);

function proceedChoice(choice)
{
  //console.log(typeof(choice));
  //https://workat.tech/ide
  console.clear();
  
switch (choice) {
 case "1":
     const mile=readLineSync.question(chalk.green.bold('Enter Miles to get KM\n'));
    console.log(MilesToKM(mile));
   // console.log(mile/1.60934);
    break;
  case "2":
    const km=readLineSync.question(chalk.green.bold('Enter KM to get miles\n'));
   console.log(KMToMiles(km));
   // console.log(km*1.60934);
    break;
  case "3":
     const yard=readLineSync.question(chalk.green.bold('Enter yard to get foot\n'));
    console.log(yardToFoot(yard));
  //  console.log(yard*3);

    break;
  case "4":
   const foot=readLineSync.question(chalk.green.bold('Enter foot to get yard\n'));
   console.log(footToYard(foot));
   // console.log(foot/3);
        break;

    default:
  console.log("You have entered the wrong choice!Try Again\n");
  let choice=menu();
  proceedChoice(choice);
  break;
}
const useAgain=readLineSync.question(chalk.green.bold('Enter 1 to  go back to main menu\nEnter any other key exit\n'));

if(useAgain==="1")
{
  const choice=menu();
  proceedChoice(choice);
}


}



function MilesToKM(mile)
{
  return mile/1.60934;
}

function KMToMiles(km)
{
  return km*1.60934;
}




function yardToFoot(yard)
{
  return yard*3;
}

function footToYard(foot)
{
  return foot/3;
}








// function unit_converters()
// {
//   console.log('1. Miles to KM\n2. KM to Miles\n3. Yard to Foot\n4. Foot to Yard\n')
//   const choice=readLineSync.question(chalk.green.bold('Which conversion you want to use?\n'));



// switch (choice) {
//   case "1":
//     const mile=readLineSync.question(chalk.green.bold('Enter Miles to get KM\n'));
//     console.log(mile/1.60934);
//     break;
//   case "2":
//    const km=readLineSync.question(chalk.green.bold('Enter KM to get miles\n'));
//     console.log(km*1.60934);
//     break;
//   case "3":
//     const yard=readLineSync.question(chalk.green.bold('Enter yard to get foot\n'));
//     console.log(yard*3);

//     break;
//   case "4":
//    const foot=readLineSync.question(chalk.green.bold('Enter foot to get yard\n'));
//     console.log(foot/3);
//         break;
//   default:
  
//   console.log("You have entered the wrong choice!Try Again\n");
//   unit_converters();
//   break;
// }


// }
