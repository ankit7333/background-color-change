const bgColor = document.querySelector('[data-bgcolor]');
const changeBgColor = document.querySelector('[data-change-bgcolor]');

setTimeout(() => {
    document.body.classList.remove('blur');
}, 500);

const getColor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215); //16777215 => The Decimal color 16777215 is a light color, and the websafe version is hex FFFFFF, and the color name is white.
    let randomCode = `#${randomNumber.toString(16)}` // 16 => as we want hexa code we use 16 (16-bit signed numbers)
    console.log(randomCode);
    document.body.style.backgroundColor = randomCode;
    bgColor.innerHTML = randomCode;
}

changeBgColor.addEventListener('click', getColor);