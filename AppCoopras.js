var AppCoopras = function(opt){
    this.o = opt;    
    this.lblUsuario = opt.ui.find('#nombre_de_usuario');
    var usuario = {};
    var _this = this;
    var vista_login = new VistaLogin({
        ui:$('#plantilla_login').clone(),
        callback_usuario: function(un_usuario){
            _this.setUsuarioLogueado(un_usuario);
        }
    });
};

AppCoopras.prototype.usuarioLogueado = {};
AppCoopras.prototype.setUsuarioLogueado = function(un_usuario){
    this.usuarioLogueado = un_usuario;
    this.lblUsuario.text(un_usuario.nombre);
};