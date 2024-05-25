console.log(1)

setTimeout(() => {
    console.log(2)
}, 0);

setTimeout(() => {
    console.log(3)
}, 0);


console.log(4)

// fetch(url).then((response) => {})
Promise.resolve().then(() => console.log(6))

// dom.onClick = () => {}

console.log(5)
