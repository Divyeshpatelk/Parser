// Read File 10Maths_01_U1-Converted

var fs = require("fs");
const path = require("path");
//var indexJS = require('./index');
/* var QuestionsSymbols = require("./ConfigeQuestionsSymbols");
console.log("\nMy Configurebale files :-"+QuestionsSymbols.NumberWithbrackets);
 */
var argv = require("minimist")(process.argv.slice(2));
var myFiles = argv.config;
//var myFiles = "/media/divyesh/9A86D0FD86D0DB39/Divyesh/Projects/npm_project/test_project/js/PatternWithDot.js"
//console.log("my ffile", myFiles);
var myconfigFile = fs.readFileSync(myFiles, "utf8");
var jsonData = JSON.parse(myconfigFile);
var jsonDataID = argv.configID;
//console.log("json :- "+jsonData.two.quePattern);
//console.log("jsonID :- "+jsonDataID);
var replacePattern = new RegExp(/(\r\n\t|\n|\r\t)/gm);
//var quePattern = new RegExp(/^[(](\d+)[)]/gm);
var quePattern = new RegExp(jsonData[jsonDataID].quePattern, "gm");
//var optPattern = new RegExp(/^([(][a-zA-z]+[)])/gm);
var optPattern = new RegExp(jsonData[jsonDataID].optPattern, "gm");
//var ansPattern = new RegExp(/^Ans..*/gm);
var ansPattern = new RegExp(jsonData[jsonDataID].ansPattern, "gm");
//var idntPattern = new RegExp(/\((\d+)\)\s+\(([a-zA-Z])\)/gm);
var idntPattern = new RegExp(jsonData[jsonDataID].idntPattern, "gm");
/* var groupofIdentifier = new RegExp(
  /(##qs-(\d+)([\s\S]*?)##qe-\d+)|(##os-(\d+)([\s\S]*?)##oe-\d+)/gm
); */
var explainationWithHint = new RegExp(
  jsonData[jsonDataID].explainationWithHint,
  "gm"
);
var groupofIdentifier = new RegExp(
  jsonData[jsonDataID].groupofIdentifier,
  "gm"
);

var result = new Array();
var nonAnswerQue = new Array();
var notAnswer = new Array();

//JSON Block .............................................
var outputResult = [
  /* {
    type: "",
    questions: "",
    choices: {
      id:'',
      text:''
    },
    rightAnswer: ""
  } */
];

var stringArray = new Array();
var nonAnsQuetions = [
  /* {
    identifier: "",
    que: [
      {
        qno: "",
        type:'',
        questions: "",
        choices:{
            id:'',
            text:''
        },
        rightAnswer: ""
      }
    ]
  } */
];
var nonAnsOptions = [
  {
    identifier: "",
    answer: {
      qno: "",
      ans: ""
    }
  }
];

var explainationArray = [
  {
    qno: "",
    exp: ""
  }
];
//JSON Block ..............................................

var outputResultIndex = 0;
var readInput = argv.input;
//var readInput = indexJS.outputText;
//const inputFile = path.resolve(argv['_'].length > 0 ? argv['_'][0] : null);
/*if (!inputFile) {
  console.log('No input file.');
}*/
var readData = fs.readFileSync(readInput, "utf8");
//replace img start


