const select = document.querySelector('select');
const inputAll = document.querySelectorAll('input');
let myImage = document.querySelector("img");
let textArea = document.querySelector("textarea");

let Obj = {};

const removeHashTag =(str)=>{
    return str.replace("#"," ");
}
const createImage = () => {

        Obj.size=select.value;
        Obj.text = inputAll[0].value;
        Obj.bglClr = removeHashTag(inputAll[1].value);
        Obj.txtClr = removeHashTag(inputAll[2].value);

    let urlPath =`http://via.placeholder.com/${Obj.size}/${Obj.bglClr}/${Obj.txtClr}/text=${Obj.text}`

    myImage.src = urlPath;
    textArea.value = urlPath;
    console.log("ok");
}





inputAll.forEach((e)=>e.addEventListener('change',createImage));

select.addEventListener('change',createImage);