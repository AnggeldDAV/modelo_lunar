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
        var contenido = this.generador.dameId('id', 'Id:');
        contenido += this.generador.dameOrigen('origen', 'Origen:');
        contenido += this.generador.dameDureza('dureza', 'Dureza:');
        contenido += this.generador.dameTamanoGrano('grano', 'Tamaño Grano:');
        return contenido;
    };
    ElHtml.prototype.daContenidoDech = function () {
        var contenido = this.generador.dameClasificacion('clasi', 'Clasificacion:');
        contenido += this.generador.dameTamanoCristales('cristales', 'Tamaño cristales::');
        contenido += this.generador.dameTemperatura('temp', 'Temperatura:');
        contenido += this.generador.dameEstructura('estructura', 'Estructura:');
        contenido += this.generador.dameTextura('textura', 'Textura:');
        return contenido;
    };
    return ElHtml;
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
    HtmlPantallaGrande.prototype.dameId = function (id, nombre) {
        return "<label for = '".concat(id, "' >").concat(nombre, "</label><input type = 'text' id = '").concat(id, "' class = 'form-control'/>");
    };
    HtmlPantallaGrande.prototype.dameOrigen = function (id, nombre) {
        return "<label for = '".concat(id, "' >").concat(nombre, "</label><input type = 'text' id = '").concat(id, "' class = 'form-control'/>");
    };
    HtmlPantallaGrande.prototype.dameDureza = function (id, nombre) {
        return "<label for = '".concat(id, "' >").concat(nombre, "</label><input type = 'text' id = '").concat(id, "' class = 'form-control'/>");
    };
    HtmlPantallaGrande.prototype.dameTamanoGrano = function (id, nombre) {
        return "<label for = '".concat(id, "' >").concat(nombre, "</label><input type = 'text' id = '").concat(id, "' class = 'form-control'/>");
    };
    HtmlPantallaGrande.prototype.dameClasificacion = function (id, nombre) {
        return "<label for = '".concat(id, "' >").concat(nombre, "</label><input type = 'text' id = '").concat(id, "' class = 'form-control'/>");
    };
    HtmlPantallaGrande.prototype.dameTamanoCristales = function (id, nombre) {
        return "<label for = '".concat(id, "' >").concat(nombre, "</label><input type = 'text' id = '").concat(id, "' class = 'form-control'/>");
    };
    HtmlPantallaGrande.prototype.dameTemperatura = function (id, nombre) {
        return "<label for = '".concat(id, "' >").concat(nombre, "</label><input type = 'text' id = '").concat(id, "' class = 'form-control'/>");
    };
    HtmlPantallaGrande.prototype.dameEstructura = function (id, nombre) {
        return "<label for = '".concat(id, "' >").concat(nombre, "</label><input type = 'text' id = '").concat(id, "' class = 'form-control'/>");
    };
    HtmlPantallaGrande.prototype.dameTextura = function (id, nombre) {
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
    HtmlPantallaMovil.prototype.dameId = function (id, nombre) {
        return "<input type = 'text' id ='".concat(id, "' class = 'form-control' placeholder = '").concat(nombre, "'/>");
    };
    HtmlPantallaMovil.prototype.dameOrigen = function (id, nombre) {
        return "<input type = 'text' id ='".concat(id, "' class = v placeholder = '").concat(nombre, "'/>");
    };
    HtmlPantallaMovil.prototype.dameDureza = function (id, nombre) {
        return "<input type = 'text' id ='".concat(id, "' class = 'form-control' placeholder = '").concat(nombre, "'/>");
    };
    HtmlPantallaMovil.prototype.dameTamanoGrano = function (id, nombre) {
        return "<input type = 'text' id ='".concat(id, "' class = 'form-control' placeholder = '").concat(nombre, "'/>");
    };
    HtmlPantallaMovil.prototype.dameClasificacion = function (id, nombre) {
        return "<input type = 'text' id ='".concat(id, "' class = 'form-control' placeholder = '").concat(nombre, "'/>");
    };
    HtmlPantallaMovil.prototype.dameTamanoCristales = function (id, nombre) {
        return "<input type = 'text' id ='".concat(id, "' class = 'form-control' placeholder = '").concat(nombre, "'/>");
    };
    HtmlPantallaMovil.prototype.dameTemperatura = function (id, nombre) {
        return "<input type = 'text' id ='".concat(id, "' class = 'form-control' placeholder = '").concat(nombre, "'/>");
    };
    HtmlPantallaMovil.prototype.dameEstructura = function (id, nombre) {
        return "<input type = 'text' id ='".concat(id, "' class = 'form-control' placeholder = '").concat(nombre, "'/>");
    };
    HtmlPantallaMovil.prototype.dameTextura = function (id, nombre) {
        return "<input type = 'text' id ='".concat(id, "' class = 'form-control' placeholder = '").concat(nombre, "'/>");
    };
    HtmlPantallaMovil.prototype.dameBoton = function (id, nombre) {
        return "<div class = 'ml-auto mr-auto p-5 bg-success text-white' id = '".concat(id, "' >").concat(nombre, "</div>");
    };
    return HtmlPantallaMovil;
}());
//# sourceMappingURL=lunar.js.map