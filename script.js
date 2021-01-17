"use strict"

// drag and drop 
        const image = document.querySelector("#normalCanvas");

         document.addEventListener("dragover", (ev)=>{
             ev.preventDefault();
         })   

         document.addEventListener("drop", (ev)=> {
            ev.preventDefault();
            const files = ev.dataTransfer.files; 
            if(files.length > 0){
                const reader = new FileReader();
                reader.addEventListener("load", (ev) =>{
                    const url = ev.target.result;
                    const img = document.createElement("img");
                    img.addEventListener("load", (ev) =>{
                        image.width = img.naturalWidth;
                        image.height = img.naturalHeight;
                        const context = image.getContext("2d");
                        context.drawImage(img, 0, 0);
                    })
                    img.src = url;
                })
                reader.readAsDataURL(files[0]);
            }
         });

// download link
        const canvas = document.querySelector("#normalCanvas");

        document.querySelector("#btnDownload").addEventListener("click", (ev) =>{
            const url = canvas.toDataURL();
             ev.target.setAttribute("href", url);
         } );
