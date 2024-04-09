var data= {
    chatinit:{
        title: ["Hola! Soy tu asistente virtual de Zabala SAS <span class='emoji'> &#128187;</span>","¿En qué puedo ayudarte hoy?","Por favor, selecciona una de las siguientes opciones"],
        options: ["Papeleria","Impresoras","Libros","Tecnologia"]
    },
    papeleria: {
        title:["Por favor, selecciona una de las siguientes opciones"],
        options:["Cuadernos","Lapices","Borradores","Reglas"],
        url : {
            
        }
    },
    
    impresoras: {
        title:["Que tipo de impresora buscas?"],
        options:["Inyeccion de tinta","Laser","Multifuncional"],
        url : {
        }     
    },
    libros: {
        title:["De que editorial buscas libros?"],
        options:['Norma','Panamericana'],
        url : {
            
        }
    },
    tecnologia: {
        title:["Que tipo de tecnologia buscas?"],
        options:['Televisores','Camaras','Audifonos','Smartwatch','Tablets', 'Celulares'],
        url : {
            
        }
    },
    cuadernos: {
        title:["Estos son algunos de los cuadernos disponibles"],
        options:['Cuadernos de 100 hojas rayados','Cuadernos de 100 hojas cuadriculados','Cuadernos 5 materias','Cuadernos 3 materias'],
        url : {
            more:"https://www.panamericana.com.co",
            link:["https://www.panamericana.com.co/cuadernos?_q=cuadernos&map=ft","https://www.panamericana.com.co/cuadernos?_q=cuadernos&map=ft","https://www.panamericana.com.co/cuadernos?_q=cuadernos&map=ft","https://www.panamericana.com.co/cuadernos?_q=cuadernos&map=ft"]
        }
    },
    lapices: {
        title:["Estos son algunos de los lapices disponibles"],
        options:['Lapices de colores','Lapices de grafito','Lapices de cera','Lapices de tinta'],
        url : {
            more:"https://www.panamericana.com.co",
            link:["https://www.panamericana.com.co/lapices?_q=lapices&map=ft","https://www.panamericana.com.co/lapices?_q=lapices&map=ft","https://www.panamericana.com.co/lapices?_q=lapices&map=ft","https://www.panamericana.com.co/lapices?_q=lapices&map=ft"]
        }
    },
    borradores: {
        title:["Estos son algunos de los borradores disponibles"],
        options:['Borradores de tinta','Borradores de goma','Borradores de plastico','Borradores de papel'],
        url : {
            more:"https://www.panamericana.com.co",
            link:["https://www.panamericana.com.co/borradores?_q=borradores&map=ft","https://www.panamericana.com.co/borradores?_q=borradores&map=ft","https://www.panamericana.com.co/borradores?_q=borradores&map=ft","https://www.panamericana.com.co/borradores?_q=borradores&map=ft"]
        }
    },
    reglas: {
        title:["Estas son algunas de las reglas disponibles"],
        options:['Reglas de 15 cm','Reglas de 30 cm','Reglas de 50 cm','Reglas de 1 metro'],
        url : {
            more:"https://www.panamericana.com.co",
            link:["https://www.panamericana.com.co/reglas?_q=reglas&map=ft","https://www.panamericana.com.co/reglas?_q=reglas&map=ft","https://www.panamericana.com.co/reglas?_q=reglas&map=ft","https://www.panamericana.com.co/reglas?_q=reglas&map=ft"]
        }
    },
    inyeccion: {
        title:["Estas son algunas de las impresoras de inyección de tinta disponibles"],
        options: ["Impresora HP DeskJet 2135","Impresora Epson L3110","Impresora Canon Pixma G2100","Impresora Brother DCP-T310"],
        url : {
            more:"https://www.panamericana.com.co",
            link:["https://www.panamericana.com.co/tecnologia/impresoras-y-suministros/impresoras-y-multifuncionales","https://www.panamericana.com.co/tecnologia/impresoras-y-suministros/impresoras-y-multifuncionales","https://www.panamericana.com.co/tecnologia/impresoras-y-suministros/impresoras-y-multifuncionales","https://www.panamericana.com.co/tecnologia/impresoras-y-suministros/impresoras-y-multifuncionales"]
        }
    },
    laser: {
        title: ["Estas son algunas de las impresoras laser disponibles"],
        options: ["Impresora HP LaserJet Pro M15w","Impresora Epson EcoTank L3150","Impresora Canon imageCLASS MF3010","Impresora Brother HL-L2320D"],
        url: {
            more:"https://www.panamericana.com.co",
            link:["https://www.panamericana.com.co/tecnologia/impresoras-y-suministros/impresoras-y-multifuncionales","https://www.panamericana.com.co/tecnologia/impresoras-y-suministros/impresoras-y-multifuncionales","https://www.panamericana.com.co/tecnologia/impresoras-y-suministros/impresoras-y-multifuncionales","https://www.panamericana.com.co/tecnologia/impresoras-y-suministros/impresoras-y-multifuncionales"]
        }
    },
    multifuncional: {
        title: ["Estas son algunas de las impresoras multifuncionales disponibles"],
        options: ["Impresora HP DeskJet Ink Advantage 2135","Impresora Epson EcoTank L3150","Impresora Canon Pixma G2100","Impresora Brother DCP-T310"],
        url: {
            more:"https://www.panamericana.com.co",
            link:["https://www.panamericana.com.co/tecnologia/impresoras-y-suministros/impresoras-y-multifuncionales","https://www.panamericana.com.co/tecnologia/impresoras-y-suministros/impresoras-y-multifuncionales","https://www.panamericana.com.co/tecnologia/impresoras-y-suministros/impresoras-y-multifuncionales","https://www.panamericana.com.co/tecnologia/impresoras-y-suministros/impresoras-y-multifuncionales"]
        }
    },
    norma: {
        title: ["Estos son algunos generos de los libros de la editorial Norma"],
        options: ["Literatura","Ciencia","Historia","Matematicas"],
        url: {
            more:"https://www.panamericana.com.co",
            link:["https://www.panamericana.com.co/libro?_q=libro&map=ft","https://www.panamericana.com.co/libro?_q=libro&map=ft","https://www.panamericana.com.co/libro?_q=libro&map=ft","https://www.panamericana.com.co/libro?_q=libro&map=ft"]
        }
    },
    panamericana: {
        title: ["Estos son algunos generos de los libros de la editorial Panamericana"],
        options: ["Literatura","Ciencia","Historia","Matematicas"],
        url: {
            more:"https://www.panamericana.com.co",
            link:["https://www.panamericana.com.co/libro?_q=libro&map=ft","https://www.panamericana.com.co/libro?_q=libro&map=ft","https://www.panamericana.com.co/libro?_q=libro&map=ft","https://www.panamericana.com.co/libro?_q=libro&map=ft"]
        }
    },
    televisores: {
        title: ["Estas son algunas de las marcas de televisores disponibles"],
        options: ["Samsung","LG","Sony","Panasonic"],
        url: {

        }
    },
    camaras: {
        title: ["Estas son algunas de las marcas de camaras disponibles"],
        options: ["Canon","Nikon","Sony","Panasonic"],
        url: {

        }
    },
    audifonos: {
        title: ["Estas son algunas de las marcas de audifonos disponibles"],
        options: ["Sony","JBL","Bose","Panasonic"],
        url: {

        }
    },
    smartwatch: {
        title: ["Estas son algunas de las marcas de smartwatch disponibles"],
        options: ["Apple","Samsung","Xiaomi","Huawei"],
        url: {

        }
    },
    tablets: {
        title: ["Estas son algunas de las marcas de tablets disponibles"],
        options: ["Apple","Samsung","Huawei","Lenovo"],
        url: {

        }
    },
    celulares: {
        title: ["Estas son algunas de las marcas de celulares disponibles"],
        options: ["Apple","Samsung","Xiaomi","Huawei"],
        url: {

        }
    },
    sony: {
        title: ["Estos son algunos de los productos de Sony"],
        options: ["Tv 45 pulgadas","Camara 20 megapixeles","Audifonos inalambricos","Smartwatch"],
        url: {
            more:"https://www.panamericana.com.co",
            link:["https://www.panamericana.com.co/sony?_q=sony&map=ft","https://www.panamericana.com.co/sony?_q=sony&map=ft","https://www.panamericana.com.co/sony?_q=sony&map=ft","https://www.panamericana.com.co/sony?_q=sony&map=ft"]
        
        }
    },
    samsung: {
        title: ["Estos son algunos de los productos de Samsung"],
        options: ["Tv 45 pulgadas","Camara 20 megapixeles","Audifonos inalambricos","Smartwatch"],
        url: {
            more:"https://www.panamericana.com.co",
            link:["https://www.panamericana.com.co/samsung?_q=samsung&map=ft","https://www.panamericana.com.co/samsung?_q=samsung&map=ft","https://www.panamericana.com.co/samsung?_q=samsung&map=ft","https://www.panamericana.com.co/samsung?_q=samsung&map=ft"]
        
        }
    },
    apple: {
        title: ["Estos son algunos de los productos de Apple"],
        options: ["Iphone 11","Ipad Pro","Apple Watch","Airpods"],
        url: {
            more:"https://www.panamericana.com.co",
            link:["https://www.panamericana.com.co/apple?_q=apple&map=ft","https://www.panamericana.com.co/apple?_q=apple&map=ft","https://www.panamericana.com.co/apple?_q=apple&map=ft","https://www.panamericana.com.co/apple?_q=apple&map=ft"]
        
        }
    },
    xiaomi: {
        title: ["Estos son algunos de los productos de Xiaomi"],
        options: ["Redmi Note 8","Mi Band 4","Airdots","Mi Box"],
        url: {
            more:"https://www.panamericana.com.co",
            link:["https://www.panamericana.com.co/xiaomi?_q=xiaomi&map=ft","https://www.panamericana.com.co/xiaomi?_q=xiaomi&map=ft","https://www.panamericana.com.co/xiaomi?_q=xiaomi&map=ft","https://www.panamericana.com.co/xiaomi?_q=xiaomi&map=ft"]
        
        }
    },
    huawei: {
        title: ["Estos son algunos de los productos de Huawei"],
        options: ["P30 Pro","Watch GT 2","Freebuds 3","Matebook D"],
        url: {
            more:"https://www.panamericana.com.co",
            link:["https://www.panamericana.com.co/huawei?_q=huawei&map=ft","https://www.panamericana.com.co/huawei?_q=huawei&map=ft","https://www.panamericana.com.co/huawei?_q=huawei&map=ft","https://www.panamericana.com.co/huawei?_q=huawei&map=ft"]
        
        }
    },
    nikon: {
        title: ["Estos son algunos de los productos de Nikon"],
        options: ["D3500","Coolpix B500","D750","D5600"],
        url: {
            more:"https://www.panamericana.com.co",
            link:["https://www.panamericana.com.co/nikon?_q=nikon&map=ft","https://www.panamericana.com.co/nikon?_q=nikon&map=ft","https://www.panamericana.com.co/nikon?_q=nikon&map=ft","https://www.panamericana.com.co/nikon?_q=nikon&map=ft"]
        
        }
    },
    canon: {
        title: ["Estos son algunos de los productos de Canon"],
        options: ["EOS Rebel T6","EOS 80D","PowerShot SX540","EOS 6D"],
        url: {
            more:"https://www.panamericana.com.co",
            link:["https://www.panamericana.com.co/canon?_q=canon&map=ft","https://www.panamericana.com.co/canon?_q=canon&map=ft","https://www.panamericana.com.co/canon?_q=canon&map=ft","https://www.panamericana.com.co/canon?_q=canon&map=ft"]
        
        }
    },
    jbl: {
        title: ["Estos son algunos de los productos de JBL"],
        options: ["JBL Flip 5","JBL Charge 4","JBL Tune 120","JBL Free X"],
        url: {
            more:"https://www.panamericana.com.co",
            link:["https://www.panamericana.com.co/jbl?_q=jbl&map=ft","https://www.panamericana.com.co/jbl?_q=jbl&map=ft","https://www.panamericana.com.co/jbl?_q=jbl&map=ft","https://www.panamericana.com.co/jbl?_q=jbl&map=ft"]
        
        }
    },
    bose: {
        title: ["Estos son algunos de los productos de Bose"],
        options: ["Bose SoundLink Mini II","Bose QuietComfort 35 II","Bose SoundSport Free","Bose Home Speaker 500"],
        url: {
            more:"https://www.panamericana.com.co",
            link:["https://www.panamericana.com.co/bose?_q=bose&map=ft","https://www.panamericana.com.co/bose?_q=bose&map=ft","https://www.panamericana.com.co/bose?_q=bose&map=ft","https://www.panamericana.com.co/bose?_q=bose&map=ft"]
        
        }
    },
    panasonic: {
        title: ["Estos son algunos de los productos de Panasonic"],
        options: ["Panasonic Lumix FZ80","Panasonic Lumix G7","Panasonic Lumix GH5","Panasonic Lumix FZ300"],
        url: {
            more:"https://www.panamericana.com.co",
            link:["https://www.panamericana.com.co/panasonic?_q=panasonic&map=ft","https://www.panamericana.com.co/panasonic?_q=panasonic&map=ft","https://www.panamericana.com.co/panasonic?_q=panasonic&map=ft","https://www.panamericana.com.co/panasonic?_q=panasonic&map=ft"]
        
        }
    },
    hp: {
        title: ["Estos son algunos de los productos de HP"],
        options: ["HP Pavilion 15","HP Envy 13","HP Spectre x360","HP Omen 15"],
        url: {
            more:"https://www.panamericana.com.co",
            link:["https://www.panamericana.com.co/hp?_q=hp&map=ft","https://www.panamericana.com.co/hp?_q=hp&map=ft","https://www.panamericana.com.co/hp?_q=hp&map=ft","https://www.panamericana.com.co/hp?_q=hp&map=ft"]
        
        }
    },
    epson: {
        title: ["Estos son algunos de los productos de Epson"],
        options: ["Epson EcoTank L3150","Epson L3110","Epson L4150","Epson L1300"],
        url: {
            more:"https://www.panamericana.com.co",
            link:["https://www.panamericana.com.co/epson?_q=epson&map=ft","https://www.panamericana.com.co/epson?_q=epson&map=ft","https://www.panamericana.com.co/epson?_q=epson&map=ft","https://www.panamericana.com.co/epson?_q=epson&map=ft"]
        
        }
    },         

}

