const addDays = (date, days) => {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
};
const inBetween = (beforeDate, date, afterDate) => {
    return (beforeDate.getTime() <= date.getTime() && date.getTime() <= afterDate.getTime())
};

const filterByRange = (list, startDate, endDate) => {
    if (list.length > 0) {
        return list.filter(obj => inBetween(startDate, obj.date, endDate))
    }
    return [];
};

const firstSundayOfGridBy = (month, year = 2020) => {
    const firstDayOfMonth = new Date(year, month, 1);
    const day = firstDayOfMonth.getDay();
    if (day == 7) {
        return firstDayOfMonth
    } else {
        return addDays(firstDayOfMonth, -day)
    }
};

const lastSaturdayOfGridBy = (month, year = 2020) => {
    const firstDayOfNextMonth = new Date(year, month + 1, 1);
    const lastDayOfMonth = addDays(firstDayOfNextMonth, -1);
    const day = lastDayOfMonth.getDay();
    if (day == 6) {
        return lastDayOfMonth
    } else {
        return addDays(lastDayOfMonth, 6 - day);
    }
};

const daysBetween = (startDate, endDate) => {
    return Math.floor((endDate.getTime() - startDate.getTime()) / (24 * 60 * 60 * 1000))
}

const sortRemindersInMonthlyPeriods = (remindersList, year = 2020) => {
    return;
}

const sortRemindersInWeeklyPeriods = (remindersList, month) => {
    const period = 7;
    let startDate = firstSundayOfGridBy(month);
    let endDate = lastSaturdayOfGridBy(month);
    let nexToEndDate = addDays(endDate, 1);
    let daysInRange = daysBetween(startDate, nexToEndDate)
    return periodSorter(remindersList, startDate, daysInRange, period)

}

const sortRemindersInDailyPeriods = (remindersList, startDate) => {
    const period = 1;
    return periodSorter(remindersList, startDate, 7, period)
}

const periodSorter = (remindersList, startDate, totalDaysInRange, period) => {

    let sortedArray = [];
    let i = 0;
    while (i < totalDaysInRange) {
        let periodArray = [];
        let startDatePeriod = addDays(startDate, i)
        let endDatePeriod = addDays(startDate, i + period)
        periodArray = filterByRange(remindersList, startDatePeriod, endDatePeriod)
        sortedArray.push(periodArray);
        i = i + period;
    }
    ;
    return sortedArray
};

const uniqueID = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
};

const sortByDate = (list) => {
    const sortedList = list.sort((a,b)=>{
        return a.date - b.date;
    })
    return sortedList;
}

const getMonthVerboseBy = (number) => {
    const month = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    return month[number];
}
export {
    addDays,
    inBetween,
    filterByRange,
    firstSundayOfGridBy,
    lastSaturdayOfGridBy,
    daysBetween,
    sortRemindersInWeeklyPeriods,
    sortRemindersInDailyPeriods,
    uniqueID,
    sortByDate,
    getMonthVerboseBy
}
