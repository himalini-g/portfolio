// Wang tiles in p5.js
import processing.svg.*;
int tileCols = 12;
int tileRows = 8;

int tileW = 50;
int [][]tiles = new int[tileRows][tileCols];
int [][]specialTileIndex = new int[tileRows][tileCols];
int lenTruchet4 = 7;
int numSpecial4 = 9;
PShape []truchet4 = new PShape[lenTruchet4 + numSpecial4];
int lenTruchet3 = 1;
PShape []truchet3 = new PShape[lenTruchet3];
int lenTruchet5 = 2;
PShape []truchet5 = new PShape[lenTruchet5];
int lenTruchet14 = 2;
PShape []truchet14 = new PShape[lenTruchet14];
int lenTruchet15 = 1;
PShape []truchet15 = new PShape[lenTruchet15];
boolean recordSVG = false;
float p = 0.27;
void setup() {
  //size(200, 300);
  // width (this is inifinite) by height (finite).
  size(600, 400);
  //size(5500, 2500 );
  //size(2750, 1850 );
  noLoop();
  noFill();
  strokeWeight(4);
  stroke(0);
  for (int i = 0; i < lenTruchet4 + numSpecial4; i ++) {
    truchet4[i] = loadShape("tiles/" + str(4) + "/" + str(i + 1) + "_new.svg");
    truchet4[i].disableStyle();
  }
  for (int i = 0; i < lenTruchet3; i ++) {
    truchet3[i] = loadShape("tiles/" + str(3) + "/" + str(i + 1) + ".svg");
    truchet3[i].disableStyle();
  }
  for (int i = 0; i < lenTruchet5; i ++) {
    truchet5[i] = loadShape("tiles/" + str(5) + "/" + str(i + 1) + ".svg");
    truchet5[i].disableStyle();
  }
  for (int i = 0; i < lenTruchet14; i ++) {
    truchet14[i] = loadShape("tiles/" + str(14) + "/" + str(i + 1) + ".svg");
    truchet14[i].disableStyle();
  }
  for (int i = 0; i < lenTruchet15; i ++) {
    truchet15[i] = loadShape("tiles/" + str(15) + "/" + str(i + 1) + ".svg");
    truchet15[i].disableStyle();
  }
  arrangeWithConstraints();
}
float function_AdjustableCenterEllipticWindow (float x, float a) {
  //string functionName = "Adjustable-Center Elliptic Window";

  float min_param_a = 0.0 + EPSILON;
  float max_param_a = 1.0 - EPSILON;
  a = constrain(a, min_param_a, max_param_a);

  float y = 0;

  if (x<=a) {
    y = (1.0/a) * sqrt(sq(a) - sq(x-a));
  } else {
    y = (1.0/(1-a)) * sqrt(sq(1.0-a) - sq(x-a));
  }
  return y;
}


float function_BartlettWindow (float x, float a) {
  // http://en.wikipedia.org/wiki/Window_function
  // Triangular window with zero-valued end-points:
  //functionName = "Bartlett (Triangle) Window";

  float y =  2.0 * (0.5 - abs(x - a));
  return y;
}

void arrangeWithConstraints() {

  for (int row = 0; row < tileRows; row++) {
    for (int col = 0; col < tileCols; col++) {
      int tileThis = 0;
      if (row > 0) {
        int tileAbov = tiles[row - 1][col];
        if ((tileAbov & 4) > 0) {
          // If the tile above us points downwards,
          // Draw upwards to connect with it.
          tileThis += 1;
        }
      }
      if (col > 0) {
        int tileLeft = tiles[row][col - 1];
        if ((tileLeft & 2) > 0) {
          // If the tile to the left points to its right,
          // Draw leftwards to connect with it.
          tileThis += 8;
        }
      }
      if ((random(1.0) < p|| col == 0 || (row == 0 && col <= 4) ||  col == tileCols - 1) && row !=  tileRows - 1 && !(row == 1 && col <= 4 && col > 0) ) {
        // Draw downwards with some probability.
        tileThis += 4;
      }
      if ((random(1.0) <  p|| row == 0 || row == tileRows - 1) && col != tileCols - 1 && !(row == 1 && col <= 4)) {
        //   // Draw rightwards with some probability.
        tileThis += 2;
      }



      tiles[row][col] = tileThis;
      //tiles[row][col] = 1;
      specialTileIndex[row][col]= -1;
    }
  }
}


