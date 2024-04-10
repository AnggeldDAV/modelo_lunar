class Roca {
    id: string = "";
    nombre: string = "";
    origen: string = "";
    dureza: number = 0;
    tamanyograno : string = "";
    tipo: string = "";
    tamanyocristal :number = 0;
    temperatura: number = 0;
    estructura: string = "";
    formaGrano: string = "";
    textura: string = "";

}


interface IValidableRocas {
    isValid(MisRocas: Roca): boolean;
}

const patron = /[A -Z]{2}[0 - 9]{4}[A - Z]{2}/;
let regexp = new RegExp(patron);

class ValidadorGeneral implements IValidableRocas {
    isValid(MisRocas: Roca): boolean {
        return (
            regexp.test(MisRocas.id) &&
            MisRocas.nombre.length > 0 &&
            MisRocas.origen == "Igneas" || MisRocas.origen == "Metamorficas" || MisRocas.origen == "Sedimentarias" &&
            MisRocas.dureza > 0 && MisRocas.dureza < 11 &&
            MisRocas.tamanyograno == "Grano fino" || MisRocas.tamanyograno == "Grano Medio" || MisRocas.tamanyograno == "Grano Grueso" || MisRocas.tamanyograno == "Grano muy Grueso" &&
            MisRocas.tipo.length > 0 &&
            MisRocas.tamanyocristal > 0 && MisRocas.tamanyocristal <=10 &&
            MisRocas.temperatura > -100 && MisRocas.temperatura <=100 &&
            MisRocas.textura == "Vitrea" ||MisRocas.textura == "Afanitica" || MisRocas.textura == "Faneritica");
    }
}

class ValidadorIgneas implements IValidableRocas {
    isValid(MisRocas: Roca): boolean {
        return (
            MisRocas.origen == "Igneas" && MisRocas.tamanyograno == "Grano Muy Grueso" )
    }

}
class ValidadorMetamorficas implements IValidableRocas {
    isValid(MisRocas: Roca): boolean {
        return (
            MisRocas.origen == "Metamorficas" && MisRocas.tamanyograno == "Grano Medio" || MisRocas.tamanyograno == "Grano Fino" && MisRocas.textura == "Vitrea")
    }

}
class ValidadorSedimentarias implements IValidableRocas {
    isValid(MisRocas: Roca): boolean {
        return (
            MisRocas.origen == "Sedimentarias" && MisRocas.textura == "Faneritica")
    }

}


interface IMuestra {
    dameContenido(MiRoca: Roca): string;
}
class MuestraAmericano implements IMuestra {
    dameContenido(MiRoca: Roca): string {
        return (`<p>Identification: ${MiRoca.id} Name: ${MiRoca.nombre} Origin group: ${MiRoca.origen} Hardness: ${MiRoca.dureza} Grain's' size: ${MiRoca.tamanyograno} Classification: ${MiRoca.tipo} Crystal's' size: ${MiRoca.tamanyocristal} Formation temperature: ${MiRoca.temperatura} Structure: ${MiRoca.estructura} Grain's form: ${MiRoca.formaGrano} Texture: ${MiRoca.textura}</p>`);
    }
}
class MuestraEuropeo implements IMuestra {
    dameContenido(MiRoca: Roca): string {
        return (`<p>Identificacion: ${MiRoca.id} Nombre: ${MiRoca.nombre} Grupo de origen: ${MiRoca.origen} Dureza: ${MiRoca.dureza} Tamaño grano: ${MiRoca.tamanyograno} Clasificacion: ${MiRoca.tipo} Tamaño cristal: ${MiRoca.tamanyocristal} Temperatuda de formacion: ${MiRoca.temperatura} Estructura: ${MiRoca.estructura} Forma de grano: ${MiRoca.formaGrano} Textura: ${MiRoca.textura}</p>`);
    }
}

interface IHtmlGenerarHtml {
    dameHtml(): string;
    daContenedorPrincipal(): string;
    daContenedorIzq(): string;
    daContenedorDech(): string;
    daContenidoIzq(): string;
    daContenidoDech(): string;
    daBoton(): string;
}

