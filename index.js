// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42)
}

function distanceFromHqInFeet(someValue) {
    return Math.abs((someValue - 42) * 264)
}

function distanceTravelledInFeet(num1, num2) {
    return Math.abs((num1 - num2) * 264)
}

function calculatesFarePrice(start, destination) {
    const doMath = (Math.abs(start - destination) * 264)

    if (doMath > 2500) {
        return 'cannot travel that far'
    } else if (doMath > 2000) {
        return 25
    } else if ((doMath > 400) && (doMath < 2000)) {
        return (doMath - 400) * .02
    } else if (doMath <= 400) {
        return 0
    }
}