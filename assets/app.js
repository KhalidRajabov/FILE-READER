let upload = document.getElementById("upload")
let input = document.getElementById("input")
let table = document.getElementById("t-body")
let btnRemove = document.getElementById("btn-remove")
let area = document.getElementById("area")

//ikona basdıqda inputun kliklənməsi
upload.onclick=_=>{input.click()}


//table`ın bütün elementlərini silmək düyməsi:
btnRemove.addEventListener("click",_=>{
    table.innerHTML="";

    //table boş olduqda, yəni silməyə
    //şəkil olmadığı üçün düymə də silinir
    btnRemove.classList.add("hide")
})


//şəkilləri table`a əlavə etmək
//adı, ölçüsü və sil düyməsi ilə
input.addEventListener("change",e=>{
    uploadImage(e.target.files);
    }
    )
    

area.ondragover=function(el){
    el.preventDefault();
}
area.ondrop=function(e){
    e.preventDefault();
    uploadImage(e.dataTransfer.files);
}
function uploadImage(item){
    for (const file of item) {
        let reader = new FileReader;
        reader.readAsDataURL(file)
            let spantag = `<span class="span" style="cursor: pointer" id="span">x</span>`
            reader.onloadend=function(image){
                console.log(file.name + " file loaded");
                let tr = `
                <tr>
                <th scope="row"><img src="${image.target.result}" width="100"></th>
                <td  >${file.name}</td>
                <td  >${file.size}</td>
                <td style="color: red; font-size: 200%;" >${spantag}</td>
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

                //şəkil əlavə olunduqda əsas sil düyməsi görünsün:
                btnRemove.classList.remove("hide")
            }
        }




    }


    //table`ın içi boş olarkən sil düyməsi silinməlidi.
    //Yəni ki orda elə şey olmamalıdı. Bu kodu 
    //harda yazsam görmürdü. 4-5 variantda yazmışdım 
    //Axırda məcbur belə variant yazdım ki hər saniyə 
    //table`ı yoxlasın. Əgər table içi boş olsa düyməni silsin. 

    var seconds = 1, the_interval = seconds * 1000;
    setInterval(function() {
      let span = document.getElementsByTagName("span")
        if(span.length==0){
            btnRemove.classList.add("hide")
            console.log(" setInterval working...");
        }
    }, the_interval);
