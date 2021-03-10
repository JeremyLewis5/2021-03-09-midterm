// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
function ageToAbilities(num){
    const age = num;
    if (age < 16) {
        return "You can't drive.";
    } 
    if (age >= 16 && age <= 17) {
         return 'You can drive but not vote.'
     } 
    if (age >= 18 && age <= 24) {
        return 'You can vote but not rent a car.'
    }
    
     if (age >= 25 ) { 
        return 'You can do pretty much anything.';
        }
}

function oddIndices(arr) {
    const isOdd = arr % 2 == 1;
    const arr1 = [];
    if ([] ) {
        return [];
    }
    if ([0]) {
        return [0];
    }
    for (let i = 0; i < arr.length; i ++) {
        const value = arr[i];
        if (value === arr[i] % 2 == 1 ) {
            arr1 === value
        }

        return arr1
    }

    
    
}

function averageStringLength(arr) {
    const str = '';
    const length = str.length;
}



// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof ageToAbilities === 'undefined') {
    ageToAbilities = undefined;
}
if (typeof oddIndices === 'undefined') {
    oddIndices = undefined;
}
if (typeof numOddValues === 'undefined') {
    numOddValues = undefined;
}
if (typeof averageStringLength === 'undefined') {
    averageStringLength = undefined;
}
if (typeof firstPunctuationIndex === 'undefined') {
    firstPunctuationIndex = undefined;
}
if (typeof getPlace === 'undefined') {
    getPlace = undefined;
}

module.exports = {
    ageToAbilities,
    oddIndices,
    numOddValues,
    averageStringLength,
    firstPunctuationIndex,
    getPlace
};
