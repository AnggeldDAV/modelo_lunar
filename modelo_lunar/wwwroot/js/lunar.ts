
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

const patron = /[A-z]{2}[0-9]{4}[A-z]{2}/;
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
    daContenedorBoton(): string;
    daSelect(id: string, validadores: string[]): string;
    daBoton(id: string): string;
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
    daContenedorBoton(): string {
        return this.generador.dameContenedorBoton('contBoton');
    }
    daContenidoIzq(): string {
        let contenido: string = this.generador.dameTexbox('id', 'Id:');
        contenido += this.generador.dameTexbox('nombre', 'Nombre');
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
    daBoton(id: string): string {
        let contenido: string = this.generador.dameBoton(id, 'enviar');
        return contenido;
    }
    daSelect(id: string, validadores: string[]): string {
        return this.generador.dameSelect(id, validadores);
    }
}

interface IRocable {
    dameRoca(): Roca;
}

class CreadorHTML implements IRocable {
    dameRoca(): Roca {
        let MiRoca: Roca = new Roca();
        MiRoca.id = this.dameValorTexto("id");
        MiRoca.nombre = this.dameValorTexto("nombre");
        MiRoca.origen = this.dameValorTexto("origen");
        MiRoca.dureza = this.dameValorNumero("dureza");
        MiRoca.tamanyograno = this.dameValorTexto("grano");
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
    dameSelect(id: string, valoresSelect: string[]);
    dameContenedorBoton(id: string);
    dameBoton(id: string, nombre: string): string;
}

class HtmlPantallaGrande implements IHtmlVariante {
    dameContenedor(id: string): string {
        return `<div id = '${id}' class = 'container-fluid row bg-info'></div>`;
    }
    dameContenedorIzq(id: string): string {
        return `<div id = '${id}' class = 'col-6'></div>`;
    }
    dameContenedorDech(id: string): string {
        return `<div id = '${id}' class = 'col-6'></div>`;
    }
    dameContenedorBoton(id: string) {
        return `<div id = '${id}' class = 'd-flex justify-content-center container-fluid'></div>`;
    }
    dameCss(): string {
        return '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel = "stylesheet" integrity = "sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin = "anonymous" >';
    }
    dameTexbox(id: string, nombre: string): string {
        return `<label for = '${id}' >${nombre}</label><input type = 'text' id = '${id}' class = 'form-control'/>`;
    }
    dameBoton(id: string, nombre: string): string {
        return `<div class = 'bg-success text-white p-5 text-center w-25 mt-3' id = '${id}' >${nombre}</div>`;
    }
    dameSelect(id: string, valoresSelect: string[]) {
        return '';
    }
}

class HtmlPantallaMovil implements IHtmlVariante {
    dameContenedor(id: string): string {
        return `<div id = '${id}' class ='container-fluid row bg-info'></div>`;
    }
    dameContenedorIzq(id: string): string {
        return `<div id = '${id}' class = 'col-12'></div>`;
    }
    dameContenedorDech(id: string): string {
        return `<div id = '${id}' class = 'col-12'></div>`;
    }
    dameContenedorBoton(id: string) {
        return `<div id = '${id}' class = 'd-flex justify-content-center container-fluid'></div>`;
    }
    dameCss(): string {
        return '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel = "stylesheet" integrity = "sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin = "anonymous" >';
    }
    dameTexbox(id: string, nombre: string): string {
        return `<input type = 'text' id ='${id}' class = 'form-control' placeholder = '${nombre}'/>`;
    }
   
    dameBoton(id: string, nombre: string): string {
        return `<div class = 'bg-success text-white p-5 text-center w-25 mt-3' id = '${id}' >${nombre}</div>`;
    }
    dameSelect(id: string, valoresSelect: string[]) {
        return '';
    }
}

class HtmlSeleccionarValidador implements IHtmlVariante {
    dameContenedor(id: string): string {
        return `<div id = '${id}' class ='container-fluid row bg-info'></div>`;
    }
    dameContenedorIzq(id: string): string {
        return `<div id = '${id}' class = 'col-12'></div>`;
    }
    dameContenedorDech(id: string): string {
        return `<div id = '${id}' class = 'col-12'></div>`;
    }
    dameContenedorBoton(id: string) {
        return `<div id = '${id}' class = 'd-flex justify-content-center container-fluid'></div>`;
    }
    dameCss(): string {
        return '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel = "stylesheet" integrity = "sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin = "anonymous" >';
    }
    dameTexbox(id: string, nombre: string): string {
        return `<input type = 'text' id ='${id}' class = 'form-control' placeholder = '${nombre}'/>`;;
    }