var tempreadData = readData;
tempreadData = tempreadData.match(/src=("[^\s]*)/gm);
var oIMG = argv.oIMG;
var rIMG = argv.rIMG;
var rIMG = new RegExp(rIMG, "gm");

if(tempreadData){
for(var srcIndex=0;srcIndex<tempreadData.length;srcIndex++)
{
    var imgName = path.basename(tempreadData[srcIndex]);
    console.log("basename :-",imgName);
    var imgPath = path.dirname(tempreadData[srcIndex]);
    console.log("Path :-",imgPath);
    var fullPath = `src="${oIMG}/${imgName}`;
    console.log("fullpath :-",fullPath);
    readData = readData.replace(`${imgPath}/${imgName}`,fullPath);
}
console.log("Images replace successfully");
}
//replace img stop

withoutAnswer();
outputResultIndex = 0;
withAnswer();

function withAnswer() {
  var tempForReplace = readData.replace(groupofIdentifier, "");
  if (explainationWithHint)
    var tempForReplace = readData.replace(explainationWithHint, "");

  result = tempForReplace.match(/.*/gm);
  //start loop with Answer..........................................
  while (result.length > outputResultIndex) {
    // checking the quetions....................................................................
    var quetions = readQuetions(result, quePattern, optPattern);
    var remTagofquetions = "";
    //checking options..........................................................................
    var options = readOptions(result, optPattern, quePattern, ansPattern);
    var optionArray = new Array();
    // Check the accepteble or not .............................................................
    if (quetions != null && options.length != 0) {
      //console.log("\nQuetions is :- " + quetions.data + "\n");
      //for option
      //console.log("Option is :- ");
      remTagofquetions = quetions.data.replace(quePattern, "");
      optionArray = spreadOption(options);
      if (optionArray.length == 4) {
        var optionArraywithID = [];
        for (var i = 0; i < optionArray.length; i++) {
          optionArraywithID.push({ id: i + 1, text: optionArray[i] });
          //console.log("Option 2 :- "+optionArray[i]);
        }
        //For Answer ...............................................................................
        var answer = readAnswer(result, ansPattern, quePattern);
        //console.log("Wothout answer is :-",answer);
        if (answer) answer = answer.replace(/ans:\s/gm, "");
        //console.log("with regex answer is :-",answer);
        // console.log("\nAnswer is :- " + answer + "\n");
        //console.log(
        //"End Line ..................................................................................."
        //);

        // for logTable of quetion which has not yet answer (skip)
        if (answer != null) {
          //var answerWithoutB = answer[0].match(/[a-zA-Z]/g);
          var answerWithoutB = answer;
          outputResult.push({
            type: "SINGLE",
            question: remTagofquetions.trim(),
            // questionDelta: "",
            choices: optionArraywithID,
            difficultyLevel: 1,
            // explanation: null,
            // explanationDelta: null,
            rightAnswers: [AtoZwithNumber(answerWithoutB)],
            explanation: "",
            courses: [
              {
                mappingId: argv.mappingId,
                subjectid: argv.subjectid,
                indexid: argv.indexid,
                sectionId: argv.sectionId
              }
            ],
            testId: argv.testId,
            purpose: argv.purpose
          });
        }
      }
    }
  } // end loop with Answer........................................................
}

function withoutAnswer() {
  nonAnswerQue = readData.match(groupofIdentifier);
  var explaination = [],
    explainationJson = [];
  if (explainationWithHint) {
    explaination = readData.match(explainationWithHint);
    explainationJson = storeExplaination(explaination);
  }

  //main work ............................
  if (nonAnswerQue) {
    for (var n = 0; n < nonAnswerQue.length; n++) {
      //Start work for identifier
      //console.log("Question list :-"+nonAnswerQue.length);
      //console.log("Question list Data :-"+nonAnswerQue[n]);
      if (nonAnswerQue[n].match(/^##qs-([1-9])/gm)) {
        //if(nonAnswerQue[n])
        //nonAnsQuetions[identifierIndex].identifier = nonAnswerQue[n].match(/\d./gm);
        //var ide = nonAnswerQue[n].match(/^##qs-(\d+)/gm);
        var excePattern = new RegExp(/^##qs-(\d+)/gm);
        var groupMatch = excePattern.exec(nonAnswerQue[n].match(excePattern));
        var ide = groupMatch[1];
        console.log("identifire is :-", ide);
        var tempque = nonAnswerQue[n].match(/.*/gm);
        var storeQuestionsSet = [];
        for (; outputResultIndex < tempque.length; outputResultIndex++) {
          if (!tempque[outputResultIndex]) continue;
          nonAnsQuetions;
          while (!tempque[outputResultIndex].match(/^##qe-([1-9])/gm)) {
            var que = readQuetions(tempque, quePattern, optPattern);
            var opt = readOptions(tempque, optPattern, quePattern, ansPattern);
            if (que && opt) {
              //console.log("option is :- ",opt);
              var options1 = spreadOption(opt);

              var optionArraywithID = [];
              for (var i = 0; i < options1.length; i++) {
                optionArraywithID.push({ id: i + 1, text: options1[i] });
              }
              remTagofquetions = que.data.replace(quePattern, "");
              var temp = {
                qno: que.id,
                type: "single",
                questions: remTagofquetions.trim(),
                choices: optionArraywithID, //baki
                ans: [],
                explaination: ""
              };
              storeQuestionsSet.push(temp);
            }

            if (!tempque[outputResultIndex]) break;
          }
          outputResultIndex++;
        }
        var allQuestionsData = { identifier: ide, que: storeQuestionsSet };
        nonAnsQuetions.push(allQuestionsData);
      } else if (nonAnswerQue[n].match(/^##os-([1-9])/gm)) {
        //var ide = nonAnswerQue[n].match(/\d./gm);
        //console.log("Answer is work :-"+nonAnswerQue[n]);
        var excePattern = new RegExp(/^##os-(\d+)/gm);
        var groupMatch = excePattern.exec(nonAnswerQue[n].match(excePattern));
        var ide = groupMatch[1];
        console.log("identifier of option :- " + ide);

        outputResultIndex++;
        var multipleOption = "";
        var tempque = nonAnswerQue[n].match(/.*/gm);
        console.log(tempque, "tempque length", tempque.length);
        for (; outputResultIndex < tempque.length; outputResultIndex++) {
          while (!tempque[outputResultIndex].match(/^##oe-([1-9])/gm)) {
            multipleOption += tempque[outputResultIndex++];
          }
          //console.log("Multiple option is :- "+multipleOption);
          outputResultIndex++;
        }

        storeAnswerForMulichoice(multipleOption, ide);
      }
      outputResultIndex = 0;
    } // End main For Loop
    //end main work.........................
  }
  addExplaination(explainationJson);
}
//End the program ................................................................................
//Display Section here...................................
/* console.log("\n***************************************************\n");
console.log("\nWithout answer section :- \n"); */
for (var i = 0; i < nonAnsQuetions.length; i++) {
  //console.log("Identifier is :-" + nonAnsQuetions[i].identifier);
  for (var k = 0; k < nonAnsQuetions[i].que.length; k++) {
    /* console.log(nonAnsQuetions[i].que[k].questions);
    console.log(
      "----------------------------------------------------------------"
    ); */
  }
}
/* console.log("\n***************************************************\n");
console.log("\nWith answer section :- \n"); */
/* for (var i = 1; i < outputResult.length; i++) {
  console.log(outputResult[i].questions + "\n");
  for (var k = 0; k < outputResult[i].choices.length; k++) {
    //console.log(outputResult[i].choices[k].text);
  }
  console.log(outputResult[i].rightAnswer + "\n");
   console.log(
    "----------------------------------------------------------------"
  ); 
}
console.log("\n***************************************************\n"); */
//End Display Section ...................................

//Write json into text with Answer
/* var ReadOutputFile = argv.outputText;
fs.writeFile(ReadOutputFile, JSON.stringify(outputResult), err => {
  // throws an error, you could also catch it here
  if (err) throw err;
  // success case, the file was saved
  console.log("Data Save Successfully with Answer");
}); */
//End With Answer

//Write json into text without Answer
outputResult2 = [];
//console.log("Final output for without Answer"+nonAnsQuetions);
for (var i = 0; i < nonAnsQuetions.length; i++) {
  for (var j = 0; j < nonAnsQuetions[i].que.length; j++) {
    outputResult2.push({
      type: "SINGLE",
      question: nonAnsQuetions[i].que[j].questions,
      // questionDelta: "",
      choices: nonAnsQuetions[i].que[j].choices,
      difficultyLevel: 1,
      // explanation: null,
      // explanationDelta: null,
      rightAnswers: nonAnsQuetions[i].que[j].ans,
      explanation: nonAnsQuetions[i].que[j].explaination,
      courses: [
        {
          mappingId: argv.mappingId,
          subjectid: argv.subjectid,
          indexid: argv.indexid,
          sectionId: argv.sectionId
        }
      ],
      testId: argv.testId,
      purpose: argv.purpose
    });
  }
}
/* console.log("Successfullly Converted nonAnsQuetions => OutputResult2 withoutQuetions");
  var ReadOutputMultiQuestion = argv.outputText2;
  fs.writeFile(ReadOutputMultiQuestion, JSON.stringify(outputResult2), err => {
    // throws an error, you could also catch it here
    if (err) throw err;
  
    // success case, the file was saved
    console.log("Data Save Successfully WithoutAnswer");
  }); */

//End Without Answer
var combineFile = outputResult.concat(outputResult2);
//var ReadOutputFile = argv.outputText;
var fileName = path.basename(readInput);
var filePath = path.dirname(readInput);
var onlyfilenamewithoutExtension = fileName.match(/^((?![.]txt).)*/gm);
var newDir = `${filePath}`;

var ReadOutputFile = `${newDir}/${onlyfilenamewithoutExtension}-JSON.txt`;

//End
console.log("Path to store JSON", ReadOutputFile);
fs.writeFile(ReadOutputFile, JSON.stringify(combineFile), err => {
  // throws an error, you could also catch it here
  if (err) throw err;
  // success case, the file was saved
  console.log("Data Save Successfully with Answer");
});

function readQuetions(result, quePattern, optPattern) {
  var dataOfQuetions = "";

  for (; outputResultIndex < result.length; outputResultIndex++) {
    if (result[outputResultIndex].match(quePattern)) {
      var groupMatch = quePattern.exec(
        result[outputResultIndex].match(quePattern)
      );
      var no = groupMatch[1];

      while (!result[outputResultIndex].match(optPattern)) {
        if(result[outputResultIndex])
        result[outputResultIndex] += "<br>";
        dataOfQuetions += result[outputResultIndex];

        outputResultIndex++;

        if (outputResultIndex >= result.length) break;

        if (!result[outputResultIndex]) continue;

        if (result[outputResultIndex].match(quePattern)) {
          dataOfQuetions = "";
        }
      }
      return { id: no, data: dataOfQuetions };
    }
  }
  return null;
}
function readOptions(result, optPattern, quePattern, ansPattern) {
  /* var tempArr = new Array();
  for (; outputResultIndex < result.length; outputResultIndex++) {
    if (result[outputResultIndex].match(optPattern)) {
      tempArr.push(result[outputResultIndex]);
    } else if (
      result[outputResultIndex].match(quePattern) ||
      result[outputResultIndex].match(ansPattern)
    ) {
      break;
    }
  }
  return tempArr; */
  var tempArr = "";
  var count = 0;
  for (; outputResultIndex < result.length; outputResultIndex++) {
    if (result[outputResultIndex].match(optPattern)) {
      tempArr += result[outputResultIndex];
    } else if (
      result[outputResultIndex].match(quePattern) ||
      result[outputResultIndex].match(ansPattern) ||
      result[outputResultIndex].match(/^##qe-([1-9])/gm)
    ) {
      break;
    } else {
      tempArr += result[outputResultIndex];
    }
  }
  return tempArr;
}

//only function which called by withAnswerFunction()........
function readAnswer(result, ansPattern, quePattern) {
  for (; outputResultIndex < result.length; outputResultIndex++) {
    if (result[outputResultIndex].match(ansPattern)) {
      return result[outputResultIndex];
    } else if (result[outputResultIndex].match(quePattern)) {
      // need to be improve more -->
      break;
    }
  }

  return null;
}

function spreadOption(options) {
  var splitArray;
  var temp = new Array();
  //for (var i = 0; i < options.length; i++) {
  //splitArray = options.split(new RegExp(optPattern,"gm")); //change 1
  splitArray = options.split(new RegExp(/[(][a-eA-E][)]/gm));
  for (var j = 1; j < splitArray.length; j++) {
    //console.log("option :- "+splitArray[j]);
    temp.push(splitArray[j].trim());
    //console.log(splitArray[j]);
  }
  //}

  return temp;
}

function storeAnswerForMulichoice(multipleOption, ide) {
  var multiOption = [];
  multiOption = multipleOption.match(idntPattern);
  var que, answer;
  var storeAnswerSet = [];
  for (var i = 0; i < multiOption.length; i++) {
    //que = multiOption[i].match(/^[(](\d+)[)]/gm);
    var excePattern = new RegExp(
      jsonData[jsonDataID].queAnswerPatternINwithoutAnswerPattern,
      "gm"
    ); //changes 2
    var groupMatch = excePattern.exec(multiOption[i].match(excePattern));
    var que = groupMatch[1];

    excePattern = new RegExp(
      jsonData[jsonDataID].ansAnswerPatternINwithoutAnswerPattern,
      "gm"
    ); //changes 3
    groupMatch = excePattern.exec(multiOption[i].match(excePattern));
    //answer = multiOption[i].match(/[(]([a-zA-Z]+)[)]/gm);
    answer = groupMatch[1];
    //console.log("Without Answer is :- "+answer);
    /* console.log("Question is :-"+que+"\n");
    console.log("Answer is :-"+answer+"\n"); */
    var temp = { qno: que, ans: answer };
    storeAnswerSet.push(temp);
  }
  var TempStoreAnswer = { identifier: ide, answer: storeAnswerSet };
  nonAnsOptions.push(TempStoreAnswer);

  storeAnswerTononAnsQuetions();
}

function storeAnswerTononAnsQuetions() {
  if (nonAnsQuetions != null && nonAnsOptions != null) {
    for (var i = 0; i < nonAnsQuetions.length; i++) {
      if (nonAnsQuetions[i].identifier === nonAnsOptions[1].identifier) {
        for (var j = 0; j < nonAnsQuetions[i].que.length; j++) {
          for (var k = 0; k < nonAnsOptions[1].answer.length; k++) {
            //console.log("option quetion number :-"+nonAnsOptions[1].answer[k].qno);
            //console.log("quetion quetion number :-"+nonAnsQuetions[i].que[j].qno);
            //var tempQno = nonAnsOptions[1].answer[k].qno;
            //console.log("quetion :-"+ide);
            if (
              nonAnsQuetions[i].que[j].qno === nonAnsOptions[1].answer[k].qno
            ) {
              nonAnsQuetions[i].que[j].ans.push(
                AtoZwithNumber(nonAnsOptions[1].answer[k].ans)
              );
            }
          }
        }
      }
      break;
    }
  }
  nonAnsOptions = [];
}

function AtoZwithNumber(answer) {
  if (answer == "a" || answer == "A") {
    return 1;
  } else if (answer == "b" || answer == "B") {
    return 2;
  } else if (answer == "c" || answer == "C") {
    return 3;
  } else if (answer == "d" || answer == "D") {
    return 4;
  } else {
    return null;
  }
}

function storeExplaination(explaination) {
  var explainationData = [];
  if(explaination){
  for (var i = 0; i < explaination.length; i++) {
    explainationData = explaination[i].match(/.*/gm);
    //console.log("explainationData length is :- "+explainationData);
    for (var j = 0; j < explainationData.length; j++) {
      var dataOfQuetions = "";
      if (explainationData[j].match(quePattern)) {
        var groupMatch = quePattern.exec(explainationData[j].match(quePattern));
        var no = groupMatch[1];
        //console.log("not error ",no);
        do {
          dataOfQuetions += explainationData[j];
          //console.log("Explaination data is ",dataOfQuetions);
          j++;

          if (j >= explainationData.length) break;

          if (!explainationData[j]) continue;

          if (explainationData[j].match(quePattern)) {
            break;
          }
        } while (!explainationData[j].match(quePattern));
        j--;
        explainationArray.push({
          qno: no,
          exp: dataOfQuetions.replace(quePattern, "")
        });
      }
    }
  }

  //Display the explaination Array
  /*
   for(var k=1;k<explainationArray.length;k++){
      console.log("Explaination is :- ","qno :- ",explainationArray[k].qno,"data :- ",explainationArray[k].exp);
  } */
}
  return explainationArray;
}

function addExplaination(explainationJson) {
  if (nonAnsQuetions && explainationJson) {
    for (var i = 0; i < explainationJson.length; i++) {
      for (var k = 0; k < nonAnsQuetions.length; k++) {
        for (var j = 0; j < nonAnsQuetions[k].que.length; j++) {
          if (nonAnsQuetions[k].que[j].qno === explainationJson[i].qno) {
            nonAnsQuetions[k].que[j].explaination = explainationJson[i].exp;
          } else {
            //console.log("error ",explainationJson[i].qno);
          }
        }
      }
    }
  }
}
