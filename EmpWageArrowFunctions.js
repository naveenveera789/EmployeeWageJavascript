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

var empDailyWageMap =new Map();
var empDailyHrsMap = new Map();
var empDailyHrsAndWageArr=new Array();
while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS)
{
  totalWorkingDays++; 
  let empCheck = Math.floor(Math.random() * 10) % 3;
  let empHrs = getWorkingHours(empCheck);
  totalEmpHrs += empHrs;
  empDailyWageArr.push(calcDailyWage(empHrs));
  empDailyHrsMap.set(totalWorkingDays,empHrs);
  empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
  empDailyHrsAndWageArr.push
  (
    {
      dayNum:totalWorkingDays,
      dailyHours:empHrs,
      dailyWage:calcDailyWage(empHrs),
      toString()
      {
        return '\nDay'+ this.dayNum+' => Working Hours is '+this.dailyHours+ ' And Wage Earned = '+this.dailyWage
      },
    }
  );
}


// UC-9
const findTotal =  (totalVal, dailyVal) => {return totalVal + dailyVal;}
let count = 0;
let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal, 0);
let totalSalary = empDailyWageArr.filter(dailyWage => dailyWage >0).reduce(findTotal, 0);
console.log("UC-9A -- Emp Wage with Arrow functions : " + totalSalary + " Total Working Hours : " +  totalHours);
let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();
empDailyHrsMap.forEach
(
    (value, key, map) =>
    {
        if(value == 8)  fullWorkingDays.push(key);
        else if (value == 4)  partWorkingDays.push(key);
        else nonWorkingDays.push(key);
    }
);
console.log("Full Working Days : " + fullWorkingDays);
console.log("Part Working Days : " + partWorkingDays);
console.log("Non Working Days : " + nonWorkingDays);