    dameBoton(id: string, nombre: string): string {
        return `<div class = 'bg-success text-white p-5 text-center w-25 mt-3' id = '${id}' >${nombre}</div>`;
    }
    dameSelect(id: string, valoresSelect: string[]) {
        let contenido = `<select id = '${id}' class = 'form-control'>`;
        for (let i = 0; i < valoresSelect.length; i++) {
            contenido += `<option value = '${valoresSelect[i]}'>${valoresSelect[i]}</option>`;
        }
        contenido += '</select>';
        return contenido;
    }
}
interface IConfigurable {
    dameGenerador(html: IHtmlVariante): IHtmlGenerarHtml;
    dameCreador(): IRocable;
    dameValidador(Validador): IValidableRocas;
    dameMostrador(): IMuestra;
}
class ConfiguradorEquipoBasico implements IConfigurable {
    dameGenerador(html: IHtmlVariante): IHtmlGenerarHtml {
        return new ElHtml(html);
    }
    dameCreador(): IRocable {
        return new CreadorHTML();
    }
    dameValidador(Validador: IValidableRocas): IValidableRocas {
        return Validador;
    }
    dameMostrador(): IMuestra {
        return new MuestraAmericano();
    }
}

let ConfiguradorGeneral: IConfigurable = new ConfiguradorEquipoBasico();
let GeneradorHTML: IHtmlGenerarHtml = ConfiguradorGeneral.dameGenerador(new HtmlSeleccionarValidador);
let principal = document.getElementById('contPrincipal');
principal.innerHTML = GeneradorHTML.daContenedorPrincipal();
let _contenedor = document.getElementById("contenedor");

let validadores: string [] = ['opcion por defecto', 'ValidadorGeneral', 'validadorMetamorficas', 'validadorIgneas', 'ValidadorSedimentarias'];
let Htmls: string[] = ['pantallaMovil', 'pantallaGrande'];
let selectores: string = '';
selectores += GeneradorHTML.dameHtml();
selectores += GeneradorHTML.daSelect('select', validadores);
selectores += GeneradorHTML.daSelect('pantalla', Htmls);
selectores += GeneradorHTML.daBoton('selects');
_contenedor.innerHTML = selectores;
let select = <HTMLSelectElement>document.getElementById('select');
let selectPantalla = <HTMLSelectElement>document.getElementById('pantalla');
let boton = document.getElementById('selects');
boton.addEventListener('click', selecionada, false);



function valida() {
    let validador: IValidableRocas = vselec();
    let mostrador: IMuestra = ConfiguradorGeneral.dameMostrador();
    let creador: IRocable = ConfiguradorGeneral.dameCreador();
    let validadorRoca: IValidableRocas = ConfiguradorGeneral.dameValidador(validador);

    let MiRoca = creador.dameRoca();
    let frase = document.getElementById("mostrar");
    let smiley = document.getElementById("imagen")
    if (validadorRoca.isValid(MiRoca)) {
        frase.innerHTML = mostrador.dameContenido(MiRoca).toString();
        smiley.innerHTML = "<img src='img/feliz.png' style=height:50px; width:50px;/>";

    } else {
        frase.innerHTML = "NOOOOOOO";
        smiley.innerHTML = "<img src='img/sad.jpg' style=height:50px; width:50px;/>";
    }
}
function vselec(): IValidableRocas {
    let valorSelect: string = select.options[select.selectedIndex].value;
    switch (valorSelect) {
        case "ValidadorGeneral":
            return new ValidadorGeneral();
        case "validadorMetamorficas":
            return new ValidadorMetamorficas();
        case "validadorIgneas":
            return new ValidadorIgneas();
        case "ValidadorSedimentarias":
            return new ValidadorSedimentarias();
    }
}
function htmlSelect(): IHtmlVariante {
    let valorSelect: string = selectPantalla.options[selectPantalla.selectedIndex].value;
    switch (valorSelect) {
        case "pantallaMovil":
            return new HtmlPantallaMovil();
        case "pantallaGrande":
            return new HtmlPantallaGrande();
    }
}
function selecionada() {
    let ConfiguradorGeneral: IConfigurable = new ConfiguradorEquipoBasico();
    let GeneradorHTML: IHtmlGenerarHtml = ConfiguradorGeneral.dameGenerador(htmlSelect());
    let principal = document.getElementById('contPrincipal');
    principal.innerHTML = GeneradorHTML.daContenedorPrincipal();
    let _contenedor = document.getElementById("contenedor");

    if (_contenedor != null) {
        _contenedor.innerHTML = GeneradorHTML.dameHtml().toString() + GeneradorHTML.daContenedorIzq().toString() + GeneradorHTML.daContenedorDech().toString() + GeneradorHTML.daContenedorBoton().toString();
    }
    let contenedorBoton = document.getElementById('contBoton');
    if (contenedorBoton != null) {
        contenedorBoton.innerHTML = GeneradorHTML.daBoton('enviar').toString();
    }
    let _contIzq = document.getElementById("contIzq");
    let _contDech = document.getElementById("contDech");
    if (_contIzq != null) {
        _contIzq.innerHTML = GeneradorHTML.daContenidoIzq().toString();
    }
    if (_contDech != null) {
        _contDech.innerHTML = GeneradorHTML.daContenidoDech().toString();
    }
    let _boton = document.getElementById("enviar");
    if (_boton != null) {
        _boton.addEventListener("click", valida);
    }
}


