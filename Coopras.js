$(function () {
    //var router =  new NodoRouter("principal"); 
            
    //var clienteHTTP = new NodoClienteHTTP('http://kfgodel.info:62626/vortex', 100);             
    //router.conectarBidireccionalmenteCon(clienteHTTP);
    
    var nodo_app_coopras = new NodoAppCoopras({
        ui:$('#app_coopras'),
        plantillaVistaCoopra:$('#plantilla_vista_coopra') 
    });        
    //router.conectarBidireccionalmenteCon(nodo_app_coopras);
                                         
    var nodo_servicio_coopras = new NodoServicioDeCoopras();         
    //router.conectarBidireccionalmenteCon(nodo_servicio_coopras);
    
    nodo_app_coopras.conectarCon(nodo_servicio_coopras);
    nodo_servicio_coopras.conectarCon(nodo_app_coopras);
}); 