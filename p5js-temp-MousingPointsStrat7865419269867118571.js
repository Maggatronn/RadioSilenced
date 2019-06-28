var dataCount;
var data;
var dataMin = 0;
var dataMax = 1;
var lat;
var place;
var state;
var data;
var placeList = [];
var twentyList = [];
var fiftyList = [];
var hundredList = [];
var hugeList = [];
var dataPoint;
var mouseDist;
var closestPlace;
var citySwitch = false; //when you click a city
var citySwitchSample = false; //when you click a city
var audio;
var averageDict = {};
var averageList = [];
var averageStateList = [];
var aveStateDictColor = {}; 
var averageRegionList = [];
var aveRegionDictColor = {}; 
var count = 0;
var keys1;
var recentClosePlace;
var outDict = {};
var outList = [];
var stationList = [];
var sampleDict  = {};
var randMP3;
var smallDict;
var oldMouseX;
const X_AXIS = 2;
const Y_AXIS = 1;
let b1, b2, c1, c2;
let font;
let bg;
let closestDist = 8;  // minimum distance
let closestDistY = 35;  // minimum distance
let closestDistSample = 1;
let oneKey;
var stationButton;
var regionButton;
var stateButton;
var cityCount = 0; //helping find average
var dict = {};
var regionDict = {};
var stateDict = {};//dict to help with finding average conper city 
var perSum = 0.0; // helping with average
var previousCity = ""; //average
var total = 0.0;
var stateTotal = 0.0;
var stateAverage = 0.0;
var regionTotal = 0.0;
var regionAverage = 0.0;
var cityNow;
var currentList;
var  mouseDistX;
var mouseDistY;
var sampleOutputX;
let worldMap;
var finalOutput;
var newMouseLocal;
var properText;
//var recentClosestPlace;
var oldAudio;
var clickDist;
var mouseDistXButt;
var mouseDistYButt;
var rural = false;
var semiRural = false;
var suburban = false;
var urban = false;
var all = true;
var both = true;
var x;
var y;
var thisPlace;

