class Lanches {
    constructor(hamburguer, queijo, alface, molho, cebola, picles, pao){
        this.hamburguer = true;      
        this.queijo = True;
        this.alface = True;
        this.molho = True;
        this.cebola = True;
        this.picles = True;
        this.pao = True;
    }
}

class Combo{
    constructor(bebida, batata, fruta){
        this.bebida = True;
        this.batata = [{
            batataTamanho = batataM,
            batataTamanho = batataP
        }];
        this.fruta = True;
    }
}




class McLancheAlegre extends Lanches, Combo{
    constructor(hamburguer, hamCarne, queijo, alface, batata, fruta, molho, cebola, picles, pao, bebida){
        this.hamburguer = hamCarne;
        this.queijo = true;
        this.batata = batata[1];
        this.fruta = true;
        this.pao = true;
        this.alface = false;
        this.molho = false;
        this.picles = false;
        this.bebida = true;
    }
}



class BigLanche extends Lanches, Combo{
    constructor(hamCarne, hamFrango, queijo, alface, batata, fruta, molho, cebola, picles, pao, bebida){
        this.hamburguer += hamCarne;
        this.queijo = true;
        this.alface = true;
        this.molho = true;
        this.cebola = true;
        this.picles = true;
        this.pao = true;
        this.batata = batata[0];
        this.bebida = true;
        this.fruta = false;
    }
}