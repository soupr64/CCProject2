let dataCSV = "assets/CreativeCodeDataset-Sheet1.csv";
let currentMonth;
let currentTime = 0;
let backspacePressed = false;
let currentTimeIndex = 0;
let currentActivity;
let currentMood;
let currentMoodIndex = 0;
let currentDay = [];
let currentDayIndex = 0;
let dayOne = 1;
let cube;
let scene = 0;
let titleDateX = 440;
let titleDateY = 150;
let sunDateX = 200;
let sunDateY = 90;
let monDateX = 170;
let monDateY = 90;
let tuesDateX = 60;
let tuesDateY = 183;
let wedDateX = 395;
let wedDateY = 225;
let thursDateX = 475;
let thursDateY = 175;
let friDateX = 575;
let friDateY = 230;
let satDateX = 644;
let satDateY = 275;
let textR = 0;
let textG = 0;
let textB = 255;
let sunR = 0;
let sunG = 0;
let sunB = 255;
let monR = 0;
let monG = 0;
let monB = 255;
let tuesR = 0;
let tuesG = 0;
let tuesB = 255;
let wedR = 0;
let wedG = 0;
let wedB = 255;
let thursR = 0;
let thursG = 0;
let thursB = 255;
let friR = 0;
let friG = 0;
let friB = 255;
let satR = 0;
let satG = 0;
let satB = 255;
var img;
var gif;
let gifArray = [];
let hud1;
let hud2;
let font;
let timeArray = [
  "12AM",
  "1AM",
  "2AM",
  "3AM",
  "4AM",
  "5AM",
  "6AM",
  "7AM",
  "8AM",
  "9AM",
  "10AM",
  "11AM",
  "12PM",
  "1PM",
  "2PM",
  "3PM",
  "4PM",
  "5PM",
  "6PM",
  "7PM",
  "8PM",
  "9PM",
  "10PM",
  "11PM",
];

let moodArray = [
  "Frustrated", //0
  "Calm", //1
  "Content", //2
  "Happy", //3
  "Chill", //4
  "Focused", //5
  "Eager", //6
  "Bored", //7
  "Relieved", //8
  "Tired", //9
  "Drowsy", //10
  "Carsick", //11
  "Angry", //12
  "Annoyed", //13
  "LOCKED IN", //14
  "Relaxed", //15
  "Excited", //16
  "???", //17
];

let activityArray = [
  "Played Sonic Generations", //0
  "Scripting", //1
  "Sleeping", //2
  "Breakfast w/ Family", //3
  "Watched YouTube", //4
  "Homework (Creative Code)", //5
  "Relaxing", //6
  "Packing Up", //7
  "Played Persona 3", //8
  "Listening to Music", //9
  "Unpacking", //10
  "Waking Up/Breakfast", //11
  "Video Editing", //12
  "In Class (Creative Code)", //13
  "LLC Event (Cyber Monday)", //14
  "Dinner", //15
  "In Class (W. History Art)", //16
  "Nap/Chill Out", //17
  "Model Editing", //18
  "In Class (Securitas LLC)", //19
  "In Class (Photography)", //20
  "Homework (Securitas LLC)", //21
  "Chilling Out", //22
  "SOAR Meeting", //23
  "Chilled @ Home", //24
  "Pumpkin Carving", //25
  "SM64 Modding", //26
  "Homework (W. History Art)", //27
  "Eating Lunch", //28
  "In Class (Honors College)", //29
  "FNAF Night @ Cochrane", //30
  "Call w/ friends", //31
  "Woke up/Chill out", //32
  "Breakfast/Played Persona 3", //33
  "Mario Kart @ Club", //34
  "Lethal Company w/ Friends", //35
  "Breakfast/Homework (CC)", //36
  "Dinner/Played Sonic Generations", //37
  "Rendering Video", //38
];

let contextArray = [
  "Yes, I got mad at the funny hedgehog game. Perfectly speedrunning these levels gets REALLY intense.", //0
  "Started scripting for a future video I plan to make down the line. Excited with how it’s coming out so far.", //1
  "Almost finished with that script, feeling accomplished - and drowsy.", //2
  "First time in a while I’ve felt full off breakfast. Grandparents don't play around when it comes to that stuff.", //3
  "Layed back down and watched a Persona 3 challenge run before I decided I should do homework. Because I had a lot. This is called foreshadowing.", //4
  "Focused on homework regarding Creative Code, specifically the 10 drawings.", //5
  "One last bit of relaxing before I had to pack up my things.", //6
  "Finally getting to pack up, I was particularly excited to finally get back to the dorm. I didn’t see myself being able to finish all my work in the car, so I wanted to get back ASAP.", //7
  "Watching that challenge run inspired me to finally pick up the game again.", //8
  "More Persona 3 gaming time, times like this make me glad I own a Steam Deck.", //9
  "Nevermind.", //10
  "Zzzzzzzz", //11
  "4 hours straight in a car gets pretty boring. Shoutouts to the Sonic Adventure 2 OST. And also nightcore.", //12
  "Finally made it back!! Unpacked, got dinner, life is good. (This is also foreshadowing)", //13
  "Oh, right. Still have homework. Alright, let's work on that. Shouldn’t take too long.", //14
  "Making good headway, I really like how it's coming out! It's a little painting program inspired by Mario Paint on the SNES.", //15
  "I hate CSS, actually. Why do the buttons not move when I want them to…", //16
  "How is time moving so fast?? I barely did anything for the assingment. I think I'm unconciously procrastinating.", //17
  "Took a small break to recharge my brain. I'm finally in the homestretch. Think I'm starting to regret not taking my chances with doing this in the car.", //18
  "Still going, still tired.", //19
  "Finally I am allowed to go to sleep. Really glad that CC is my only class for today, very late into the day as well.", //20
  "I am still very tired due to the consequences of my actions, but I will not allow myself to go back to sleep. I need to LOCK IN.", //21
  "Didn't have my PC with me over the weekend so I needed to lock in with the free time that I have available. I'm making good headway.", //22
  "Getting ready for actual class. Going over my current grades and the calendar for the days to come, pretty calm.", //23
  "Working on the Group Exercise, making really good progress, we might even finish before the end of class. Hoping for it.", //24
  "Got my application response back from Studio72. How DARE they not accept my application. Literally put my heart and soul into that and for what?! I now have a vendetta against the LLC.", //25
  "Had to go to my little weekly LLC meet up. Really wasn’t feeling it, I was so drained mentally. Got to watch part of The Nightmare Before Christmas so it wasn’t all bad.", //26
  "Left early to go grab dinner before the dining hall closes. Having homemade dinner then dining hall food the next day is like night and day… I miss steak…", //27
  "Making more decent headway. Though by this point I’m slowly losing focus due to being so tired. Also internet drama. Yeah. That was fun to deal with.", //28
  "Decided to take a shower to recharge my brain. Also got past a writing roadblock so that’s a win!!", //29
  "Finally feel like I’m out of my funk. Trying to make sure I’m at a decent part to end the night on.", //30
  "Hit the 10 minute mark! Was editing in Vegas for about 4 hours, then got distracted. Overall, happy with the work I was able to put in. Now I get to sleep.", //31
  //tuesday
  "Not looking forward to the day I have today. Out of all the classes I have today (3), I only really enjoy 1. Intro to Photography my beloved.", //32
  "Definitely my least favorite class this semester. Get me out of here.", //33
  "Western Art let out early so I’m glad for that. If only that feeling of glad-ness(?) wasn’t being overshadowed by my body breaking down. I need my bed and I need it NOW.", //34
  "Photography ALSO let out early! Bed, here I come!!", //35
  "I live for times like this. Truly an amazing feeling. Still have one more class, but that’s not for a few more hours.", //36
  "After hanging out for a bit I decided to actually be productive. Thought more about my script in Photography and with a couple more tweaking I was able to come up with something I’m happy with.", //37
  "Decided that the model of myself needed some fine tuning before I used it for this project. Spent time playing around with other ideas for clothing, only to scrap it all.", //38
  "Totally felt weary coming to class. I bombed the midterm and knew I was gonna get chewed out.", //39
  "Pizza Time.", //40
  "Ok the only reason it took me so long to complete this was because I was totally procrastinating. YouTube while I’m supposed to be doing my homework my beloved.", //41
  "Finally got everything done, decided to stay in bed for a while longer before I wanted to shower and get ready for bed and everything.", //42
  //wednesday
  "Back on the model editing grind. Finishing up making eye textures for MAXIMUM EXPRESSION!!", //43
  "Spent this time making concept art on what I actually want the canvas to look like. Just because I can vaguely visualize what I want in my head doesn’t mean other people can.", //44
  "Should be an easy day. It’s just really hard to get up so early when you went to bed so late. I’ve gotta stop doing that.", //45
  "Monthly scheduled SOAR Meeting because it’s mandatory for one of my scholarships. Supposed to be for 30 minutes but like, I’m not a troubled guy, so it only lasted about 10-15.", //46
  "Time to use the time I got left to be productive!!! Woohoo!!", //47
  "Doing fine. Trying to figure out the calendar system in my code. Struggling a bit but I think it’s coming out fine.", //48
  "Went home since I wanted to carve pumpkins with the family. I also wanted a Decent Meal.", //49
  "Chicken noodle soup was not what I expected, far from my favorite dishes, but hey, it hit different since I haven’t had it in months. Better than the food on campus at least.", //50
  "Forgot how hard it is to actually carve one of these things. The design I wanted definitely got lost in translation as well. But I had fun!", //51
  "Hit another roadblock, need a specific program for a specific scene. That’s fine, I just need to rebuild from the repository. (Foreshadowing)", //52
  "I had to absolutely CARRY my group in breakout rooms YET AGAIN because I always get stuck with the people who literally don’t care about the class. My back hurts from all this carrying.", //53
  "Almost done. A concept will definitely help people see my vision. Also oh my god what do you mean it’s 2 in the morning.", //54
  "Glad I was able to do it again this year. Plus I also got to take home food so that’s definitely a plus.", //55
  "Got a couple errors, weird. Lemme just update my dependencies just in case.", //56
  //thursday
  "Oh my GOD everything’s broken. Tried reinstalling mingw but that didn’t work. My computer even started slowing down as well. This was NOT a good day for the poor thing. I decided to just call it for the night.", //57
  "No clue how I’m STILL tired, I think this is the first day I’ve gotten 8 hours of sleep.", //58
  "This class still blows, I mostly just focused on my code.", //59
  "Didn’t have to go to Photography since I opted out of shooting/processing film (digital all the way, baby!!!)", //60
  "Took a nap, watched YouTube. Felt the joy of not having to do work.", //61
  "Oh, right, I still have to do this. This is the worst type of assignment. Mini Essays suck.", //62
  "Got to eat the food I brought from home, definitely beats any of the dining hall options at this time. Also felt pretty good about my essays. We’ll see how they turn out.", //63
  "Oh, no. I’m not excited for the class. I’m excited for what’s AFTER class. This class was “meh” like always. I also focused on my code here.", //64
  "I’VE BEEN WAITING FOR THIS!!! We played FNAF Help Wanted, it was really fun! I also went in my Joker Persona 5 cosplay that I bought a month in advance for halloween specifically.", //65
  "I've always just watched YouTubers play this game, it's very different when you're actually playing it. The animatronics are SO TALL DUDE.", //66
  "Dropped in call cause I had nothing else to do. We watched terrible YouTube videos together, fun time.", //67
  "Overall, fun way to end Halloween. This is the first time in years that I've actually dressed up for it.", //68
  "FINALLY everything is working now. Production on my video may continue.", //69
  "Decided to render another sneak peek of my video. Don’t feel like resuming current progress right now. Probably gonna call it for the night afterwards as well.", //70
  "Yeah I didn’t even get out of bed. No need to right now.", //71
  "One of my friends has been speedrunning the modern Persona games despite them taking a notoriously long time to complete. I must finish Reload before him.", //72
  "Everything’s in place to continue editing. About time.", //73
  "Hard to stay focused, I don't know what it could be. Maybe I'm forcing myself to work?", //74
  "Decided to pop in for a bit. Not to brag but I’m still just as good as always.", //75
  "Modded Lethal Company is insane, I need to play it more.", //76
  "We started gambling to make quota, this also included gambling each others dead bodies in order to try and make a profit.", //77
  "I’m in the late game now and estimate that I have a week tops to beat the game.", //78
  "The program I decided to make this one shot in is horrible. I’m gonna be so honest I literally CANNOT save my progress because it CRASHES every time I load a save. Gotta do the shot all in one go.", //79
  "I'm really not having fun. :(", //80
  "I had to remake the same scene 3 TIMES. It was so bad. I don’t wish this upon my worst enemy. It sucked the life out of me I swear.", //81
  "Literally an hour was spent remaking what I had the first go around.", //82
  "And this hour was spent remaking the remake.", //83
  "Apparently your scene won't render if you don't specifiy the .mp4 filetype! Wow! Sure wish the dev commmunicated that!! Would've saved me 3 hours of my life that I'll never get back!!", //84
  "Found a good flow for this assignemnt. Things are starting to actually work! Crazy!", //85
  "I’m making the GUI more stylized. Just need to get the Mood and Activity text to appear depending on the day and hour.", //86
  "Just relaxed a bit, got very sidetracked when I was supposed to be working on that video.", //87
  "Ok, now we’re talking. Was able to get a couple scenes done.", //88
  "That fight scene is slowly rearing its ugly head around the corner. Hope it won’t be too bad.", //89
  "I just need to lock in.", //90
  "I was also supposed to be editing during this time. Oops.", //91
  "HOW. AM. I. STILL. GETTING. DISTRACTED. AHHHHHHHHHHHH!!!", //92
  "Still having trouble focusing. Dunno what to do really since I NEED to make progress on this dang machinima. Maybe I just need to work on something else for a while.", //92
  "Maybe I just need to work on something else for a while.", //93
  "Ok, I just needed a change of pace. Added the moods per hour to most of the days. ", //94
  "This stuff is really tedious and there’s probably a better way of going about it, but I’m doing it the way I know how.", //95
  "That’s more like it! Let’s get this thing (hopefully) done this year. Oh, wow, this is the last entry. Huh.", //96
];
function preload() {
  // Load CSV file and create a table
  data = loadTable(dataCSV, "csv", "header");
  currentDay[0] = "27";
  currentDay[1] = "28";
  currentDay[2] = "29";
  currentDay[3] = "30";
  currentDay[4] = "31";
  currentDay[5] = "01";
  currentDay[6] = "02";
  moonIcon = loadImage("assets/ccmoon.png");
  dayIcon = loadImage("assets/ccsun.png");

  currentTimeIndex = 12;
  //deturmines what time it is on startup, 12PM by default
  //0 = 12AM, 12 = 12PM
}

