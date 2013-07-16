describe("Tengo una pantalla de login", function() { 
    var pantalla_login = {};
    var ui_login = {};
    var txt_nombre_usuario = {};
    var btn_ok = {};
    var usuario = {};
    var panel_principal = {};

    beforeEach(function() {
        panel_principal = $('<div id="panel_principal">');
        ui_login = $('<div id="ui_login">');
        txt_nombre_usuario = $('<input id="txt_nombre_usuario" type="text">');
        btn_ok = $('<input id="btn_ok" type="button">');
        
        ui_login.append(txt_nombre_usuario);
        ui_login.append(btn_ok);
        
        pantalla_login = new VistaLogin({ui:ui_login, 
                                         ok_callback: function(un_usuario){
                                             usuario = un_usuario;
                                         }});
        pantalla_login.dibujarEn(panel_principal);
    });
    it("Cuando creo la vista y la dibujo en un panel esta debería estar visible", function() {         
        expect(panel_principal.children().length).toEqual(1); 
    });
    it("Cuando ingreso un nombre de usuario en el textbox y presiono ok, la vista debería ocultarse y ejecutar el callback retornando un usuario", function() {
        txt_nombre_usuario.val('jlurgo');
        btn_ok.click();
        expect(usuario.nombre).toEqual('jlurgo'); 
        expect(panel_principal.children().length).toEqual(0); 
    });
});