/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class Azonosito extends HTMLElement{
   #tajTomb=[3,7,3,7,3,7,3,7]; //privát minősítés
   #tajOszto=10;
   #adoTomb=[1,2,3,4,5,6,7,8,9];
   #adoOszto=11;
    //vegyük észre hogy az egyedi html tag-nél használt megnevezes tag-paraméter
    //értékeket használtuk el az elnevezésekben: eval JS függvénnyel jól kihasználható
    //lehet
     constructor(){
         super();
         this.arnyek =this.attachShadow({mode:"open"});
         this.billentyuzet =this.billentyuzet.bind(this); //amennyiben ez elmaradna, akkor  a billentyuzet metódusnál, mivel az egy billentyuzet-eseménykezelő
         this.felengedes = this.felengedes.bind(this);
         this.mehet= false;

         
     }
     connectedCallback(){
         var stilus=document.createElement("style");
         this.arnyek.appendChild(stilus);
         this.arnyek.querySelector("style").textContent =`
         input{
            width: 1em;
            text-align: center;
        }
        input:focus{
            border: 2px solid red;
            background: #fbbab7;
            font-size: 1em;
        }
        .oke{
            background:aquamarine;
        }
 `;
        var mennyi =this.getAttribute("hossz");
        var azonosito=this.getAttribute("megnevezes");
        for(var db = 1; db<=mennyi; db++){
            var rubrika = document.createElement("input");
            rubrika.id = (azonosito+db);
            rubrika.name =(azonosito+"[]");//pl.taj[]
            if(db==1 && this.getAttribute("elso")!=""){
                rubrika.value = this.getAttribute("elso");
                rubrika.disabled = true;
            }
            rubrika.size=1;
            rubrika.maxLength =1;
            rubrika.addEventListener("keydown",this.billentyuzet);
             rubrika.addEventListener("keyup",this.felengedes);
             this.arnyek.appendChild(rubrika);
        }
     }
     static get observedAttributes(){
         return ["megnevezes","hossz","elso"];
     }
     billentyuzet(objektum){
         if(objektum.key <"0" ||)
     }
     felengedes(objektum){
         if(this.mehet){
             const rk1 = new RegExp("\\d+");
             const rk1 = new RegExp("\\D+");
            let szoveg = objektum.target.id.replace(rk1,"");
             let szam = objektum.target.id.replace(rk2,"");
             szam++;
             var mennyi = this.getAttribute("hossz");
             mennyi++;
             if(szam == mennyi){
                 if(this.#ellenorzo(szoveg)){
                     let tomb = this.arnyek.children;
                     for(var i = 1; i<tomb.length; i++){
                         tomb[i].className = "oke";
                     }
                     tomb[(tomb.length-1)].blur();
                 } 
             } else{
                 this.arnyek.getElemntById(szoveg.szam).focus();
             }
         }
     }
     #ellenorzo(melyik){
         var szorzok=eval("this.#"+melyik+"Tomb"); // pl. this.#tajTomb
         var osszeg = 0;
         var tomb = this.arnyek.children;
         var valami = [];
         for(var i = 1; i<tomb.length; i++){
             
         }
         for(var i = 0;i<szorzok.length; i++){
             osszeg += (valami[i]*szorzok[i]);
         }
         var oszto=eval("this.#"+melyik+"Oszto");
         if(valami[szorzok.length]== osszeg%oszto) return true; else return false;
     }
}

