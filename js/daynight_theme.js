var is_day = !0;

function check_light() {
    var currentTime = new Date().getHours();
    if (0 <= currentTime && currentTime < 6) {
        is_day = !1
    }
    if (20 <= currentTime && currentTime < 24) {
        is_day = !1
    }
}

function getStylesheet() {
    if (is_day) {
        document.write("<link rel='stylesheet' href='css/mystyle_day.min.css' type='text/css'>")
    } else {
        document.write("<link rel='stylesheet' href='css/mystyle_night.min.css' type='text/css'>")
    }
}

check_light();
getStylesheet()