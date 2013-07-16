var VistaLogin = function(opt){
    this.o = opt;
    this.start();
};

VistaLogin.prototype.start = function(un_panel){
    this.txt_nombre_usuario = this.o.ui.find('#txt_nombre_usuario');
    this.btn_ok = this.o.ui.find('#btn_ok');
    var _this = this;
    
    this.btn_ok.click(function(){        
        _this.o.ok_callback(new Usuario(_this.txt_nombre_usuario.val()));
        _this.ocultar();
    });
};
    
VistaLogin.prototype.dibujarEn = function(un_panel){
    un_panel.append(this.o.ui); 
};

VistaLogin.prototype.ocultar = function(){
    this.o.ui.remove(); 
};