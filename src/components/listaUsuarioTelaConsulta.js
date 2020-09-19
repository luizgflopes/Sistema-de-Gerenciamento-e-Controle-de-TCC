import React from 'react';

function listaUsuario(nome,email,curso,matricula,unidadeCurso){
    return {nome,email,curso,matricula,unidadeCurso};
  }
  
  const dadosListaUsuario=[
    listaUsuario('Luiz Gustavo','luizgustavo-fl@hotmail.com','SI','123456789','Silva Lobo'),
    listaUsuario('Gustavo','gustavo-fl@hotmail.com','ADS','9998547','Silva Lobo'),
    listaUsuario('Luiz','luiz-fl@hotmail.com','DIREITO','114455895','Silva Lobo'),
    listaUsuario('Bob','bob@hotmail.com','FARMACIA','111222333','Carlos Luz'),
    listaUsuario('Frederico','frederico@hotmail.com','ENG. CIVIL','000000000','Buritis')
  ]