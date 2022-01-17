const MAX_HRS_IN_MONTH=160;
const NUM_OF_WORKING_DAYS=20;
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const WAGE_PER_HOUR=20;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyHrsAndWageArr = new Array();
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

// UC-10
console.log("UC-10 -- Showing Daily Hours Worked and Wage Earned : " + empDailyHrsAndWageArr);