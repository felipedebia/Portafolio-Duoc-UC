export interface JwtResponse {
    data:{
        id_usuario:number,
        num_documento:string,
        nombre: string,
        apellido:string,
        fecha_nacimiento:string,
        genero:string,
        token?: string,
        correo:string,
    }
}
