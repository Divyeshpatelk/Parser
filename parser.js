var fs = require("fs");
const path = require("path");
var cmd = require("node-cmd");
var argv = require("minimist")(process.argv.slice(2));
//var argv = "/media/divyesh/9A86D0FD86D0DB39/Divyesh/Projects/npm_project/MainParser/configFile.txt";
var myFiles = argv.config;
var myconfigFile = fs.readFileSync(myFiles, "utf8");
var jsonData = JSON.parse(myconfigFile);
var key = argv.key;
//Start
//module.exports = outputText;
//End

function textTOhtmlParser(json, onlyfilenamewithoutExtension, outputText) {
  console.log(" *** onlyfilenamewithoutExtension" + onlyfilenamewithoutExtension)
  var config = json.textPattern;
  var textPatternID = json.textPatternID;
  //var outputJSON = json.outputJSON;
  var mappingId = json.mappingId;
  var subjectid = json.subjectid;
  var indexid = json.indexid;
  var accountid = json.accountid;
  var folderID = json.folderID;   
  var testId = json.testId;
  var sectionId = json.sectionId;
  var purpose = json.purpose;
  var imgReplacePath = `https://static-assets.pedagogy.study/contents/${accountid}/question/${mappingId}/${subjectid}/${indexid}/${folderID}`;
  var searchImagePath = `${onlyfilenamewithoutExtension}`;
  //var searchImagePath = `Paper03_html_`;
  console.log("Image name :-",onlyfilenamewithoutExtension);
  console.log("Image path :-",imgReplacePath);
  var textTOjson;
  if(json.queAnswerPatternINwithoutAnswerPattern)
  {
    var queAnswerPatternINwithoutAnswerPattern = json.queAnswerPatternINwithoutAnswerPattern;
    var ansAnswerPatternINwithoutAnswerPattern = json.ansAnswerPatternINwithoutAnswerPattern;
    var explainationWithHint = json.explainationWithHint;
    textTOjson = `node textToHtml.js --input=${outputText} --config=${config} --configID=${textPatternID} --mappingId=${mappingId} --subjectid=${subjectid} --indexid=${indexid} --oIMG=${imgReplacePath} --rIMG=${searchImagePath} --testId=${testId} --sectionId=${sectionId} --purpose=${purpose} --queAnswerPatternINwithoutAnswerPattern=${queAnswerPatternINwithoutAnswerPattern} --ansAnswerPatternINwithoutAnswerPattern=${ansAnswerPatternINwithoutAnswerPattern} --explainationWithHint=${explainationWithHint}`;  
  }
  else
  {
    //var textTOjson = `node textToHtml.js --input=${outputText} --config=${config} --configID=${textPatternID} --mappingId=${mappingId} --subjectid=${subjectid} --indexid=${indexid} --oIMG=${imgReplacePath} --rIMG=${searchImagePath}`;
    textTOjson = `node textToHtml.js --input=${outputText} --config=${config} --configID=${textPatternID} --mappingId=${mappingId} --subjectid=${subjectid} --indexid=${indexid} --oIMG=${imgReplacePath} --rIMG=${searchImagePath} --testId=${testId} --sectionId=${sectionId} --purpose=${purpose}`;
  }
  
  cmd.get(textTOjson, function(err, data, stderr) {
    console.log("Display data JSON :-" + data + "\n");
    console.log("Error is JSON :-" + err + "\n");
  });
  console.log("TEXT to JSON Successfully built");
}

function parseHTML(json) {
  var input = json.input;
  console.log("Input json", input);
  //var outputHTML = json.outputHTML;
  //var outputText = json.outputText;
  var fileName = path.basename(json.input);
  var filePath = path.dirname(json.input);
  var imgSize = argv.imgSize;
  var onlyfilenamewithoutExtension = fileName.match(/^((?![.]html).)*/gm); 
  var newDir = `${filePath}`;
  var outputHTML = `${newDir}/${onlyfilenamewithoutExtension}-converted.html`;
  var outputText = `${newDir}/${onlyfilenamewithoutExtension}-converted.txt`;
  console.log("outputPath", outputText);
 
 //Joel's Parser. uncomment when converting the original HTML to converted HTML & TXT.
  if(key === 1)
  {
    var htmlTOtext = `node index.js --input=${input} --outputHTML=${outputHTML} --outputText=${outputText} --imgSize=${imgSize}`;
    cmd.get(htmlTOtext, function(err, data, stderr) {
    console.log("Display data HTML :-" + data + "\n");
    console.log("Error is HTML :-" + err + "\n");
    console.log("HTML to Text Successfully built");
  });
  }
  else if(key === 2)
  {
    //Divyesh's Parser. Run when converting TXT to json.
    //-->
    textTOhtmlParser(json, onlyfilenamewithoutExtension, outputText);
    //-->
  }
  else
  {
      var htmlTOtext = `node index.js --input=${input} --outputHTML=${outputHTML} --outputText=${outputText}`;
      cmd.get(htmlTOtext, function(err, data, stderr) {
      console.log("Display data HTML :-" + data + "\n");
      console.log("Error is HTML :-" + err + "\n");
      console.log("HTML to Text Successfully built");
      textTOhtmlParser(json, onlyfilenamewithoutExtension, outputText);
    });
  }  
}

for (var i = 0; i < jsonData.length; i++) {
  var aJson = jsonData[i];
  parseHTML(aJson);
}
//cmd.run('sh hello.sh name');