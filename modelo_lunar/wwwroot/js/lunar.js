var Roca = /** @class */ (function () {
    function Roca() {
        this.id = "";
        this.nombre = "";
        this.origen = "";
        this.dureza = 0;
        this.tamanograno = 0;
        this.clasificacion = "";
        this.tamanocristal = 0;
        this.temperatura = 0;
        this.estructura = "";
        this.formagrano = "";
        this.textura = "";
    }
    return Roca;
}());
var MuestraAmericano = /** @class */ (function () {
    function MuestraAmericano() {
    }
    MuestraAmericano.prototype.dameContenido = function (MiRoca) {
        return ("<p>Identification: ".concat(MiRoca.id, " Name: ").concat(MiRoca.nombre, " Origin group: ").concat(MiRoca.origen, " Hardness: ").concat(MiRoca.dureza, " Grain's' size: ").concat(MiRoca.tamanograno, " Classification: ").concat(MiRoca.clasificacion, " Crystal's' size: ").concat(MiRoca.tamanocristal, " Formation temperature: ").concat(MiRoca.temperatura, " Structure: ").concat(MiRoca.estructura, " Grain's form: ").concat(MiRoca.formagrano, " Texture: ").concat(MiRoca.textura, "</p>"));
    };
    return MuestraAmericano;
}());
var MuestraEuropeo = /** @class */ (function () {
    function MuestraEuropeo() {
    }
    MuestraEuropeo.prototype.dameContenido = function (MiRoca) {
        return ("<p>Identificacion: ".concat(MiRoca.id, " Nombre: ").concat(MiRoca.nombre, " Grupo de origen: ").concat(MiRoca.origen, " Dureza: ").concat(MiRoca.dureza, " Tama\u00F1o grano: ").concat(MiRoca.tamanograno, " Clasificacion: ").concat(MiRoca.clasificacion, " Tama\u00F1o cristal: ").concat(MiRoca.tamanocristal, " Temperatuda de formacion: ").concat(MiRoca.temperatura, " Estructura: ").concat(MiRoca.estructura, " Forma de grano: ").concat(MiRoca.formagrano, " Textura: ").concat(MiRoca.textura, "</p>"));
    };
    return MuestraEuropeo;
}());
//# sourceMappingURL=lunar.js.map