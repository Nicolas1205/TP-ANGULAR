export interface Ticket {
    dni?: number,
    precioReal?: number, 
    expectador?: string,
    fechaCobro?: string, 
    precioCobrado?: number,
}

export enum TipoExpectador {
    Local,
    Extranjero,
}