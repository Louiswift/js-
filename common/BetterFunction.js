var MyFunction = {
    /**
     * 判断一个数是不是奇数
     * @param {number} n 判断的数字
     * @returns {boolean} 结果 是否
     */
    isOdd: function (n) {
        return n % 2 !== 0
    },
    /**
     * 判断一个数是不是素数
     * @param {*} n 判断的数字
     * @returns 
     */
    isPrime: function (n) {
        if (n < 2) {
            return false
        }
        for (i = 2; i < n; i++) {
            if (n % 2 === 0) {
                return false
            }
        }
        return true
    },
    /**
     * 对数组求和
     * @param {*} arr 填一个数组
     * @returns 
     */
    sumOfArray: function (arr) {
        var sum = 0;
        for (i = 0; i < arr.length; i++) {
            sum += arr[i]
        }
        return sum;
    },
    /**
     * 求数组中最大的值
     * @param {*} arr 输入一个值
     * @param {number} max 最大的值
     */
    maxOfArray: function (arr) {
        if (arr.length === 0) {
            return
        };
        var max = arr[0];
        for (i = 0; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i]
            }
        }
        return max;
    },
    /**
     * 求数组中最小的值
     * @param {*} arr 输入一个值
     * @param {number} min 最小的值
     */
    minOfArray: function (arr) {
        if (arr.length === 0) {
            return
        };
        var min = 0;
        for (i = 0; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i]
            };
        }
        return min;
    },
    /**
     * 判断一个数组是不是稀松数组
     * @param {*} arr
     */
    hasEmptyInArray: function (arr) {
        for (i = 0; i < arr.length; i++) {
            if (!(i in arr)) {
                return true;
            }
        }
        return false
    },
    /**
     *  判断一个数是不是闰年
     * @param {number} n 判断的数字
     * @returns 返回的结果
     */
    isLeap: function (n) {
        return n % 4 === 0 || n % 400 === 0
    },
    /**
     * 得到某年某月的天数
     * @param {*} year 
     * @param {*} month 
     */
    getDays: function (year, month) {
        if (month === 2) {
            return this.isLeap(year) ? 29 : 28;
        } else if (month < 8 && this.isOdd(month) || month >= 8 && this.isOdd(month)) {
            return 31;
        } else {
            return 30;
        }
    },
    /**
     * 找出数组中出现频率最高的数字
     * @param {*} nums 
     * @returns 
     */
    getTopFreqInArray: function (nums) {
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
                    number: prop,
                    fre: record[prop]
                }
            }
        }
        return result;
    },
    /**
     * 给指定的数组升序排序
     * @param {*} arr 
     * @param {Function} compare 比较大小，
     * 该函数有俩个参数，代表数组中的两个元素，
     * 该函数返回一个数字，如果是正数，则第一个元素比第二个元素大，
     * 如果是0则相等，
     * 如果是负数，则第一个元素比第二个元素小
     */
    sort: function (arr, compare) {
        for (var i = 1; i < arr.length; i++) {
            for (var j = 0; j < arr.length - i; j++) {
                if (compare(arr[j], arr[j + 1]) > 0) {
                    var temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    },
    /**
     * 筛选数组
     * @param {*} arr 
     * @param {*} callback 回调函数，接收两个参数，
     * 分别表示数组的某一项和其下标，返回boolean
     * 满足条件返回true，否则返回false
     */
    filter: function (arr, callback) {
        var newArr = [];
        for (var i = 1; i < arr.length; i++) {
            if (callback(arr[i], i)) {
                newArr.push(arr[i]);
            }
        }
        return newArr
    },
    /**
     * 从指定的数组中，查找第一个满足条件的元素，如果没有找到，返回undefined
     * @param {*} arr 
     * @param {*} callback 回调函数，接收两个参数，
     * 分别表示数组的某一项和其下标，返回boolean
     * 满足条件返回true，否则返回false
     */
    find: function (arr, callback) {
        for (var i = 1; i < arr.length; i++) {
            if (callback(arr[i], i)) {
                return arr[i];
            }
        }
    },

    /**
     * 记录指定的数组中，满足条件的元素的次数
     * @param {*} arr 
     * @param {*} callback
     * @returns 
     */
    count: function (arr, callback) {
        var num = 0;
        for (var i = 1; i < arr.length; i++) {
            if (callback(arr[i], i)) {
                num++
            }
        }
        return num;
    },

    /**
     * 得到一个最小值到最大值之间的随机整数
     * @param {*} min 最小值
     * @param {*} max 最大值（取不到最大值）
     */
    getRandom: function (min, max) {
        return parseInt(Math.random() * (max + 1 - min) + min);
    }
}