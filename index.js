const hq = 42

function distanceFromHqInBlocks(pickUp1) {
    
    if(hq < pickUp1) {
        return pickUp1 - hq
    }  else {
        return hq - pickUp1
    }
}



function distanceFromHqInFeet(block) {
    return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(start, destination) {
    if(start < destination) {
        return (destination - start) * 264;
    } else {
        return (start - destination) * 264;
    }
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination)
    if(distance < 400) {
        return  0;
    } if (distance < 2000) {
        return (distance - 400) * 0.02;
    } if (distance > 2000 && distance < 2500) {
        return 25;
    } if (distance >= 2500) {
        return "cannot travel that far";
    }
}