import Speech from "speak-tts";

const _addVoicesList = voices => {
  const list = window.document.createElement("div");
  let html =
    '<h2>Available Voices</h2><select id="languages"><option value="">autodetect language</option>';
  voices.forEach(voice => {
    html += `<option value="${voice.lang}" data-name="${voice.name}">${
      voice.name
    } (${voice.lang})</option>`;
  });
  list.innerHTML = html;
  window.document.getElementById('mainHeader').appendChild(list);
};

// const _wordsToSpell = [
//     'noticeable',
//     'population',
//     'imagination',
//     'gentleman',
//     'invitation',
//     'abundant',
//     'permission',
//     'scratch',
//     'curriculum',
//     'synthetic',
//     'catalogue',
//     'surrender',
//     'physician',
//     'whistling',
//     'doubtful',
//     'laughter',
//     'ascending',
//     'foreign',
//     'earthquake',
//     'government',
//     'scholarship',
//     'mysterious',
//     'announcement',
//     'environment',
//     'appreciation',
//     'expenditure',
//     'interrogation',
//     'catastrophe',
//     'perseverance',
//     'received'
// ];

let _wordsToSpell = [
  'adventure',
  'structure',
  'mysterious',
  'appreciation',
  'furniture',
  'maintenance',
  'ascending',
  'surprise',
  'scariest',
  'expenditure',
  'bracket',
  'sequence',
  'moisture',
  'received',
  'etiquette',
  'constitution',
  'foreign',
  'discussion',
  'scholarship',
  'camouflage',
  'recommend',
  'mathematician',
  'announcement',
  'plateau',
  'sculpture',
  'humorous',
  'perseverance',
  'interrogation',
  'successful',
  'musician'
];

let scoreCount = 0;
let wordIndex = 0;
let totalIncorrectAttempts = 0;
let currentIncorrectAttempts = 0;
let totalWordsAttempted = 0;

function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

function _init() {
  _wordsToSpell = shuffle(_wordsToSpell)
  const speech = new Speech();

  speech
    .init({
      volume: 0.5,
      lang: "en-GB",
      rate: 1,
      pitch: 1,
      //'voice':'Google UK English Male',
      //'splitSentences': false,
      listeners: {
        onvoiceschanged: voices => {
          console.log("Voices changed", voices);
        }
      }
    })
    .then(data => {
      console.log("Speech is ready", data);
      _addVoicesList(data.voices);
      _prepareSpeakButton(speech);
    })
    .catch(e => {
      console.error("An error occured while initializing : ", e);
    });
  const text = speech.hasBrowserSupport() ?
    "Hurray, your browser supports speech synthesis" :
    "Your browser does NOT support speech synthesis. Try using Chrome of Safari instead !";
  document.getElementById("support").innerHTML = text;
}

