// 配置对象
let config = {
    imgSize: {
        imgWidth: 590, // 图片宽度
        imgHeight: 470, // 图片高度
        dotWidth: 10
    },
    doms: {
        divBanner: document.querySelector('.banner'),
        divImgs: document.querySelector('.banner .imgs'),
        divDots: document.querySelector('.banner .dots'),
        divArrow: document.querySelector('.banner .arrow')
    },
    currentIndex: 0, // 实际图片索引，0 ~ imgNumber - 1
    timer: { // 运动计时器配置
        duration: 16,  // 运动间隔的时间,单位毫秒
        total: 2000, // 运动总时间,单位毫秒
        id: null, // 计时器id
    },
    autoTimer: null // 自动移动的计时器
};
// 图片数量
config.imgNumber = config.doms.divImgs.children.length + 1;
console.log(config);

/**
 * 初始化元素尺寸
 */
function initSize() {
    config.totalWidth = config.imgSize.imgWidth * (config.imgNumber + 1);
    config.doms.divDots.style.width = config.imgSize.dotWidth * config.imgNumber + 'px';
    config.doms.divImgs.style.width = config.totalWidth + 'px';
}

/**
 * 初始化元素
 */
function initElement() {
    // 创建小圆点
    for (let i = 0; i < config.imgNumber - 1; i++) {
        let span = document.createElement('span');
        config.doms.divDots.appendChild(span);
    }
    console.log(config.imgNumber)

    // 复制图片
    let children = config.doms.divImgs.children;
    let first = children[0], last = children[children.length - 1];
    let newImg = first.cloneNode(true);
    config.doms.divImgs.appendChild(newImg);

    newImg = last.cloneNode(true);
    config.doms.divImgs.insertBefore(newImg, first);
}

/**
 * 初始化位置
 */
function initPosition() {
    let left = (-config.currentIndex - 1) * config.imgSize.imgWidth;
    config.doms.divImgs.style.marginLeft = left + 'px';

}

/**
 * 设置小圆点状态
 */
function setDotStatus() {
    for (let i = 0; i < config.doms.divDots.children.length; i++) {
        let dot = config.doms.divDots.children[i];
        if (i === config.currentIndex) {
            dot.className = 'active';
        } else {
            dot.className = '';
        }
    }
}

/**
 * 初始化汇总方法
 */
function init() {
    initSize();
    initElement();
    initPosition();
    setDotStatus();
}

init();

/**
 * 切换到某一个图片索引
 * @param {*} index 切换到的图片索引
 * @param {*} direction 方向 "left" "right"
 */
function switchTo(index, direction) {
    if (index === config.currentIndex) {
        return;
    }
    if (!direction) {
        direction = 'left';
    }
    // 最终的marginLeft
    let newLeft = (-index - 1) * config.imgSize.imgWidth;
    animateSwitch();
    config.doms.divImgs.style.marginLeft = newLeft + 'px';

    // 重新设置当前索引
    config.currentIndex = index;
    setDotStatus();

    /**
     * 逐步改变marginLeft
     */
    function animateSwitch() {
        stopAnimate(); // 先停止之前的动画
        // 1. 计算运动的次数
        let number = Math.ceil(config.timer.total / config.timer.duration);
        let curNumber = 0;

        // 2. 计算总距离
        let distance,
            marginLeft = parseFloat(getComputedStyle(config.doms.divImgs).marginLeft),
            totalWidthz = config.imgNumber * config.imgSize.imgWidth;
        if (direction === 'left') {
            if (newLeft < marginLeft) {
                distance = newLeft - marginLeft;
            } else {
                distance = -(totalWidthz - Math.abs(newLeft - marginLeft));
            }
        } else {
            if (newLeft > marginLeft) {
                distance = newLeft - marginLeft;
            } else {
                distance = totalWidthz - Math.abs(newLeft - marginLeft);
            }
        }

        // 3. 计算每次改变的距离
        let everyDistance = distance / number;

        config.timer.id = setInterval(function () {
            // 改变div的marginLeft
            marginLeft += everyDistance;
            if (direction === 'left' && Math.abs(marginLeft) > totalWidthz) {
                marginLeft += totalWidthz;

            } else if (direction === 'right' && Math.abs(marginLeft < config.imgSize.imgWidth)) {
                marginLeft -= config.totalWidthz;
            }
            config.doms.divImgs.style.marginLeft = marginLeft + 'px';
            curNumber++;
            if (curNumber === number) {
                stopAnimate();
            }

        }, config.timer.duration)
    }

    function stopAnimate() {
        clearInterval(config.timer.id);
        config.timer.id = null;
    }
}

switchTo(config.currentIndex)

config.doms.divArrow.onclick = function (e) {
    if (e.target.classList.contains('left')) {
        toLeft();
    } else if (e.target.classList.contains('right')) {
        toRight();
    }
}

config.doms.divDots.onclick = function (e) {
    if (e.target.tagName === 'SPAN') {
        let index = Array.from(this.children).indexOf(e.target);
        console.log(index)
        switchTo(index, index > config.currentIndex ? 'left' : 'right');
    }
}

function toLeft() {
    let index = config.currentIndex - 1;
    if (index < 0) {
        index = config.imgNumber - 2;
    }
    switchTo(index, 'right');
}

function toRight() {
    let index = (config.currentIndex + 1) % config.imgNumber;
    console.log(index)
    switchTo(index, 'left');
}

config.autoTimer = setInterval(toRight, 2000);

config.doms.divBanner.onmouseenter = function () {
    clearInterval(config.autoTimer);
    config.autoTimer = null;
}

config.doms.divBanner.onmouseleave = function () {
    if (config.autoTimer) {
        return;
    }
    config.autoTimer = setInterval(toRight, 2000);
}