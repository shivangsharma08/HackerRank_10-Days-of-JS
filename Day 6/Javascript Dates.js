

// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    const weeks = {
        "0": "Sunday",
        "1": "Monday",
        "2": "Tuesday",
        "3": "Wednesday",
        "4": "Thursday",
        "5": "Friday",
        "6": "Saturday"
    };
    
    let dayName;
    let dayNum = -1;
    dayName = new Date(dateString);
    dayNum = dayName.getDay().toString();
    return weeks[dayNum];
}

