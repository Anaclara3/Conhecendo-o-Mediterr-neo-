var tela = 0;
var opção = 1
var pontos = 0
var largura1 = 200;
var altura1 = 50;
var xMenu1 = 100;
var yMenu1 = 90;
var largura2 =200
var altura2 = 50
var xMenu2 = 100
var yMenu2 = 234
var largura3 = 200;
var altura3 = 50;
var xMenu3 = 100
var yMenu3 = 330

function preload (){
  img = loadImage('menuu.jpeg');// img menu
  img2 = loadImage('instruções.jpeg');
  img3 = loadImage('creditos.jpeg');
  img4 = loadImage('nivel 1.jpg')
  img5 = loadImage('nivel 2.jpg')
  img6 = loadImage('nivel 3.jpg')
  img7 = loadImage('errou.jpg')
  img8 = loadImage('20220220_104015_0000.jpg')
}


// vetor 1= alternativas das questões (cotem só as erradas)
var rErradas=["Nilo","Ganges", "Agricultura", "Lança", "Europa, Ásia e América", "Oceania, Cuba e América"]

// vetor 2= respostas corretas das perguntas
var rCorreta=["Tigre e Eufrates", "Escrita", "Europa, América e África"]

// repesentação das posições das 3 alternativas
var alt1 = 0, alt2 = 0, alt3 = 0

//posição correta da resposta no vetor
var pResposta = 0

var pCorretaDasAlt


function setup() {
  createCanvas(400, 400);
 
}