function setup() {
  let canvas = createCanvas(600, 400);
  canvas.parent("sketch-holder");
  rectMode(CENTER);
  hud1 = dayIcon;

  var button = createButton("+1 Day");
  button.mousePressed(advanceDay);
  button.parent("button-holder");

  var button2 = createButton("-1 Day");
  button2.mousePressed(rewindDay);
  button2.parent("button-holder");

  var button3 = createButton("+1 Hour");
  button3.mousePressed(advanceHour);
  button3.parent("button-holder");

  var button4 = createButton("-1 Hour");
  button4.mousePressed(rewindHour);
  button4.parent("button-holder");

  gifArray[0] = loadImage("assets/homeworkcc.gif"); //cc homework
  gifArray[1] = loadImage("assets/sleepneutral.gif"); //sleeping neutral
  gifArray[2] = loadImage("assets/sleephappy.gif"); //sleeping happy
  gifArray[3] = loadImage("assets/sleepangry.gif"); //sleeping angry
  gifArray[4] = loadImage("assets/wakingupbreakitdown.gif"); //waking up - shadow the hedgehog (2005) ost
  gifArray[5] = loadImage("assets/CC.gif"); //In CC
  gifArray[6] = loadImage("assets/Honors.gif"); //In UH
  gifArray[7] = loadImage("assets/WArtHist.gif"); //In Western Art
  gifArray[8] = loadImage("assets/SCT.gif"); //In Securitas
  gifArray[9] = loadImage("assets/CM.gif"); //At Cyber Monday
  gifArray[10] = loadImage("assets/photo.gif"); //in photography
  gifArray[11] = loadImage("assets/MKC.gif"); //At mario kart club :D
  gifArray[12] = loadImage("assets/carondeck.gif"); //Car - using steam deck
  gifArray[13] = loadImage("assets/carsick.gif"); //Car - carsick :(
  gifArray[14] = loadImage("assets/carwindow.gif"); //Car - looking out window
  gifArray[15] = loadImage("assets/gpsleeping.gif"); //grandparents - sleeping
  gifArray[16] = loadImage("assets/gpsteamdeck.gif"); //grandparents - steamdeck
  gifArray[17] = loadImage("assets/gpscripting.gif"); //grandparents - scripting
  gifArray[18] = loadImage("assets/gpyoutube.gif"); //of course im gonna plug my own content here LMAO
  gifArray[19] = loadImage("assets/gphomework.gif"); //grandparents - doing HW
  gifArray[20] = loadImage("assets/gprelaxing.gif"); //bro thinks hes the honored one
  gifArray[21] = loadImage("assets/gppacking.gif"); //grandparents - packing
  gifArray[22] = loadImage("assets/gpbreakfast.gif"); //grandparents - breakfast
  gifArray[23] = loadImage("assets/dormunpacking.gif"); //dorm - unpack (kinda)
  gifArray[24] = loadImage("assets/editing1.gif"); //day, editing var. 1
  gifArray[25] = loadImage("assets/editing2.gif"); //day, editing var. 2
  gifArray[26] = loadImage("assets/editing3.gif"); //day, editing var. 3
  gifArray[27] = loadImage("assets/nightediting1.gif"); //night, editing var 1
  gifArray[28] = loadImage("assets/nightediting2.gif"); //night, editing var
  gifArray[29] = loadImage("assets/nightediting3.gif"); //night, editing var 1
  gifArray[30] = loadImage("assets/relaxing.gif"); //chilling out
  gifArray[31] = loadImage("assets/modelediting.gif" ); //model editing
  gifArray[32] = loadImage("assets/relaxingnight.gif"); //chilling out AT NIGHT
  gifArray[33] = loadImage("assets/SCTHW.gif"); //securitas homework
  gifArray[34] = loadImage("assets/modeleditingnight.gif"); //model editing AT NIGHT
  gifArray[35] = loadImage("assets/sm64modding.gif"); //modding the best game ever made
  gifArray[36] = loadImage("assets/meeting.gif"); //seth if you see this no hard feelings :)
  gifArray[37] = loadImage("assets/chillathome.gif"); //no regrets
  gifArray[38] = loadImage("assets/dinnerathome.gif"); //dinner @ home
  gifArray[39] = loadImage("assets/carvingpumpkins.gif"); //no, mine didnt look like that irl
  gifArray[40] = loadImage("assets/iwonderwhatsfordinner.gif"); //epic ytp reference
  gifArray[41] = loadImage("assets/rendering.gif"); //rendering video
  gifArray[42] = loadImage("assets/youtubedorm.gif"); //yeah im still plugging my silly videos
  gifArray[43] = loadImage("assets/shadowgensdorm.gif"); //shadow gens but at the dorm room
  gifArray[44] = loadImage("assets/whydoyouwannastay.gif"); //five night feddy :D
  gifArray[45] = loadImage("assets/reloaddorm.gif"); //reload but in dorm
  gifArray[46] = loadImage("assets/lethalcompany.gif"); //lethal company
  gifArray[47] = loadImage("cchomeworkday.gif"); //cc homework in the day
  gifArray[48] = loadImage("assets/WHISTartHW.gif"); //western history art homework in the day
  //god this is gonna lag so bad :sob:

}
function draw() {
  background(0, 100, 250);
  let date = currentDay[currentDayIndex];
  let time = timeArray[currentTimeIndex];
  sceneSwitch();
}

//activity visualizer
function mainCanvas() {
  push();
  fill(0, 0, 100);
  rect(200, 230, 375, 250);
  textSize(30);
  pop();
}

//i actually dont know if this is even useful anymore since im
//not using csv but i know if i remove this everything breaks
//so it stays
function dataSet() {
  date = data.get(dayOne, "Date");
  time = data.get(1, "Time");
  cube = data.get(1, "Time");
  activity = data.get(1, "Activity");
  mood = data.get(1, "Mood");
  context = data.get(1, "Context");
}

function defineDate() {
  textAlign(CENTER);
  textSize(20);
  let date = currentDay[currentDayIndex];

  switch (date) {
    case "27":
    case "28":
    case "29":
    case "30":
    case "31":
      currentMonth = "10/";
      break;
    case "01":
    case "02":
      currentMonth = "11/";
      break;
  }
}

//whats the time?
function defineTime() {
  let time = timeArray[currentTimeIndex];
  textAlign(CENTER);
  textSize(20);
  //hour text
  text(timeArray[currentTimeIndex], 475, 150, width / 2, height / 2);
  //day/night text
  text(currentTime, 530, 150, width / 2, height / 2);
  switch (time) {
    case "12AM":
    case "1AM":
    case "2AM":
    case "3AM":
    case "4AM":
    case "5AM":
    case "6AM":
    case "7AM":
    case "6PM":
    case "7PM":
    case "8PM":
    case "9PM":
    case "10PM":
    case "11PM":
      currentTime = "Night";
      break;
    default:
      currentTime = "Day";
      break;
  }
}

//advance day button
function advanceDay() {
  currentDayIndex++;
  if (currentDayIndex > currentDay.length - 1) {
    currentDayIndex = 0;
  }
}

//rewind day button
function rewindDay() {
  currentDayIndex--;
  if (currentDayIndex < 0) {
    currentDayIndex = currentDay.length - 1;
  }
}

//+1 hour button
function advanceHour() {
  currentTimeIndex++;
  if (currentTimeIndex > timeArray.length - 1) {
    currentTimeIndex = 0;
  }
}

