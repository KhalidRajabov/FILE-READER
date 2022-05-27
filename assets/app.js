let upload = document.getElementById("upload")
let input = document.getElementById("input")
let table = document.getElementById("t-body")
let btnRemove = document.getElementById("btn-remove")



upload.onclick=_=>{input.click()}
btnRemove.addEventListener("click",_=>{
    table.innerHTML="";
    btnRemove.classList.add("hide")
})

input.addEventListener("change",e=>{
    for (const file of e.target.files) {
        let reader = new FileReader;
        reader.readAsDataURL(file)
            let spantag = `<span class="span" style="cursor: pointer" id="span">x</span>`
            reader.onloadend=function(image){
                console.log(file.name + " file loaded");
                let tr = `
                <tr>
                <th scope="row"><img src="${image.target.result}" width="100"></th>
                <td>${file.name}</td>
                <td>${file.size}</td>
                <td>${spantag}</td>
                </tr>
                `
                table.innerHTML+=tr
                let span = document.querySelectorAll(".span")
                span.forEach(item_=>{
                    item_.onclick=function(){
                        item_.parentElement.parentElement.remove()
                    }
                })
                input.value=""
                btnRemove.classList.remove("hide")
            }
        }
    }
    )
    

    
    var seconds = 1, the_interval = seconds * 1 * 1000;
    setInterval(function() {
      let span = document.getElementsByTagName("span")
        if(span.length==0){
            btnRemove.classList.add("hide")
        }
    }, the_interval);