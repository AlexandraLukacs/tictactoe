export default class Elem{
    #ertek="";
    #szuloElem;
    #divElem;
    #index=0;
    constructor(index, ertek, szuloElem){
        /* Beállítjuk az adattagokat */
        this.#index=index;
        this.#ertek=ertek;
        this.#szuloElem=szuloElem;
        this.#megjelenit();
        /* Eseménykezelő a div elemre */
        // div elem megfogása
        this.#divElem=this.#szuloElem.children("div:last-child");
        this.#divElem.on("click", () => {
            //console.log(this)
            /* Csak akkor tudjunk kattintani, ha nincs benne érték */
            if(this.#ertek===" "){
                this.#trigger("kattintasom");
            }
        })
    }

    #megjelenit(){
        /* Elkészítjük a html kódot */
        let txt =`
                <div class="elem">
                    <p>${this.#ertek}</p>
                </div>
                `;
        this.#szuloElem.append(txt);
    }

    /* Saját esemény létrehozása */
    #trigger(esemenyNev){
        /* Létrehozok egy új saját eseményt */
        const e = new CustomEvent(esemenyNev,{detail:this.#index})
        /* Az eseményt elérhetővé teszem az egész programban */
        window.dispatchEvent(e)
    }
}