//-1 hour button
function rewindHour() {
  currentTimeIndex--;
  if (currentTimeIndex < 0) {
    currentTimeIndex = timeArray.length - 1;
  }
}
//says testing but it works so im not changing it
function contextTesting() {
  let date = currentDay[currentDayIndex];
  let time = timeArray[currentTimeIndex];
  push();
  fill(255);
  textSize(23);
  strokeWeight(8);
  strokeJoin(ROUND);
  stroke(0, 0, 100);
  text("Context", 490, 190, width / 2, height / 2);
  pop();
  //SUNDAY
  if (date === "27" && time === "12AM") {
    text(contextArray[0], 490, 220, 200, 200);
  }
  if (date === "27" && time === "1AM") {
    text(contextArray[1], 490, 220, 200, 200);
  }
  if (date === "27" && time === "2AM") {
    text(contextArray[2], 490, 220, 200, 200);
  }
  if (date === "27" && time === "3AM") {
    text(contextArray[11], 490, 220, 200, 200);
  }
  if (date === "27" && time === "4AM") {
    text(contextArray[11], 490, 220, 200, 200);
  }
  if (date === "27" && time === "5AM") {
    text(contextArray[11], 490, 220, 200, 200);
  }
  if (date === "27" && time === "6AM") {
    text(contextArray[11], 490, 220, 200, 200);
  }
  if (date === "27" && time === "7AM") {
    text(contextArray[11], 490, 220, 200, 200);
  }
  if (date === "27" && time === "8AM") {
    text(contextArray[11], 490, 220, 200, 200);
  }
  if (date === "27" && time === "9AM") {
    text(contextArray[11], 490, 220, 200, 200);
  }
  if (date === "27" && time === "10AM") {
    text(contextArray[11], 490, 220, 200, 200);
  }
  if (date === "27" && time === "11AM") {
    text(contextArray[3], 490, 220, 200, 200);
  }
  if (date === "27" && time === "12PM") {
    text(contextArray[4], 490, 220, 200, 200);
  }
  if (date === "27" && time === "1PM") {
    text(contextArray[5], 490, 220, 200, 200);
  }
  if (date === "27" && time === "2PM") {
    text(contextArray[6], 490, 220, 200, 200);
  }
  if (date === "27" && time === "3PM") {
    text(contextArray[7], 490, 270, 200, 300);
  }
  if (date === "27" && time === "4PM") {
    text(contextArray[8], 490, 220, 200, 200);
  }
  if (date === "27" && time === "5PM") {
    text(contextArray[9], 490, 220, 200, 200);
  }
  if (date === "27" && time === "6PM") {
    text(contextArray[10], 490, 220, 200, 200);
  }
  if (date === "27" && time === "7PM") {
    text(contextArray[12], 490, 220, 200, 200);
  }
  if (date === "27" && time === "8PM") {
    text(contextArray[13], 490, 220, 200, 200);
  }
  if (date === "27" && time === "9PM") {
    text(contextArray[14], 490, 220, 200, 200);
  }
  if (date === "27" && time === "10PM") {
    text(contextArray[15], 490, 220, 200, 200);
  }
  if (date === "27" && time === "11PM") {
    text(contextArray[16], 490, 220, 200, 200);
  }
  //MONDAY
  if (date === "28" && time === "12AM") {
    text(contextArray[17], 490, 220, 200, 200);
  }
  if (date === "28" && time === "1AM") {
    text(contextArray[18], 490, 220, 200, 200);
  }
  if (date === "28" && time === "2AM") {
    text(contextArray[19], 490, 220, 200, 200);
  }
  if (date === "28" && time === "3AM") {
    text(contextArray[20], 490, 220, 200, 200);
  }
  if (date === "28" && time === "4AM") {
    text(contextArray[11], 490, 220, 200, 200);
  }
  if (date === "28" && time === "5AM") {
    text(contextArray[11], 490, 220, 200, 200);
  }
  if (date === "28" && time === "6AM") {
    text(contextArray[11], 490, 220, 200, 200);
  }
  if (date === "28" && time === "7AM") {
    text(contextArray[11], 490, 220, 200, 200);
  }
  if (date === "28" && time === "8AM") {
    text(contextArray[11], 490, 220, 200, 200);
  }
  if (date === "28" && time === "9AM") {
    text(contextArray[11], 490, 220, 200, 200);
  }
  if (date === "28" && time === "10AM") {
    text(contextArray[11], 490, 220, 200, 200);
  }
  if (date === "28" && time === "11AM") {
    text(contextArray[21], 490, 220, 200, 200);
  }
  if (date === "28" && time === "12PM") {
    text(contextArray[22], 490, 220, 200, 200);
  }
  if (date === "28" && time === "1PM") {
    text(contextArray[22], 490, 220, 200, 200);
  }
  if (date === "28" && time === "2PM") {
    text(contextArray[22], 490, 220, 200, 200);
  }
  if (date === "28" && time === "3PM") {
    text(contextArray[23], 490, 280, 200, 300);
  }
  if (date === "28" && time === "4PM") {
    text(contextArray[24], 490, 220, 200, 200);
  }
  if (date === "28" && time === "5PM") {
    text(contextArray[25], 490, 280, 200, 300);
  }
  if (date === "28" && time === "6PM") {
    text(contextArray[26], 490, 270, 200, 300);
  }
  if (date === "28" && time === "7PM") {
    text(contextArray[27], 490, 220, 200, 200);
  }
  if (date === "28" && time === "8PM") {
    text(contextArray[28], 490, 220, 200, 200);
  }
  if (date === "28" && time === "9PM") {
    text(contextArray[28], 490, 220, 200, 200);
  }
  if (date === "28" && time === "10PM") {
    text(contextArray[28], 490, 220, 200, 200);
  }
  if (date === "28" && time === "11PM") {
    text(contextArray[29], 490, 220, 200, 200);
  }
  //TUESDAY
  if (date === "29" && time === "12AM") {
    text(contextArray[30], 490, 220, 200, 200);
  }
  if (date === "29" && time === "1AM") {
    text(contextArray[31], 490, 220, 200, 200);
  }
  if (date === "29" && time === "2AM") {
    text(contextArray[11], 490, 220, 200, 200);
  }
  if (date === "29" && time === "3AM") {
    text(contextArray[11], 490, 220, 200, 200);
  }
  if (date === "29" && time === "4AM") {
    text(contextArray[11], 490, 220, 200, 200);
  }
  if (date === "29" && time === "5AM") {
    text(contextArray[11], 490, 220, 200, 200);
  }
  if (date === "29" && time === "6AM") {
    text(contextArray[11], 490, 220, 200, 200);
  }
  if (date === "29" && time === "7AM") {
    text(contextArray[11], 490, 220, 200, 200);
  }
  if (date === "29" && time === "8AM") {
    text(contextArray[11], 490, 220, 200, 200);
  }
  if (date === "29" && time === "9AM") {
    text(contextArray[11], 490, 220, 200, 200);
  }
  if (date === "29" && time === "10AM") {
    text(contextArray[32], 490, 220, 200, 200);
  }
  if (date === "29" && time === "11AM") {
    text(contextArray[33], 490, 220, 200, 200);
  }
  if (date === "29" && time === "12PM") {
    text(contextArray[34], 490, 280, 200, 300);
  }
  if (date === "29" && time === "1PM") {
    text(contextArray[35], 490, 220, 200, 200);
  }
  if (date === "29" && time === "2PM") {
    text(contextArray[36], 490, 220, 200, 200);
  }
  if (date === "29" && time === "3PM") {
    text(contextArray[37], 490, 270, 200, 300);
  }
  if (date === "29" && time === "4PM") {
    text(contextArray[37], 490, 270, 200, 300);
  }
  if (date === "29" && time === "5PM") {
    text(contextArray[38], 490, 270, 200, 300);
  }
  if (date === "29" && time === "6PM") {
    text(contextArray[39], 490, 270, 200, 300);
  }
  if (date === "29" && time === "7PM") {
    text(contextArray[53], 490, 270, 200, 300);
  }
  if (date === "29" && time === "8PM") {
    text(contextArray[40], 490, 220, 200, 200);
  }
  if (date === "29" && time === "9PM") {
    text(contextArray[41], 490, 270, 200, 300);
  }
  if (date === "29" && time === "10PM") {
    text(contextArray[41], 490, 270, 200, 300);
  }
  if (date === "29" && time === "11PM") {
    text(contextArray[42], 490, 220, 200, 200);
  }
  //WEDNESDAY
  if (date === "30" && time === "12AM") {
    text(contextArray[43], 490, 220, 200, 200);
  }
  if (date === "30" && time === "1AM") {
    text(contextArray[44], 490, 270, 200, 300);
  }
  if (date === "30" && time === "2AM") {
    text(contextArray[54], 490, 220, 200, 200);
  }
  if (date === "30" && time === "3AM") {
    text(contextArray[11], 490, 220, 200, 200);
  }
  if (date === "30" && time === "4AM") {
    text(contextArray[11], 490, 220, 200, 200);
  }
  if (date === "30" && time === "5AM") {
    text(contextArray[11], 490, 220, 200, 200);
  }
  if (date === "30" && time === "6AM") {
    text(contextArray[11], 490, 220, 200, 200);
  }
  if (date === "30" && time === "7AM") {
    text(contextArray[11], 490, 220, 200, 200);
  }
  if (date === "30" && time === "8AM") {
    text(contextArray[11], 490, 220, 200, 200);
  }
  if (date === "30" && time === "9AM") {
    text(contextArray[11], 490, 220, 200, 200);
  }
  if (date === "30" && time === "10AM") {
    text(contextArray[45], 490, 220, 200, 200);
  }
  if (date === "30" && time === "11AM") {
    text(contextArray[46], 490, 270, 200, 300);
  }
  if (date === "30" && time === "12PM") {
    text(contextArray[47], 490, 220, 200, 200);
  }
  if (date === "30" && time === "1PM") {
    text(contextArray[47], 490, 220, 200, 200);
  }
  if (date === "30" && time === "2PM") {
    text(contextArray[47], 490, 220, 200, 200);
  }
  if (date === "30" && time === "3PM") {
    text(contextArray[48], 490, 220, 200, 200);
  }
  if (date === "30" && time === "4PM") {
    text(contextArray[48], 490, 220, 200, 200);
  }
  if (date === "30" && time === "5PM") {
    text(contextArray[48], 490, 220, 200, 200);
  }
  if (date === "30" && time === "6PM") {
    text(contextArray[49], 490, 220, 200, 200);
  }
  if (date === "30" && time === "7PM") {
    text(contextArray[50], 490, 270, 200, 300);
  }
  if (date === "30" && time === "8PM") {
    text(contextArray[51], 490, 220, 200, 200);
  }
  if (date === "30" && time === "9PM") {
    text(contextArray[55], 490, 220, 200, 200);
  }
  if (date === "30" && time === "10PM") {
    text(contextArray[52], 490, 220, 200, 200);
  }
  if (date === "30" && time === "11PM") {
    text(contextArray[56], 490, 220, 200, 200);
  }

  //THURSDAY
  if (date === "31" && time === "12AM") {
    text(contextArray[57], 490, 270, 200, 300);
  }
  if (date === "31" && time === "1AM") {
    text(contextArray[11], 490, 220, 200, 200);
  }
  if (date === "31" && time === "2AM") {
    text(contextArray[11], 490, 220, 200, 200);
  }
  if (date === "31" && time === "3AM") {
    text(contextArray[11], 490, 220, 200, 200);
  }
  if (date === "31" && time === "4AM") {
    text(contextArray[11], 490, 220, 200, 200);
  }
  if (date === "31" && time === "5AM") {
    text(contextArray[11], 490, 220, 200, 200);
  }
  if (date === "31" && time === "6AM") {
    text(contextArray[11], 490, 220, 200, 200);
  }
  if (date === "31" && time === "7AM") {
    text(contextArray[11], 490, 220, 200, 200);
  }
  if (date === "31" && time === "8AM") {
    text(contextArray[11], 490, 220, 200, 200);
  }
  if (date === "31" && time === "9AM") {
    text(contextArray[11], 490, 220, 200, 200);
  }
  if (date === "31" && time === "10AM") {
    text(contextArray[58], 490, 220, 200, 200);
  }
  if (date === "31" && time === "11AM") {
    text(contextArray[59], 490, 220, 200, 200);
  }
  if (date === "31" && time === "12PM") {
    text(contextArray[60], 490, 220, 200, 200);
  }
  if (date === "31" && time === "1PM") {
    text(contextArray[61], 490, 220, 200, 200);
  }
  if (date === "31" && time === "2PM") {
    text(contextArray[62], 490, 220, 200, 200);
  }
  if (date === "31" && time === "3PM") {
    text(contextArray[62], 490, 220, 200, 200);
  }
  if (date === "31" && time === "4PM") {
    text(contextArray[63], 490, 220, 200, 200);
  }
  if (date === "31" && time === "5PM") {
    text(contextArray[64], 490, 220, 200, 200);
  }
  if (date === "31" && time === "6PM") {
    text(contextArray[65], 490, 270, 200, 300);
  }
  if (date === "31" && time === "7PM") {
    text(contextArray[66], 490, 220, 200, 200);
  }
  if (date === "31" && time === "8PM") {
    text(contextArray[66], 490, 220, 200, 200);
  }
  if (date === "31" && time === "9PM") {
    text(contextArray[67], 490, 220, 200, 200);
  }
  if (date === "31" && time === "10PM") {
    text(contextArray[67], 490, 220, 200, 200);
  }
  if (date === "31" && time === "11PM") {
    text(contextArray[68], 490, 220, 200, 200);
  }

  //FRIDAY
  if (date === "01" && time === "12AM") {
    text(contextArray[69], 490, 220, 200, 200);
  }
  if (date === "01" && time === "1AM") {
    text(contextArray[70], 490, 220, 200, 200);
  }
  if (date === "01" && time === "2AM") {
    text(contextArray[11], 490, 220, 200, 200);
  }
  if (date === "01" && time === "3AM") {
    text(contextArray[11], 490, 220, 200, 200);
  }
  if (date === "01" && time === "4AM") {
    text(contextArray[11], 490, 220, 200, 200);
  }
  if (date === "01" && time === "5AM") {
    text(contextArray[11], 490, 220, 200, 200);
  }
  if (date === "01" && time === "6AM") {
    text(contextArray[11], 490, 220, 200, 200);
  }
  if (date === "01" && time === "7AM") {
    text(contextArray[11], 490, 220, 200, 200);
  }
  if (date === "01" && time === "8AM") {
    text(contextArray[11], 490, 220, 200, 200);
  }
  if (date === "01" && time === "9AM") {
    text(contextArray[11], 490, 220, 200, 200);
  }
  if (date === "01" && time === "10AM") {
    text(contextArray[71], 490, 220, 200, 200);
  }
  if (date === "01" && time === "11AM") {
    text(contextArray[71], 490, 220, 200, 200);
  }
  if (date === "01" && time === "12PM") {
    text(contextArray[72], 490, 265, 200, 300);
  }
  if (date === "01" && time === "1PM") {
    text(contextArray[78], 490, 220, 200, 200);
  }
  if (date === "01" && time === "2PM") {
    text(contextArray[78], 490, 220, 200, 200);
  }
  if (date === "01" && time === "3PM") {
    text(contextArray[73], 490, 220, 200, 200);
  }
  if (date === "01" && time === "4PM") {
    text(contextArray[73], 490, 220, 200, 200);
  }
  if (date === "01" && time === "5PM") {
    text(contextArray[75], 490, 220, 200, 200);
  }
  if (date === "01" && time === "6PM") {
    text(contextArray[75], 490, 220, 200, 200);
  }
  if (date === "01" && time === "7PM") {
    text(contextArray[76], 490, 220, 200, 200);
  }
  if (date === "01" && time === "8PM") {
    text(contextArray[76], 490, 220, 200, 200);
  }
  if (date === "01" && time === "9PM") {
    text(contextArray[77], 490, 220, 200, 200);
  }
  if (date === "01" && time === "10PM") {
    text(contextArray[79], 490, 270, 200, 300);
  }
  if (date === "01" && time === "11PM") {
    text(contextArray[80], 490, 220, 200, 200);
  }

  //SATURDAY
  if (date === "02" && time === "12AM") {
    text(contextArray[81], 490, 220, 200, 200);
  }
  if (date === "02" && time === "1AM") {
    text(contextArray[82], 490, 220, 200, 200);
  }
  if (date === "02" && time === "2AM") {
    text(contextArray[83], 490, 220, 200, 200);
  }
  if (date === "02" && time === "3AM") {
    text(contextArray[84], 490, 270, 200, 300);
  }
  if (date === "02" && time === "4AM") {
    text(contextArray[11], 490, 220, 200, 200);
  }
  if (date === "02" && time === "5AM") {
    text(contextArray[11], 490, 220, 200, 200);
  }
  if (date === "02" && time === "6AM") {
    text(contextArray[11], 490, 220, 200, 200);
  }
  if (date === "02" && time === "7AM") {
    text(contextArray[11], 490, 220, 200, 200);
  }
  if (date === "02" && time === "8AM") {
    text(contextArray[11], 490, 220, 200, 200);
  }
  if (date === "02" && time === "9AM") {
    text(contextArray[11], 490, 220, 200, 200);
  }
  if (date === "02" && time === "10AM") {
    text(contextArray[11], 490, 220, 200, 200);
  }
  if (date === "02" && time === "11AM") {
    text(contextArray[85], 490, 220, 200, 200);
  }
  if (date === "02" && time === "12PM") {
    text(contextArray[86], 490, 220, 200, 200);
  }
  if (date === "02" && time === "1PM") {
    text(contextArray[86], 490, 220, 200, 200);
  }
  if (date === "02" && time === "2PM") {
    text(contextArray[87], 490, 220, 200, 200);
  }
  if (date === "02" && time === "3PM") {
    text(contextArray[88], 490, 220, 200, 200);
  }
  if (date === "02" && time === "4PM") {
    text(contextArray[89], 490, 220, 200, 200);
  }
  if (date === "02" && time === "5PM") {
    text(contextArray[90], 490, 220, 200, 200);
  }
  if (date === "02" && time === "6PM") {
    text(contextArray[91], 490, 220, 200, 200);
  }
  if (date === "02" && time === "7PM") {
    text(contextArray[92], 490, 220, 200, 200);
  }
  if (date === "02" && time === "8PM") {
    text(contextArray[93], 490, 270, 200, 300);
  }
  if (date === "02" && time === "9PM") {
    text(contextArray[95], 490, 220, 200, 200);
  }
  if (date === "02" && time === "10PM") {
    text(contextArray[96], 490, 220, 200, 200);
  }
  if (date === "02" && time === "11PM") {
    text(contextArray[97], 490, 220, 200, 200);
  }
}
function moodTesting() {
  let date = currentDay[currentDayIndex];
  let time = timeArray[currentTimeIndex];
  push();
  fill(255);
  textSize(23);
  strokeWeight(8);
  strokeJoin(ROUND);
  stroke(0, 0, 100);
  text("Current Mood", 300, 110, width / 2, height / 2);
  pop();
  //damn we're gonna have to do this the hard way

  //SUNDAY
  if (date === "27" && time === "12AM") {
    text(moodArray[0], 300, 140, width / 2, height / 2);
  }
  if (date === "27" && time === "1AM") {
    text(moodArray[2], 300, 140, width / 2, height / 2);
  }
  if (date === "27" && time === "2AM") {
    text(moodArray[10], 300, 140, width / 2, height / 2);
  }
  if (date === "27" && time === "3AM") {
    text(moodArray[17], 300, 140, width / 2, height / 2);
  }
  if (date === "27" && time === "4AM") {
    text(moodArray[17], 300, 140, width / 2, height / 2);
  }
  if (date === "27" && time === "5AM") {
    text(moodArray[17], 300, 140, width / 2, height / 2);
  }
  if (date === "27" && time === "6AM") {
    text(moodArray[17], 300, 140, width / 2, height / 2);
  }
  if (date === "27" && time === "7AM") {
    text(moodArray[17], 300, 140, width / 2, height / 2);
  }
  if (date === "27" && time === "8AM") {
    text(moodArray[17], 300, 140, width / 2, height / 2);
  }
  if (date === "27" && time === "9AM") {
    text(moodArray[17], 300, 140, width / 2, height / 2);
  }
  if (date === "27" && time === "10AM") {
    text(moodArray[17], 300, 140, width / 2, height / 2);
  }
  if (date === "27" && time === "11AM") {
    text(moodArray[2], 300, 140, width / 2, height / 2);
  }
  if (date === "27" && time === "12PM") {
    text(moodArray[4], 300, 140, width / 2, height / 2);
  }
  if (date === "27" && time === "1PM") {
    text(moodArray[5], 300, 140, width / 2, height / 2);
  }
  if (date === "27" && time === "2PM") {
    text(moodArray[4], 300, 140, width / 2, height / 2);
  }
  if (date === "27" && time === "3PM") {
    text(moodArray[6], 300, 140, width / 2, height / 2);
  }
  if (date === "27" && time === "4PM") {
    text(moodArray[3], 300, 140, width / 2, height / 2);
  }
  if (date === "27" && time === "5PM") {
    text(moodArray[3], 300, 140, width / 2, height / 2);
  }
  if (date === "27" && time === "6PM") {
    text(moodArray[11], 300, 140, width / 2, height / 2);
  }
  if (date === "27" && time === "7PM") {
    text(moodArray[7], 300, 140, width / 2, height / 2);
  }
  if (date === "27" && time === "8PM") {
    text(moodArray[8], 300, 140, width / 2, height / 2);
  }
  if (date === "27" && time === "9PM") {
    text(moodArray[2], 300, 140, width / 2, height / 2);
  }
  if (date === "27" && time === "10PM") {
    text(moodArray[2], 300, 140, width / 2, height / 2);
  }
  if (date === "27" && time === "11PM") {
    text(moodArray[0], 300, 140, width / 2, height / 2);
  }
  //MONDAY
  if (date === "28" && time === "12AM") {
    text(moodArray[9], 300, 140, width / 2, height / 2);
  }
  if (date === "28" && time === "1AM") {
    text(moodArray[9], 300, 140, width / 2, height / 2);
  }
  if (date === "28" && time === "2AM") {
    text(moodArray[9], 300, 140, width / 2, height / 2);
  }
  if (date === "28" && time === "3AM") {
    text(moodArray[8], 300, 140, width / 2, height / 2);
  }
  if (date === "28" && time === "4AM") {
    text(moodArray[17], 300, 140, width / 2, height / 2);
  }
  if (date === "28" && time === "5AM") {
    text(moodArray[17], 300, 140, width / 2, height / 2);
  }
  if (date === "28" && time === "6AM") {
    text(moodArray[17], 300, 140, width / 2, height / 2);
  }
  if (date === "28" && time === "7AM") {
    text(moodArray[17], 300, 140, width / 2, height / 2);
  }
  if (date === "28" && time === "8AM") {
    text(moodArray[17], 300, 140, width / 2, height / 2);
  }
  if (date === "28" && time === "9AM") {
    text(moodArray[17], 300, 140, width / 2, height / 2);
  }
  if (date === "28" && time === "10AM") {
    text(moodArray[17], 300, 140, width / 2, height / 2);
  }
  if (date === "28" && time === "11AM") {
    text(moodArray[9], 300, 140, width / 2, height / 2);
  }
  if (date === "28" && time === "12PM") {
    text(moodArray[5], 300, 140, width / 2, height / 2);
  }
  if (date === "28" && time === "1PM") {
    text(moodArray[5], 300, 140, width / 2, height / 2);
  }
  if (date === "28" && time === "2PM") {
    text(moodArray[5], 300, 140, width / 2, height / 2);
  }
  if (date === "28" && time === "3PM") {
    text(moodArray[4], 300, 140, width / 2, height / 2);
  }
  if (date === "28" && time === "4PM") {
    text(moodArray[5], 300, 140, width / 2, height / 2);
  }
  if (date === "28" && time === "5PM") {
    text(moodArray[12], 300, 140, width / 2, height / 2);
  }
  if (date === "28" && time === "6PM") {
    text(moodArray[7], 300, 140, width / 2, height / 2);
  }
  if (date === "28" && time === "7PM") {
    text(moodArray[7], 300, 140, width / 2, height / 2);
  }
  if (date === "28" && time === "8PM") {
    text(moodArray[5], 300, 140, width / 2, height / 2);
  }
  if (date === "28" && time === "9PM") {
    text(moodArray[5], 300, 140, width / 2, height / 2);
  }
  if (date === "28" && time === "10PM") {
    text(moodArray[5], 300, 140, width / 2, height / 2);
  }
  if (date === "28" && time === "11PM") {
    text(moodArray[9], 300, 140, width / 2, height / 2);
  }
  //TUESDAY
  if (date === "29" && time === "12AM") {
    text(moodArray[14], 300, 140, width / 2, height / 2);
  }
  if (date === "29" && time === "1AM") {
    text(moodArray[14], 300, 140, width / 2, height / 2);
  }
  if (date === "29" && time === "2AM") {
    text(moodArray[17], 300, 140, width / 2, height / 2);
  }
  if (date === "29" && time === "3AM") {
    text(moodArray[17], 300, 140, width / 2, height / 2);
  }
  if (date === "29" && time === "4AM") {
    text(moodArray[17], 300, 140, width / 2, height / 2);
  }
  if (date === "29" && time === "5AM") {
    text(moodArray[17], 300, 140, width / 2, height / 2);
  }
  if (date === "29" && time === "6AM") {
    text(moodArray[17], 300, 140, width / 2, height / 2);
  }
  if (date === "29" && time === "7AM") {
    text(moodArray[17], 300, 140, width / 2, height / 2);
  }
  if (date === "29" && time === "8AM") {
    text(moodArray[17], 300, 140, width / 2, height / 2);
  }
  if (date === "29" && time === "9AM") {
    text(moodArray[17], 300, 140, width / 2, height / 2);
  }
  if (date === "29" && time === "10AM") {
    text(moodArray[9], 300, 140, width / 2, height / 2);
  }
  if (date === "29" && time === "11AM") {
    text(moodArray[13], 300, 140, width / 2, height / 2);
  }
  if (date === "29" && time === "12PM") {
    text(moodArray[9], 300, 140, width / 2, height / 2);
  }
  if (date === "29" && time === "1PM") {
    text(moodArray[9], 300, 140, width / 2, height / 2);
  }
  if (date === "29" && time === "2PM") {
    text(moodArray[8], 300, 140, width / 2, height / 2);
  }
  if (date === "29" && time === "3PM") {
    text(moodArray[2], 300, 140, width / 2, height / 2);
  }
  if (date === "29" && time === "4PM") {
    text(moodArray[2], 300, 140, width / 2, height / 2);
  }
  if (date === "29" && time === "5PM") {
    text(moodArray[2], 300, 140, width / 2, height / 2);
  }
  if (date === "29" && time === "6PM") {
    text(moodArray[13], 300, 140, width / 2, height / 2);
  }
  if (date === "29" && time === "7PM") {
    text(moodArray[13], 300, 140, width / 2, height / 2);
  }
  if (date === "29" && time === "8PM") {
    text(moodArray[2], 300, 140, width / 2, height / 2);
  }
  if (date === "29" && time === "9PM") {
    text(moodArray[9], 300, 140, width / 2, height / 2);
  }
  if (date === "29" && time === "10PM") {
    text(moodArray[9], 300, 140, width / 2, height / 2);
  }
  if (date === "29" && time === "11PM") {
    text(moodArray[15], 300, 140, width / 2, height / 2);
  }
  // WEDNESDAY
  if (date === "30" && time === "12AM") {
    text(moodArray[2], 300, 140, width / 2, height / 2);
  }
  if (date === "30" && time === "1AM") {
    text(moodArray[2], 300, 140, width / 2, height / 2);
  }
  if (date === "30" && time === "2AM") {
    text(moodArray[2], 300, 140, width / 2, height / 2);
  }
  if (date === "30" && time === "3AM") {
    text(moodArray[17], 300, 140, width / 2, height / 2);
  }
  if (date === "30" && time === "4AM") {
    text(moodArray[17], 300, 140, width / 2, height / 2);
  }
  if (date === "30" && time === "5AM") {
    text(moodArray[17], 300, 140, width / 2, height / 2);
  }
  if (date === "30" && time === "6AM") {
    text(moodArray[17], 300, 140, width / 2, height / 2);
  }
  if (date === "30" && time === "7AM") {
    text(moodArray[17], 300, 140, width / 2, height / 2);
  }
  if (date === "30" && time === "8AM") {
    text(moodArray[17], 300, 140, width / 2, height / 2);
  }
  if (date === "30" && time === "9AM") {
    text(moodArray[17], 300, 140, width / 2, height / 2);
  }
  if (date === "30" && time === "10AM") {
    text(moodArray[9], 300, 140, width / 2, height / 2);
  }
  if (date === "30" && time === "11AM") {
    text(moodArray[2], 300, 140, width / 2, height / 2);
  }
  if (date === "30" && time === "12PM") {
    text(moodArray[2], 300, 140, width / 2, height / 2);
  }
  if (date === "30" && time === "1PM") {
    text(moodArray[2], 300, 140, width / 2, height / 2);
  }
  if (date === "30" && time === "2PM") {
    text(moodArray[2], 300, 140, width / 2, height / 2);
  }
  if (date === "30" && time === "3PM") {
    text(moodArray[4], 300, 140, width / 2, height / 2);
  }
  if (date === "30" && time === "4PM") {
    text(moodArray[4], 300, 140, width / 2, height / 2);
  }
  if (date === "30" && time === "5PM") {
    text(moodArray[4], 300, 140, width / 2, height / 2);
  }
  if (date === "30" && time === "6PM") {
    text(moodArray[3], 300, 140, width / 2, height / 2);
  }
  if (date === "30" && time === "7PM") {
    text(moodArray[3], 300, 140, width / 2, height / 2);
  }
  if (date === "30" && time === "8PM") {
    text(moodArray[3], 300, 140, width / 2, height / 2);
  }
  if (date === "30" && time === "9PM") {
    text(moodArray[3], 300, 140, width / 2, height / 2);
  }
  if (date === "30" && time === "10PM") {
    text(moodArray[5], 300, 140, width / 2, height / 2);
  }
  if (date === "30" && time === "11PM") {
    text(moodArray[5], 300, 140, width / 2, height / 2);
  }
  //THURSDAY
  if (date === "31" && time === "12AM") {
    text(moodArray[0], 300, 140, width / 2, height / 2);
  }
  if (date === "31" && time === "1AM") {
    text(moodArray[17], 300, 140, width / 2, height / 2);
  }
  if (date === "31" && time === "2AM") {
    text(moodArray[17], 300, 140, width / 2, height / 2);
  }
  if (date === "31" && time === "3AM") {
    text(moodArray[17], 300, 140, width / 2, height / 2);
  }
  if (date === "31" && time === "4AM") {
    text(moodArray[17], 300, 140, width / 2, height / 2);
  }
  if (date === "31" && time === "5AM") {
    text(moodArray[17], 300, 140, width / 2, height / 2);
  }
  if (date === "31" && time === "6AM") {
    text(moodArray[17], 300, 140, width / 2, height / 2);
  }
  if (date === "31" && time === "7AM") {
    text(moodArray[17], 300, 140, width / 2, height / 2);
  }
  if (date === "31" && time === "8AM") {
    text(moodArray[17], 300, 140, width / 2, height / 2);
  }
  if (date === "31" && time === "9AM") {
    text(moodArray[17], 300, 140, width / 2, height / 2);
  }
  if (date === "31" && time === "10AM") {
    text(moodArray[9], 300, 140, width / 2, height / 2);
  }
  if (date === "31" && time === "11AM") {
    text(moodArray[7], 300, 140, width / 2, height / 2);
  }
  if (date === "31" && time === "12PM") {
    text(moodArray[4], 300, 140, width / 2, height / 2);
  }
  if (date === "31" && time === "1PM") {
    text(moodArray[15], 300, 140, width / 2, height / 2);
  }
  if (date === "31" && time === "2PM") {
    text(moodArray[13], 300, 140, width / 2, height / 2);
  }
  if (date === "31" && time === "3PM") {
    text(moodArray[13], 300, 140, width / 2, height / 2);
  }
  if (date === "31" && time === "4PM") {
    text(moodArray[8], 300, 140, width / 2, height / 2);
  }
  if (date === "31" && time === "5PM") {
    text(moodArray[16], 300, 140, width / 2, height / 2);
  }
  if (date === "31" && time === "6PM") {
    text(moodArray[3], 300, 140, width / 2, height / 2);
  }
  if (date === "31" && time === "7PM") {
    text(moodArray[3], 300, 140, width / 2, height / 2);
  }
  if (date === "31" && time === "8PM") {
    text(moodArray[3], 300, 140, width / 2, height / 2);
  }
  if (date === "31" && time === "9PM") {
    text(moodArray[3], 300, 140, width / 2, height / 2);
  }
  if (date === "31" && time === "10PM") {
    text(moodArray[3], 300, 140, width / 2, height / 2);
  }
  if (date === "31" && time === "11PM") {
    text(moodArray[3], 300, 140, width / 2, height / 2);
  }
  //FRIDAY
  if (date === "01" && time === "12AM") {
    text(moodArray[8], 300, 140, width / 2, height / 2);
  }
  if (date === "01" && time === "1AM") {
    text(moodArray[10], 300, 140, width / 2, height / 2);
  }
  if (date === "01" && time === "2AM") {
    text(moodArray[17], 300, 140, width / 2, height / 2);
  }
  if (date === "01" && time === "3AM") {
    text(moodArray[17], 300, 140, width / 2, height / 2);
  }
  if (date === "01" && time === "4AM") {
    text(moodArray[17], 300, 140, width / 2, height / 2);
  }
  if (date === "01" && time === "5AM") {
    text(moodArray[17], 300, 140, width / 2, height / 2);
  }
  if (date === "01" && time === "6AM") {
    text(moodArray[17], 300, 140, width / 2, height / 2);
  }
  if (date === "01" && time === "7AM") {
    text(moodArray[17], 300, 140, width / 2, height / 2);
  }
  if (date === "01" && time === "8AM") {
    text(moodArray[17], 300, 140, width / 2, height / 2);
  }
  if (date === "01" && time === "9AM") {
    text(moodArray[17], 300, 140, width / 2, height / 2);
  }
  if (date === "01" && time === "10AM") {
    text(moodArray[9], 300, 140, width / 2, height / 2);
  }
  if (date === "01" && time === "11AM") {
    text(moodArray[9], 300, 140, width / 2, height / 2);
  }
  if (date === "01" && time === "12PM") {
    text(moodArray[4], 300, 140, width / 2, height / 2);
  }
  if (date === "01" && time === "1PM") {
    text(moodArray[4], 300, 140, width / 2, height / 2);
  }
  if (date === "01" && time === "2PM") {
    text(moodArray[4], 300, 140, width / 2, height / 2);
  }
  if (date === "01" && time === "3PM") {
    text(moodArray[4], 300, 140, width / 2, height / 2);
  }
  if (date === "01" && time === "4PM") {
    text(moodArray[4], 300, 140, width / 2, height / 2);
  }
  if (date === "01" && time === "5PM") {
    text(moodArray[3], 300, 140, width / 2, height / 2);
  }
  if (date === "01" && time === "6PM") {
    text(moodArray[3], 300, 140, width / 2, height / 2);
  }
  if (date === "01" && time === "7PM") {
    text(moodArray[3], 300, 140, width / 2, height / 2);
  }
  if (date === "01" && time === "8PM") {
    text(moodArray[3], 300, 140, width / 2, height / 2);
  }
  if (date === "01" && time === "9PM") {
    text(moodArray[3], 300, 140, width / 2, height / 2);
  }
  if (date === "01" && time === "10PM") {
    text(moodArray[0], 300, 140, width / 2, height / 2);
  }
  if (date === "01" && time === "11PM") {
    text(moodArray[0], 300, 140, width / 2, height / 2);
  }
  //SATURDAY
  if (date === "02" && time === "12AM") {
    text(moodArray[0], 300, 140, width / 2, height / 2);
  }
  if (date === "02" && time === "1AM") {
    text(moodArray[0], 300, 140, width / 2, height / 2);
  }
  if (date === "02" && time === "2AM") {
    text(moodArray[0], 300, 140, width / 2, height / 2);
  }
  if (date === "02" && time === "3AM") {
    text(moodArray[0], 300, 140, width / 2, height / 2);
  }
  if (date === "02" && time === "4AM") {
    text(moodArray[17], 300, 140, width / 2, height / 2);
  }
  if (date === "02" && time === "5AM") {
    text(moodArray[17], 300, 140, width / 2, height / 2);
  }
  if (date === "02" && time === "6AM") {
    text(moodArray[17], 300, 140, width / 2, height / 2);
  }
  if (date === "02" && time === "7AM") {
    text(moodArray[17], 300, 140, width / 2, height / 2);
  }
  if (date === "02" && time === "8AM") {
    text(moodArray[17], 300, 140, width / 2, height / 2);
  }
  if (date === "02" && time === "9AM") {
    text(moodArray[17], 300, 140, width / 2, height / 2);
  }
  if (date === "02" && time === "10AM") {
    text(moodArray[17], 300, 140, width / 2, height / 2);
  }
  if (date === "02" && time === "11AM") {
    text(moodArray[4], 300, 140, width / 2, height / 2);
  }
  if (date === "02" && time === "12PM") {
    text(moodArray[4], 300, 140, width / 2, height / 2);
  }
  if (date === "02" && time === "1PM") {
    text(moodArray[4], 300, 140, width / 2, height / 2);
  }
  if (date === "02" && time === "2PM") {
    text(moodArray[15], 300, 140, width / 2, height / 2);
  }
  if (date === "02" && time === "3PM") {
    text(moodArray[5], 300, 140, width / 2, height / 2);
  }
  if (date === "02" && time === "4PM") {
    text(moodArray[5], 300, 140, width / 2, height / 2);
  }
  if (date === "02" && time === "5PM") {
    text(moodArray[5], 300, 140, width / 2, height / 2);
  }
  if (date === "02" && time === "6PM") {
    text(moodArray[7], 300, 140, width / 2, height / 2);
  }
  if (date === "02" && time === "7PM") {
    text(moodArray[10], 300, 140, width / 2, height / 2);
  }
  if (date === "02" && time === "8PM") {
    text(moodArray[10], 300, 140, width / 2, height / 2);
  }
  if (date === "02" && time === "9PM") {
    text(moodArray[5], 300, 140, width / 2, height / 2);
  }
  if (date === "02" && time === "10PM") {
    text(moodArray[5], 300, 140, width / 2, height / 2);
  }
  if (date === "02" && time === "11PM") {
    text(moodArray[14], 300, 140, width / 2, height / 2);
  }
  //phew
}

