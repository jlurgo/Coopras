var NodoAppCoopras = function(opt){
    this.o = opt; 
    this.start();    
};

NodoAppCoopras.prototype.start = function(){
    this._router = new NodoRouter("app coopras");
    
    this.lblUsuario = this.o.ui.find('#nombre_de_usuario');
    var usuario = {};
    var _this = this;
    var vista_login = new VistaLogin({
        ui:$('#plantilla_login').clone(),
        callback_usuario: function(un_usuario){
            _this.setUsuarioLogueado(un_usuario);
        }
    });
    
    this._panel_coopra = this.o.ui.find('#panel_coopra');
    this._panel_buscador = this.o.ui.find('#panel_buscador');    
};

NodoAppCoopras.prototype.setUsuarioLogueado = function(un_usuario){
    this.usuarioLogueado = un_usuario;
    this.lblUsuario.text(un_usuario.nombre);
    var _this = this;
    var buscador = new NodoBuscadorDeCoopras({  usuarioLogueado:un_usuario,
                                                onCoopraEncontrada:function(id_coopra){
                                                    var vista_coopra = new NodoVistaCoopra({ui:_this.o.plantillaVistaCoopra.clone(),
                                                                                            idCoopra:id_coopra});      
                                                    _this._router.conectarBidireccionalmenteCon(vista_coopra);
                                                    
                                                    vista_coopra.dibujarEn(_this._panel_coopra);
                                                }
                                            });
    this._router.conectarBidireccionalmenteCon(buscador);
    buscador.dibujarEn(this._panel_buscador);
};

NodoAppCoopras.prototype.conectarCon= function(un_nodo){
    this._router.conectarCon(un_nodo);   
};
    
NodoAppCoopras.prototype.recibirMensaje= function(un_mensaje){
    this._router.recibirMensaje(un_mensaje);
};