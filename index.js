// Code your solution here

function findMatching(drivers,drive) {
    return drivers.filter (
        (Match) => Match.toLowerCase() === drive.toLowerCase()
    );
}

function fuzzyMatch(drivers, abc) {
    return drivers.filter(
        (match) => match.toLowerCase().indexOf(abc.toLowerCase()) === 0
    );
}

function matchName(drivers, names){
    return drivers.filter((record) => record.name === names);
}