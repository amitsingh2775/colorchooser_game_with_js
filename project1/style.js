
//sare button ko select kiya becz all buttonspe operations laagana hai
const buttons=document.querySelectorAll('.button');

// boddy ko select kiya kyoki boddy ka color change karna hai
const body=document.querySelector('body');
// extra jab color choose karenge to text ka color bhi change ho jaye
const h1=document.querySelector('h1');

// loop lagye hai for each buttons ke liye
buttons.forEach(function (button){
    console.log(button);
    // event listener hai kyoki jab ham color per click karenge to ya hona chahiye
    // call back function bhi hai ki kya hoga
    button.addEventListener('click',function(e){
        console.log(e);

        console.log(e.target);
        // agar target ki id grey hai means jisper click kiya hai
        if(e.target.id==='grey'){
            // background cokor grey kar de
            body.style.backgroundColor='grey';
            // h1 ka color blue kar de
            h1.style.color='blue';
            // text size large kar de
            h1.style.fontSize='x-large';
        }
        if(e.target.id=='red'){
            body.style.backgroundColor='red';
            h1.style.color='yellow';
        }
        if(e.target.id=='blue'){
            body.style.backgroundColor='blue';
            h1.style.color='white';
        }
        if(e.target.id=='yellow'){
            body.style.backgroundColor=e.target.id;
            h1.style.color='pink';
        }
    });
});