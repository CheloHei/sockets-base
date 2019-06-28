var socket = io();

    	socket.on('connect',function(){
    		console.log('Conectado al server');
    	});

    	//escuchar informacion
    	socket.on('disconnect',function(){
    		console.log('Perdimos conexion con el servidor');
    	});

    	//Envian informacion
    	socket.emit('enviarMensaje',{
    		usuario: 'Fernando',
    		mensaje: 'Hola Grupo'
		},function (resp) {
			console.log('respuesta del server: ',resp);
		});
		
		//escuchar informacion 
		socket.on('enviarMensaje',function(mensaje){
			console.log('Server:' , mensaje);
		});