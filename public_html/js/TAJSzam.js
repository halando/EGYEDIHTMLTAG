/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


class TAJSzam extends HTMLElement{
    constructor(){
        super();// az ŐS konstruktorát kell meghívni először
        //console.log("Példányosítás");
        this.shadowDOM=this.attachShadow({mode:"open"});
       // window.alert(this.shadowDOM);
       this.billentyuzet = this.billentyuzet.bind(this);
       this.felengedes = this.felengedes.bind(this);
        this.mehet = false;
        
    }
    connectedCallback(){
        //console.log("Felülethez történő hozzáadás");
        var stilus = document.createElement("style");
        this.shadowDOM.appendChild(stilus);
        this.shadowDOM.querySelector("style").textContent=`
        input{
            width:1em;
            text-align:center;
}
        input:focus{
            border: 2px solid red;
            background-color: #fbbab7;
            font-size: 1em;
}
`;
        var mennyi = this.getAttribute("hossz");
        for(var db =1; db<=mennyi; db++){
            var rubrika=document.createElement("input");
            rubrika.size = 1;
            rubrika.maxLength = 1;
            var az = this.getAttribute("megnevezes"); //var az="taj";
            az = az+db; //taj1,taj2,....
            rubrika.id =az;
            rubrika.addEventListener("keydown", this.billentyuzet);
              rubrika.addEventListener("keyup", this.felengedes);
           // rubrika.addEventListener("keydown", TAJSzam.billentyuzet);
            this.shadowDOM.appendChild(rubrika);
        }
    }
    disconnectedCallback(){
        console.log("Felületről történő elvitel");
    }
    attributeChangeCallback(){
        console.log("A Tag-paraméter értékének változtatása");
    }
    adoptedCallback(){
        console.log("Más felületre történő áthelyezés");
    }
    static get observedAttributes(){
        //return[]; // valóságban itt az attribútumok azonosítói jelennek meg
        return ["megnevezes","hossz", "elso"];
    }
    /*Ez egy saját metódus amit a billentyűzettel kapcsolatos eseménykezelés érdekében hozzunk létre*/
    billentyuzet(objektum){
   //static billentyuzet(objektum){
        if(objektum.key<"0" || objektum.key >"9" && objektum.key!= "Backspace"){
            objektum.preventDefault();
            this.mehet = false;
            
            }else{
                this.mehet = true;
            }
    }
    felengedes(objektum){
        //window.alert(objektum.target.id);
        if(this.mehet){
          /*  switch(objektum.target.id){
                case "taj1":
                    //document.getElementById("taj2").focus();
                   // window.alert(this);
                   // window.alert(this.shadowDOM);
                   // for(var elem in this.shadowDOM) window.alert(elem+":"+this.shadowDOM[elem]);
                    this.shadowDOM.getElementById("taj2").focus();
                    break;
                    case "taj2":
                    document.getElementById("taj3").focus();
                    break;
            
            case "taj3":
                    document.getElementById("taj4").focus();
                    break;
                
            }*/
        var rk1= new RegExp("\\d+"); // számjegy karakterből egy vagy akármennyi
             var rk2= new RegExp("\\D+"); // bármi, ami nem számjegy
             var szoveg = objektum.target.id.replace(rk1,"");
              var szam = objektum.target.id.replace(rk2,"");
              szam++;
              if(szam ==this.getAttribute("hossz"+1)){
                  this.shadowDOM.getElementById(szoveg+szam).blur();
              }else{
                  this.shadowDOM.getElementById(szoveg+szam<=9?szam:9).focus();
              }
              
        }
    }
    
}