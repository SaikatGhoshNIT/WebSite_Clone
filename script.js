const button = document.querySelector("#btn")

function addEventListenerPromise(element, method){
    return new Promise((resolve,rejected)=>{
        element.addEventListener(method, resolve)
    })
}

addEventListenerPromise(button, 'click').then(()=>{
    console.log("Clicked");
    button.classList.add("color")
})