//var list20k = ['KTDH', 'KTRF', 'WNAX', 'WEAN', 'WHMQ', 'WNCK', 'WXTK', 'WVBF', 'KVEL', 'KFNX', 'KUYI', 'KBTK', 'KVWM', 'KJZK', 'WFHR', 'WOGO', 'WFAW', 'WNGH', 'WACV', 'WUCT', 'WURC', 'WBUV', 'WIUP', 'WNBM',];
//var list50k = ['WJAG', 'KGLO', 'WARA', 'WSNG', 'WNRI', 'WESU', 'WEVN', 'WFCR', 'KZZZ', 'KLIX', 'KYCA', 'KRFA', 'WYAY', 'WSBB', 'WCHV', 'WCHS', 'WUWG', 'WBCF', 'WXQW', 'WVYA',];
//var list100k = ['KXIC', 'KOTA', 'KLXX', 'KXEL', 'WXKS', 'WZBC', 'WBSM', 'KBUL', 'KAWC', 'KBLU', 'KPUB', 'WKBN', 'WHPT', 'WFLF', 'WHKT', 'WERC', 'WJCW', 'WWTN', 'WVOX', 'WAMC',];
//var bigList = ['KEIB', 'KOGO', 'KFI', 'KRLA', 'KFMB', 'KABC', 'KPCC', 'KALW', 'KQED', 'KTOK', 'KTSM', 'KLVI', 'KPRC', 'WTAW', 'KTRH', 'KNTH', 'KTSA', 'KTRS', 'KZSE', 'WHO', 'WMT', 'KFAB', 'WMBR', 'WBZ', 'WTAG', 'WHYN', 'WRKO', 'WHJJ', 'WBUA', 'KEMC', 'KSL', 'KABQ', 'KTAR', 'KXNT', 'KKNT', 'KJZZ', 'KCSJ', 'KNST', 'KFYI', 'KUAZ', 'KKPC', 'KRCC', 'KOFA', 'WCPN', 'WTMJ', 'WORT', 'WIBA', 'WWJ', 'WTKS', 'WHNZ', 'WAOK', 'WABE', 'WDBO', 'WGST', 'WGKA', 'WBOB', 'WUSF', 'WFLA', 'WMAL', 'WJCT', 'WMFE', 'WVOC', 'WSB', 'WLTR', 'WYDE', 'WNTM', 'WLAC', 'WMPN', 'KDKA', 'WOR', 'WABC', 'WINS', 'WNTP', 'WPGP', 'WRUR', 'WHCR', 'WESA',];
function preload() {
  data = loadJSON("data/clean_speech_pop_20.json");
  table = loadTable("data/mturk_task_sortedcity.csv", "csv", "header");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  dataCount20 = 8477;
  dataCount25 = 8320;
  dataCount35 = 7916;
  dataCount40 = 7624;
  dataCount50 = 7360;
  dataCount60 = 7134;
  dataCount75 = 6618;
  dataCount80 = 6464;
  dataCount90 = 5703;
  bg = loadImage('data/bluefade2.svg');

  rect(width*0.038, height*0.77, width*0.3, 20, height*0.03);
  rect(width*0.038, height*0.8, width*0.3, 20, height*0.03);
  rect(width*0.038, height*0.8355, width*0.3, 20, height*0.03);
  rect(width*0.038, height*0.871, width*0.3, 20, height*0.03);
  rect(width*0.038, height*0.9065, width*0.3, 20, height*0.03);
  rect(width*0.038, height*0.942, width*0.3, 20, height*0.03);

  text("both", width*0.038, height*0.78, width*0.3, 20, height*0.03);  
  text("rural", width*0.038, height*0.806, width*0.3, 20, height*0.03);
  text("semi-rural", width*0.038, height*0.84, width*0.3, 20, height*0.03);
  text("suburban", width*0.038, height*0.873, width*0.3, 20, height*0.03);
  text("urban", width*0.038, height*0.9067, width*0.3, 20, height*0.03);
  text("all", width*0.038, height*0.944, width*0.3, 20, height*0.03);





  // map for the backgroun
  let mapWidth = width*0.9;  // use 80% of the sketch size
  let mapHeight = height * 0.7;
  let mapX = ((width - mapWidth) / 2 )+230;
  let mapY = ((height - mapHeight) / 2 )-40;
  let mapPath = "data/us-states.svg";  
  let mapPath1 = "data/us-states-1.svg";  
  let mapPathState = "data/us-states-state.svg";  
  let mapPathRegion = "data/us-states-region.svg"; 

  worldMap = new SimpleSVG(mapPath1, mapX, mapY, mapWidth, mapHeight, worldMapReady);
  //stateMap = new SimpleSVG(mapPathState, mapX, mapY, mapWidth, mapHeight, stateMapReady);
  //regionMap = new SimpleSVG(mapPathRegion, mapX, mapY, mapWidth, mapHeight, regionMapReady);


  //Here is wherethe points start getting going
  for (let i = 0; i < dataCount20; i++) {
    // here is where we define everything //
    place = { };
    smallDict = [];
    place.city = data[i].city;
    place.con = data[i].mean_word_confidence;
    place.lat = data[i].station_lat;
    place.lon = data[i].station_lon;
    place.mp3 = data[i].audio_path;
    place.state = data[i].state;
    place.region = data[i].region;
    place.station = data[i].callsign;
    place.gender = data[i].diary_gender;
    place.content = data[i].content;
    let projected = projectAlbers(place.lon, place.lat);
    place.x = projected.x;
    place.y = projected.y;
    place.pop = data[i].pop;

    placeList.push(place);

    ///make the STATION dictionary for average///
    if (place.station in dict) {
      dict[place.station].push(place['con']);
    } else {
      dict[place.station] = []
        dict[place.station].push(place['con']);
    } 

    ///make the STATE dictionary for average///
    if (place['state'] in stateDict) {
      stateDict[place['state']].push(place['con']);
    } else {
      stateDict[place['state']] = []
        stateDict[place['state']].push(place['con']);
    }   

    ///make the REGION dictionary for average///

    if (place['region'] in regionDict) {
      regionDict[place['region']].push(place['con']);
    } else {
      regionDict[place['region']] = []
        regionDict[place['region']].push(place['con']);
    }


    ///Make the dict with MP3 and STATION///    
    if (place.station in sampleDict) {
      if (place.station[place['con']] in sampleDict) {
        sampleDict[place.station][place['con'][place['mp3']]] = place['content'];
      } else {
        sampleDict[place.station][place.con] = {};
        sampleDict[place.station][place.con][place.mp3] = place.content;
      }
    } else {
      sampleDict[place.station]  = {};
      sampleDict[place.station][place['con']] = {};
      sampleDict[place.station][place['con']][place['mp3']] = place['content'];
    }
  }


  //AVE of STATION
  for (let point in dict) {
    let moment = {};
    for (i = 0; i < dict[point].length; i++) {
      total += dict[point][i];
    }
    average = total/(dict[point].length);
    moment.station = point;
    moment.average = average;
    //moment.population = 
    for (let i = 0; i < placeList.length; i++) {
      //print(placeList[line]['station'], 'callsign')
      if (placeList[i].station === point) {
        moment.x = placeList[i].x;
        moment.y = placeList[i].y;
        moment.pop = placeList[i].pop;
      }
    }
    averageList.push(moment);
    total = 0;
  }

  for (let point in stateDict) {
    let moment = {};
    for (i = 0; i < stateDict[point].length; i++) {
      stateTotal += stateDict[point][i];
    }
    stateAverage = stateTotal/(stateDict[point].length);
    moment.state = point;
    moment.average = stateAverage;

    //AVE of STATE  
    for (let i = 0; i < stateDict.length; i++) {
      //print(placeList[line]['station'], 'callsign')
      if (placeList[i].state === point) {
        moment.x = placeList[i].x;
        moment.y = placeList[i].y;
      }
    }
    averageStateList.push(moment);
    stateTotal = 0;
  }

  for (let point in regionDict) {
    let moment = {};
    for (i = 0; i < regionDict[point].length; i++) {
      regionTotal += regionDict[point][i];
    }
    regionAverage = regionTotal/(regionDict[point].length);
    moment.region = point;
    moment.average = regionAverage;
    //AVE of REGION
    for (let i = 0; i < regionDict.length; i++) {
      //print(placeList[line]['station'], 'callsign')
      if (placeList[i].region === point) {
        moment.x = placeList[i].x;
        moment.y = placeList[i].y;
      }
    }
    averageRegionList.push(moment);
    regionTotal = 0.0;
  }
  findMinMax();
}

//*************************MAP BEGINS*********************

function clearAll() {
  let list = worldMap.listShapes();
  for (let i = 0; i < list.length; i ++) {
    if (!ignoreShape(list[i])) {
      worldMap.setFill(list[i], 'none');
      worldMap.setStroke(list[i], 'none');
    }
  }
}

function outlineAll() {
  let list = worldMap.listShapes();
  for (let i = 0; i < list.length; i ++) {
    if (!ignoreShape(list[i])) {
      worldMap.setFill(list[i], 'none');
      worldMap.setStroke(list[i], 'purple');
    }
  }
}


