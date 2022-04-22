
const chooseOptimalDistance = (t, k, ls) => {
    //To sort the array
    ls.sort((a, b) => a - b);

    let closestSum;
    //if one city then we pick the closest value to the given distance 

    if (k === 1) {
        for (let i = 0; i < ls.length; i++) {
            if (i === 0 || i > 0 && closestSum < ls[i] && ls[i] < t) {
                closestSum = ls[i];
            }
        }
    }

    //if more than one city we
    else {
        //if 2 cities simple loop to get the best sum
        if (k === 2) {
            for (let i = 0; i < ls.length - 1; i++) {
                let sum = ls[i] + ls[i + 1];
                if (t > sum) {
                    closestSum = sum;
                }
            }

            // 2 pointers(first and last item) to sum different values and get the best sum
        } else {
            for (let i = 0; i < ls.length - 2; i++) {
                let left = i + 1;
                let right = ls.length - 1;
                while (left < right) {
                    let sum = ls[i] + ls[left] + ls[right];
                    if (t > sum) {
                        closestSum = sum;
                    }
                    if (sum > t) {
                        right--;
                    }
                    else {
                        left++;
                    }
                }
            }
        }
    }
    if (typeof closestSum === 'undefined') {
        return null;
    } else {
        return closestSum;
    }
};
// console.log(chooseOptimalDistance(174, 3, [59, 56, 58, 59, 6161])); //173
// console.log(chooseOptimalDistance(163, 3, [50])); // null
// console.log(chooseOptimalDistance(3, 1, [1, 2, 3]));
// console.log(chooseOptimalDistance(4, 2, [1, 2, 3]));
