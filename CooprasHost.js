$(function () { 
    var usuario = {};
    var vista_login = new VistaLogin({
        ui:$('#plantilla_login').clone(),
        ok_callback: function(un_usuario){
            alert("se logueó " + un_usuario.nombre);
        }
    }); 
    vista_login.dibujarEn($('#panel_principal'));
}); 