function worldMapReady() {
  // show a list of all the shapes by name (i.e all the country codes)
  let list = worldMap.listShapes();
  for (let i = 0; i < list.length; i ++) {
    if (!ignoreShape(list[i])) {
      worldMap.setFill(list[i], 'none');
      worldMap.setStroke(list[i], 'white');
    }
  }
  //  // call the function named 'mapClick' whenever a shape is clicked
  worldMap.onClick(mapClick);
  //worldMap.outlineAll();
  //worldMap.keyPressed();
  //worldMap.clearAll();
  //  // handle mouseover (hover) events, and mouseout (the opposite of hover)
  worldMap.onMouseOver(mapOver);
  worldMap.onMouseOut(mapOut);
  //worldMap.switchRegion();
}


function stateMapReady() {
  // show a list of all the shapes by name (i.e all the country codes)
  let list = stateMap.listShapes();
  for (let i = 0; i < list.length; i ++) {
    if (!ignoreShape(list[i])) {
      stateMap.setFill(list[i], '.5px, #FE00FF');
      stateMap.setStroke(list[i], '#FE00FF');
    }
  }
  stateMap.onClick(mapClick);
  worldMap.outlineAll();
  //worldMap.keyPressed();
  //worldMap.clearAll();
  //  // handle mouseover (hover) events, and mouseout (the opposite of hover)
  stateMap.onMouseOver(mapOver);
  stateMap.onMouseOut(mapOut);
}
//print(worldMap.listShapes());
let oldMaxColor = 1;
let oldMinColor = .5;
let newMaxColor = 255;
let newMinColor = 0;



function mapClick(shape) {

  if (ignoreShape(shape.id)) {

    //if (mouseDistStateX < 100 && mouseDistStateY < 20){
    //    print('state')
    //    let mapPath = "data/us-states-2.svg";  
    //    worldMap = new SimpleSVG(mapPath, mapX, mapY, mapWidth, mapHeight, mapReady);
    //}
    document.getElementById(shape.id).style.opacity = aveStateDictColor[(shape.id)];
  }

  print(`click $ {
    shape.id
  }
  `);
}


function mapOver(shape) {
  if (!ignoreShape(shape.id)) {
    //worldMap.setFill(shape, '#cccccc');
    cursor(HAND);
    //document.getElementById(shape.id).style.color = '255'
  }
  print(`over $ {
    shape.id
  }

  `);
  print(averageStateList, 'state');
  print(averageRegionList, 'region')
}


function mapOut(shape) {
  let state;
  if (!ignoreShape(shape.id)) {
    //worldMap.setFill(shape, "rgb(252, 0, 252, .1)");
    //state = document.getElementById(shape.id)
    //document.getElementById(shape.id).style.opacity = aveStateDictColor[(shape.id)];

    //print('its working')
    //worldMap.setStroke(shape, 'white');
  }  
  print(`out $ {
    shape.id
  }
  `);
}


// returns 'true' if this shape should be ignored
// i.e. if it's the ocean or it's the boundary lines between states
function ignoreShape(name) {
  return (name === 'ocean' || name.startsWith('lines-'));
}  

//**********************MAP ENDS*****************************//

function findMinMax() {
  // start by setting the min/max to the first point in the list
  minX = maxX = placeList[0].x;
  minY = maxY = placeList[0].y;
  // then check each of the other points in the list
  for (let i = 1; i < placeList.length; i++) {
    var place = placeList[i];
    if (place.x > maxX) {
      maxX = place.x;
    }
    if (place.x < minX) {
      minX = place.x;
    }
    if (place.y > maxY) {
      maxY = place.y;
    }
    if (place.y < minY) {
      minY = place.y;
    }
  }
}


