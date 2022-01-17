// UC 7A
const MAX_HRS_IN_MONTH=160;
const NUM_OF_WORKING_DAYS=20;
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const WAGE_PER_HOUR=20;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let totEmpWage = 0;
let empDailyWageArr = new Array();

function calcDailyWage(empHrs)
{
     return empHrs * WAGE_PER_HOUR;
}

function getWorkingHours(empCheck)
{
    switch(empCheck)
    {
       case IS_PART_TIME:
            return 4;
       case IS_FULL_TIME:
            return 8;
       default:
            return 0;
    }
}

while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS)
{
  totalWorkingDays++; 
  let empCheck = Math.floor(Math.random() * 10) % 3;
  let empHrs = getWorkingHours(empCheck);
  totalEmpHrs += empHrs;
  empDailyWageArr.push(calcDailyWage(empHrs));
}

function sum(dailyWage)
{
    totEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC-7A -- Total Days : " + totalWorkingDays + " Total Hours: " + totalEmpHrs + " Emp Wage : " + totEmpWage);

function totalWages(totalWage, dailyWage)
{
    return totalWage + dailyWage;
}
console.log("UC-7A -- Emp Wage with reduce : " + empDailyWageArr.reduce(totalWages, 0));

// UC 7B
let dailyCntr=0;
function mapDayWithWage(dailyWage)
{
   dailyCntr++;
   return dailyCntr + " = " + dailyWage;
}

let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC-7B -- Daily Wage Map");
console.log(mapDayWithWageArr);

// UC 7C -- Shows Days when Full time wage of 160 were earned
function fullTimeWage(dailyWage)
{
   return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);
console.log("UC-7C -- Daily Wage Filter When Fulltime Wage Earned");
console.log(fullDayWageArr);

// UC 7D -- Find the first occurence when Full Time Wage was earned using find function
function findFullTimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
console.log("UC-7D -- First time Fulltime wage was earned on Day: " + mapDayWithWageArr.find(findFullTimeWage));

// UC 7E -- Check if Every Element of Full Time Wage is truely holding Full time Wage
function isAllFulltimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
console.log("UC-7E -- Check All Elements have Full Time Wage: " + fullDayWageArr.every(isAllFulltimeWage));

// UC 7F -- Check if there is any Part Time Wage
function isAnyPartTimeWage(dailyWage)
{
   return dailyWage.includes("80");
}
console.log("UC-7F -- Check if any Part Time Wage: " + mapDayWithWageArr.some(isAnyPartTimeWage));

// UC 7G -- Find the number of Days the employee worked
function totalDaysWorked(numOfDays, dailyWage)
{
  if(dailyWage>0) return numOfDays+1;
  return numOfDays;
}
console.log("UC-7G -- Number of Days Emp Worked: " + empDailyWageArr.reduce(totalDaysWorked));