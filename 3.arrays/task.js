function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((v, i) => v === arr2[i]);
}

function getUsersNamesInAgeRange(users, gender) {
    let result = users.filter(el => el.gender === gender).reduce((accum, averageAge, index, arrayLength) => accum + averageAge.age / arrayLength.length, 0);
    return result
}