class ElHtml implements IHtmlGenerarHtml {
    generador: IHtmlVariante;
    constructor(libreriaHtml: IHtmlVariante) {
        this.generador = libreriaHtml;
    }
    dameHtml(): string {
        return this.generador.dameCss();

    }
    daContenedorPrincipal(): string {
        return this.generador.dameContenedor('contenedor');
    }
    daContenedorIzq(): string {
        return this.generador.dameContenedorIzq('contIzq');
    }
    daContenedorDech(): string {
        return this.generador.dameContenedorDech('contDech');
    }
    daContenidoIzq(): string {
        let contenido: string = this.generador.dameTexbox('id', 'Id:');
        contenido += this.generador.dameTexbox('origen', 'Origen:');
        contenido += this.generador.dameTexbox('dureza', 'Dureza:');
        contenido += this.generador.dameTexbox('grano', 'Tamaño Grano:');
        return contenido;
    }
    daContenidoDech(): string {
        let contenido: string = this.generador.dameTexbox('clasi', 'Clasificacion:');
        contenido += this.generador.dameTexbox('cristales', 'Tamaño cristales::');
        contenido += this.generador.dameTexbox('temp', 'Temperatura:');
        contenido += this.generador.dameTexbox('estructura', 'Estructura:');
        contenido += this.generador.dameTexbox('textura', 'Textura:');
        return contenido;
    }
    daBoton(): string {
        let contenido: string = this.generador.dameBoton('enviar', 'enviar');
        return contenido;
    }
}

interface IRocable {
    dameRoca(): Roca;
}

class CreadorHTML implements IRocable {
    dameRoca(): Roca {
        let MiRoca: Roca = new Roca();
        MiRoca.id = this.dameValorTexto("id");
        MiRoca.origen = this.dameValorTexto("origen");
        MiRoca.dureza = this.dameValorNumero("dureza");
        MiRoca.formaGrano = this.dameValorTexto("grano");
        MiRoca.tipo = this.dameValorTexto("clasi");
        MiRoca.tamanyocristal = this.dameValorNumero("cristales");
        MiRoca.temperatura = this.dameValorNumero("temp");
        MiRoca.estructura= this.dameValorTexto("estructura");
        MiRoca.textura = this.dameValorTexto("textura");
        return MiRoca;
    }

    private dameValorNumero(elementoId: string): number {
        return Number(this.dameValorTexto(elementoId));
    }
    private dameValorTexto(elementoId: string) {
        return (<HTMLInputElement>document.getElementById(elementoId)).value;
    }
}

interface IHtmlVariante {
    dameContenedor(id: string): string;
    dameContenedorIzq(id: string): string;
    dameContenedorDech(id: string): string;
    dameCss(): string;
    dameTexbox(id: string, nombre: string): string;
    dameBoton(id: string, nombre: string): string;
}

class HtmlPantallaGrande implements IHtmlVariante {
    dameContenedor(id: string): string {
        return `<div id = ${id} clase = 'container row bg-info'></div>`;
    }
    dameContenedorIzq(id: string): string {
        return `<div id = ${id} clase = 'col-6'></div>`;
    }
    dameContenedorDech(id: string): string {
        return `<div id = ${id} clase = 'col-6'></div>`;
    }
    dameCss(): string {
        return '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel = "stylesheet" integrity = "sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin = "anonymous" >';
    }
    dameTexbox(id: string, nombre: string): string {
        return `<label for = '${id}' >${nombre}</label><input type = 'text' id = '${id}' class = 'form-control'/>`;
    }
    dameBoton(id: string, nombre: string): string {
        return `<div class = 'ml-auto mr-auto p-5 bg-success text-white' id = '${id}' >${nombre}</div>`;
    }
}

class HtmlPantallaMovil implements IHtmlVariante {
    dameContenedor(id: string): string {
        return `<div id = ${id} clase ='container row bg-info'></div>`;
    }
    dameContenedorIzq(id: string): string {
        return `<div id = ${id} clase = 'col-12'></div>`;
    }
    dameContenedorDech(id: string): string {
        return `<div id = ${id} clase = 'col-12'></div>`;
    }
    dameCss(): string {
        return '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel = "stylesheet" integrity = "sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin = "anonymous" >';
    }
    dameTexbox(id: string, nombre: string): string {
        return `<input type = 'text' id ='${id}' class = 'form-control' placeholder = '${nombre}'/>`;
    }
   
    dameBoton(id: string, nombre: string): string {
        return `<div class = 'ml-auto mr-auto p-5 bg-success text-white' id = '${id}' >${nombre}</div>`;
    }
}
interface IConfigurable {
    dameGenerador(): IHtmlGenerarHtml;
    dameCreador(): IRocable;
    dameValidador(): IValidableRocas;
    dameMostrador(): IMuestra;
}
class ConfiguradorEquipoBasico implements IConfigurable {
    dameGenerador(): IHtmlGenerarHtml {
        return new ElHtml(new HtmlPantallaGrande);
    }
    dameCreador(): IRocable {
        return new CreadorHTML();
    }
    dameValidador(): IValidableRocas {
        return new ValidadorGeneral();
    }
    dameMostrador(): IMuestra {
        return new MuestraAmericano();
    }
}

let ConfiguradorGeneral: IConfigurable = new ConfiguradorEquipoBasico();
function valida() {
    let mostrador: IMuestra = ConfiguradorGeneral.dameMostrador();
    let creador: IRocable = ConfiguradorGeneral.dameCreador();
    let validadorRoca: IValidableRocas = ConfiguradorGeneral.dameValidador();
}