void draw() {
  background(255);
  
  beginRecord(SVG, "postcards/" + str(millis()) +   "-p" + str(p) +  ".svg");
  noFill();
  rectMode(CORNERS);
  rect(0, 0, width, height);
  for (int row = 0; row < tileRows; row++) {
    for (int col = 0; col < tileCols; col++) {
      int x = col * tileW;
      int y = row * tileW;
      int center = tileW / 2;
      push();
      translate(x + center, y  + center);
      drawTile( row, col);
      pop();
    }
  }
  println("ending record for " + "person-grid" + str(millis()) + "-p" + str(p) + ".svg");
  endRecord();
  noLoop();
}
void enforceSpecialRules(int r, int c) {

  //print(tiles[r][c],'\n');
  if (c + 3 < tileCols && tiles[r][c] == 1 &&  tiles[r][c + 1] == 1 && tiles[r][c + 2] == 1 && tiles[r][c + 3] == 1
    && specialTileIndex[r][c] == -1 && specialTileIndex[r][c + 1] == -1 && specialTileIndex[r][c + 2] == -1  && specialTileIndex[r][c + 3] == -1 ) {
    specialTileIndex[r][c] = lenTruchet4 + 8;
    specialTileIndex[r][c + 1] = lenTruchet4 + 7;
    specialTileIndex[r][c + 2] = lenTruchet4 + 6;
    specialTileIndex[r][c + 3] = lenTruchet4 + 5;
  }
  if (random(1.0) < 0.5 && r + 1 < tileRows && tiles[r][c] == 1 && tiles[r + 1][c] == 4 && specialTileIndex[r][c] == -1 && specialTileIndex[r + 1][c] == -1 ) {
    specialTileIndex[r][c] = lenTruchet4;
    specialTileIndex[r + 1][c] = lenTruchet4 + 1;
    return;
  }
  if ( random(1.0) < 0.5 && c + 1 < tileCols && tiles[r][c] == 8 && tiles[r][c + 1] == 2 && specialTileIndex[r][c] == -1 && specialTileIndex[r][c + 1] == -1 ) {
    specialTileIndex[r][c] = lenTruchet4 + 1;
    specialTileIndex[r][c + 1] = lenTruchet4;
    return;
  }
  if (random(1.0) < 0.3 &&  random(1.0) < 0.5 && c + 1 < tileCols && tiles[r][c] == 4 && tiles[r][c + 1] == 4 && specialTileIndex[r][c] == -1 && specialTileIndex[r][c + 1] == -1 ) {

    specialTileIndex[r][c] = lenTruchet4 + 2;
    specialTileIndex[r][c + 1] = lenTruchet4 + 3;
    return;
  }
  if (random(1.0) < 0.3 &&  c + 1 < tileCols && tiles[r][c] == 1 && tiles[r][c + 1] == 1 && specialTileIndex[r][c] == -1 && specialTileIndex[r][c + 1] == -1 ) {
    specialTileIndex[r][c] = lenTruchet4 + 3;
    specialTileIndex[r][c + 1] = lenTruchet4 + 2;
    return;
  }

  if (random(1.0) < 0.60 && c + 1 < tileCols &&  tiles[r][c] == 2 && tiles[r][c + 1] == 8  && specialTileIndex[r][c] == -1 && specialTileIndex[r][c + 1] == -1) {
    tiles[r][c] = 0;
    tiles[r][c + 1] = 0;
    return;
  }
  if (random(1.0) < 0.60 && r + 1 < tileRows &&  tiles[r][c] == 4 && tiles[r + 1][c] == 1  && specialTileIndex[r][c] == -1 && specialTileIndex[r + 1][c] == -1) {
    tiles[r][c] = 0;
    tiles[r + 1][c] = 0;
    return;
  }
  if (random(1.0) < 0.2 && r + 1 < tileRows && tiles[r][c] == 4 && tiles[r + 1][c] == 1) {
    //specialTileIndex[r][c] = lenTruchet4 + 2;
    specialTileIndex[r + 1][c] = lenTruchet4 + 4;
    return;
  }
}
void drawTile( int r, int c) {
  enforceSpecialRules(r, c);
  int id = tiles[r][c];
  int variation = specialTileIndex[r][c];



  shapeMode(CENTER);
  if (id == 1 || id == 2 || id == 4 || id == 8) {
    if (variation == -1) {
      variation = int(random(1.0) * lenTruchet4);
      println(variation);
    }

    if ( id == 1) {
      rotate(radians(180));
    }
    if (id == 2) {
      rotate(radians(270));
    }
    if (id == 8) {
      rotate(radians(90));
    }
    shape(truchet4[variation], 0, 0, tileW, tileW);
  }
  if (id == 3 || id == 6 || id == 9 || id == 12) {
    if (variation == -1) {
      variation = int(random(1.0) * lenTruchet3);
    }
    if ( id == 12) {
      rotate(radians(180));
    }
    if (id == 9) {
      rotate(radians(270));
    }
    if (id == 6) {
      rotate(radians(90));
    }
    shape(truchet3[variation], 0, 0, tileW, tileW);
  }
  if (id == 5 || id == 10) {
    if (variation == -1) {
      variation = int(random(1.0) * lenTruchet5);
    }
    if (id == 10) {
      rotate(radians(90));
    }
    shape(truchet5[variation], 0, 0, tileW, tileW);
  }
  if (id == 7 || id == 11 || id == 13 || id == 14) {
    if (variation == -1) {
      variation = int(random(1.0) * lenTruchet14);
    }
    if ( id == 7) {
      rotate(radians(-90));
    }
    if (id == 13) {
      rotate(radians(90));
    }
    if (id == 11) {
      rotate(radians(180));
    }
    shape(truchet14[variation], 0, 0, tileW, tileW);
  }
  if (id == 15) {
    if (variation == -1) {
      variation = int(random(1.0) * lenTruchet15);
    }
    if (random(1.0) < 0.5) {
      rotate(radians(90));
    }
    shape(truchet15[variation], 0, 0, tileW, tileW);
  }
}
void keyPressed() {
  if (key == 'r') {
    setup();
    loop();
  }
}
