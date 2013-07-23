var NodoVistaCoopra = function(opt){
    this.o = opt;
    this.start();    
};

NodoVistaCoopra.prototype.start = function(){
    this._router = new NodoRouter("vista coopra");
    
    this._vista_descripcion_producto = new NodoTextBoxEditable({
        input: this.o.ui.find("#txt_descripcion_producto"),
        nombrePropiedad: "descripcionProducto",
        mensajeSet: {   tipoDeMensaje: "coopras.setDescripcionProducto",
                        idCoopra: this.o.idCoopra},
        mensajeGet: {   tipoDeMensaje: "coopras.getDescripcionProducto",
                        idCoopra: this.o.idCoopra},
        filtroMensajesActualizacion: new FiltroAND([new FiltroXClaveValor("tipoDeMensaje", "coopras.descripcionProducto"),
                                     new FiltroXClaveValor("idCoopra", this.o.idCoopra)])
    });
    
    this._router.conectarBidireccionalmenteCon(this._vista_descripcion_producto);
};

NodoVistaCoopra.prototype.conectarCon= function(un_nodo){
    this._router.conectarCon(un_nodo);   
};
    
NodoVistaCoopra.prototype.recibirMensaje= function(un_mensaje){
    this._router.recibirMensaje(un_mensaje);
};

NodoVistaCoopra.prototype.dibujarEn= function(un_panel){
    un_panel.append(this.o.ui);
};