export class Contacto {
  constructor(nombre, email, numero, imagen) {
    this.codigo = window.self.crypto.randomUUID();
    this.nombre = nombre;
    this.email = email;
    this.numero = numero;
    this.imagen = imagen;
  }
}
