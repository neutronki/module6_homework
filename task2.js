function getSimplicityOfNumber (number) {
    if (number > 1000) return "The data is incorrect";
    if (number === 0) return  "Zero is zero. The number is unnatural";
    if (number === 1) return "One is one. Not simple and not composite";

    let divisionsCount = 0;
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) divisionsCount++;
    }

    if (divisionsCount === 2)
        return "The number is simple";
    else
        return "Composite number";
}

console.log(getSimplicityOfNumber(12));