const interval = setInterval(() => {
    if(document.querySelector("#tableRowTextEditTabs_0")){
        clearInterval(interval)
        const container = document.querySelector("#tableRowTextEditTabs_0").childNodes[1]
const el = document.createElement('li')
el.innerHTML = "CLEAR HTML POWER"
el.className = '_tableRowTextEditTabs_tab_wysiwig';
el.style.color ="red"
el.id="Mistrzowie_Powstancie_By_Pokonac_zle_tagi"
container.appendChild(el)
document.querySelector("#Mistrzowie_Powstancie_By_Pokonac_zle_tagi").addEventListener('click',()=>{

    const button_edit = document.querySelector("#tableRowTextEditTabs_tab_html_0").childNodes[0].click()//pobieram przycisk
    let text_html = document.querySelector("#tableRowTextEditTabs_container_html_area_0")
const tags = ['span','div','h1','h2','h3','h4','h5','h6','section','article','aside','main',"img",'a',"head","meta","title","link"]
    const good_tags = ['p','strong','ul','li','table','tbody','tr','th','thead','td',"caption",'colgroup','col','tfoot','br']
    let text= text_html.value
    text_html.value = ''
    let ready_text = ``
    let tmp;
    let tmp2
    let splitet_text = text.split('<')
    ready_text += splitet_text[0]
    console.log(splitet_text)
    for(let _=0;_<splitet_text.length;_++){
        if(_==splitet_text.length-1){
            ready_text +=`<${splitet_text[_]}` 
        }else if(_!=splitet_text.length-1){
            tmp = splitet_text[_].split(">")
            tmp2= tmp[0].split(' ')
            if(tmp[1] != undefined){
                for(let __ =0;__<tags.length;__++){
                    if(tmp2[0] == tags[__] || tmp2[0] == `/${tags[__]}`){
                        if(tmp[1].trim() != undefined){
                            if(tmp2[0] == "h1" || tmp2[0] == "h2"|| tmp2[0] == "h3" || tmp2[0] == "h4" || tmp2[0] == "h5"|| tmp2[0] == "h6"){
                                console.log(tmp2[0])
                                ready_text +=`<strong>${tmp[1].trim()}`
                            }else if(tmp2[0] == "/h1" || tmp2[0] == "/h2"|| tmp2[0] == "/h3" || tmp2[0] == "/h4" || tmp2[0] == "/h5"|| tmp2[0] == "/h6"){
                                ready_text +=`</strong>${tmp[1].trim()}`
                            }else{
                                ready_text +=tmp[1].trim()
                            }
                        }
                        break;
                    }
                }
                for(let ___=0;___<good_tags.length;___++){
                    if(tmp2[0] == good_tags[___] || tmp2[0] == `/${good_tags[___]}`){
                       if(tmp2[0][0] == '/'){
                        ready_text += `${tmp[1]}<${tmp2[0].trim()}>`
                       }else{
                        ready_text += `<${tmp2[0]}>${tmp[1].trim()}`
                       }
                        break;
                    }
                }
            }
        }
       
    }
    let p = new RegExp(/<p>\s{1,}<[/]p>/g)
    let strong =  new RegExp(/<strong>\s{1,}<[/]strong>/g)
  

    ready_text = ready_text.replace(p,"")
    ready_text = ready_text.replace(strong,"")
    
    text_html.value = ready_text

    
})
    }
}, 200);

