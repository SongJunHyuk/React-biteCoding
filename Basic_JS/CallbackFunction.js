function checkmood(mood, goodCallback, bacCallback) {
    if (mood === "good") {
        goodCallback();
    }
    else {
        bacCallback();
    }
}

function cry() {
    console.log("ACTION :: CRY");
}

function sing() {
    console.log("ACTION :: SING");
}

function dance() {
    console.log("ACTION :: DANCE");
}

checkmood("sad", sing, cry);