document.getElementById("init").addEventListener("click",showChatBot);
var cbot= document.getElementById("chat-box");
const botImg = document.getElementById("bot-img");
var len1= data.chatinit.title.length;

function showChatBot(){
    console.log(this.innerText);
    if(this.innerText=='Empezar a chatear'){
        document.getElementById('test').style.display='block';
        document.getElementById('init').innerText='Cerrar Chat';
        botImg.classList.add("opacity-0")
        initChat();
    }
    else{
        location.reload();
    }
}

function initChat(){
    j=0;
    cbot.innerHTML='';
    for(var i=0;i<len1;i++){
        setTimeout(handleChat,(i*500));
    }
    setTimeout(function(){
        showOptions(data.chatinit.options)
    },((len1+1)*500))
}

var j=0;
function handleChat(){
    console.log(j);
    var elm= document.createElement("p");
    elm.innerHTML= data.chatinit.title[j];
    elm.setAttribute("class","msg");
    cbot.appendChild(elm);
    j++;
    handleScroll();
}

function showOptions(options){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<div>'+options[i]+'</div>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        opt.addEventListener("click", handleOpt);
        cbot.appendChild(opt);
        handleScroll();
    }
}

function handleOpt(){
    console.log(this);
    var str= this.innerText;
    var textArr= str.split(" ");
    var findText= textArr[0];
    
    document.querySelectorAll(".opt").forEach(el=>{
        el.remove();
    })
    var elm= document.createElement("p");
    elm.setAttribute("class","test");
    var sp= '<span class="rep">'+this.innerText+'</span>';
    elm.innerHTML= sp;
    cbot.appendChild(elm);

    console.log(findText.toLowerCase());
    var tempObj= data[findText.toLowerCase()];
    handleResults(tempObj.title,tempObj.options,tempObj.url);
}

function handleDelay(title){
    var elm= document.createElement("p");
        elm.innerHTML= title;
        elm.setAttribute("class","msg");
        cbot.appendChild(elm);
}


function handleResults(title,options,url){
    for(let i=0;i<title.length;i++){
        setTimeout(function(){
            handleDelay(title[i]);
        },i*500)
        
    }

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    if(isObjectEmpty(url)==true){
        console.log("having more options");
        setTimeout(function(){
            showOptions(options);
        },title.length*500)
        
    }
    else{
        console.log("end result");
        setTimeout(function(){
            handleOptions(options,url);
        },title.length*500)
        
    }
}

function handleOptions(options,url){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<a class="m-link" href="'+url.link[i]+'">'+options[i]+'</a>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        cbot.appendChild(opt);
    }
    var opt= document.createElement("span");
    var inp= '<a class="m-link" href="'+url.more+'">'+'mostrar mas</a>';

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    console.log(isObjectEmpty(url));
    console.log(url);
    opt.innerHTML=inp;
    opt.setAttribute("class","opt link");
    cbot.appendChild(opt);
    handleScroll();
}

function handleScroll(){
    var elem= document.getElementById('chat-box');
    elem.scrollTop= elem.scrollHeight;
}