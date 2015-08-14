<head><meta http-equiv="Content-Type" content="text/html; charset=windows-1252">
			<script src="processing-1.4.1.js"></script>
			<script type="text/processing" data-processing-target="mycanvas">
			
			//back layer
			Layer layer1 = new Layer(0.5,200);
			Grass forest = new Grass();
			//Layer layer2 = new Layer(1,300);
			//Layer layer3 = new Layer(1.5,500);
			
	
			void setup(){
				size(1200,1200);
				background(125);
				fill(255);
				PFont fontA = loadFont("courier");
				textFont(fontA, 14);  
					
			}
					
					
			void draw(){
				background(126,192,238);
				fill(82, 41, 0);
				noStroke();
				//tree.drawTree();
				//tree2.drawTree();
				//tree3.drawTree();
				layer1.drawLayer();
				layer1.moveLayer();
				forest.drawGrass();
				//layer2.drawLayer();
				//layer2.moveLayer();
				//layer3.drawLayer();
				//layer3.moveLayer();
				//grass.drawGrass();
			}

		
			class Tree {
				//attributes
				var x;
				var y;
				var w;
				var h;
				var s;
				
				//constructor
				Tree(xPos,yPos,speed,width,height)
				{
					x = xPos;
					y = yPos;
					w = width;
					h = height;
					s = speed;

				
				}
				
				//methods
				void drawTree(){
					
					fill(61,31,0);
					rect(x+100,y-150,90, 400);
					fill(34,139,34);
					//ellipse(x+150,x-50,90,90);
					ellipse(x+100,y-50,90,90);
					ellipse(x+80,y-80,90,90);
					ellipse(x+200,y-200,90,90);
					ellipse(x+100,y-150,90,90);
					ellipse(x+150,y-100,90,90);
					ellipse(x+200,y-150,90,90);
					ellipse(x+200,y-100,90,90);
					ellipse(x+100,y-200,90,90);
					ellipse(x+150,y-80,90,90);
					ellipse(x+150,y-100,90,90);
					ellipse(x+150,y-200,90,90);
					ellipse(x+200,y-90,90,90);
					ellipse(x+100,y-90,90,90);
					ellipse(x+150,y-150,90,90);
					//apples
					fill(255,0,0);
					ellipse(x+100,y-100,40,40);
					ellipse(x+100,y-200, 40, 40);
					ellipse(x+150,y-90,40,40);
					ellipse(x+200,y-150, 40, 40);
					ellipse(x+150,y-150, 40, 40);
					//tree trunk
					fill(37,19,0);
					ellipse(x+150,y-5, 40, 40);
					fill(153,102,51);
					ellipse(x+150,y-5,15,15);	
					//oranges
					fill(255,153,51);
					ellipse(x+200,y-200,40,40);
					ellipse(x+100,y-100,40,40);
					ellipse(x+200,y-90,40,40);
					
				
				}
				
			void moveTree(){
				x = x - s;
			}
			
			
			}
			
			class Layer {
				//attributes
				
				var s;
				var h;
				var trees;
				var width;
				
				//constructor
				Layer(speed,height)
				{
				
					s = speed;
					h = height;
					trees =[];
					width = 0;
					
					while(width <=1200) {
						var twidth = random(100,400);
						console.log(twidth);
						var theight = 200;
						console.log(theight);
						trees.push(new Tree(random(50,500),1200-theight,0.5,twidth,theight));
						console.log(trees.length);
						width = width + twidth;

					
					}
				}
				
				//methods
				void drawLayer(){
					for(var i=0;i<trees.length;i++)
					{
						//console.log("i");
						trees[i].drawTree();
					}
				}
				
				void moveLayer(){
					for (var count=0;count<trees.length;count++)
						{
							console.log("Ho");
							trees[count].moveTree();
						}
						width = width - s;
						if(width<1200){
							console.log("Hi");
							var twidth = random(50,100);
							var theight = random(h-90,h+90);
							trees.push(new Tree(width,1200-theight,s,twidth,theight));
							width = width + twidth;
						}
					}
			}
				class Grass{
				
					//constructor - empty
					Grass(){
					
					}
					//draw dirt
					 void drawGrass(){
						fill(131,151,13);
						rect(0,1100,1200,100);
					 
					 }

						
				
				
				} 
					class 
		
				
			
			
			
		
		</script>
	<style type="text/css">@font-face {
  font-family: "PjsEmptyFont";
  src: url('data:application/x-font-ttf;base64,AAEAAAAKAIAAAwAgT1MvMgAAAAAAAAEoAAAAVmNtYXAAAAAAAAABiAAAACxnbHlmAAAAAAAAAbwAAAAkaGVhZAAAAAAAAACsAAAAOGhoZWEAAAAAAAAA5AAAACRobXR4AAAAAAAAAYAAAAAGbG9jYQAAAAAAAAG0AAAABm1heHAAAAAAAAABCAAAACBuYW1lAAAAAAAAAeAAAAAgcG9zdAAAAAAAAAIAAAAAEAABAAAAAQAAAkgTY18PPPUACwAgAAAAALSRooAAAAAAyld0xgAAAAAAAQABAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAAACAAIAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACMAIwAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAMAAQAAAAwABAAgAAAABAAEAAEAAABB//8AAABB////wAABAAAAAAAAAAgAEgAAAAEAAAAAAAAAAAAAAAAxAAABAAAAAAABAAEAAQAAMTcBAQAAAAAAAgAeAAMAAQQJAAEAAAAAAAMAAQQJAAIAAgAAAAAAAQAAAAAAAAAAAAAAAAAA')
       format('truetype');
}
</style></head>
	<body>
		<canvas id="mycanvas" tabindex="0" width="500" height="600" style="image-rendering: -webkit-optimize-contrast !important;"></canvas>
	
<span style="position: absolute; top: 0px; left: 0px; opacity: 0; font-family: PjsEmptyFont, fantasy;">AAAAAAAA</span></body></html>