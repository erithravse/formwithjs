
// Создать html-страницу с формой для ввода стилизованного
// текста. После заполнения формы, вывести текст на экран
//  в соответствии с указанными стилями.

const button = document.querySelector("button");
const area = document.getElementById("area");
const view = document.querySelector(".result-item")
const checkboxBold = document.getElementById("bold");
const checkboxUnderline = document.getElementById("underline");
const checkboxItalics = document.getElementById("italics");
const radioChecks = document.querySelectorAll("input[type='radio']");

button.addEventListener("click",(e) => {
    e.preventDefault();
    view.innerHTML = area.value;
    if (checkboxBold.checked) {
        view.classList.add("bold");
    } else {
        view.classList.remove("bold");
    };
    if (checkboxUnderline.checked) {
        view.classList.add("underline");
    } else {
        view.classList.remove("underline");
    };
    if (checkboxItalics.checked) {
        view.classList.add("italics");
    } else {
        view.classList.remove("italics");
    };
    const align = Array.from(radioChecks).find(el => el.checked).value;
    view.style.textAlign = align;
    
    // for (let i = 0; i < radioChecks.length; i++) {
    //     if (radioChecks[i].checked) {
    //         view.classList.remove("left");
    //         view.classList.remove("right");
    //         view.classList.remove("center");
    //         view.classList.add(radioChecks[i].value);
    //         break;
    //     }
    // }
})
