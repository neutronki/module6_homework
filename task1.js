let array = [null, 2, 5, "text", 0.3, '9', null, 8, 3];

function countEvenAndOddElements() {
    let even = 0;
    let odd = 0;

    array.map(function (item, index, array) {
        if (item == null) {
            console.log("Element " + index + " equal to null");
            return;
        }

        if (typeof item == "string") {
            console.log("Element " + index + " - string");
            return;
        }

        if (item % 2 === 0) even++;
        else odd++;
    });

    console.log("Even: " + even);
    console.log("Odd: " + odd);
}

countEvenAndOddElements();