mobiscroll.setOptions({
    locale: mobiscroll.localeEn,
    theme: 'ios', 
    themeVariant: 'light'
});

var days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
var box = document.getElementById("select_filter_table");
var inflated = document.getElementById("box-inflated");
var closeButton = document.getElementById("close-modal");
var boxDate = document.getElementById("box-date");
var boxDateText = "";
var picker = mobiscroll.datepicker('#calendarPicker', {
    select: 'range',
    rangeHighlight: true,
    showRangeLabels: true,
    display: 'inline'
});

closeButton.onclick = function() {
    var start = picker.getVal()[0].toString().split(' ');
    var end = picker.getVal()[1].toString().split(' ');
    boxDateText = start[1] + " " + start[2] + " - " + end[1] + " " + end[2] + ", " + end[3];
    boxDate.innerText = boxDateText;
}

function setToday() {
    picker.setVal([new Date(), new Date()]);
}

function setYesterday() {
    var today = new Date();
    let totalDaysLast = 32 - new Date(today.getFullYear(), today.getMonth() - 1, 32).getDate();
//    let totalDays =  32 - new Date(today.getFullYear(), today.getMonth(), 32).getDate();
    let newStartDate = (today.getDate() - 1 <= 0) ? totalDaysLast + (today.getDate() - 7) : today.getDate() - 1;
    let newStartMonth = (today.getDate() - 1 <= 0) ? (today.getMonth() - 1) % 12 : today.getMonth();
    let newStartYear = (today.getMonth() - newStartMonth < 0) ? today.getFullYear() - 1 : today.getFullYear();
    console.log(newStartDate, newStartMonth, newStartYear);
    picker.setVal([new Date(newStartYear, newStartMonth, newStartDate), new Date(newStartYear, newStartMonth, newStartDate)]);
}

function thisWeek() {
    var today = new Date();
    let weekOffset = today.getDay() - 1;
    let totalDaysLast = 32 - new Date(today.getFullYear(), today.getMonth() - 1, 32).getDate();
//    let totalDays = 32 - new Date(today.getFullYear(), today.getMonth(), 32).getDate();
    let newStartDate = (today.getDate() - weekOffset <= 0) ? totalDaysLast + (today.getDate() - weekOffset) : today.getDate() - weekOffset;
    let newStartMonth = today.getDate() - weekOffset <= 0 ? (today.getMonth() - 1) % 12 : today.getMonth();
    let newStartYear = today.getMonth() - newStartMonth < 0 ? today.getFullYear() - 1 : today.getFullYear();
    picker.setVal([new Date(newStartYear, newStartMonth, newStartDate), new Date(today.getFullYear(), today.getMonth(), today.getDate() + (7 - (weekOffset + 1)))]);    
}

function lastWeek() {
    var today = new Date();
    let totalDaysLast = 32 - new Date(today.getFullYear(), today.getMonth() - 1, 32).getDate();
//    let totalDays = 32 - new Date(today.getFullYear(), today.getMonth(), 32).getDate();
    let focalDate = (today.getDate() - 7 <= 0) ? totalDaysLast + (today.getDate() - 7) : today.getDate() - 7;
    let focalMonth = (today.getDate() - 7 <= 0) ? (today.getMonth() - 1) % 12 : today.getMonth();
    let focalYear = (today.getMonth() - focalMonth < 0) ? today.getFullYear() - 1 : today.getFullYear();
    let focal = new Date(focalYear, focalMonth, focalDate);
    let weekOffset = focal.getDay() - 1;
    let newStartDate = (focalDate - weekOffset <= 0) ? totalDaysLast + (focalDate - weekOffset) : focalDate - weekOffset;
    let newStartMonth = focalMonth - weekOffset <= 0 ? focalMonth - 1 : focalMonth;
    let newStartYear = focalMonth - newStartMonth < 0 ? focalYear - 1 : focalYear;
    picker.setVal([new Date(newStartYear, newStartMonth, newStartDate), new Date(focalYear, focalMonth, focalDate + (7 - (weekOffset + 1)))]);    
}

function lastSevenDays() {
    var today = new Date();
    let totalDaysLast = 32 - new Date(today.getFullYear(), today.getMonth() - 1, 32).getDate();
//    let totalDays =  32 - new Date(today.getFullYear(), today.getMonth(), 32).getDate();
    let newStartDate = (today.getDate() - 6 <= 0) ? totalDaysLast + (today.getDate() - 7) : today.getDate() - 6;
    let newStartMonth = (today.getDate() - 6 <= 0) ? (today.getMonth() - 1) % 12 : today.getMonth();
    let newStartYear = (today.getMonth() - newStartMonth < 0) ? today.getFullYear() - 1 : today.getFullYear();
    console.log(newStartDate, newStartMonth, newStartYear);
    picker.setVal([new Date(newStartYear, newStartMonth, newStartDate), new Date(today.getFullYear(), today.getMonth(), today.getDate())]);
}

function lastFourteenDays() {
    var today = new Date();
    let totalDaysLast = 32 - new Date(today.getFullYear(), today.getMonth() - 1, 32).getDate();
//    let totalDays =  32 - new Date(today.getFullYear(), today.getMonth(), 32).getDate();
    let newStartDate = (today.getDate() - 13 <= 0) ? totalDaysLast + (today.getDate() - 14) : today.getDate() - 13;
    let newStartMonth = (today.getDate() - 13 <= 0) ? (today.getMonth() - 1) % 12 : today.getMonth();
    let newStartYear = (today.getMonth() - newStartMonth < 0) ? today.getFullYear() - 1 : today.getFullYear();
    console.log(newStartDate, newStartMonth, newStartYear);
    picker.setVal([new Date(newStartYear, newStartMonth, newStartDate), new Date(today.getFullYear(), today.getMonth(), today.getDate())]);
}

function thisMonth() {
    var today = new Date();
    picker.setVal([new Date(today.getFullYear(), today.getMonth(), 1), new Date(today.getFullYear(), today.getMonth(), 32 - new Date(today.getFullYear(), today.getMonth(), 32).getDate())]);
}

function lastThirtyDays() {
    var today = new Date();
    let totalDaysLast = 32 - new Date(today.getFullYear(), today.getMonth() - 1, 32).getDate();
    let totalDays =  32 - new Date(today.getFullYear(), today.getMonth(), 32).getDate();
    let newStartDate = (today.getDate() - 30 <= 0) ? totalDaysLast + (today.getDate() - 30) : totalDays - (today.getDate() - 30);
    let newStartMonth = (today.getDate() - 30 <= 0) ? (today.getMonth() - 1) % 12 : today.getMonth();
    let newStartYear = (today.getMonth() - newStartMonth < 0) ? today.getFullYear() - 1 : today.getFullYear();
    console.log(newStartDate, newStartMonth, newStartYear);
    picker.setVal([new Date(newStartYear, newStartMonth, newStartDate), new Date(today.getFullYear(), today.getMonth(), today.getDate())]);
}

function lastMonth() {
    var today = new Date();
    let newStartMonth = (today.getMonth() - 1) % 12;
    let newStartYear = (today.getMonth() - 1 < 0) ? today.getFullYear() - 1 : today.getFullYear();
    picker.setVal([new Date(newStartYear, newStartMonth, 1), new Date(newStartYear, newStartMonth, 32 - new Date(newStartYear, newStartMonth, 32).getDate())]);
}

function allTime() {
    //subject to first and last date from data
}