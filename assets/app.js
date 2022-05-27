let upload = document.getElementById("upload")
let input = document.getElementById("input")
let table = document.getElementById("t-body")
let btnRemove = document.getElementById("btn-remove")


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
    for (const file of e.target.files) {
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
    )
    



    //Bu taskda məndə yaranan əsas problem: Əgər şəkilləri birbir
    //silmək istəsən heç bir şəkil qalmayanda əsas sil düyməsi
    //də silinməlidi. Ama o kodu harda yazsam işləmirdi.
    //Heç vaxt bu kod görünmürdü. Çünki ya bunu oxuyub table boş 
    //olmurdu, və ya əvvəldən yaranmış olduğu üçün görülübmüş kimi
    //qəbul etdiyi üçün silməyə bir şey tapmırdı deyə
    //düyməni də silmirdi. Ona görə də hər saniyə durmadan 
    //işləyən funksiya düzəltdim ki hər saniyə table1da element var
    //ya yox yoxlasın. Tapmasa düyməni silsin 

    var seconds = 1, the_interval = seconds * 1000;
    setInterval(function() {
      let span = document.getElementsByTagName("span")
        if(span.length==0){
            btnRemove.classList.add("hide")
        }
    }, the_interval);