var NodoBuscadorDeCoopras = function(opt){
    this.o = opt;  
    this.start();
};

NodoBuscadorDeCoopras.prototype.start = function(){
    //this._router = new NodoRouter("buscador coopras");
    this._portal = new NodoPortalBidi("buscador coopras");
    //this._router.conectarBidireccionalmenteCon(this._portal);
    
    this.ui = $('#plantilla_buscador_de_coopras').clone();
    this.btn_nueva_coopra = this.ui.find('#btn_nueva_coopra');
    this.btn_buscar_coopra = this.ui.find('#btn_buscar_coopra');
    this.txt_id_coopra = this.ui.find('#txt_id_coopra');
    
    this._portal.pedirMensajes(new FiltroAND([new FiltroXClaveValor("tipoDeMensaje", "coopras.nuevaCoopraCreada"),
                                             new FiltroXClaveValor("para", this.o.usuarioLogueado.nombre)]),
                                            this.mensajeNuevaCoopraCreadaRecibido.bind(this));
    
    var _this = this;
    this.btn_nueva_coopra.click(function(){
        _this._portal.enviarMensaje({
            tipoDeMensaje: "coopras.crearNuevaCoopra",
            solicitante: _this.o.usuarioLogueado.nombre
        });        
    })
    
    this.btn_buscar_coopra.click(function(){
        _this.o.onCoopraEncontrada(_this.txt_id_coopra.val());      
    })
};

NodoBuscadorDeCoopras.prototype.mensajeNuevaCoopraCreadaRecibido= function(mensaje){
    this.o.onCoopraEncontrada(mensaje.idCoopra);
};

NodoBuscadorDeCoopras.prototype.conectarCon= function(un_nodo){
    this._portal.conectarCon(un_nodo);   
};
    
NodoBuscadorDeCoopras.prototype.recibirMensaje= function(un_mensaje){
    this._portal.recibirMensaje(un_mensaje);
};

NodoBuscadorDeCoopras.prototype.dibujarEn= function(un_panel){
    un_panel.append(this.ui);
};