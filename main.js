import JatekTer from "./JatekTer.js";

class Allapotkezelo{
    #jatekLISTA=[" "," "," "," "," "," "," "," "," "];
    #lepes = 0; /* ha a lepes számláló áros, akkor X következik, ha páratlan, akkor O.
    A lépésszámlálót mindig növeljük, ha rákkantintunk egy elemre */
    
    constructor(){
        /* Példányosítjuk a játékteret */
        new JatekTer(this.#jatekLISTA);
        
        
        /* Feliratkozom a saját kattintásom eseményére */
        $(window).on("kattintasom", (event)=>{
            console.log(event.detail)
            /* Megváltoztattam a program állapotát */
            let index = event.detail;
            if(this.#lepes%2===0){
                this.#jatekLISTA[index] = "X";
            }else{
                this.#jatekLISTA[index] = "O";
            }
            this.#lepes++;
            
            /* Újra megjelenítem a program állapotát */
            new JatekTer(this.#jatekLISTA);
        })
        
    }
}

new Allapotkezelo()

