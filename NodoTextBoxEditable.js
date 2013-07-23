var NodoTextBoxEditable = function(opt){
    this.o = opt;
    this.start();    
};

NodoTextBoxEditable.prototype.start = function(){
    //this._router = new NodoRouter("txt_" + this.o.nombrePropiedad);
    this._portal = new NodoPortalBidi("txt_" + this.o.nombrePropiedad);
    //this._router.conectarBidireccionalmenteCon(this._portal);
    
    this._portal.pedirMensajes(this.o.filtroMensajesActualizacion,
                                this.mensajeActualizacionRecibido.bind(this));
    var _this = this;
    this.o.input.keypress(function(e) {
        if(e.which == 13) {
            var mensaje = jQuery.extend(true, {}, _this.o.mensajeSet); 
            mensaje[_this.o.nombrePropiedad] = _this.o.input.val();
            _this._portal.enviarMensaje(mensaje);
        }
    });
};

NodoTextBoxEditable.prototype.mensajeActualizacionRecibido= function(mensaje){ 
    this.o.input.val(mensaje[this.o.nombrePropiedad]);
};  

NodoTextBoxEditable.prototype.conectarCon= function(un_nodo){
    this._portal.conectarCon(un_nodo);   
};
    
NodoTextBoxEditable.prototype.recibirMensaje= function(un_mensaje){
    this._portal.recibirMensaje(un_mensaje);
};