function activityTesting() {
  push();
  fill(255);
  textSize(23);
  strokeWeight(8);
  strokeJoin(ROUND);
  stroke(0, 0, 100);
  text("Current Activity", 100, 110, width / 2, height / 2);
  pop();
  let date = currentDay[currentDayIndex];
  let time = timeArray[currentTimeIndex];
  textSize(20);
  //here we go again

  //SUNDAY
  fill(255);
  if (date === "27" && time === "12AM") {
    text(activityArray[0], 100, 90, 200, 100);
  }
  if (date === "27" && time === "1AM") {
    text(activityArray[1], 100, 90, 200, 100);
  }
  if (date === "27" && time === "2AM") {
    text(activityArray[1], 100, 90, 200, 100);
  }
  if (date === "27" && time === "3AM") {
    text(activityArray[2], 100, 90, 200, 100);
  }
  if (date === "27" && time === "4AM") {
    text(activityArray[2], 100, 90, 200, 100);
  }
  if (date === "27" && time === "5AM") {
    text(activityArray[2], 100, 90, 200, 100);
  }
  if (date === "27" && time === "6AM") {
    text(activityArray[2], 100, 90, 200, 100);
  }
  if (date === "27" && time === "7AM") {
    text(activityArray[2], 100, 90, 200, 100);
  }
  if (date === "27" && time === "8AM") {
    text(activityArray[2], 100, 90, 200, 100);
  }
  if (date === "27" && time === "9AM") {
    text(activityArray[2], 100, 90, 200, 100);
  }
  if (date === "27" && time === "10AM") {
    text(activityArray[2], 100, 90, 200, 100);
  }
  if (date === "27" && time === "11AM") {
    text(activityArray[3], 100, 90, 200, 100);
  }
  if (date === "27" && time === "12PM") {
    text(activityArray[4], 100, 90, 200, 100);
  }
  if (date === "27" && time === "1PM") {
    text(activityArray[5], 100, 90, 200, 100);
  }
  if (date === "27" && time === "2PM") {
    text(activityArray[6], 100, 90, 200, 100);
  }
  if (date === "27" && time === "3PM") {
    text(activityArray[7], 100, 90, 200, 100);
  }
  if (date === "27" && time === "4PM") {
    text(activityArray[8], 100, 90, 200, 100);
  }
  if (date === "27" && time === "5PM") {
    text(activityArray[8], 100, 90, 200, 100);
  }
  if (date === "27" && time === "6PM") {
    text(activityArray[2], 100, 90, 200, 100);
  }
  if (date === "27" && time === "7PM") {
    text(activityArray[9], 100, 90, 200, 100);
  }
  if (date === "27" && time === "8PM") {
    text(activityArray[10], 100, 90, 200, 100);
  }
  if (date === "27" && time === "9PM") {
    text(activityArray[5], 100, 90, 200, 100);
  }
  if (date === "27" && time === "10PM") {
    text(activityArray[5], 100, 90, 200, 100);
  }
  if (date === "27" && time === "11PM") {
    text(activityArray[5], 100, 90, 200, 100);
  }
  //MONDAY
  if (date === "28" && time === "12AM") {
    text(activityArray[5], 100, 90, 200, 100);
  }
  if (date === "28" && time === "1AM") {
    text(activityArray[5], 100, 90, 200, 100);
  }
  if (date === "28" && time === "2AM") {
    text(activityArray[5], 100, 90, 200, 100);
  }
  if (date === "28" && time === "3AM") {
    text(activityArray[5], 100, 90, 200, 100);
  }
  if (date === "28" && time === "4AM") {
    text(activityArray[2], 100, 90, 200, 100);
  }
  if (date === "28" && time === "5AM") {
    text(activityArray[2], 100, 90, 200, 100);
  }
  if (date === "28" && time === "6AM") {
    text(activityArray[2], 100, 90, 200, 100);
  }
  if (date === "28" && time === "7AM") {
    text(activityArray[2], 100, 90, 200, 100);
  }
  if (date === "28" && time === "8AM") {
    text(activityArray[2], 100, 90, 200, 100);
  }
  if (date === "28" && time === "9AM") {
    text(activityArray[2], 100, 90, 200, 100);
  }
  if (date === "28" && time === "10AM") {
    text(activityArray[2], 100, 90, 200, 100);
  }
  if (date === "28" && time === "11AM") {
    text(activityArray[11], 100, 90, 200, 100);
  }
  if (date === "28" && time === "12PM") {
    text(activityArray[12], 100, 90, 200, 100);
  }
  if (date === "28" && time === "1PM") {
    text(activityArray[12], 100, 90, 200, 100);
  }
  if (date === "28" && time === "2PM") {
    text(activityArray[12], 100, 90, 200, 100);
  }
  if (date === "28" && time === "3PM") {
    text(activityArray[13], 100, 90, 200, 100);
  }
  if (date === "28" && time === "4PM") {
    text(activityArray[13], 100, 90, 200, 100);
  }
  if (date === "28" && time === "5PM") {
    text(activityArray[13], 100, 90, 200, 100);
  }
  if (date === "28" && time === "6PM") {
    text(activityArray[14], 100, 90, 200, 100);
  }
  if (date === "28" && time === "7PM") {
    text(activityArray[15], 100, 90, 200, 100);
  }
  if (date === "28" && time === "8PM") {
    text(activityArray[12], 100, 90, 200, 100);
  }
  if (date === "28" && time === "9PM") {
    text(activityArray[12], 100, 90, 200, 100);
  }
  if (date === "28" && time === "10PM") {
    text(activityArray[12], 100, 90, 200, 100);
  }
  if (date === "28" && time === "11PM") {
    text(activityArray[12], 100, 90, 200, 100);
  }
  //TUESDAY
  if (date === "29" && time === "12AM") {
    text(activityArray[12], 100, 90, 200, 100);
  }
  if (date === "29" && time === "1AM") {
    text(activityArray[12], 100, 90, 200, 100);
  }
  if (date === "29" && time === "2AM") {
    text(activityArray[2], 100, 90, 200, 100);
  }
  if (date === "29" && time === "3AM") {
    text(activityArray[2], 100, 90, 200, 100);
  }
  if (date === "29" && time === "4AM") {
    text(activityArray[2], 100, 90, 200, 100);
  }
  if (date === "29" && time === "5AM") {
    text(activityArray[2], 100, 90, 200, 100);
  }
  if (date === "29" && time === "6AM") {
    text(activityArray[2], 100, 90, 200, 100);
  }
  if (date === "29" && time === "7AM") {
    text(activityArray[2], 100, 90, 200, 100);
  }
  if (date === "29" && time === "8AM") {
    text(activityArray[2], 100, 90, 200, 100);
  }
  if (date === "29" && time === "9AM") {
    text(activityArray[2], 100, 90, 200, 100);
  }
  if (date === "29" && time === "10AM") {
    text(activityArray[11], 100, 90, 200, 100);
  }
  if (date === "29" && time === "11AM") {
    text(activityArray[16], 100, 90, 200, 100);
  }
  if (date === "29" && time === "12PM") {
    text(activityArray[20], 100, 90, 200, 100);
  }
  if (date === "29" && time === "1PM") {
    text(activityArray[20], 100, 90, 200, 100);
  }
  if (date === "29" && time === "2PM") {
    text(activityArray[17], 100, 90, 200, 100);
  }
  if (date === "29" && time === "3PM") {
    text(activityArray[12], 100, 90, 200, 100);
  }
  if (date === "29" && time === "4PM") {
    text(activityArray[12], 100, 90, 200, 100);
  }
  if (date === "29" && time === "5PM") {
    text(activityArray[18], 100, 90, 200, 100);
  }
  if (date === "29" && time === "6PM") {
    text(activityArray[19], 100, 90, 200, 100);
  }
  if (date === "29" && time === "7PM") {
    text(activityArray[19], 100, 90, 200, 100);
  }
  if (date === "29" && time === "8PM") {
    text(activityArray[15], 100, 90, 200, 100);
  }
  if (date === "29" && time === "9PM") {
    text(activityArray[21], 100, 90, 200, 100);
  }
  if (date === "29" && time === "10PM") {
    text(activityArray[21], 100, 90, 200, 100);
  }
  if (date === "29" && time === "11PM") {
    text(activityArray[22], 100, 90, 200, 100);
  }
  //WEDNESDAY
  if (date === "30" && time === "12AM") {
    text(activityArray[18], 100, 90, 200, 100);
  }
  if (date === "30" && time === "1AM") {
    text(activityArray[5], 100, 90, 200, 100);
  }
  if (date === "30" && time === "2AM") {
    text(activityArray[5], 100, 90, 200, 100);
  }
  if (date === "30" && time === "3AM") {
    text(activityArray[2], 100, 90, 200, 100);
  }
  if (date === "30" && time === "4AM") {
    text(activityArray[2], 100, 90, 200, 100);
  }
  if (date === "30" && time === "5AM") {
    text(activityArray[2], 100, 90, 200, 100);
  }
  if (date === "30" && time === "6AM") {
    text(activityArray[2], 100, 90, 200, 100);
  }
  if (date === "30" && time === "7AM") {
    text(activityArray[2], 100, 90, 200, 100);
  }
  if (date === "30" && time === "8AM") {
    text(activityArray[2], 100, 90, 200, 100);
  }
  if (date === "30" && time === "9AM") {
    text(activityArray[2], 100, 90, 200, 100);
  }
  if (date === "30" && time === "10AM") {
    text(activityArray[11], 100, 90, 200, 100);
  }
  if (date === "30" && time === "11AM") {
    text(activityArray[23], 100, 90, 200, 100);
  }
  if (date === "30" && time === "12PM") {
    text(activityArray[12], 100, 90, 200, 100);
  }
  if (date === "30" && time === "1PM") {
    text(activityArray[12], 100, 90, 200, 100);
  }
  if (date === "30" && time === "2PM") {
    text(activityArray[12], 100, 90, 200, 100);
  }
  if (date === "30" && time === "3PM") {
    text(activityArray[13], 100, 90, 200, 100);
  }
  if (date === "30" && time === "4PM") {
    text(activityArray[13], 100, 90, 200, 100);
  }
  if (date === "30" && time === "5PM") {
    text(activityArray[13], 100, 90, 200, 100);
  }
  if (date === "30" && time === "6PM") {
    text(activityArray[24], 100, 90, 200, 100);
  }
  if (date === "30" && time === "7PM") {
    text(activityArray[15], 100, 90, 200, 100);
  }
  if (date === "30" && time === "8PM") {
    text(activityArray[25], 100, 90, 200, 100);
  }
  if (date === "30" && time === "9PM") {
    text(activityArray[25], 100, 90, 200, 100);
  }
  if (date === "30" && time === "10PM") {
    text(activityArray[26], 100, 90, 200, 100);
  }
  if (date === "30" && time === "11PM") {
    text(activityArray[26], 100, 90, 200, 100);
  }
  //THURSDAY
  if (date === "31" && time === "12AM") {
    text(activityArray[26], 100, 90, 200, 100);
  }
  if (date === "31" && time === "1AM") {
    text(activityArray[2], 100, 90, 200, 100);
  }
  if (date === "31" && time === "2AM") {
    text(activityArray[2], 100, 90, 200, 100);
  }
  if (date === "31" && time === "3AM") {
    text(activityArray[2], 100, 90, 200, 100);
  }
  if (date === "31" && time === "4AM") {
    text(activityArray[2], 100, 90, 200, 100);
  }
  if (date === "31" && time === "5AM") {
    text(activityArray[2], 100, 90, 200, 100);
  }
  if (date === "31" && time === "6AM") {
    text(activityArray[2], 100, 90, 200, 100);
  }
  if (date === "31" && time === "7AM") {
    text(activityArray[2], 100, 90, 200, 100);
  }
  if (date === "31" && time === "8AM") {
    text(activityArray[2], 100, 90, 200, 100);
  }
  if (date === "31" && time === "9AM") {
    text(activityArray[2], 100, 90, 200, 100);
  }
  if (date === "31" && time === "10AM") {
    text(activityArray[11], 100, 90, 200, 100);
  }
  if (date === "31" && time === "11AM") {
    text(activityArray[16], 100, 90, 200, 100);
  }
  if (date === "31" && time === "12PM") {
    text(activityArray[5], 100, 90, 200, 100);
  }
  if (date === "31" && time === "1PM") {
    text(activityArray[22], 100, 90, 200, 100);
  }
  if (date === "31" && time === "2PM") {
    text(activityArray[27], 100, 90, 200, 100);
  }
  if (date === "31" && time === "3PM") {
    text(activityArray[27], 100, 90, 200, 100);
  }
  if (date === "31" && time === "4PM") {
    text(activityArray[28], 100, 90, 200, 100);
  }
  if (date === "31" && time === "5PM") {
    text(activityArray[29], 100, 90, 200, 100);
  }
  if (date === "31" && time === "6PM") {
    text(activityArray[30], 100, 90, 200, 100);
  }
  if (date === "31" && time === "7PM") {
    text(activityArray[30], 100, 90, 200, 100);
  }
  if (date === "31" && time === "8PM") {
    text(activityArray[30], 100, 90, 200, 100);
  }
  if (date === "31" && time === "9PM") {
    text(activityArray[31], 100, 90, 200, 100);
  }
  if (date === "31" && time === "10PM") {
    text(activityArray[31], 100, 90, 200, 100);
  }
  if (date === "31" && time === "11PM") {
    text(activityArray[31], 100, 90, 200, 100);
  }
  //FRIDAY
  if (date === "01" && time === "12AM") {
    text(activityArray[26], 100, 90, 200, 100);
  }
  if (date === "01" && time === "1AM") {
    text(activityArray[38], 100, 90, 200, 100);
  }
  if (date === "01" && time === "2AM") {
    text(activityArray[2], 100, 90, 200, 100);
  }
  if (date === "01" && time === "3AM") {
    text(activityArray[2], 100, 90, 200, 100);
  }
  if (date === "01" && time === "4AM") {
    text(activityArray[2], 100, 90, 200, 100);
  }
  if (date === "01" && time === "5AM") {
    text(activityArray[2], 100, 90, 200, 100);
  }
  if (date === "01" && time === "6AM") {
    text(activityArray[2], 100, 90, 200, 100);
  }
  if (date === "01" && time === "7AM") {
    text(activityArray[2], 100, 90, 200, 100);
  }
  if (date === "01" && time === "8AM") {
    text(activityArray[2], 100, 90, 200, 100);
  }
  if (date === "01" && time === "9AM") {
    text(activityArray[2], 100, 90, 200, 100);
  }
  if (date === "01" && time === "10AM") {
    text(activityArray[32], 100, 90, 200, 100);
  }
  if (date === "01" && time === "11AM") {
    text(activityArray[22], 100, 90, 200, 100);
  }
  if (date === "01" && time === "12PM") {
    text(activityArray[33], 100, 90, 200, 100);
  }
  if (date === "01" && time === "1PM") {
    text(activityArray[8], 100, 90, 200, 100);
  }
  if (date === "01" && time === "2PM") {
    text(activityArray[8], 100, 90, 200, 100);
  }
  if (date === "01" && time === "3PM") {
    text(activityArray[12], 100, 90, 200, 100);
  }
  if (date === "01" && time === "4PM") {
    text(activityArray[12], 100, 90, 200, 100);
  }
  if (date === "01" && time === "5PM") {
    text(activityArray[34], 100, 90, 200, 100);
  }
  if (date === "01" && time === "6PM") {
    text(activityArray[34], 100, 90, 200, 100);
  }
  if (date === "01" && time === "7PM") {
    text(activityArray[35], 100, 90, 200, 100);
  }
  if (date === "01" && time === "8PM") {
    text(activityArray[35], 100, 90, 200, 100);
  }
  if (date === "01" && time === "9PM") {
    text(activityArray[35], 100, 90, 200, 100);
  }
  if (date === "01" && time === "10PM") {
    text(activityArray[12], 100, 90, 200, 100);
  }
  if (date === "01" && time === "11PM") {
    text(activityArray[12], 100, 90, 200, 100);
  }
  //SATURDAY
  if (date === "02" && time === "12AM") {
    text(activityArray[12], 100, 90, 200, 100);
  }
  if (date === "02" && time === "1AM") {
    text(activityArray[12], 100, 90, 200, 100);
  }
  if (date === "02" && time === "2AM") {
    text(activityArray[12], 100, 90, 200, 100);
  }
  if (date === "02" && time === "3AM") {
    text(activityArray[12], 100, 90, 200, 100);
  }
  if (date === "02" && time === "4AM") {
    text(activityArray[2], 100, 90, 200, 100);
  }
  if (date === "02" && time === "5AM") {
    text(activityArray[2], 100, 90, 200, 100);
  }
  if (date === "02" && time === "6AM") {
    text(activityArray[2], 100, 90, 200, 100);
  }
  if (date === "02" && time === "7AM") {
    text(activityArray[2], 100, 90, 200, 100);
  }
  if (date === "02" && time === "8AM") {
    text(activityArray[2], 100, 90, 200, 100);
  }
  if (date === "02" && time === "9AM") {
    text(activityArray[2], 100, 90, 200, 100);
  }
  if (date === "02" && time === "10AM") {
    text(activityArray[2], 100, 90, 200, 100);
  }
  if (date === "02" && time === "11AM") {
    text(activityArray[11], 100, 90, 200, 100);
  }
  if (date === "02" && time === "12PM") {
    text(activityArray[5], 100, 90, 200, 100);
  }
  if (date === "02" && time === "1PM") {
    text(activityArray[5], 100, 90, 200, 100);
  }
  if (date === "02" && time === "2PM") {
    text(activityArray[4], 100, 90, 200, 100);
  }
  if (date === "02" && time === "3PM") {
    text(activityArray[12], 100, 90, 200, 100);
  }
  if (date === "02" && time === "4PM") {
    text(activityArray[12], 100, 90, 200, 100);
  }
  if (date === "02" && time === "5PM") {
    text(activityArray[12], 100, 90, 200, 100);
  }
  if (date === "02" && time === "6PM") {
    text(activityArray[37], 100, 90, 200, 100);
  }
  if (date === "02" && time === "7PM") {
    text(activityArray[12], 100, 90, 200, 100);
  }
  if (date === "02" && time === "8PM") {
    text(activityArray[12], 100, 90, 200, 100);
  }
  if (date === "02" && time === "9PM") {
    text(activityArray[5], 100, 90, 200, 100);
  }
  if (date === "02" && time === "10PM") {
    text(activityArray[5], 100, 90, 200, 100);
  }
  if (date === "02" && time === "11PM") {
    text(activityArray[12], 100, 90, 200, 100);
  }
  //WHEW
}
  


