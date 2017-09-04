/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    version 2.08
*/

/*URL for the server logo
Leave it blank to use text instead
(Put the files in the images folder)*/
var l_serverImage = "logo_current.png";

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "Zealot Gaming";

/*Use a video for the background?
Otherwise it will just use images*/
var l_bgVideo = false;

/*Video background
Avaiable options:
"aurora.webm"
"bluefall.webm"
"bluetilefloor.webm"
"bluewhitecircles.webm"
"bokehlens.webm"
"cleanbokeh.webm"
"coldnight.webm"
"colorfulburst.webm"
"dancingstars.webm"
"dropsflares.webm"
"focusorangebokeh.webm"
"glimmering.webm"
"glowingrings.webm"
"greencircles.webm"
"hues.webm"
"inthedeep.webm"
"modernflourish.webm"
"orangeaura.webm"
"warminside.webm"
"yellowgreen.webm"

You can add custom backgrounds
Just make sure it is at webm VP8 format 
(Put the files in the backgrounds/videos folder)*/
var l_background = "glimmering.webm";

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them
(Put the files in the backgrounds/images folder)*/
var l_bgImages = [
	"oaNsZ40.jpg",
	"PiEv7MnhtYV3GjGv2VZ5XovBJTEQUckf4N8lpOw5h8o.jpg",
	"star-wars-the-old-republic-bounty-hunter-swtor-games-1920x1080-wallpaper381092.jpg",
	"the-old-republic-shipyard.jpg",
	"ws_Star_Wars-_The_Old_Republic_1920x1080.jpg",
	"2lBZveP.jpg",
];

/*Random background images order?*/
var l_bgImagesRandom = true;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 5000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 2000;

/*Enable background overlay?*/
var l_bgOverlay = true;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 50;

/*Music player
'true' or 'false' to enable music in the background*/
var l_music = true;

/*Display actual song's name?*/
var l_musicDisplay = true;

/*Music playlist
Place how much .ogg songs you want
(Put the files in the songs folder)*/
var l_musicPlaylist = [
	{youtube: "i7UyXbb1m7M", name: "Battlefront 2 Trailer Theme"},
	{youtube: "o--bLEobBFY", name: "Battle Of Heroes"},
	{youtube: "duCjJepYaWM", name: "Star Wars Music"},
	{youtube: "LcKvT015k_k", name: "Sith Theme"},
	{youtube: "BeEg9PJB0yM", name: "Bounty Hunter Theme"},
	{youtube: "moag4Xf498c", name: "Grievous Theme"},
	{youtube: "t3tFkcW7ySk", name: "Alderaan Ambience"},
];

/*Random music order?*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 25;

/*Enable custom messages?*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
	"Enjoy the server",
	"Thanks for joining us!",
	"Bounty Hunter: At first if you don't succeed... Reload.",
	"Khem Val: I have an excellent Sabacc face. That was a joke, I hate Sabacc.",
	"Smuggler: I wasn't planning to live forever anyway. I'm in.",
	"Bounty Hunter: I'll find you. I always do.",
	"Sith Inquisitor: Murder and Mayhem awaits.",
	"Krikit the Jawa: You go! Beat up Sand People, get Jawas back! Then, everyone happy, except Sand People, but that ok!",
];

/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 5000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;
