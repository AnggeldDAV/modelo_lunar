interface IMuestra {
    dameContenido(MiRoca: Roca): string;
}
class MuestraAmericano implements IMuestra {
    dameContenido(MiRoca: Roca): string {
        return (`<p>Identification: ${MiRoca.id} Name: ${MiRoca.nombre} Origin group: ${MiRoca.origen} Hardness: ${MiRoca.dureza} Grain's' size: ${MiRoca.tamanograno} Classification: ${MiRoca.clasificacion} Crystal's' size: ${MiRoca.tamanocristal} Formation temperature: ${MiRoca.temperatura} Structure: ${MiRoca.estructura} Grain's form: ${MiRoca.formagrano} Texture: ${MiRoca.textura}</p>`);
    }
}
class MuestraEuropeo implements IMuestra {
    dameContenido(MiRoca: Roca): string {
        return (`<p>Identificacion: ${MiRoca.id} Nombre: ${MiRoca.nombre} Grupo de origen: ${MiRoca.origen} Dureza: ${MiRoca.dureza} Tamaño grano: ${MiRoca.tamanograno} Clasificacion: ${MiRoca.clasificacion} Tamaño cristal: ${MiRoca.tamanocristal} Temperatuda de formacion: ${MiRoca.temperatura} Estructura: ${MiRoca.estructura} Forma de grano: ${MiRoca.formagrano} Textura: ${MiRoca.textura}</p>`);
    }
}