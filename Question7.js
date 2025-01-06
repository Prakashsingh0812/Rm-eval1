// Question 7

const log = () => console.log("Debounced!");
const debouncedLog = debounce(log, 2000);
debouncedLog(); // Call repeatedly, but "Debounced!" logs only after 2 seconds of no calls.
