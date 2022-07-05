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

function thisWeek() {
    var today = new Date();
}

function lastWeek() {

}

function lastSevenDays() {

}

function lastFourteenDays() {

}

function thisMonth() {
    var today = new Date();
    picker.setVal([new Date(today.getFullYear(), today.getMonth(), 1), new Date(today.getFullYear(), today.getMonth(), 32 - new Date(today.getFullYear(), today.getMonth(), 32).getDate())]);
}

function lastThirtyDays() {
    var today = new Date();
    let totalDays = 32 - new Date(today.getFullYear(), today.getMonth() - 1, 32).getDate();
    let newStartDate = (today.getDate() - 30 <= 0) ? totalDays + (today.getDate() - 30) : totalDays - (today.getDate() - 30);
    let newStartMonth = (today.getDate() - 30 <= 0) ? (today.getMonth() - 1) % 12 : today.getMonth();
    let newStartYear = (today.getMonth() - newStartMonth < 0) ? today.getFullYear() - 1 : today.getFullYear();
    console.log(newStartDate, newStartMonth, newStartYear);
    picker.setVal([new Date(newStartYear, newStartMonth, newStartDate), new Date(today.getFullYear(), today.getMonth(), today.getDate())]);
}

function lastMonth() {

}

function allTime() {

}