var NodoServicioDeCoopras = function(opt){
    this.o = opt;
    this.start();    
};

NodoServicioDeCoopras.prototype.start = function(){
    this._router = new NodoRouter("servicio coopras");
    this._portal = new NodoPortalBidi("servicio coopras");
    this._router.conectarBidireccionalmenteCon(this._portal);
    
    this._coopras = [];
    this._portal.pedirMensajes(new FiltroXClaveValor("tipoDeMensaje", "coopras.crearNuevaCoopra"),
                                            this.mensajeCrearNuevaCoopraRecibido.bind(this));
};

NodoServicioDeCoopras.prototype.mensajeCrearNuevaCoopraRecibido= function(mensaje){  
    var id_coopra = this._coopras.length;
    var nodo_coopra = new NodoCoopra({idCoopra:id_coopra});         
    this._router.conectarBidireccionalmenteCon(nodo_coopra);
    this._coopras.push(nodo_coopra);
    
    this._portal.enviarMensaje({
            tipoDeMensaje: "coopras.nuevaCoopraCreada",
            idCoopra: id_coopra,
            para:mensaje.solicitante
        });     
};

NodoServicioDeCoopras.prototype.conectarCon= function(un_nodo){
    this._router.conectarCon(un_nodo);   
};
    
NodoServicioDeCoopras.prototype.recibirMensaje= function(un_mensaje){
    this._router.recibirMensaje(un_mensaje);
};