//day select screen
function mainMenu() {
  //right side
  push();
  fill(0, 0, 100);
  stroke(0);
  strokeWeight(8);
  beginShape();
  vertex(600, 0);
  vertex(100, 0);
  vertex(600, 300);
  endShape();
  pop();

  //left side
  push();
  fill(0, 0, 100);
  stroke(0);
  strokeWeight(8);
  beginShape();
  vertex(0, 70);
  vertex(600, 400);
  vertex(0, 400);
  endShape();
  pop();
  push();
  fill(255);
  textSize(30);
  push();
  fill(2);
  stroke(0, 100, 250);
  strokeWeight(3);
  strokeCap(PROJECT);
  textSize(45);
  text("SELECT A DATE.", titleDateX, 75, 400, 100);
  text("CLICK TO CONFIRM.", titleDateX - 190, 400, 500, 100);
  pop();
  //sun
  push();
  fill(2);
  stroke(sunR, sunG, sunB, 255);
  strokeWeight(3);
  strokeCap(PROJECT);
  textSize(45);
  text("SUN", sunDateX - 50, sunDateY - 25, 300, 100);
  pop();
  text("10/27", sunDateX - 50, sunDateY, 300, 100);

  //mon
  push();
  fill(2);
  stroke(monR, monG, monB, 255);
  strokeWeight(3);
  strokeCap(PROJECT);
  textSize(45);
  text("MON", monDateX + 50, monDateY + 20, 300, 100);
  pop();
  text("10/28", monDateX + 50, monDateY + 45, 300, 100);

  //tues
  push();
  fill(2);
  stroke(tuesR, tuesG, tuesB, 255);
  strokeWeight(3);
  strokeCap(PROJECT);
  textSize(45);
  text("TUES", tuesDateX + 245, tuesDateY - 25, 300, 100);
  pop();
  text("10/29", tuesDateX + 245, tuesDateY - 5, 300, 100);

  //wed
  push();
  fill(2);
  stroke(wedR, wedG, wedB, 255);
  strokeWeight(3);
  strokeCap(PROJECT);
  textSize(45);
  text("WED", wedDateX, wedDateY - 20, 300, 100);
  pop();
  text("10/30", wedDateX, wedDateY, 300, 100);

  //thurs
  push();
  fill(2);
  stroke(thursR, thursG, thursB, 255);
  strokeWeight(3);
  strokeCap(PROJECT);
  textSize(45);
  text("THUR", thursDateX, thursDateY + 80, 300, 100);
  pop();
  text("10/31", thursDateX, thursDateY + 95, 300, 100);
  //fri
  push();
  fill(2);
  stroke(friR, friG, friB, 255);
  strokeWeight(3);
  strokeCap(PROJECT);
  textSize(45);
  text("FRI", friDateX + 5, friDateY + 75, 300, 100);
  pop();
  text("11/01", friDateX, friDateY + 90, 300, 100);
  //sat
  push();
  fill(2);
  stroke(satR, satG, satB, 255);
  strokeWeight(3);
  strokeCap(PROJECT);
  textSize(45);
  text("SAT", satDateX + 5, satDateY + 80, 300, 100);
  pop();
  text("11/02", satDateX, satDateY + 95, 300, 100);
  pop();
}

