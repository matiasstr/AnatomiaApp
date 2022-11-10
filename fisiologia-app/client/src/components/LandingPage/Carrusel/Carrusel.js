var galeria = [
    "https://i.imgur.com/8QUVUu7.jpg",
    "https://i.imgur.com/YUqBOYi.jpg",
    "https://i.imgur.com/JEdA5Dh.jpg",
    "https://i.imgur.com/a3ZrkTf.jpg",
    "https://i.imgur.com/5rpx8SW.jpg",
    "https://i.imgur.com/IfIX52F.jpg"
  ];
  var contador = 0;
  
  function siguiente() {
    contador++;
    if (contador >= galeria.length) {
      contador = 0;
    }
    cargarFot();
  }
  
  function anterior() {
    contador--;
    if (contador < 0) {
      contador = galeria.length - 1;
    }
    cargarFot();
  }
  
  function cargarFot() {
    document.getElementById("carrusel").src = galeria[contador];
  
    var valor = aleatorio(30);
    valor -= 20;
  }
  
  function aleatorio(max) {
    return Math.floor(Math.random() * max);
  }
  
  cargarFot();
  
  setInterval(siguiente, 2000);