function draw() {
  background(220);
  
  frameRate(5)
  
  if(tela==0){
  image(img, 0, 0)
    
  //opção jogar
  noFill()
  rect(xMenu1, yMenu1, largura1, altura1, 25);
  //mouse sobre o retangulo muda de cor
  if ( mouseX > xMenu1 && mouseX < xMenu1 + largura1 && mouseY > yMenu1 && mouseY < yMenu1 + altura1 ){
    fill('#000000')
    rect(xMenu1, yMenu1, largura1, altura1, 25);
      if(mouseIsPressed){
        tela=3
         console.log("jogar")
      }
  }
    
  //opção instruções
  noFill()
  rect(xMenu2, yMenu2, largura2, altura2, 25)
  //mouse sobre o retangulo muda a cor
  if ( mouseX > xMenu2 && mouseX < xMenu2 + largura2 && mouseY > yMenu2 && mouseY < yMenu2 + altura2 ){
    fill('#000000')
    rect(xMenu2, yMenu2, largura2, altura2, 25)
    if (mouseIsPressed){
      tela=1
      console.log("instruções")
      }
  }
    
  //creeditos
   noFill()
  rect(xMenu3, yMenu3, largura3, altura3, 25)
  //mouse sobre o retangulo muda a cor
  if ( mouseX > xMenu3 && mouseX < xMenu3 + largura3 && mouseY > yMenu3 && mouseY < yMenu3 + altura3 ){
    fill('#000000')
    rect(xMenu3, yMenu3, largura3, altura3, 25)
    if (mouseIsPressed){
      tela=2
      console.log("creditos")
      }
  }
    
  
  //texto das opções do menu
  textAlign(CENTER);
  textSize(26)
  fill(255, 204, 0);
  textSize(28);
  text('Conhecendo o Mediterrâneo', 198, 55);  
  fill(240);
  noStroke();
  text("Jogar", 190, 120);
  text("Intruções", 190, 265); 
  text("Créditos", 190, 365)
    
}// tela de menu
  
  else if(tela==1){
    image(img2, 0, 0)
    
    // mudar cor do retangulo se o mouse tiver em cima(voltar)
  if(mouseX>=10 && mouseX<=80 && mouseY>=10 && mouseY<=40){
    fill("#F3F781")
  }else{
    fill("#58D3F7")
  }
  
  rect(10,10,70,30);
  textSize(13);
  fill("#000000");
  text("VOLTAR",10,20,70,30);

  }// tela de instuções
  
  else if(tela==2){
    image(img3, 0, 0)
    
     // mudar cor do retangulo se o mouse tiver em cima(voltar)
  if(mouseX>=10 && mouseX<=80 && mouseY>=10 && mouseY<=40){
    fill("#F3F781")
  }else{
    fill("#58D3F7")
  }
  
  rect(10,10,70,30);
  textSize(13);
  fill("#000000");
  text("VOLTAR",10,20,70,30);
  }// tela de creditos
  
  else if(tela==3){
  image(img4, 0 ,0)
    
// mudar cor do retangulo se o mouse tiver em cima(voltar)
  if(mouseX>=10 && mouseX<=80 && mouseY>=10 && mouseY<=40){
    fill("#F3F781")
  }else{
    fill("#58D3F7")
  }
  
  rect(10,10,70,30);
  textSize(13);
  fill("#000000");
  text("VOLTAR",10,20,70,30);
   
  
  fill("#F7FE2E");
  rect(260, 3, 130, 40, 30);
  fill("#151515");
  textFont(CENTER);
  textSize(24)
  text("Pontos:"+pontos, 320, 30);
    
   // alternativa 1
  fill("#FFFFFF"); 
  rect(130, 180, 125, 50, 30)
  if(mouseX>=130 && mouseX<=255 && mouseY>=180 && mouseY<=230){
        fill("#81DAF5")
        rect(130, 180, 125, 50, 30)
            if(mouseIsPressed){ 
            tela=4
            pontos += 10
            pResposta += 1
            } 
        
    }
  
    // alternativa 2
  fill("#FFFFFF"); 
  rect(130, 250, 125, 50, 30)
  if(mouseX>=130 && mouseX<=255 && mouseY>=250 && mouseY<=300){
        fill("#81DAF5")
        rect(130, 250, 125, 50, 30)
        
            if(mouseIsPressed){ 
            tela=15
            
            } 
       
      }
    
    // alternativa 3
  fill("#FFFFFF"); 
  rect(130, 320, 125, 50, 30)
  if(mouseX>=130 && mouseX<=255 && mouseY>=320 && mouseY<=370){
        fill("#81DAF5")
        rect(130, 320, 125, 50, 30)
        
            if(mouseIsPressed){ 
            tela= 15
           
            }
}
    
    
  fill("#000000")
  textSize(20);
    
    //alternativa1
    text(rCorreta[pResposta], 130, 185, 125,50)
  
    //alternativa2
    text(rErradas[pResposta], 130, 255, 125,50)
    
    //alternativa3
    text(rErradas[pResposta+1], 130, 320, 125,50)
  
  

}// nivel 1
  
  else{
    
    
    if(tela==4){
  image(img5, 0, 0)
  
fill("#F7FE2E");
  rect(260, 3, 130, 40, 30);
  fill("#151515");
  textFont(CENTER);
  textSize(24)
  text("Pontos:"+pontos, 320, 30);
    
   // alternativa 1
  fill("#FFFFFF"); 
  rect(10, 180, 125, 50, 30)
  if(mouseX>=10 && mouseX<=135 && mouseY>=180 && mouseY<=230){
        fill("#81DAF5")
        rect(10, 180, 125, 50, 30)
        
            if(mouseIsPressed){ 
              tela=15
          
            } 
  }
    // alternativa 2
  fill("#FFFFFF"); 
  rect(260, 180, 125, 50, 30)
  if(mouseX>=260 && mouseX<=385 && mouseY>=180 && mouseY<=230){
        fill("#81DAF5")
        rect(260, 180, 125, 50, 30)
        
            if(mouseIsPressed){ 
            tela= 5
            pontos=pontos+10
            pResposta += 1
            }
  }  
    // alternativa 3
  fill("#FFFFFF"); 
  rect(130, 270, 125, 50, 30)
  if(mouseX>=130 && mouseX<=255 && mouseY>=270 && mouseY<=320){
        fill("#81DAF5")
        rect(130, 270, 125, 50, 30)
        
            if(mouseIsPressed){ 
            tela=15
           
            }
  } 
    
  fill("#000000")
  textSize(20);
    
   //alternativa1 
  
    text(rErradas[pResposta+1], 15, 185, 125,50)
    
    //alternativa2
  
    text(rCorreta[pResposta], 265, 185, 125,50)
  
    
    //alternativa3
  
    text(rErradas[pResposta+2], 135, 280, 125,50)
  
  
}//nivel 2
  
  else{
    
    if(tela==15){ 
  image(img7, 0, 0)
    
    
  // mudar cor do retangulo se o mouse tiver em cima(voltar)
  if(mouseX>=10 && mouseX<=80 && mouseY>=10 && mouseY<=40){
    fill("#F3F781")
  }else{
    fill("#58D3F7")
  }
  
  rect(10,10,70,30);
  textSize(13);
  fill("#000000");
  text("VOLTAR",10,20,70,30);
  
  }// tela de erro
  
  
  else{
    
    if(tela==5){
  image(img6, 0, 0)
  
fill("#F7FE2E");
  rect(10, 140, 125, 30, 30);
  fill("#151515");
  textFont(CENTER);
  textSize(24)
  text("Pontos:"+pontos, 320, 30);
    
   // alternativa 1
  fill("#FFFFFF"); 
  rect(10, 140, 125, 30, 30)
  if(mouseX>=10 && mouseX<=135 && mouseY>=180 && mouseY<=230){
        fill("#81DAF5")
        rect(10, 180, 125, 50, 30)
      
            if(mouseIsPressed){ 
            tela=6
         
          }
  }   
    // alternativa 2
  fill("#FFFFFF"); 
  rect(260, 180, 125, 50, 30)
  if(mouseX>=260 && mouseX<=385 && mouseY>=180 && mouseY<=230){
        fill("#81DAF5")
        rect(260, 180, 175, 50, 30)
       
            if(mouseIsPressed){ 
                tela=15
           
            }
  }  
    // alternativa 3
  fill("#FFFFFF"); 
  rect(100, 270, 15, 50, 30)
  if(mouseX>=130 && mouseX<=255 && mouseY>=270 && mouseY<=320){
        fill("#81DAF5")
        rect(130, 270, 125, 50, 30)
      
            if(mouseIsPressed){ 
                tela=15
           
            }
  } 
    
  fill("#000000")
  textSize(20);
    
    //alternativa1
    textSize(15)
    text(rCorreta[pResposta], 15, 185, 125,50)
  
    //alternativa2
  
    text(rErradas[pResposta+2], 265, 185, 125,50)
  
    //alternativa3
  
    text(rErradas[pResposta+3], 135, 280, 125,50)
  
  
}
  }
  }
  }
  
  
  //tela de fim de jogo
  if(tela==6){
    image(img8, 0, 0)
  }
  
}//draw

function mouseClicked() {
   //botão voltar da tela de instruções
  if(tela==1 && mouseX>=10 && mouseX<=80 && mouseY>=10 && mouseY<=40){
    tela=0
    pResposta = 0
    console.log("Voltar a tela de menu")
  }
  
  //botão voltar da tela de creditos
 if(tela==2 && mouseX>=10 && mouseX<=80 && mouseY>=10 && mouseY<=40){
    tela=0
    pResposta = 0
    console.log("Voltar a tela de menu")
  }
  
  //botão tela voltar nivel 1
  if(tela==3 && mouseX>=10 && mouseX<=80 && mouseY>=10 && mouseY<=40){
    tela=0
    pResposta = 0
    console.log("volta a tela de menu")
  }
  
//botão voltar da tela de instruções
  if(tela==15 && mouseX>=10 && mouseX<=80 && mouseY>=10 && mouseY<=40){
    tela=0
    pResposta = 0
    console.log("Voltar a tela de menu")
  }


}// botão voltar