//the actual experience
function game() {
  //right side
  push();
  fill(0, 0, 100);
  stroke(0);
  strokeWeight(8);
  beginShape();
  vertex(600, 0);
  vertex(375, 0);
  vertex(450, 80);
  vertex(600, 80);
  endShape();
  pop();

  dataSet();
  textSize(40);
  hudIconswitch();
  hudIcon();
  //draws the month number
  text(currentMonth, 445, 110, width / 2, height / 2);
  defineDate();
  defineTime();
  moodTesting();
  activityTesting();
  contextTesting();

  fill(255);
  textSize(40);
  //draws the day number
  text(currentDay[currentDayIndex], 495, 110, width / 2, height / 2);
  mainCanvas();

  gifSelection();
}
//clicking on a day on the title screen
function mouseClicked() {
  let date = currentDay[currentDayIndex];
  if (mouseX < 96 && mouseX > 0 && mouseY > 13 && mouseY < 63 && scene === 0) {
    //click on sunday
    date === "27";
    scene++;
  }
  if (
    mouseX < 174 &&
    mouseX > 70 &&
    mouseY > 60 &&
    mouseY < 111 &&
    scene === 0
  ) {
    //click on monday
    date === "28";
    scene++;
  }
  if (
    mouseX < 275 &&
    mouseX > 156 &&
    mouseY > 105 &&
    mouseY < 155 &&
    scene === 0
  ) {
    //click on tuesday
    date === "29";
    scene++;
  }
  if (
    mouseX < 350 &&
    mouseX > 246 &&
    mouseY > 155 &&
    mouseY < 195 &&
    scene === 0
  ) {
    //click on wednesday
    date === "30";
    scene++;
  }
  if (
    mouseX < 451 &&
    mouseX > 326 &&
    mouseY > 204 &&
    mouseY < 247 &&
    scene === 0
  ) {
    //click on thursday
    date === "31";
    scene++;
  }
  if (
    mouseX < 502 &&
    mouseX > 430 &&
    mouseY > 225 &&
    mouseY < 294 &&
    scene === 0
  ) {
    //click on friday
    date === "01";
    scene++;
  }
  if (
    mouseX < 583 &&
    mouseX > 495 &&
    mouseY > 305 &&
    mouseY < 342 &&
    scene === 0
  ) {
    //click on saturday
    date === "02";
    scene++;
  }
}