function draw() {
  background(bg);
  textAlign(LEFT);
  fill(57, 114, 255);
  //stroke(255, 0, 255);
  //strokeWeight(2);
  noStroke();
  textFont('Avenir', width*.0355)
    fill(255, 0, 255);
  text('RADIO', width*(0.034), height*0.05, width*0.3, height *0.2)
    fill(98, 193, 255);
  text('Silenced', width*(0.15), height*0.05, width*0.3, height *0.2)
    textFont('Avenir', (width*0.009));
  textAlign(LEFT);

  text('Public radio is a data set that isn’t a novel data source. Rather, in terms of media, it feels analog and old fashioned. Yet, thought radio has been around and consumed for centuries, the content is vastly understudied. This content, with no data base or concrete system of measurement or tracking, can feel quite mysterious and like a black box for researchers and journalists. For some, however, radio is their primary source of news, knowledge, and public discourse. \n \nIn this data visualization, my colleague, Doug Beeferman, and I have chosen 200 radio stations throughout the US that are controlled for urban-rural, political leaning, and geography. We then ran our speech to text algorithm over 2 weeks of non-syndicated phone-in talk radio data. The confidence scores, we hypothesize, are reflective of the word error rate. Each dot indicates a station, its radius indicates the confidence, and the samples used to measure that confidence are shown on the chart below the map.\n \nBecause speech to text algorithms are trained on Mainstream American English, we anticipated that the algorithm would have a lower confidence in different regions of the country with different accents. However, this pattern only subtly emerged. One guess is that even when the confidence score is high, in some regions, the speech recognizer is so far off it doesn’t recognize it is misunderstanding the speech. Furthermore, through some examples explorable in the buttons below, women and southerners are quite difficult for the algorithm to transcribe. With the proliferation of algorithms and speech recognition and speech to text technologies, it is essential now more than ever to recognize the bias within our algorithms and adjust them before we further silence those who have already been marginalized.', width*0.038, height*0.14, width*0.3, height * 0.8);
  //text('In this data visualization, my colleague, Doug Beeferman, and I have chosen 200 radio stations throughout the US that are controlled for urban-rural, political leaning, and geography. We then ran our speech to text algorithm over 2 weeks of non-syndicated phone-in talk radio data. The confidence scores, we hypothesize, are reflective of the word error rate. Each dot indicates a station, its radius indicates the confidence, and the samples used to measure that confidence are shown on the chart below the map. Because speech to text algorithms are trained on Mainstream American English, we anticipated that the algorithm would have a lower confidence in different regions of the country with different accents. However, this pattern only subtly emerged. One guess is that even when the confidence score is high, in some regions, the speech recognizer is so far off it doesn’t recognize it is misunderstanding the speech. Furthermore, through some examples explorable in the buttons below, women and southerners are quite difficult for the algorithm to transcribe. With the proliferation of algorithms and speech recognition and speech to text technologies, it is essential now more than ever to recognize the bias within our algorithms and adjust them before we further silence those who have already been marginalized.', width*0.038, height*0.29, width*0.3, height * 0.2);
  ////text('Because speech to text algorithms are trained on Mainstream American English, we anticipated that the algorithm would have a lower confidence in different regions of the country with different accents. However, this pattern only subtly emerged. One guess is that even when the confidence score is high, in some regions, the speech recognizer is so far off it doesn’t recognize it is misunderstanding the speech. Furthermore, through some examples explorable in the buttons below, women and southerners are quite difficult for the algorithm to transcribe. With the proliferation of algorithms and speech recognition and speech to text technologies, it is essential now more than ever to recognize the bias within our algorithms and adjust them before we further silence those who have already been marginalized.');
  //text("", width*0.038, height*0.62, width*0.3, height * 0.2);

  //for the buttons state, region, and station
  fill(57, 0, 255);
  rect(width*0.038, height*0.765, width*0.3, 20, height*0.03);
  rect(width*0.038, height*0.8, width*0.3, 20, height*0.03);
  rect(width*0.038, height*0.8355, width*0.3, 20, height*0.03);
  rect(width*0.038, height*0.871, width*0.3, 20, height*0.03);
  rect(width*0.038, height*0.9065, width*0.3, 20, height*0.03);
  rect(width*0.038, height*0.942, width*0.3, 20, height*0.03);
  fill(255, 0, 255);
  textAlign(CENTER);
  text("both", width*0.038, height*0.775, width*0.3, 20, height*0.03);
  text("rural", width*0.038, height*0.806, width*0.3, 20, height*0.03);
  text("semi-rural", width*0.038, height*0.84, width*0.3, 20, height*0.03);
  text("suburban", width*0.038, height*0.873, width*0.3, 20, height*0.03);
  text("urban", width*0.038, height*0.9067, width*0.3, 20, height*0.03);
  text("all", width*0.038, height*0.944, width*0.3, 20, height*0.03);
  if (both == true) {
    fill(255, 0, 255);
    stroke('white');
    rect(width*0.038, height*0.765, width*0.3, 20, height*0.03);
    fill('white');
    text("women", width*0.038, height*0.775, width*0.3, 20, height*0.03);
  }
  if (rural == true) {
    fill(255, 0, 255);
    stroke('white');
    rect(width*0.038, height*0.8, width*0.3, 20, height*0.03);
    fill('white');
    text("rural", width*0.038, height*0.806, width*0.3, 20, height*0.03);
  }  
  if (semiRural == true) {
    fill(255, 0, 255);
    stroke('white');
    rect(width*0.038, height*0.8355, width*0.3, 20, height*0.03);
    fill('white');
    text("semi-rural", width*0.038, height*0.84, width*0.3, 20, height*0.03);
  } 
  if (suburban == true) {
    fill(255, 0, 255);
    stroke('white');
    rect(width*0.038, height*0.871, width*0.3, 20, height*0.03);
    fill('white');
    text("suburban", width*0.038, height*0.873, width*0.3, 20, height*0.03);
    //print(averageList);
  }
  if (urban == true) {
    fill(255, 0, 255);
    stroke('white');
    rect(width*0.038, height*0.9065, width*0.3, 20, height*0.03);
    fill('white');
    text("urban", width*0.038, height*0.9067, width*0.3, 20, height*0.03);
    //print(averageList);
  }
  if (all == true) {
    fill(255, 0, 255);
    stroke('white');
    rect(width*0.038, height*0.942, width*0.3, 20, height*0.03);
    fill('white');
    text("all", width*0.038, height*0.944, width*0.3, 20, height*0.03);
    //print(averageList);
  }





  //*******SCALE********//
  let outputX =  0;
  //let x20;
  //let y20;
  let outputX20;

  fill(57, 0, 255);
  noStroke();
  rect(width*0.4, height*0.8, width*0.5, height*0.1);
  fill(98, 193, 255);
  stroke(98, 193, 255);
  line(width*0.4, height-70, width*0.4, height-143);
  line(width*0.5, height-70, width*0.5, height-143);
  line(width*0.6, height-70, width*0.6, height-143);
  line(width*0.7, height-70, width*0.7, height-143);
  line(width*0.8, height-70, width*0.8, height-143);
  line(width*0.9, height-70, width*0.9, height-143);
  text("50%", width*0.3, height-65, width*0.22, 20);
  text("60%", width*0.4, height-65, width*0.22, 60);
  text("70%", width*0.5, height-65, width*0.22, 60);
  text("80%", width*0.6, height-65, width*0.22, 60);
  text("90%", width*0.7, height-65, width*0.22, 60);
  text("100%", width*0.8, height-65, width*0.22, 60);

  //for transparency of points
  let oldMaxColor = .90;
  let oldMinColor = 0.86;
  let newMaxColor = 255;
  let newMinColor = 100;



  cursor(CROSS);  
  let smallWidth = width*0.383;
  let bigWidth = width*0.95;
  let smallHeight = height*0.17;
  let bigHeight = height*0.72;
  let recentClosestPlace;


  // draw the cities on the map and INTERACTIVE    
  averageList.forEach(function(place) {
    noStroke();
    if (both == true) {
      if (place.gender == 'W') {
        percent = (place.average - oldMinColor) / (oldMaxColor - oldMinColor);
        outputX = percent * (newMaxColor - newMinColor) + newMinColor;
        x = map(place.x, minX, maxX, smallWidth, bigWidth);
        y = map(place.y, maxY, minY, smallHeight, bigHeight);
        //fill(255, 0, 255, 150);
        if (place.pop == 20) {
          fill(255, 0, 255, outputX);
          ellipse(x, y, 10, 10);
        }
        if (place.pop == 50) {
          fill(255, 0, 255, outputX);
          ellipse(x, y, 15, 15);
        }
        if (place.pop == 100) {
          fill(255, 0, 255, outputX);
          ellipse(x, y, 20, 20);
        }
        if (place.pop == 200) {
          fill(255, 0, 255, outputX);          
          ellipse(x, y, 30, 30);
        }
        noStroke();
        //strokeWeight(.5);

        mouseDist = dist(mouseX, mouseY, x, y);

        //if (place.population == 20){
        //    percent20 = (place.average - oldMinColor) / (oldMaxColor - oldMinColor);
        //    outputX20 = percent20 * (newMaxColor - newMinColor) + newMinColor;
        //    let x = map(place.x, minX, maxX, smallWidth, bigWidth);
        //    let y = map(place.y, maxY, minY, smallHeight, bigHeight);
        //    fill(255, 0, 255, 150);
        //    stroke(255, 255, 255);
        //    //strokeWeight(.5);
        //    //ellipse(x, y, outputX, outputX);
        //    mouseDist = dist(mouseX, mouseY, x, y);

        //}

        //hovor overand highlight red with text
        if (mouseDist < closestDist) {
          clickX = x;
          clickY = y;
          clickDist = mouseDist;
          newOutput = outputX;
          cursor(HAND);
          closestPlace = place; 
          drawSamples(); // draws the SAMPLES beneath the thing
          recentClosePlace = closestPlace.station;
          newX = map(closestPlace.x, minX, maxX, smallWidth, bigWidth);
          newY = map(closestPlace.y, maxY, minY, smallHeight, bigHeight);
          noStroke();
          //strokeWeight(.5);
          //fill(255, 0, 0); //make it red
          //ellipse(x, y, outputX, outputX); //littlepoint on the inside
          fill('white');
          textAlign(CENTER);
          text(closestPlace.station, x, y - 20*0.8);
          fill(100);
          recentClosestPlaceX = closestPlace.x;
          recentClosestPlaceY = closestPlace.y;
          recentClosestPlaceStation = closestPlace.station;
        }
      }
    }
    if (all == true) {
      if (place.pop <= 200) {
        percent = (place.average - oldMinColor) / (oldMaxColor - oldMinColor);
        outputX = percent * (newMaxColor - newMinColor) + newMinColor;
        x = map(place.x, minX, maxX, smallWidth, bigWidth);
        y = map(place.y, maxY, minY, smallHeight, bigHeight);
        //fill(255, 0, 255, 150);
        if (place.pop == 20) {
          fill(255, 0, 255, outputX);
          ellipse(x, y, 10, 10);
        }
        if (place.pop == 50) {
          fill(255, 0, 255, outputX);
          ellipse(x, y, 15, 15);
        }
        if (place.pop == 100) {
          fill(255, 0, 255, outputX);
          ellipse(x, y, 20, 20);
        }
        if (place.pop == 200) {
          fill(255, 0, 255, outputX);          
          ellipse(x, y, 30, 30);
        }
        noStroke();
        //strokeWeight(.5);

        mouseDist = dist(mouseX, mouseY, x, y);

        //if (place.population == 20){
        //    percent20 = (place.average - oldMinColor) / (oldMaxColor - oldMinColor);
        //    outputX20 = percent20 * (newMaxColor - newMinColor) + newMinColor;
        //    let x = map(place.x, minX, maxX, smallWidth, bigWidth);
        //    let y = map(place.y, maxY, minY, smallHeight, bigHeight);
        //    fill(255, 0, 255, 150);
        //    stroke(255, 255, 255);
        //    //strokeWeight(.5);
        //    //ellipse(x, y, outputX, outputX);
        //    mouseDist = dist(mouseX, mouseY, x, y);

        //}

        //hovor overand highlight red with text
        if (mouseDist < closestDist) {
          clickX = x;
          clickY = y;
          clickDist = mouseDist;
          newOutput = outputX;
          cursor(HAND);
          closestPlace = place; 
          drawSamples(); // draws the SAMPLES beneath the thing
          recentClosePlace = closestPlace.station;
          newX = map(closestPlace.x, minX, maxX, smallWidth, bigWidth);
          newY = map(closestPlace.y, maxY, minY, smallHeight, bigHeight);
          noStroke();
          //strokeWeight(.5);
          //fill(255, 0, 0); //make it red
          //ellipse(x, y, outputX, outputX); //littlepoint on the inside
          fill('white');
          textAlign(CENTER);
          text(closestPlace.station, x, y - 20*0.8);
          fill(100);
          recentClosestPlaceX = closestPlace.x;
          recentClosestPlaceY = closestPlace.y;
          recentClosestPlaceStation = closestPlace.station;
        }
      }
    }
    if (rural == true) {
      if (place.pop == 20) {
        percent = (place.average - oldMinColor) / (oldMaxColor - oldMinColor);
        outputX = percent * (newMaxColor - newMinColor) + newMinColor;
        x = map(place.x, minX, maxX, smallWidth, bigWidth);
        y = map(place.y, maxY, minY, smallHeight, bigHeight);
        //fill(255, 0, 255, 150);
        if (place.pop == 20) {
          fill(255, 0, 255, outputX);
          ellipse(x, y, 10, 10);
        }
        if (place.pop == 50) {
          fill(255, 0, 255, outputX);
          ellipse(x, y, 15, 15);
        }
        if (place.pop == 100) {
          fill(255, 0, 255, outputX);
          ellipse(x, y, 20, 20);
        }
        if (place.pop == 200) {
          fill(255, 0, 255, outputX);          
          ellipse(x, y, 30, 30);
        }
        noStroke();
        //strokeWeight(.5);

        mouseDist = dist(mouseX, mouseY, x, y);

        //if (place.population == 20){
        //    percent20 = (place.average - oldMinColor) / (oldMaxColor - oldMinColor);
        //    outputX20 = percent20 * (newMaxColor - newMinColor) + newMinColor;
        //    let x = map(place.x, minX, maxX, smallWidth, bigWidth);
        //    let y = map(place.y, maxY, minY, smallHeight, bigHeight);
        //    fill(255, 0, 255, 150);
        //    stroke(255, 255, 255);
        //    //strokeWeight(.5);
        //    //ellipse(x, y, outputX, outputX);
        //    mouseDist = dist(mouseX, mouseY, x, y);

        //}

        //hovor overand highlight red with text
        if (mouseDist < closestDist) {
          clickX = x;
          clickY = y;
          clickDist = mouseDist;
          newOutput = outputX;
          cursor(HAND);
          closestPlace = place; 
          drawSamples(); // draws the SAMPLES beneath the thing
          recentClosePlace = closestPlace.station;
          newX = map(closestPlace.x, minX, maxX, smallWidth, bigWidth);
          newY = map(closestPlace.y, maxY, minY, smallHeight, bigHeight);
          noStroke();
          //strokeWeight(.5);
          //fill(255, 0, 0); //make it red
          //ellipse(x, y, outputX, outputX); //littlepoint on the inside
          fill('white');
          textAlign(CENTER);
          text(closestPlace.station, x, y - 20*0.8);
          //fill(100);
          recentClosestPlaceX = closestPlace.x;
          recentClosestPlaceY = closestPlace.y;
          recentClosestPlaceStation = closestPlace.station;
        }
      }
    }
    if (semiRural == true) {
      if (place.pop == 50) {
        percent = (place.average - oldMinColor) / (oldMaxColor - oldMinColor);
        outputX = percent * (newMaxColor - newMinColor) + newMinColor;
        x = map(place.x, minX, maxX, smallWidth, bigWidth);
        y = map(place.y, maxY, minY, smallHeight, bigHeight);
        //fill(255, 0, 255, 150);
        if (place.pop == 20) {
          fill(255, 0, 255, outputX);
          ellipse(x, y, 10, 10);
        }
        if (place.pop == 50) {
          fill(255, 0, 255, outputX);
          ellipse(x, y, 15, 15);
        }
        if (place.pop == 100) {
          fill(255, 0, 255, outputX);
          ellipse(x, y, 20, 20);
        }
        if (place.pop == 200) {
          fill(255, 0, 255, outputX);          
          ellipse(x, y, 30, 30);
        }
        noStroke();
        //strokeWeight(.5);

        mouseDist = dist(mouseX, mouseY, x, y);

        //if (place.population == 20){
        //    percent20 = (place.average - oldMinColor) / (oldMaxColor - oldMinColor);
        //    outputX20 = percent20 * (newMaxColor - newMinColor) + newMinColor;
        //    let x = map(place.x, minX, maxX, smallWidth, bigWidth);
        //    let y = map(place.y, maxY, minY, smallHeight, bigHeight);
        //    fill(255, 0, 255, 150);
        //    stroke(255, 255, 255);
        //    //strokeWeight(.5);
        //    //ellipse(x, y, outputX, outputX);
        //    mouseDist = dist(mouseX, mouseY, x, y);

        //}

        //hovor overand highlight red with text
        if (mouseDist < closestDist) {
          clickX = x;
          clickY = y;
          clickDist = mouseDist;
          newOutput = outputX;
          cursor(HAND);
          closestPlace = place; 
          drawSamples(); // draws the SAMPLES beneath the thing
          recentClosePlace = closestPlace.station;
          newX = map(closestPlace.x, minX, maxX, smallWidth, bigWidth);
          newY = map(closestPlace.y, maxY, minY, smallHeight, bigHeight);
          noStroke();
          //strokeWeight(.5);
          //fill(255, 0, 0); //make it red
          //ellipse(x, y, outputX, outputX); //littlepoint on the inside
          fill('white');
          textAlign(CENTER);
          text(closestPlace.station, x, y - 20*0.8);
          fill(100);
          recentClosestPlaceX = closestPlace.x;
          recentClosestPlaceY = closestPlace.y;
          recentClosestPlaceStation = closestPlace.station;
        }
      }
    }
    if (suburban == true) {
      if (place.pop == 100) {
        percent = (place.average - oldMinColor) / (oldMaxColor - oldMinColor);
        outputX = percent * (newMaxColor - newMinColor) + newMinColor;
        x = map(place.x, minX, maxX, smallWidth, bigWidth);
        y = map(place.y, maxY, minY, smallHeight, bigHeight);
        //fill(255, 0, 255, 150);
        if (place.pop == 20) {
          fill(255, 0, 255, outputX);
          ellipse(x, y, 10, 10);
        }
        if (place.pop == 50) {
          fill(255, 0, 255, outputX);
          ellipse(x, y, 15, 15);
        }
        if (place.pop == 100) {
          fill(255, 0, 255, outputX);
          ellipse(x, y, 20, 20);
        }
        if (place.pop == 200) {
          fill(255, 0, 255, outputX);          
          ellipse(x, y, 30, 30);
        }
        noStroke();
        //strokeWeight(.5);

        mouseDist = dist(mouseX, mouseY, x, y);

        //if (place.population == 20){
        //    percent20 = (place.average - oldMinColor) / (oldMaxColor - oldMinColor);
        //    outputX20 = percent20 * (newMaxColor - newMinColor) + newMinColor;
        //    let x = map(place.x, minX, maxX, smallWidth, bigWidth);
        //    let y = map(place.y, maxY, minY, smallHeight, bigHeight);
        //    fill(255, 0, 255, 150);
        //    stroke(255, 255, 255);
        //    //strokeWeight(.5);
        //    //ellipse(x, y, outputX, outputX);
        //    mouseDist = dist(mouseX, mouseY, x, y);

        //}

        //hovor overand highlight red with text
        if (mouseDist < closestDist) {
          clickX = x;
          clickY = y;
          clickDist = mouseDist;
          newOutput = outputX;
          cursor(HAND);
          closestPlace = place; 
          drawSamples(); // draws the SAMPLES beneath the thing
          recentClosePlace = closestPlace.station;
          newX = map(closestPlace.x, minX, maxX, smallWidth, bigWidth);
          newY = map(closestPlace.y, maxY, minY, smallHeight, bigHeight);
          noStroke();
          //strokeWeight(.5);
          //fill(255, 0, 0); //make it red
          //ellipse(x, y, outputX, outputX); //littlepoint on the inside
          fill('white');
          textAlign(CENTER);
          text(closestPlace.station, x, y - 20*0.8);
          fill(100);
          recentClosestPlaceX = closestPlace.x;
          recentClosestPlaceY = closestPlace.y;
          recentClosestPlaceStation = closestPlace.station;
        }
      }
    }
    if (urban == true) {
      if (place.pop == 200) {
        percent = (place.average - oldMinColor) / (oldMaxColor - oldMinColor);
        outputX = percent * (newMaxColor - newMinColor) + newMinColor;
        x = map(place.x, minX, maxX, smallWidth, bigWidth);
        y = map(place.y, maxY, minY, smallHeight, bigHeight);
        //fill(255, 0, 255, 150);
        if (place.pop == 20) {
          fill(255, 0, 255, outputX);
          ellipse(x, y, 10, 10);
        }
        if (place.pop == 50) {
          fill(255, 0, 255, outputX);
          ellipse(x, y, 15, 15);
        }
        if (place.pop == 100) {
          fill(255, 0, 255, outputX);
          ellipse(x, y, 20, 20);
        }
        if (place.pop == 200) {
          fill(255, 0, 255, outputX);          
          ellipse(x, y, 30, 30);
        }
        noStroke();
        //strokeWeight(.5);

        mouseDist = dist(mouseX, mouseY, x, y);

        //if (place.population == 20){
        //    percent20 = (place.average - oldMinColor) / (oldMaxColor - oldMinColor);
        //    outputX20 = percent20 * (newMaxColor - newMinColor) + newMinColor;
        //    let x = map(place.x, minX, maxX, smallWidth, bigWidth);
        //    let y = map(place.y, maxY, minY, smallHeight, bigHeight);
        //    fill(255, 0, 255, 150);
        //    stroke(255, 255, 255);
        //    //strokeWeight(.5);
        //    //ellipse(x, y, outputX, outputX);
        //    mouseDist = dist(mouseX, mouseY, x, y);

        //}

        //hovor overand highlight red with text
        if (mouseDist < closestDist) {
          clickX = x;
          clickY = y;
          clickDist = mouseDist;
          newOutput = outputX;
          cursor(HAND);
          closestPlace = place; 
          drawSamples(); // draws the SAMPLES beneath the thing
          recentClosePlace = closestPlace.station;
          newX = map(closestPlace.x, minX, maxX, smallWidth, bigWidth);
          newY = map(closestPlace.y, maxY, minY, smallHeight, bigHeight);
          noStroke();
          //fill(255, 0, 0); //make it red
          //ellipse(x, y, outputX, outputX); //littlepoint on the inside
          fill('white');
          textAlign(CENTER);
          text(closestPlace.station, x, y - 20*0.8);
          fill(100);
          recentClosestPlaceX = closestPlace.x;
          recentClosestPlaceY = closestPlace.y;
          recentClosestPlaceStation = closestPlace.station;
        }
      }
    }

    noStroke();
  }
  );




  //if(rural == true){
  //   ellipse(x,y,outputX20,outputX20);
  // }
  if (citySwitch == true) {

    drawSamples(); // draws the SAMPLES beneath 
    noStroke();
    //recentClosePlace = closestPlace.station;
    let x = map(recentClosestPlaceX, minX, maxX, smallWidth, bigWidth);
    let y = map(recentClosestPlaceY, maxY, minY, smallHeight, bigHeight);
    fill(255, 255, 255); //make it red
    ellipse(x, y, 5, 5); //littlepoint on the inside
    fill('white');
    textAlign(CENTER);
    //strokeWeight(.8);
    //stroke('red');
    text(recentClosestPlaceStation, x, y - 20*0.8);
    noStroke();
  }
  drawSamples();

  // scale it for the state map //
  let outputState;
  let percentState;
  let oldMaxColorState =  1;
  let oldMinColorState = 0.82;
  let newMaxColorState = 1;
  let newMinColorState = 0.1;

  for (i = 0; i < averageStateList.length; i++) {
    percentState = (averageStateList[i].average - oldMinColorState) / (oldMaxColorState - oldMinColorState);
    outputState = percentState * (newMaxColorState - newMinColorState) + newMinColorState;
    aveStateDictColor[averageStateList[i].state] = outputState;
  } 


  // scale it for the region map //

  let outputRegion;
  let percentRegion;
  let oldMaxColorRegion =  0.89;
  let oldMinColorRegion = 0.85;
  let newMaxColorRegion = 1;
  let newMinColorRegion = 0.1;

  for (i = 0; i < averageRegionList.length; i++) {
    percentRegion = (averageRegionList[i].average - oldMinColorRegion) / (oldMaxColorRegion - oldMinColorRegion);
    outputRegion = percentRegion * (newMaxColorRegion - newMinColorRegion) + newMinColorRegion;
    aveRegionDictColor[averageRegionList[i].region] = outputRegion;
  }
}



