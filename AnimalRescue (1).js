
<!-- saved from url=(0064)file:///C:/Users/zion/Downloads/ZionJenniCityScroller%20(1).html -->
<html><head><meta http-equiv="Content-Type" content="text/html; charset=windows-1252">
			<script src="./ZionJenniCityScroller (1)_files/processing-1.4.1.js"></script>
			<script type="text/processing" data-processing-target="mycanvas">
				FoodLayer foodlayer;
				void setup()
				{
				  size(500,600);
				  background(150,200,180);
				  fill(255,100,100);
				 
				  //noLoop();
				 
				  
				  //back layer
				  layer1 = new Layer(.2,350,20,20,20);
				  //front layer
				  layer2 = new Layer(4,150,10,40,35);
				  //middle layer
				  layer3 = new Layer(1.5,230,0,0,0);
				  //nightSky = new Stars(random(3,498),random(5,200),8,8,[255,215,0],0)
				  nightsky = new StarLayer();
				  beep = new Cat(250,585,30,12);
				  //cat = new catFood(500,420,30,30);
				  foodlayer = new FoodLayer();
				 
				}
				void draw(){
					background(0,0,0);
					//nightSky.drawStars();
					nightsky.drawStar();
					layer1.drawLayer();
					layer1.moveLayer();
					layer3.drawLayer();
					layer3.moveLayer();
					layer2.drawLayer();
					layer2.moveLayer();
					beep.drawCat();
					//cat.drawcatFood();
					//cat.Move();
					
					foodlayer.drawLayer();
					foodlayer.moveLayer();
					if(keyPressed==true){
						if(keyCode==38){
							console.log("up");
							if(beep.y>200){
								beep.jump();
							}
						
							
						}
						console.log(keyCode);
					
					}
					if (keyPressed==false){
						if (beep.y<590){
							console.log("down");
							beep.fall();
							}
					}
							
				}
				
				class Stars {
					var x;
					var y;
					var w;
					var h;
					var c;
					var stars;
					var s;
					
					//constructor
					Stars(xPos, yPos, width, height,color)
					{
					x = xPos;
					y = yPos;
					w = width;
					h = height;
					c = color;
					//stars = [];
					//s = speed;
					
						//stars.push(new Stars();
					}
					
					//methods					
					void drawStars(){
						fill(c[0], c[1],c[2]);
						ellipse(x,y,w,h);
						
					}
					
				}
				
				class StarLayer {
					//attributes
					var stars = [];
					
					//constructor
					StarLayer(){
						for (var count=0;count<31;count++){
							stars.push(new Stars(random(3,498),random(5,300),8,8,[255,215,0]));
						}
					}
					//methods
					void drawStar(){
						for (var count=0;count<stars.length;count++){
							stars[count].drawStars();
						}
					}
				}
				void Moon(){

				}
				
		
				
				class Building {
					//attributes
					var x;
					var y;
					var s;
					var h;
					var r;
					var g;
					var b;
					var w;
					
					//constructor
					Building(xPos,yPos,speed,width, height, color)
					{
						x = xPos;
						y = yPos;
						s = speed;
						h = height;
						r = color[0];
						g = color[1];
						b = color[2];
						w = width;
						
					}
					
					//methods
					void moveBuilding(){
						x = x - s;
					}
						
					void drawBuilding(){
						fill(r,g,b);
						noStroke();
						rect(x,y,w,h);
							if (y>350) {
								fill(255,215,0);
								//left side
								rect(x+5,y+5,w/5,h/10);
								rect(x+5,y+50,w/5,h/10);
								rect(x+5,y+90,w/5,h/10);
								//right side
								fill(255,215,0);
								rect(x+(w/2),y+5,w/5,h/10);
								rect(x+(w/2),y+50,w/5,h/10);
								rect(x+(w/2),y+90,w/5,h/10);
							}
							else {
								fill(255,215,0);
								//left side
								rect(x+5,y+5,w/6,h/20);
								rect(x+5,y+40,w/6,h/20);
								//middle
								rect(x+(w/3),y+5,w/6,h/20);
								rect(x+(w/3),y+40,w/6,h/20);
								//right side
								rect(x+(w-25),y+5,w/6,h/20);
								rect(x+(w-45),y+5,w/6,h/20);
							}
						
					}
				}
					
				
				
				class Layer {
					//attributes
					var s;
					var h;
					var r;
					var g;
					var b;
					var buildings;
					var tw;
					
					//constructor
					Layer(speed, height, red, green, blue)
					{
						s = speed;
						h = height;
						r = red;
						g = green;
						b = blue;
						buildings =[];
						tw = 0;
						
						while (tw <= 500){
							var bwidth = random(50,100);
							var bheight = random(h-90,h+90);
							buildings.push(new Building(tw,600-bheight,s,bwidth,bheight,[r,g,b]));
							tw = tw + bwidth;
						
						}
						
						}
					
					//methods
					void moveLayer(){
						for (var count=0;count<buildings.length;count++)
						{
							buildings[count].moveBuilding();
						}
						tw = tw - s;
						if(tw<600){
							var bwidth = random(50,100);
							var bheight = random(h-90,h+90);
							buildings.push(new Building(tw,600-bheight,s,bwidth,bheight,[r,g,b]));
							tw = tw + bwidth;
						}
					}	
					
					
					void drawLayer(){
						for (var count=0;count<buildings.length;count++)
						{
							buildings[count].drawBuilding();
						}
					}
					 
				}
			
				class Cat {
					//attributes
					var x;
					var y;
					var w;
					var h;
					
					//conductor
					Cat(xPos,yPos,width,height){
						x = xPos;
						y = yPos;
						w = width;
						h = height;
					}
					//methods
						void drawCat(){
							fill(120, 107, 107);
							ellipse(150,y-35,35,25);
							ellipse(120,y-25,50,35);
							//left leg
							rect(100,y-15,4,20);
							//right leg
							rect(130,y-15,4,20);
							//tail 
							rect(95,y-55,4,30);
							//ear
							triangle(150,y-45, 135, y-45, 139,y-65);
							triangle(170,y-45,154,y-45,170,y-65);
							//left eye
							fill(67, 154, 204);
							ellipse(145,y-40,5,10);
							//right eye
							fill(67, 154, 204);
							ellipse(160,y-40,5,10);
							//mouth 
							fill(242, 109, 160);
							ellipse(155,y-35,8,5);
						}
						
						void jump(){
							y=y-10;
							console.log("jumped");
						}
						void fall(){
						y=y+10;
						console.log("fall");
						}
				}
					
				class catFood{
					//attributes
					var x;
					var y;
					var h;
					var w;
					
					//constructor
					catFood(xPos,yPos,height,width){
						x = xPos;
						y = yPos;
						h = height;
						w = width;
					}
					
					//method
					void drawcatFood(){
						//cat food
						fill(255, 0, 0);
						rect(x,y,30,30,10);
						
						}
						
						void Move(){
							x=x-5;
						}
				}
				class FoodLayer{
					//attributes
					var food=[];
					var space=Math.floor(Math.random() * (201)) + 100;
					var height=Math.floor(Math.random() * (251)) + 250;
					
					FoodLayer(){
						food.push(new catFood(500,height,30,30));
					}
					void moveLayer(){
						for (var i=0;i<food.length;i++){
							food[i].Move();
						}
					}
					void drawLayer(){
						for(var i=0;i<food.length;i++){
							food[i].drawcatFood();
						}
								
					}
				}
						
						
					
					
					
					
					
				
					
					
				
				
				
				class Yarn{
					//attributes
					var x;
					var y;
					var h;
					var w;
					
					//constructor
					Yarn(xPos,yPos,height,width){
						x = xPos;
						y = yPos;
						h = height;
						w = width;
							
					}
					
					//method
					void drawYarn(){
						//yarn
						fill(145,134,69);
						ellipse(149,140,29,32);
						line(150,127,143,156);
						line(161,132,146,157);
						line(138,129,150,157);
						
						
						
					}

					
					
					
					
				}
				
				
				
		
				
			
					
					
						
		</script>
	<style type="text/css">@font-face {
  font-family: "PjsEmptyFont";
  src: url('data:application/x-font-ttf;base64,AAEAAAAKAIAAAwAgT1MvMgAAAAAAAAEoAAAAVmNtYXAAAAAAAAABiAAAACxnbHlmAAAAAAAAAbwAAAAkaGVhZAAAAAAAAACsAAAAOGhoZWEAAAAAAAAA5AAAACRobXR4AAAAAAAAAYAAAAAGbG9jYQAAAAAAAAG0AAAABm1heHAAAAAAAAABCAAAACBuYW1lAAAAAAAAAeAAAAAgcG9zdAAAAAAAAAIAAAAAEAABAAAAAQAAAkgTY18PPPUACwAgAAAAALSRooAAAAAAyld0xgAAAAAAAQABAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAAACAAIAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACMAIwAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAMAAQAAAAwABAAgAAAABAAEAAEAAABB//8AAABB////wAABAAAAAAAAAAgAEgAAAAEAAAAAAAAAAAAAAAAxAAABAAAAAAABAAEAAQAAMTcBAQAAAAAAAgAeAAMAAQQJAAEAAAAAAAMAAQQJAAIAAgAAAAAAAQAAAAAAAAAAAAAAAAAA')
       format('truetype');
}</style></head>
	<body>
		<canvas id="mycanvas" tabindex="0" width="500" height="600" style="image-rendering: -webkit-optimize-contrast !important;"></canvas>
	
<span style="position: absolute; top: 0px; left: 0px; opacity: 0; font-family: PjsEmptyFont, fantasy;">AAAAAAAA</span></body></html>