//hovering over a day on the title screen
function mouseMoved() {
  //hovering over sunday
  if (mouseX < 96 && mouseX > 0 && mouseY > 13 && mouseY < 63) {
    (sunR = 255), (sunG = 0), (sunB = 0);
  } else {
    (sunR = 0), (sunG = 0), (sunB = 255);
  }
  //hovering over monday
  if (mouseX < 174 && mouseX > 70 && mouseY > 60 && mouseY < 111) {
    (monR = 255), (monG = 0), (monB = 0);
  } else {
    (monR = 0), (monG = 0), (monB = 255);
  }
  //hovering over tuesday
  if (mouseX < 275 && mouseX > 156 && mouseY > 105 && mouseY < 155) {
    (tuesR = 255), (tuesG = 0), (tuesB = 0);
  } else {
    (tuesR = 0), (tuesG = 0), (tuesB = 255);
  }
  //hovering over wednesday
  if (mouseX < 350 && mouseX > 246 && mouseY > 155 && mouseY < 195) {
    (wedR = 255), (wedG = 0), (wedB = 0);
  } else {
    (wedR = 0), (wedG = 0), (wedB = 255);
  }

  //hovering over thursday
  if (mouseX < 451 && mouseX > 326 && mouseY > 204 && mouseY < 247) {
    (thursR = 255), (thursG = 0), (thursB = 0);
  } else {
    (thursR = 0), (thursG = 0), (thursB = 255);
  }

  //hovering over friday
  if (mouseX < 502 && mouseX > 430 && mouseY > 225 && mouseY < 294) {
    (friR = 255), (friG = 0), (friB = 0);
  } else {
    (friR = 0), (friG = 0), (friB = 255);
  }

  //hovering over saturday
  if (mouseX < 583 && mouseX > 495 && mouseY > 305 && mouseY < 342) {
    (satR = 255), (satG = 0), (satB = 0);
  } else {
    (satR = 0), (satG = 0), (satB = 255);
  }
}

//switching from day select to main experience
function sceneSwitch() {
  switch (scene) {
    case 0:
      mainMenu();

      if (mouseIsPressed) {
        let date = currentDay[currentDayIndex];
        if (
          mouseX < 96 &&
          mouseX > 0 &&
          mouseY > 13 &&
          mouseY < 63 &&
          scene === 0
        ) {
          //click on sunday
          currentDayIndex = 0;
          scene++;
        }
        if (
          mouseX < 174 &&
          mouseX > 70 &&
          mouseY > 60 &&
          mouseY < 111 &&
          scene === 0
        ) {
          //click on monday
          currentDayIndex = 1;
          scene++;
        }
        if (
          mouseX < 275 &&
          mouseX > 156 &&
          mouseY > 105 &&
          mouseY < 155 &&
          scene === 0
        ) {
          //click on tuesday
          currentDayIndex = 2;
          scene++;
        }
        if (
          mouseX < 350 &&
          mouseX > 246 &&
          mouseY > 155 &&
          mouseY < 195 &&
          scene === 0
        ) {
          //click on wednesday
          currentDayIndex = 3;
          scene++;
        }
        if (
          mouseX < 451 &&
          mouseX > 326 &&
          mouseY > 204 &&
          mouseY < 247 &&
          scene === 0
        ) {
          //click on thursday
          currentDayIndex = 4;
          scene++;
        }
        if (
          mouseX < 502 &&
          mouseX > 430 &&
          mouseY > 225 &&
          mouseY < 294 &&
          scene === 0
        ) {
          //click on friday
          currentDayIndex = 5;
          scene++;
        }
        if (
          mouseX < 583 &&
          mouseX > 495 &&
          mouseY > 305 &&
          mouseY < 342 &&
          scene === 0
        ) {
          //click on saturday
          currentDayIndex = 6;
          scene++;
        }
        if (scene === 1 && keyCode === BACKSPACE) {
          scene--;
        }
      }
      break;
    case 1:
      game();
      if (backspacePressed) {
        scene = 0;
        backspacePressed = false;
      }
      break;
  }
}

