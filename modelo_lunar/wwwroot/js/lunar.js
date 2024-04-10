var Roca = /** @class */ (function () {
    function Roca() {
        this.id = "";
        this.nombre = "";
        this.origen = "";
        this.dureza = 0;
        this.tamanyograno = 0;
        this.tipo = "";
        this.tamanyocristal = 0;
        this.temperatura = 0;
        this.estructura = "";
        this.formaGrano = "";
        this.textura = "";
    }
    return Roca;
}());
var MuestraAmericano = /** @class */ (function () {
    function MuestraAmericano() {
    }
    MuestraAmericano.prototype.dameContenido = function (MiRoca) {
        return ("<p>Identification: ".concat(MiRoca.id, " Name: ").concat(MiRoca.nombre, " Origin group: ").concat(MiRoca.origen, " Hardness: ").concat(MiRoca.dureza, " Grain's' size: ").concat(MiRoca.tamanyograno, " Classification: ").concat(MiRoca.tipo, " Crystal's' size: ").concat(MiRoca.tamanyocristal, " Formation temperature: ").concat(MiRoca.temperatura, " Structure: ").concat(MiRoca.estructura, " Grain's form: ").concat(MiRoca.formaGrano, " Texture: ").concat(MiRoca.textura, "</p>"));
    };
    return MuestraAmericano;
}());
var MuestraEuropeo = /** @class */ (function () {
    function MuestraEuropeo() {
    }
    MuestraEuropeo.prototype.dameContenido = function (MiRoca) {
        return ("<p>Identificacion: ".concat(MiRoca.id, " Nombre: ").concat(MiRoca.nombre, " Grupo de origen: ").concat(MiRoca.origen, " Dureza: ").concat(MiRoca.dureza, " Tama\u00F1o grano: ").concat(MiRoca.tamanyograno, " Clasificacion: ").concat(MiRoca.tipo, " Tama\u00F1o cristal: ").concat(MiRoca.tamanyocristal, " Temperatuda de formacion: ").concat(MiRoca.temperatura, " Estructura: ").concat(MiRoca.estructura, " Forma de grano: ").concat(MiRoca.formaGrano, " Textura: ").concat(MiRoca.textura, "</p>"));
    };
    return MuestraEuropeo;
}());
var ElHtml = /** @class */ (function () {
    function ElHtml(libreriaHtml) {
        this.generador = libreriaHtml;
    }
    ElHtml.prototype.dameHtml = function () {
        return this.generador.dameCss();
    };
    ElHtml.prototype.daContenedorPrincipal = function () {
        return this.generador.dameContenedor('contenedor');
    };
    ElHtml.prototype.daContenedorIzq = function () {
        return this.generador.dameContenedorIzq('contIzq');
    };
    ElHtml.prototype.daContenedorDech = function () {
        return this.generador.dameContenedorDech('contDech');
    };
    ElHtml.prototype.daContenidoIzq = function () {
        var contenido = this.generador.dameTexbox('id', 'Id:');
        contenido += this.generador.dameTexbox('origen', 'Origen:');
        contenido += this.generador.dameTexbox('dureza', 'Dureza:');
        contenido += this.generador.dameTexbox('grano', 'Tamaño Grano:');
        return contenido;
    };
    ElHtml.prototype.daContenidoDech = function () {
        var contenido = this.generador.dameTexbox('clasi', 'Clasificacion:');
        contenido += this.generador.dameTexbox('cristales', 'Tamaño cristales::');
        contenido += this.generador.dameTexbox('temp', 'Temperatura:');
        contenido += this.generador.dameTexbox('estructura', 'Estructura:');
        contenido += this.generador.dameTexbox('textura', 'Textura:');
        return contenido;
    };
    ElHtml.prototype.daBoton = function () {
        var contenido = this.generador.dameBoton('enviar', 'enviar');
        return contenido;
    };
    return ElHtml;
}());
var CreadorHTML = /** @class */ (function () {
    function CreadorHTML() {
    }
    CreadorHTML.prototype.dameRoca = function () {
        var MiRoca = new Roca();
        MiRoca.id = this.dameValorTexto("id");
        MiRoca.origen = this.dameValorTexto("origen");
        MiRoca.dureza = this.dameValorNumero("dureza");
        MiRoca.formaGrano = this.dameValorTexto("grano");
        MiRoca.tipo = this.dameValorTexto("clasi");
        MiRoca.tamanyocristal = this.dameValorNumero("cristales");
        MiRoca.temperatura = this.dameValorNumero("temp");
        MiRoca.estructura = this.dameValorTexto("estructura");
        MiRoca.textura = this.dameValorTexto("textura");
        return MiRoca;
    };
    CreadorHTML.prototype.dameValorNumero = function (elementoId) {
        return Number(this.dameValorTexto(elementoId));
    };
    CreadorHTML.prototype.dameValorTexto = function (elementoId) {
        return document.getElementById(elementoId).value;
    };
    return CreadorHTML;
}());
var HtmlPantallaGrande = /** @class */ (function () {
    function HtmlPantallaGrande() {
    }
    HtmlPantallaGrande.prototype.dameContenedor = function (id) {
        return "<div id = ".concat(id, " clase = 'container row bg-info'></div>");
    };
    HtmlPantallaGrande.prototype.dameContenedorIzq = function (id) {
        return "<div id = ".concat(id, " clase = 'col-6'></div>");
    };
    HtmlPantallaGrande.prototype.dameContenedorDech = function (id) {
        return "<div id = ".concat(id, " clase = 'col-6'></div>");
    };
    HtmlPantallaGrande.prototype.dameCss = function () {
        return '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel = "stylesheet" integrity = "sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin = "anonymous" >';
    };
    HtmlPantallaGrande.prototype.dameTexbox = function (id, nombre) {
        return "<label for = '".concat(id, "' >").concat(nombre, "</label><input type = 'text' id = '").concat(id, "' class = 'form-control'/>");
    };
    HtmlPantallaGrande.prototype.dameBoton = function (id, nombre) {
        return "<div class = 'ml-auto mr-auto p-5 bg-success text-white' id = '".concat(id, "' >").concat(nombre, "</div>");
    };
    return HtmlPantallaGrande;
}());
var HtmlPantallaMovil = /** @class */ (function () {
    function HtmlPantallaMovil() {
    }
    HtmlPantallaMovil.prototype.dameContenedor = function (id) {
        return "<div id = ".concat(id, " clase ='container row bg-info'></div>");
    };
    HtmlPantallaMovil.prototype.dameContenedorIzq = function (id) {
        return "<div id = ".concat(id, " clase = 'col-12'></div>");
    };
    HtmlPantallaMovil.prototype.dameContenedorDech = function (id) {
        return "<div id = ".concat(id, " clase = 'col-12'></div>");
    };
    HtmlPantallaMovil.prototype.dameCss = function () {
        return '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel = "stylesheet" integrity = "sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin = "anonymous" >';
    };
    HtmlPantallaMovil.prototype.dameTexbox = function (id, nombre) {
        return "<input type = 'text' id ='".concat(id, "' class = 'form-control' placeholder = '").concat(nombre, "'/>");
    };
    HtmlPantallaMovil.prototype.dameBoton = function (id, nombre) {
        return "<div class = 'ml-auto mr-auto p-5 bg-success text-white' id = '".concat(id, "' >").concat(nombre, "</div>");
    };
    return HtmlPantallaMovil;
}());
//# sourceMappingURL=lunar.js.map