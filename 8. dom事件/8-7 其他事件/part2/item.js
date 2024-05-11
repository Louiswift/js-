let img = document.querySelector('img');
window.addEventListener('DOMContentLoaded', () => {
    getImgSize(img, function (size) {
        console.log(size.width, size.height);
    })
});

function getImgSize(img, callback) {
    window.onload = () => {
        console.log("加载完毕")
        return callback(
            {
                width: img.width,
                height: img.height
            }
        )
    }
}