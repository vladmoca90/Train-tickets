//Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them

function maxOfThree(x, y, z) {

    if (x == y && y == z) {
        return x;
    }

    if (x > y) {
        if (x > z) {
            return x;
        }
        else {
            return z;
        }
    }
    else {
        if (y > z) {
            return y;
        }
        else {
            return z;
        }
    }
}