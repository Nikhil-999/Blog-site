const arr_cont = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const container = document.querySelector('.container');
var arr = [];
for (let i = 0; i < arr_cont.length - 15; i++) { arr += arr_cont[i]; }

function looping() {
    for (let i = 0; i < arr.length; i++) {
        container.innerHTML += '<span style="font-size: xx-large; border: 1px solid red">' + arr[i] + '</span>' + '  ';
    }
}
looping();
window.addEventListener('keydown', (event) => {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        event.preventDefault();
        for (let i = 0; i < arr.length; i++) {
            if (event.key === arr[i]) {
                arr = arr.slice(0, i) + arr.slice(i + 1,);
                console.log(arr);
                container.innerHTML = "";
                let a = Math.floor(Math.random() * 26);
                console.log(a);
                arr += arr_cont[a];
                looping();
                break;
            }
        }
    }
})