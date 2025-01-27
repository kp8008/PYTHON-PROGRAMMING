function plus(x, y) {
    if (typeof x === "number" && typeof y === "number") {
        return x + y; // Add numbers
    } else if (typeof x === "string" && typeof y === "string") {
        return x + y; // Concatenate strings
    } else {
        return undefined; // Return undefined for other cases
    }
}

console.log(plus(2025, 1));         // Outputs 2026
console.log(plus(undefined, 21));   // Outputs undefined
console.log(plus("StackUp", "Learn")); // Outputs StackUpLearn