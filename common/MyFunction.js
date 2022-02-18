/**
 * 判断一个数是不是奇数
 * @param {number} n 判断的数字
 * @returns {boolean} 结果 是否
 */

function isOdd(n) {
    return n % 2 !== 0
}



/**
 * 判断一个数是不是素数
 * @param {number1} n 判断的数字
 * @returns @returns {boolean} 结果 是否
 */
function isPrime(n) {
    if (n < 2) {
        return false;
    }
    for (i = 2; i < n; i++) {
        if (n % 2 === 0) {
            return false
        }
    }
    return true
}


/**
 * 对数组求和
 * @param {number} arr  填写一个数组
 * @param {number} sum  结果
 */

function sumOfArray(arr) {
    var sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum;
}



/**
 * 求数组中最大的值
 * @param {number} arr 输入一个数组
 * @param {number} max 最大的值
 */
function maxOfArray(arr) {
    if (arr.length === 0) {
        return;
    }
    var max = arr[0];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
}


/**
 * 求数组中最小的值
 * @param {number} arr 输入一个数组
 * @param {number} min 最大的值
 */
function minOfArray(arr) {
    if (arr.length === 0) {
        return;
    }
    var min = arr[0];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    return min;
}


/**
 * 判断一个数组是不是稀松数组
 * @param {*} arr
 */
function hasEmptyInArray(arr) {
    for (i = 0; i < arr.length; i++) {
        if (!(i in arr)) {
            return true;
        }
    }
    return false
}


/**
 *  判断一个数是不是闰年
 * @param {number} n 判断的数字
 * @returns 返回的结果
 */
function isLeap(n) {
    return n % 4 === 0 || n % 400 === 0
}

/**
 * 得到某年某月的天数
 * @param {*} year 
 * @param {*} month 
 */
function getDays(year, month) {
    if (month === 2) {
        return isLeap(year) ? 29 : 28;
    } else if (month < 8 && isOdd(month) || month >= 8 && !isOdd(month)) {
        return 31;
    } else {
        return 30;
    }
}



/**
 * 找出数组中出现频率最高的数字
 * @param {*} nums 
 * @returns 
 */
function getTopFrepInArray(nums) {
    var record = {};
    for (i = 0; i < nums.length; i++) {
        var n = nums[i];
        if (record[n]) {
            record[n]++
        } else {
            record[n] = 1
        }
    }

    var result;
    for (var prop in record) {
        if (!result || record[prop] > result.fre) {
            result = {
                number: +prop,
                fre: record[prop]
            }
        }
    }
    return result;
}