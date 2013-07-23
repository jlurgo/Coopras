var NodoCoopra = function(opt){
    this.o = opt;
    this.start();    
};

NodoCoopra.prototype.start = function(){
    //this._router = new NodoRouter("coopra");
    this._portal = new NodoPortalBidi("coopra");
    //this._router.conectarBidireccionalmenteCon(this._portal);
    
    this._portal.pedirMensajes(new FiltroAND([new FiltroXClaveValor("tipoDeMensaje", "coopras.setDescripcionProducto"),
                                             new FiltroXClaveValor("idCoopra", this.o.idCoopra)]),
                                            this.mensajeSetDescripcionProductoRecibido.bind(this));
    this._portal.pedirMensajes(new FiltroAND([new FiltroXClaveValor("tipoDeMensaje", "coopras.getDescripcionProducto"),
                                             new FiltroXClaveValor("idCoopra", this.o.idCoopra)]),
                   this.mensajeGetDescripcionProductoRecibido.bind(this));
};

NodoCoopra.prototype.mensajeSetDescripcionProductoRecibido= function(mensaje){
    this._descripcionProducto = mensaje.descripcionProducto;
    this.enviarDescripcionProducto();
};

NodoCoopra.prototype.mensajeGetDescripcionProductoRecibido= function(mensaje){
    this.enviarDescripcionProducto();
};

NodoCoopra.prototype.enviarDescripcionProducto= function(){
    var mensaje = {     tipoDeMensaje: "coopras.descripcionProducto", 
                        idCoopra: this.o.idCoopra,
                        descripcionProducto: this._descripcionProducto};
    this._portal.enviarMensaje(mensaje);
};

NodoCoopra.prototype.conectarCon= function(un_nodo){
    this._portal.conectarCon(un_nodo);   
};
    
NodoCoopra.prototype.recibirMensaje= function(un_mensaje){
    this._portal.recibirMensaje(un_mensaje);
};