function drawSamples() {
  let oldMax = 1;
  let oldMin = 0.5;
  let newMax = width*0.9;
  let newMin = width*0.45;
  if (closestPlace != null) { 
    keys2 = Object.keys(sampleDict[closestPlace.station]); 
    //print(keys2, 'keys');
    for  (i  = 0; i< keys2.length; i++) {
      keys3 = Object.keys(sampleDict[closestPlace.station][keys2[i]]);
      percent = (keys2[i]- oldMin) / (oldMax - oldMin);
      sampleOutputX = percent * (newMax - newMin) + newMin;
      mouseDistX = abs(mouseX - sampleOutputX);
      mouseDistY = abs(mouseY - (height-130));
      stroke(255, 255, 255);
      line(sampleOutputX, height*0.8, sampleOutputX, height*0.9);
      strokeWeight(1);
      properText = sampleDict[closestPlace.station][keys2[i]][oneKey];
      if (mouseDistX < closestDistSample && mouseDistY < closestDistY) {
        finalOutput = sampleOutputX;
        newMouseLocal = mouseDistX;
        noStroke();
        fill(255*keys2[i]+50, 0, 255);
        text(properText, width*0.4, height*0.93, width*0.5, height);
        noFill();
        oneKey = Object.keys(sampleDict[closestPlace.station][keys2[i]]);
        //print(sampleDict[closestPlace.station][keys2[i]], 'onekey');
        //print(sampleDict[closestPlace.station][keys2[i]], 'onekey');
        cursor(HAND);
        stroke(255, 0, 0);
        //strokeWeight(2);
        line(finalOutput, height*0.8, finalOutput, height*0.9);
        //strokeWeight(2);
        noStroke();
      }
    }
  }
}

