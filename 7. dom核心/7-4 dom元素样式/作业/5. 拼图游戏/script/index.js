var gameconfig = {
    width: 700,
    height: 700,
    rows: 3, // 行数
    cols: 3, // 列数
    imgsrc: "img/lol.jpg", // 图片路径
    dom: document.getElementById('game') // 游戏的dom对象
};
// 每一个小块的宽高
gameconfig.pieceWidth = gameconfig.width / gameconfig.cols;
gameconfig.pieceHeight = gameconfig.height / gameconfig.rows;

// 小块的数量
gameconfig.pieceNumber = gameconfig.rows * gameconfig.cols;

var blocks = []; // 包含小方块信息的数组

/**
 * 初始化游戏
 */
init();

function init() {
    // 1. 初始化游戏的容器
    initGameDom();
    // 2. 初始化小方块
    // 2.1 准备好一个数组，数组的每一项是一个对象，记录了每一个小方块的信息 
    initBlocksArray();


    /**
     * 初始化一个小方块数组
     */
    function initBlocksArray(){
    }


    /**
     * 初始化游戏容器
     */
    function initGameDom() {
        gameconfig.dom.style.width = gameconfig.width + 'px';
        gameconfig.dom.style.height = gameconfig.height + 'px';
        gameconfig.dom.style.border='2px solid #ccc ';
    }

}