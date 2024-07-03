function findMatching(drivers, input) {
    // Convert input to lowercase for case insensitivity
    const searchTerm = input.toLowerCase();

    // Filter drivers array based on case insensitive matching
    const matchingDrivers = drivers.filter(driver =>
        driver.toLowerCase().includes(searchTerm)
    );

    return matchingDrivers;
}

function fuzzyMatch(drivers, input) {
    // Convert input to lowercase for case insensitivity
    const searchTerm = input.toLowerCase();

    // Filter drivers array based on starting letter
    const matchingDrivers = drivers.filter(driver =>
        driver.toLowerCase().startsWith(searchTerm)
    );

    return matchingDrivers;
}

function matchName(drivers, nameToMatch) {
    // Filter driver objects array based on name matching
    const matchingDrivers = drivers.filter(driver =>
        driver.name === nameToMatch
    );

    return matchingDrivers;
}