function _prepareSpeakButton(speech) {
  const speakButton = document.getElementById("play");
  const pauseButton = document.getElementById("pause");
  const resumeButton = document.getElementById("resume");
  const startTrainingButton = document.getElementById("startMyTraining");
  const submitAnswerButton = document.getElementById("submitAnswer");
  const inputAnswer = document.getElementById("inputAnswer");
  const mainHeader = document.getElementById("mainHeader");
  const trainingArena = document.getElementById("trainingArena");
  const textarea = document.getElementById("text");
  const languages = document.getElementById("languages");

  const scoreLabel = document.getElementById("scoreCounter");

  const lblIncorrectAttempts = document.getElementById("wrongAttempts");
  const currentWrongAttempts = document.getElementById("currentWrongAttempts");
  const lblTotalWordsAttempted = document.getElementById("totalWordsAttempted");
  const lblTotalWordsAvailable = document.getElementById("totalWordsAvailable");
  const lblScoreDivider = document.getElementById("scoreDivider");
  const divWordsDisplayArea = document.getElementById("wordsDisplayArea");
  const progressBar = document.getElementById("progressBar");
  const progressCounter = document.getElementById("progressCounter");


  let currentWordToSpell = _wordsToSpell[0];

  speakButton.addEventListener("click", () => {
    const language = languages.value;
    const voice = languages.options[languages.selectedIndex].dataset.name;
    if (language) speech.setLanguage(languages.value);
    if (voice) speech.setVoice(voice);
    speech
      .speak({
        text: textarea.innerText,
        queue: false,
        listeners: {
          onstart: () => {
            console.log("Start utterance");
          },
          onend: () => {
            console.log("End utterance");
          },
          onresume: () => {
            console.log("Resume utterance");
          },
          onboundary: event => {
            console.log(
              event.name +
              " boundary reached after " +
              event.elapsedTime +
              " milliseconds."
            );
          }
        }
      })
      .then(data => {
        console.log("Success !", data);
        mainHeader.hidden = true;
        trainingArena.classList.remove("d-none")
      })
      .catch(e => {
        console.error("An error occurred :", e);
      });
  });

  pauseButton.addEventListener("click", () => {
    speech.pause();
  });

  resumeButton.addEventListener("click", () => {
    speech.resume();
  });

  submitAnswerButton.addEventListener("click", () => {
    console.log("Submit Button Clicked!!")
    submitAnswer.disabled = true;
    if (inputAnswer.value.toLowerCase() === currentWordToSpell.toLocaleLowerCase()) {
      var currentMarks = (currentIncorrectAttempts * -1) + 10;

      if (currentMarks > 0)
        scoreCount += currentMarks;
      else
        scoreCount += 1;

      if (scoreCount % 2 == 0) {
        console.log('odd score');
        speech
          .speak({
            text: "Very Good my Friend. Now for the next word",
            queue: false
          });

        setTimeout({}, 2000);
      } else {
        console.log('even score');
        speech
          .speak({
            text: "Great Going buddy. Your current score is :" + scoreCount + "points. Next word coming up",
            queue: false
          })
        setTimeout({}, 2000);
      }


      scoreLabel.innerText = scoreCount;
      setNextWord();
    } else {
      currentIncorrectAttempts++;
      currentWrongAttempts.innerText = currentIncorrectAttempts;

      if (currentIncorrectAttempts < 2) {
        speech
          .speak({
            text: "Sorry That was an Incorrect Answer. Try Again!",
            queue: false
          })

        inputAnswer.style.backgroundColor = "red";
        inputAnswer.style.color = "white";
        submitAnswer.disabled = false;
      } else {
        speech
          .speak({
            text: "Sorry! That was a wrong spelling. Try the next word now",
            queue: false
          })
        setTimeout({}, 5000)
        setNextWord();
      }

    }

  });

  // Get the input field
  var input = document.getElementById("inputAnswer");

  // Execute a function when the user releases a key on the keyboard
  input.addEventListener("keyup", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("submitAnswer").click();
    }
  });

  function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
      // Pick a random index
      let index = Math.floor(Math.random() * counter);

      // Decrease counter by 1
      counter--;

      // And swap the last element with it
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }

    return array;
  }

  function setNextWord() {

    if (totalWordsAttempted === 0) {
      lblTotalWordsAttempted.classList.remove("d-none")
      lblTotalWordsAvailable.classList.remove("d-none")
      progressBar.classList.remove("d-none")
      lblScoreDivider.classList.remove("d-none")
      progressCounter.setAttribute("aria-valuemax", 0)
      lblTotalWordsAvailable.innerText = _wordsToSpell.length
    }
    totalWordsAttempted++;
    lblTotalWordsAttempted.innerText = totalWordsAttempted;

    const currentWord = _wordsToSpell[wordIndex]
    progressCounter.setAttribute("aria-valuenow", totalWordsAttempted)

    const percentageComplete = (totalWordsAttempted * 100 / _wordsToSpell.length);
    const progress = "width: " + percentageComplete + "%";

    progressCounter.setAttribute("style", progress)

    if (currentIncorrectAttempts > 0) {
      totalIncorrectAttempts++;
      lblIncorrectAttempts.innerText = totalIncorrectAttempts;
      divWordsDisplayArea.innerHTML += "<label class='btn btn-danger'>" + currentWord + " <span class='badge badge-danger badge-pill'><i class='fa fa-times-circle' aria-hidden='true'></i></span></label>"
    } else {
      divWordsDisplayArea.innerHTML += "<label class='btn btn-primary'>" + currentWord + " <span class='badge badge-success badge-pill'><i class='fa fa-check' aria-hidden='true'></i></span></label>"
    }
    currentIncorrectAttempts = 0;
    currentWrongAttempts.innerText = "0";

    inputAnswer.value = "";
    inputAnswer.style.backgroundColor = "white";
    inputAnswer.style.color = "black"










    if (totalIncorrectAttempts > 3) {

      speech
        .speak({
          text: `Sorry! You have Exceeded all the lifelines. Your Final Score is ${scoreCount}. Please restart to try again.`,
          queue: false
        })
      setTimeout({}, 2000)
      document.getElementById("msgGameOver").classList.remove("d-none")
      submitAnswerButton.style.visibility = 'hidden';
      startTrainingButton.style.visibility = 'hidden';
      progressBar.classList.add("d-none")
    } else if (wordIndex >= _wordsToSpell.length) {
      speech
        .speak({
          text: "You have completed Training for all the words today. Your Final score is " + scoreCount + " points",
          queue: false
        })

        progressBar.classList.add("d-none")

      if (totalIncorrectAttempts == 0)
        document.getElementById("msgAllGood").classList.remove("d-none");
    } else {
      //move to next word
      wordIndex++;
      currentWordToSpell = _wordsToSpell[wordIndex];
      speech
        .speak({
          text: "Ready for Next Word..., spell " + currentWordToSpell,
          queue: false
        })
      setTimeout({}, 2000)
    }
    submitAnswer.disabled = false;
  };
  startTrainingButton.addEventListener("click", () => {


    speech
      .speak({
        text: "Spell " + currentWordToSpell,
        queue: false,
        listeners: {
          onstart: () => {

            startTrainingButton.value = "Play Word";
            console.log("Start utterance");
          },
          onend: () => {
            console.log("End utterance");
          },
          onresume: () => {
            console.log("Resume utterance");
          },
          onboundary: event => {
            console.log(
              event.name +
              " boundary reached after " +
              event.elapsedTime +
              " milliseconds."
            );
          }
        }
      })
      .then(data => {
        console.log("Success !", data);
        startTrainingButton.innerText = "Play Word";
      })
      .catch(e => {
        console.error("An error occurred :", e);
      });

  })
}

_init();