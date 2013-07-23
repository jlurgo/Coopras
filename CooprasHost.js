$(function () { 
    var router =  new NodoRouter("principal"); 
            
    var clienteHTTP = new NodoClienteHTTP('http://kfgodel.info:62626/vortex', 100);             
    router.conectarBidireccionalmenteCon(clienteHTTP);
    
    var nodo_servicio_coopras = new NodoServicioDeCoopras();         
    router.conectarBidireccionalmenteCon(nodo_servicio_coopras);
}); 