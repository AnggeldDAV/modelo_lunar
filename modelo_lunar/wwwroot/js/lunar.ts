class Roca {
    id: string = "";
    nombre: string = "";
    origen: string = "";
    dureza: number = 0;
    tamanyo: number = 0;
    tipo: string = "";
    temperatura: number = 0;
    estructura: string = "";
    formaGrano: string = "";
    textura: string = "";

}

interface IHtmlGenerarHtml {
    dameHtml(): string;
    daContenedorPrincipal(): string;
    daContenedorIzq(): string;
    daContenedorDech(): string;
    daContenidoIzq(): string;
    daContenidoDech(): string;
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
        let contenido: string = this.generador.dameId('id', 'Id:');
        contenido += this.generador.dameOrigen('origen', 'Origen:');
        contenido += this.generador.dameDureza('dureza', 'Dureza:');
        contenido += this.generador.dameTamanoGrano('grano', 'Tamaño Grano:');
        return contenido;
    }
    daContenidoDech(): string {
        let contenido: string = this.generador.dameClasificacion('clasi', 'Clasificacion:');
        contenido += this.generador.dameTamanoCristales('cristales', 'Tamaño cristales::');
        contenido += this.generador.dameTemperatura('temp', 'Temperatura:');
        contenido += this.generador.dameEstructura('estructura', 'Estructura:');
        contenido += this.generador.dameTextura('textura', 'Textura:');
        return contenido;
    }
}

interface IHtmlVariante {
    dameContenedor(id: string): string;
    dameContenedorIzq(id: string): string;
    dameContenedorDech(id: string): string;
    dameCss(): string;
    dameId(id: string, nombre: string): string;
    dameOrigen(id: string, nombre: string): string;
    dameDureza(id: string, nombre: string): string;
    dameTamanoGrano(id: string, nombre: string): string;
    dameClasificacion(id: string, nombre: string): string;
    dameTamanoCristales(id: string, nombre: string): string;
    dameTemperatura(id: string, nombre: string): string;
    dameEstructura(id: string, nombre: string): string;
    dameTextura(id: string, nombre: string): string;
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
    dameId(id: string, nombre: string): string {
        return `<label for = '${id}' >${nombre}</label><input type = 'text' id = '${id}' class = 'form-control'/>`;
    }
    dameOrigen(id: string, nombre: string): string {
        return `<label for = '${id}' >${nombre}</label><input type = 'text' id = '${id}' class = 'form-control'/>`;
    }
    dameDureza(id: string, nombre: string): string {
        return `<label for = '${id}' >${nombre}</label><input type = 'text' id = '${id}' class = 'form-control'/>`;
    }
    dameTamanoGrano(id: string, nombre: string): string {
        return `<label for = '${id}' >${nombre}</label><input type = 'text' id = '${id}' class = 'form-control'/>`;
    }
    dameClasificacion(id: string, nombre: string): string {
        return `<label for = '${id}' >${nombre}</label><input type = 'text' id = '${id}' class = 'form-control'/>`;
    }
    dameTamanoCristales(id: string, nombre: string): string {
        return `<label for = '${id}' >${nombre}</label><input type = 'text' id = '${id}' class = 'form-control'/>`;
    }
    dameTemperatura(id: string, nombre: string): string {
        return `<label for = '${id}' >${nombre}</label><input type = 'text' id = '${id}' class = 'form-control'/>`;
    }
    dameEstructura(id: string, nombre: string): string {
        return `<label for = '${id}' >${nombre}</label><input type = 'text' id = '${id}' class = 'form-control'/>`;
    }
    dameTextura(id: string, nombre: string): string {
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
    dameId(id: string, nombre: string): string {
        return `<input type = 'text' id ='${id}' class = 'form-control' placeholder = '${nombre}'/>`;
    }
    dameOrigen(id: string, nombre: string): string {
        return `<input type = 'text' id ='${id}' class = v placeholder = '${nombre}'/>`;
    }
    dameDureza(id: string, nombre: string): string {
        return `<input type = 'text' id ='${id}' class = 'form-control' placeholder = '${nombre}'/>`;
    }
    dameTamanoGrano(id: string, nombre: string): string {
        return `<input type = 'text' id ='${id}' class = 'form-control' placeholder = '${nombre}'/>`;
    }
    dameClasificacion(id: string, nombre: string): string {
        return `<input type = 'text' id ='${id}' class = 'form-control' placeholder = '${nombre}'/>`;
    }
    dameTamanoCristales(id: string, nombre: string): string {
        return `<input type = 'text' id ='${id}' class = 'form-control' placeholder = '${nombre}'/>`;
    }
    dameTemperatura(id: string, nombre: string): string {
        return `<input type = 'text' id ='${id}' class = 'form-control' placeholder = '${nombre}'/>`;
    }
    dameEstructura(id: string, nombre: string): string {
        return `<input type = 'text' id ='${id}' class = 'form-control' placeholder = '${nombre}'/>`;
    }
    dameTextura(id: string, nombre: string): string {
        return `<input type = 'text' id ='${id}' class = 'form-control' placeholder = '${nombre}'/>`;
    }
    dameBoton(id: string, nombre: string): string {
        return `<div class = 'ml-auto mr-auto p-5 bg-success text-white' id = '${id}' >${nombre}</div>`;
    }
}