function gifSelection() {
  let date = currentDay[currentDayIndex];
  let time = timeArray[currentTimeIndex];
  //SUNDAY
  if (date === "27" && time === "12AM") {
    image(gifArray[16], 23, 113, 355, 235);
  }
  if (date === "27" && time === "1AM") {
    image(gifArray[17], 23, 113, 355, 235);
  }
  if (date === "27" && time === "2AM") {
    image(gifArray[17], 23, 113, 355, 235);
  }
  if (date === "27" && time === "3AM") {
    image(gifArray[15], 23, 113, 355, 235);
  }
  if (date === "27" && time === "4AM") {
    image(gifArray[15], 23, 113, 355, 235);
  }
  if (date === "27" && time === "5AM") {
    image(gifArray[15], 23, 113, 355, 235);
  }
  if (date === "27" && time === "6AM") {
    image(gifArray[15], 23, 113, 355, 235);
  }
  if (date === "27" && time === "7AM") {
    image(gifArray[15], 23, 113, 355, 235);
  }
  if (date === "27" && time === "8AM") {
    image(gifArray[15], 23, 113, 355, 235);
  }
  if (date === "27" && time === "9AM") {
    image(gifArray[15], 23, 113, 355, 235);
  }
  if (date === "27" && time === "10AM") {
    image(gifArray[15], 23, 113, 355, 235);
  }
  if (date === "27" && time === "11AM") {
    image(gifArray[22], 23, 113, 355, 235);
  }
  if (date === "27" && time === "12PM") {
    image(gifArray[18], 23, 113, 355, 235);
  }
  if (date === "27" && time === "1PM") {
    image(gifArray[19], 23, 113, 355, 235);
  }
  if (date === "27" && time === "2PM") {
    image(gifArray[20], 23, 113, 355, 235);
  }
  if (date === "27" && time === "3PM") {
    image(gifArray[21], 23, 113, 355, 235);
  }
  if (date === "27" && time === "4PM") {
    image(gifArray[12], 23, 113, 355, 235);
  }
  if (date === "27" && time === "5PM") {
    image(gifArray[12], 23, 113, 355, 235);
  }
  if (date === "27" && time === "6PM") {
    image(gifArray[13], 23, 113, 355, 235);
  }
  if (date === "27" && time === "7PM") {
    image(gifArray[14], 23, 113, 355, 235);
  }
  if (date === "27" && time === "8PM") {
    image(gifArray[23], 23, 113, 355, 235);
  }
  if (date === "27" && time === "9PM") {
    image(gifArray[0], 23, 113, 355, 235);
  }
  if (date === "27" && time === "10PM") {
    image(gifArray[0], 23, 113, 355, 235);
  }
  if (date === "27" && time === "11PM") {
    image(gifArray[0], 23, 113, 355, 235);
  }

  //MONDAY
  if (date === "28" && time === "12AM") {
    image(gifArray[0], 23, 113, 355, 235);
  }
  if (date === "28" && time === "1AM") {
    image(gifArray[0], 23, 113, 355, 235);
  }
  if (date === "28" && time === "2AM") {
    image(gifArray[0], 23, 113, 355, 235);
  }
  if (date === "28" && time === "3AM") {
    image(gifArray[0], 23, 113, 355, 235);
  }
  if (date === "28" && time === "4AM") {
    image(gifArray[1], 23, 113, 355, 235);
  }
  if (date === "28" && time === "5AM") {
    image(gifArray[1], 23, 113, 355, 235);
  }
  if (date === "28" && time === "6AM") {
    image(gifArray[1], 23, 113, 355, 235);
  }
  if (date === "28" && time === "7AM") {
    image(gifArray[1], 23, 113, 355, 235);
  }
  if (date === "28" && time === "8AM") {
    image(gifArray[1], 23, 113, 355, 235);
  }
  if (date === "28" && time === "9AM") {
    image(gifArray[1], 23, 113, 355, 235);
  }
  if (date === "28" && time === "10AM") {
    image(gifArray[1], 23, 113, 355, 235);
  }
  if (date === "28" && time === "11AM") {
    image(gifArray[4], 23, 113, 355, 235);
  }
  if (date === "28" && time === "12PM") {
    image(gifArray[24], 23, 113, 355, 235);
  }
  if (date === "28" && time === "1PM") {
    image(gifArray[24], 23, 113, 355, 235);
  }
  if (date === "28" && time === "2PM") {
    image(gifArray[24], 23, 113, 355, 235);
  }
  if (date === "28" && time === "3PM") {
    image(gifArray[5], 23, 113, 355, 235);
  }
  if (date === "28" && time === "4PM") {
    image(gifArray[5], 23, 113, 355, 235);
  }
  if (date === "28" && time === "5PM") {
    image(gifArray[5], 23, 113, 355, 235);
  }
  if (date === "28" && time === "6PM") {
    image(gifArray[9], 23, 113, 355, 235);
  }
  if (date === "28" && time === "7PM") {
    image(gifArray[40], 23, 113, 355, 235);
  } //dinner
  if (date === "28" && time === "8PM") {
    image(gifArray[25], 23, 113, 355, 235);
  }
  if (date === "28" && time === "9PM") {
    image(gifArray[28], 23, 113, 355, 235);
  }
  if (date === "28" && time === "10PM") {
    image(gifArray[28], 23, 113, 355, 235);
  }
  if (date === "28" && time === "11PM") {
    image(gifArray[28], 23, 113, 355, 235);
  }
  // TUESDAY
  if (date === "29" && time === "12AM") {
    image(gifArray[29], 23, 113, 355, 235);
  }
  if (date === "29" && time === "1AM") {
    image(gifArray[29], 23, 113, 355, 235);
  }
  if (date === "29" && time === "2AM") {
    image(gifArray[2], 23, 113, 355, 235);
  }
  if (date === "29" && time === "3AM") {
    image(gifArray[2], 23, 113, 355, 235);
  }
  if (date === "29" && time === "4AM") {
    image(gifArray[2], 23, 113, 355, 235);
  }
  if (date === "29" && time === "5AM") {
    image(gifArray[2], 23, 113, 355, 235);
  }
  if (date === "29" && time === "6AM") {
    image(gifArray[2], 23, 113, 355, 235);
  }
  if (date === "29" && time === "7AM") {
    image(gifArray[2], 23, 113, 355, 235);
  }
  if (date === "29" && time === "8AM") {
    image(gifArray[2], 23, 113, 355, 235);
  }
  if (date === "29" && time === "9AM") {
    image(gifArray[2], 23, 113, 355, 235);
  }
  if (date === "29" && time === "10AM") {
    image(gifArray[4], 23, 113, 355, 235);
  }
  if (date === "29" && time === "11AM") {
    image(gifArray[7], 23, 113, 355, 235);
  }
  if (date === "29" && time === "12PM") {
    image(gifArray[10], 23, 113, 355, 235);
  }
  if (date === "29" && time === "1PM") {
    image(gifArray[10], 23, 113, 355, 235);
  }
  if (date === "29" && time === "2PM") {
    image(gifArray[30], 23, 113, 355, 235);
  }
  if (date === "29" && time === "3PM") {
    image(gifArray[25], 23, 113, 355, 235);
  }
  if (date === "29" && time === "4PM") {
    image(gifArray[25], 23, 113, 355, 235);
  }
  if (date === "29" && time === "5PM") {
    image(gifArray[31], 23, 113, 355, 235);
  }
  if (date === "29" && time === "6PM") {
    image(gifArray[8], 23, 113, 355, 235);
  }
  if (date === "29" && time === "7PM") {
    image(gifArray[8], 23, 113, 355, 235);
  } //dinner
  if (date === "29" && time === "8PM") {
    image(gifArray[40], 23, 113, 355, 235);
  }
  if (date === "29" && time === "9PM") {
    image(gifArray[33], 23, 113, 355, 235);
  }
  if (date === "29" && time === "10PM") {
    image(gifArray[33], 23, 113, 355, 235);
  }
  if (date === "29" && time === "11PM") {
    image(gifArray[32], 23, 113, 355, 235);
  }
  //WEDNESDAY
  if (date === "30" && time === "12AM") {
    image(gifArray[34], 23, 113, 355, 235);
  }
  if (date === "30" && time === "1AM") {
    image(gifArray[0], 23, 113, 355, 235);
  }
  if (date === "30" && time === "2AM") {
    image(gifArray[0], 23, 113, 355, 235);
  }
  if (date === "30" && time === "3AM") {
    image(gifArray[1], 23, 113, 355, 235);
  }
  if (date === "30" && time === "4AM") {
    image(gifArray[1], 23, 113, 355, 235);
  }
  if (date === "30" && time === "5AM") {
    image(gifArray[1], 23, 113, 355, 235);
  }
  if (date === "30" && time === "6AM") {
    image(gifArray[1], 23, 113, 355, 235);
  }
  if (date === "30" && time === "7AM") {
    image(gifArray[1], 23, 113, 355, 235);
  }
  if (date === "30" && time === "8AM") {
    image(gifArray[1], 23, 113, 355, 235);
  }
  if (date === "30" && time === "9AM") {
    image(gifArray[1], 23, 113, 355, 235);
  }
  if (date === "30" && time === "10AM") {
    image(gifArray[4], 23, 113, 355, 235);
  }
  if (date === "30" && time === "11AM") {
    image(gifArray[36], 23, 113, 355, 235);
  }
  if (date === "30" && time === "12PM") {
    image(gifArray[26], 23, 113, 355, 235);
  }
  if (date === "30" && time === "1PM") {
    image(gifArray[26], 23, 113, 355, 235);
  }
  if (date === "30" && time === "2PM") {
    image(gifArray[26], 23, 113, 355, 235);
  }
  if (date === "30" && time === "3PM") {
    image(gifArray[5], 23, 113, 355, 235);
  }
  if (date === "30" && time === "4PM") {
    image(gifArray[5], 23, 113, 355, 235);
  }
  if (date === "30" && time === "5PM") {
    image(gifArray[5], 23, 113, 355, 235);
  }
  if (date === "30" && time === "6PM") {
    image(gifArray[37], 23, 113, 355, 235);
  }
  if (date === "30" && time === "7PM") {
    image(gifArray[38], 23, 113, 355, 235);
  } //dinner @ home
  if (date === "30" && time === "8PM") {
    image(gifArray[39], 23, 113, 355, 235);
  }
  if (date === "30" && time === "9PM") {
    image(gifArray[39], 23, 113, 355, 235);
  }
  if (date === "30" && time === "10PM") {
    image(gifArray[35], 23, 113, 355, 235);
  }
  if (date === "30" && time === "11PM") {
    image(gifArray[35], 23, 113, 355, 235);
  }
  //THURSDAY
  if (date === "31" && time === "12AM") {
    image(gifArray[35], 23, 113, 355, 235);
  }
  if (date === "31" && time === "1AM") {
    image(gifArray[3], 23, 113, 355, 235);
  }
  if (date === "31" && time === "2AM") {
    image(gifArray[3], 23, 113, 355, 235);
  }
  if (date === "31" && time === "3AM") {
    image(gifArray[3], 23, 113, 355, 235);
  }
  if (date === "31" && time === "4AM") {
    image(gifArray[3], 23, 113, 355, 235);
  }
  if (date === "31" && time === "5AM") {
    image(gifArray[3], 23, 113, 355, 235);
  }
  if (date === "31" && time === "6AM") {
    image(gifArray[3], 23, 113, 355, 235);
  }
  if (date === "31" && time === "7AM") {
    image(gifArray[3], 23, 113, 355, 235);
  }
  if (date === "31" && time === "8AM") {
    image(gifArray[3], 23, 113, 355, 235);
  }
  if (date === "31" && time === "9AM") {
    image(gifArray[3], 23, 113, 355, 235);
  }
  if (date === "31" && time === "10AM") {
    image(gifArray[4], 23, 113, 355, 235);
  }
  if (date === "31" && time === "11AM") {
    image(gifArray[7], 23, 113, 355, 235);
  }
  if (date === "31" && time === "12PM") {
    image(gifArray[47], 23, 113, 355, 235);
  }
  if (date === "31" && time === "1PM") {
    image(gifArray[30], 23, 113, 355, 235);
  }
  if (date === "31" && time === "2PM") {
    image(gifArray[48], 23, 113, 355, 235);
  } // make daytime variant
  if (date === "31" && time === "3PM") {
    image(gifArray[48], 23, 113, 355, 235);
  }
  if (date === "31" && time === "4PM") {
    image(gifArray[40], 23, 113, 355, 235);
  }
  if (date === "31" && time === "5PM") {
    image(gifArray[6], 23, 113, 355, 235);
  }
  if (date === "31" && time === "6PM") {
    image(gifArray[44], 23, 113, 355, 235);
  }
  if (date === "31" && time === "7PM") {
    image(gifArray[44], 23, 113, 355, 235);
  } //dinner
  if (date === "31" && time === "8PM") {
    image(gifArray[44], 23, 113, 355, 235);
  }
  if (date === "31" && time === "9PM") {
    image(gifArray[42], 23, 113, 355, 235);
  }
  if (date === "31" && time === "10PM") {
    image(gifArray[42], 23, 113, 355, 235);
  }
  if (date === "31" && time === "11PM") {
    image(gifArray[42], 23, 113, 355, 235);
  }
  //FRIDAY
  if (date === "01" && time === "12AM") {
    image(gifArray[35], 23, 113, 355, 235);
  }
  if (date === "01" && time === "1AM") {
    image(gifArray[41], 23, 113, 355, 235);
  }
  if (date === "01" && time === "2AM") {
    image(gifArray[1], 23, 113, 355, 235);
  }
  if (date === "01" && time === "3AM") {
    image(gifArray[1], 23, 113, 355, 235);
  }
  if (date === "01" && time === "4AM") {
    image(gifArray[1], 23, 113, 355, 235);
  }
  if (date === "01" && time === "5AM") {
    image(gifArray[1], 23, 113, 355, 235);
  }
  if (date === "01" && time === "6AM") {
    image(gifArray[1], 23, 113, 355, 235);
  }
  if (date === "01" && time === "7AM") {
    image(gifArray[1], 23, 113, 355, 235);
  }
  if (date === "01" && time === "8AM") {
    image(gifArray[1], 23, 113, 355, 235);
  }
  if (date === "01" && time === "9AM") {
    image(gifArray[1], 23, 113, 355, 235);
  }
  if (date === "01" && time === "10AM") {
    image(gifArray[30], 23, 113, 355, 235);
  }
  if (date === "01" && time === "11AM") {
    image(gifArray[30], 23, 113, 355, 235);
  }
  if (date === "01" && time === "12PM") {
    image(gifArray[45], 23, 113, 355, 235);
  }
  if (date === "01" && time === "1PM") {
    image(gifArray[45], 23, 113, 355, 235);
  }
  if (date === "01" && time === "2PM") {
    image(gifArray[45], 23, 113, 355, 235);
  }
  if (date === "01" && time === "3PM") {
    image(gifArray[27], 23, 113, 355, 235);
  }
  if (date === "01" && time === "4PM") {
    image(gifArray[27], 23, 113, 355, 235);
  }
  if (date === "01" && time === "5PM") {
    image(gifArray[11], 23, 113, 355, 235);
  }
  if (date === "01" && time === "6PM") {
    image(gifArray[11], 23, 113, 355, 235);
  }
  if (date === "01" && time === "7PM") {
    image(gifArray[46], 23, 113, 355, 235);
  } //dinner
  if (date === "01" && time === "8PM") {
    image(gifArray[46], 23, 113, 355, 235);
  }
  if (date === "01" && time === "9PM") {
    image(gifArray[46], 23, 113, 355, 235);
  }
  if (date === "01" && time === "10PM") {
    image(gifArray[27], 23, 113, 355, 235);
  }
  if (date === "01" && time === "11PM") {
    image(gifArray[27], 23, 113, 355, 235);
  }
  //SATURDAY
  if (date === "02" && time === "12AM") {
    image(gifArray[28], 23, 113, 355, 235);
  }
  if (date === "02" && time === "1AM") {
    image(gifArray[28], 23, 113, 355, 235);
  }
  if (date === "02" && time === "2AM") {
    image(gifArray[28], 23, 113, 355, 235);
  }
  if (date === "02" && time === "3AM") {
    image(gifArray[28], 23, 113, 355, 235);
  }
  if (date === "02" && time === "4AM") {
    image(gifArray[3], 23, 113, 355, 235);
  }
  if (date === "02" && time === "5AM") {
    image(gifArray[3], 23, 113, 355, 235);
  }
  if (date === "02" && time === "6AM") {
    image(gifArray[3], 23, 113, 355, 235);
  }
  if (date === "02" && time === "7AM") {
    image(gifArray[3], 23, 113, 355, 235);
  }
  if (date === "02" && time === "8AM") {
    image(gifArray[3], 23, 113, 355, 235);
  }
  if (date === "02" && time === "9AM") {
    image(gifArray[3], 23, 113, 355, 235);
  }
  if (date === "02" && time === "10AM") {
    image(gifArray[3], 23, 113, 355, 235);
  }
  if (date === "02" && time === "11AM") {
    image(gifArray[4], 23, 113, 355, 235);
  }
  if (date === "02" && time === "12PM") {
    image(gifArray[47], 23, 113, 355, 235);
  }
  if (date === "02" && time === "1PM") {
    image(gifArray[47], 23, 113, 355, 235);
  }
  if (date === "02" && time === "2PM") {
    image(gifArray[47], 23, 113, 355, 235);
  }
  if (date === "02" && time === "3PM") {
    image(gifArray[25], 23, 113, 355, 235);
  }
  if (date === "02" && time === "4PM") {
    image(gifArray[25], 23, 113, 355, 235);
  }
  if (date === "02" && time === "5PM") {
    image(gifArray[25], 23, 113, 355, 235);
  }
  if (date === "02" && time === "6PM") {
    image(gifArray[43], 23, 113, 355, 235);
  }
  if (date === "02" && time === "7PM") {
    image(gifArray[24], 23, 113, 355, 235);
  } //dinner
  if (date === "02" && time === "8PM") {
    image(gifArray[24], 23, 113, 355, 235);
  }
  if (date === "02" && time === "9PM") {
    image(gifArray[0], 23, 113, 355, 235);
  }
  if (date === "02" && time === "10PM") {
    image(gifArray[0], 23, 113, 355, 235);
  }
  if (date === "02" && time === "11PM") {
    image(gifArray[29], 23, 113, 355, 235);
  }
}

function keyPressed() {
  if (keyCode === BACKSPACE) {
    resetMenuPositions();
    backspacePressed = true;
  } else if (key === 'z') {
  currentTimeIndex = int(random(timeArray.length));
    //randomize time by pressing z
  } else if (key === 'x') {
    //randomize day by pressing x
  currentDayIndex = int(random(currentDay.length));
    
  } else if ( key === 'c'){
    //randomize both time and day with c
      let time = timeArray[currentTimeIndex];
  currentTimeIndex = int(random(timeArray.length));
  currentDayIndex = int(random(currentDay.length));
  while (
    time === "3AM" ||
    time === "4AM" ||
    time === "5AM" ||
    time === "6AM" ||
    time === "7AM" ||
    time === "8AM" ||
    time === "9AM"
  ) {
    currentTimeIndex = int(random(timeArray.length));
    time = timeArray[currentTimeIndex];
  }
    
  }
}

//why tf does the text get misaligned when you go back to the date selection screen dude its 3am and i am going insane
function resetMenuPositions() {
  //sun
  sunDateX = 100;
  sunDateY = 90;

  //mon
  monDateX = 70;
  monDateY = 90;

  //tues
  tuesDateX = -40;
  tuesDateY = 183;

  //wed
  wedDateX = 295;
  wedDateY = 225;

  //thurs
  thursDateX = 385;
  thursDateY = 175;

  //fri
  friDateX = 475;
  friDateY = 230;

  //sat
  satDateX = 544;
  satDateY = 275;

  titleDateX = 420;
}

//defines the hud image
function hudIcon() {
  image(hud1, 525, 0, 80, 80);
}

//swaps hud image depending on the time
function hudIconswitch() {
  switch (currentTime) {
    case "Night":
      hud1 = moonIcon;
      break;
    default:
      hud1 = dayIcon;
      break;
  }
}