function keyPressed() {
  loop();
}


//fill(57, 0, 255);


//function mousePressed() {
//  if (clickDist < closestDist) {
//    citySwitch =! citySwitch;
//  }
//}


function mouseClicked() {
  if (oldAudio != null) {
    oldAudio.pause();
  }  
  mouseDistXButt = abs(mouseX - width*0.2);
  mouseDistYButtrural = abs(mouseY - (height*0.806));
  mouseDistYButtsemiRural= abs(mouseY - (height*0.86));
  mouseDistYButtsuburban = abs(mouseY - (height*0.873));
  mouseDistYButturban = abs(mouseY - (height*0.9067));
  mouseDistYButtall = abs(mouseY - (height*0.944));
  mouseDistYButtboth = abs(mouseY - (height*0.78));

  if (mouseDistXButt < width*0.2  && mouseDistYButtboth < height*0.02) {
    both =! both;
  } 
  if (mouseDistXButt < width*0.2  && mouseDistYButtrural < height*0.02) {
    rural =! rural;
    all = false;
  } 
  if (mouseDistXButt < width*0.2  && mouseDistYButtsemiRural  < height*0.02) {
    semiRural =! semiRural;
    all = false;
  } 
  if (mouseDistXButt < width*0.2  && mouseDistYButtsuburban  < height*0.02) {
    suburban =! suburban;
    all = false;
  } 
  if (mouseDistXButt < width*0.2  && mouseDistYButturban  < height*0.02) {
    urban =! urban;
    all = false;
  } 
  if (mouseDistXButt < width*0.2  && mouseDistYButtall  < height*0.02) {
    all =! all;
    rural = false;
    urban = false;
    semiRural = false;
    suburban = false;
  }
  //to play radio samples
  if (newMouseLocal < closestDistSample && mouseDistY < closestDistY) {
    url = ('https://s3.amazonaws.com/climate-audio-files/disparity_study/' + oneKey);
    audio = new Audio(url);
    audio.type = 'audio/mp3';
    audio.play();
    oldAudio = audio;
    //audio.stop();
  }
}
//function playAudio(x) {

//  //let audio = new Audio(url);  
//  print(url, 'audio here')
//  audio.type = 'audio/mp3';
//  var playPromise = audio.play();
//  if (audio.isPlaying()) {
//    // .isPlaying() returns a boolean
//      audio.stop();
//      //background(255, 0, 0);
//    } else {
//      audio.play();
//      //background(0, 255, 0);
//    }
//  //noLoop();
//}
