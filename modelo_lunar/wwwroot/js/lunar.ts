class Rocas {
    Identificador: string = "";
    Nombre: string = "";
    Grupo: string = "";
    Dureza: number = 0;
    TamanoGrano: string = "";
    Clasificacion: string = "";
    Tamanocristal: number = 0;
    Temperatura: number = 0;
    Textura: string = "";

}


interface IValidableRocas {
    isValid(MisRocas: Rocas): boolean;
}

const patron = /[A -Z]{2}[0 - 9]{4}[A - Z]{2}/;
let regexp = new RegExp(patron);

class ValidadorGeneral implements IValidableRocas {
    isValid(MisRocas: Rocas): boolean {
        return (
            regexp.test(MisRocas.Identificador) &&
            MisRocas.Nombre.length > 0 &&
            MisRocas.Grupo == "Igneas" || MisRocas.Grupo == "Metamorficas" || MisRocas.Grupo == "Sedimentarias" &&
            MisRocas.Dureza > 0 && MisRocas.Dureza < 11 &&
            MisRocas.TamanoGrano == "Grano fino" || MisRocas.TamanoGrano == "Grano Medio" || MisRocas.TamanoGrano == "Grano Grueso" || MisRocas.TamanoGrano == "Grano muy Grueso" &&
            MisRocas.Clasificacion.length > 0 &&
            MisRocas.Tamanocristal > 0 && MisRocas.Tamanocristal <=10 &&
            MisRocas.Temperatura > -100 && MisRocas.Temperatura <=100 &&
            MisRocas.Textura == "Vitrea" ||MisRocas.Textura == "Afanitica" || MisRocas.Textura == "Faneritica");
    }
}

class ValidadorIgneas implements IValidableRocas {
    isValid(MisRocas: Rocas): boolean {
        return (
            MisRocas.Grupo == "Igneas" && MisRocas.TamanoGrano == "Grano Muy Grueso" )
    }

}
class ValidadorMetamorficas implements IValidableRocas {
    isValid(MisRocas: Rocas): boolean {
        return (
            MisRocas.Grupo == "Metamorficas" && MisRocas.TamanoGrano == "Grano Medio" || MisRocas.TamanoGrano == "Grano Fino" && MisRocas.Textura == "Vitrea")
    }

}
class ValidadorSedimentarias implements IValidableRocas {
    isValid(MisRocas: Rocas): boolean {
        return (
            MisRocas.Grupo == "Sedimentarias" && MisRocas.Textura == "Faneritica")
    }

}



