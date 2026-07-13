const characters = {

  "김보경": {
    shortName: "보경",
    image: "assets/characters/bokyung.png",
    color: "#ff8ebd",

    ending:
      "언제나 밝게 웃던 김보경은 네가 자신의 이야기를 진심으로 들어주었다는 사실을 기억하고 있었다. 축제의 불빛 아래, 두 사람은 앞으로도 함께 많은 추억을 만들기로 했다."
  },

  "성수미": {
    shortName: "수미",
    image: "assets/characters/sumi.png",
    color: "#aa8bd8",

    ending:
      "조용히 곁을 지켜 주던 성수미는 네가 자신의 세심한 마음을 알아봐 준 것이 고마웠다고 말했다. 두 사람은 도서관 창가에서 서로의 마음을 확인했다."
  },

  "서주은": {
    shortName: "주은",
    image: "assets/characters/jueun.png",
    color: "#ffac88",

    ending:
      "늘 장난스럽던 서주은은 마지막 순간만큼은 진지했다. 함께 웃었던 평범한 하루들이 가장 특별했다는 말과 함께 새로운 이야기가 시작되었다."
  },

  "박민주": {
    shortName: "민주",
    image: "assets/characters/minju.png",
    color: "#7fbbe8",

    ending:
      "무심한 듯 보였던 박민주는 사실 네가 했던 작은 말들을 모두 기억하고 있었다. 옥상에 부는 바람 속에서 두 사람은 천천히 서로에게 다가가기로 했다."
  }

};


const story = [

  {
    day: 1,

    background: "school-background",

    speaker: "안내",

    text:
      "{player}의 전학 첫날. 교문 앞에서 누군가 떨어뜨린 학생증을 발견했다.",

    character: null
  },


  {
    day: 1,

    background: "school-background",

    speaker: "김보경",

    text:
      "어? 그거 내 학생증인데! 찾아줘서 진짜 고마워. 너 오늘 전학 온 학생 맞지?",

    character: "김보경"
  },


  {
    day: 1,

    background: "school-background",

    speaker: "김보경",

    text:
      "첫날부터 정신없지? 내가 학교 구경시켜 줄까?",

    character: "김보경",

    choices: [

      {
        text:
          "좋아! 네가 알려주면 금방 적응할 것 같아.",

        scores: {
          "김보경": 3
        },

        result:
          "김보경은 환하게 웃으며 가장 먼저 매점 위치부터 알려 주었다."
      },

      {
        text:
          "고맙지만 혼자 천천히 둘러볼게.",

        scores: {
          "김보경": 0
        },

        result:
          "김보경은 조금 아쉬워했지만 필요하면 언제든 부르라고 말했다."
      },

      {
        text:
          "혹시 조용한 곳부터 알려줄 수 있어?",

        scores: {
          "성수미": 1
        },

        result:
          "김보경은 도서관이 좋겠다며 방향을 알려 주었다."
      }

    ]
  },


  {
    day: 2,

    background: "classroom-background",

    speaker: "안내",

    text:
      "점심시간, 자리가 부족해 네 앞에 누군가 조심스럽게 앉았다.",

    character: null
  },


  {
    day: 2,

    background: "classroom-background",

    speaker: "성수미",

    text:
      "여기 앉아도 될까? 시끄러운 곳은 조금 불편해서.",

    character: "성수미"
  },


  {
    day: 2,

    background: "classroom-background",

    speaker: "성수미",

    text:
      "전학 첫 주인데 괜찮아? 필요한 게 있으면 말해.",

    character: "성수미",

    choices: [

      {
        text:
          "네가 먼저 물어봐 줘서 마음이 놓였어.",

        scores: {
          "성수미": 3
        },

        result:
          "성수미는 잠시 놀란 표정을 지었다가 작게 미소 지었다."
      },

      {
        text:
          "학교 안내 자료를 빌려줄 수 있을까?",

        scores: {
          "성수미": 2
        },

        result:
          "성수미는 자신이 정리해 둔 메모까지 함께 건네주었다."
      },

      {
        text:
          "나는 시끄러운 쪽이 더 재미있던데.",

        scores: {
          "성수미": -1,
          "서주은": 1
        },

        result:
          "성수미는 고개를 끄덕였지만 대화는 조금 빨리 끝났다."
      }

    ]
  },


  {
    day: 3,

    background: "library-background",

    speaker: "안내",

    text:
      "방과 후 도서관에서 책을 찾다가 높은 선반 앞에서 곤란해하는 학생을 만났다.",

    character: null
  },


  {
    day: 3,

    background: "library-background",

    speaker: "서주은",

    text:
      "앗, 딱 좋은 타이밍! 저기 위에 있는 책 좀 꺼내 줄래?",

    character: "서주은"
  },


  {
    day: 3,

    background: "library-background",

    speaker: "서주은",

    text:
      "대신 내가 너한테도 하나 도와줄게. 뭐가 좋을까?",

    character: "서주은",

    choices: [

      {
        text:
          "그럼 같이 책 고르는 걸 도와줘.",

        scores: {
          "서주은": 3
        },

        result:
          "서주은은 의외로 진지하게 책을 골라 주었고 둘은 한참 이야기를 나누었다."
      },

      {
        text:
          "다음에 매점에서 음료 하나 사 줘.",

        scores: {
          "서주은": 2,
          "김보경": 1
        },

        result:
          "서주은은 거래 성립이라며 장난스럽게 손을 내밀었다."
      },

      {
        text:
          "괜찮아. 그냥 도와주고 싶었어.",

        scores: {
          "서주은": 1,
          "박민주": 1
        },

        result:
          "서주은은 평소보다 잠시 말이 없어졌다."
      }

    ]
  },


  {
    day: 4,

    background: "rooftop-background",

    speaker: "안내",

    text:
      "체육 수업이 끝난 뒤, 옥상으로 올라가는 계단에서 익숙한 목소리가 들렸다.",

    character: null
  },


  {
    day: 4,

    background: "rooftop-background",

    speaker: "박민주",

    text:
      "여기 있었네. 네가 떨어뜨린 노트, 교실에 두고 갈 뻔했어.",

    character: "박민주"
  },


  {
    day: 4,

    background: "rooftop-background",

    speaker: "박민주",

    text:
      "안에 적힌 계획표 봤는데 생각보다 열심히 사는구나. 힘들지는 않아?",

    character: "박민주",

    choices: [

      {
        text:
          "가끔 힘들지만 알아봐 주는 사람이 있으니 괜찮아.",

        scores: {
          "박민주": 3
        },

        result:
          "박민주는 시선을 피했지만 입가에는 작은 미소가 번졌다."
      },

      {
        text:
          "계획은 계획일 뿐이야. 잘 지키지는 못해.",

        scores: {
          "박민주": 1,
          "서주은": 1
        },

        result:
          "박민주는 그 정도가 오히려 인간적이라며 웃었다."
      },

      {
        text:
          "내 노트를 본 거야?",

        scores: {
          "박민주": -1
        },

        result:
          "박민주는 미안하다고 짧게 사과하고 노트를 건넸다."
      }

    ]
  },


  {
    day: 5,

    background: "festival-background",

    speaker: "안내",

    text:
      "학교 축제 당일. 네 명 모두 각자의 방식으로 네게 도움을 요청했다. 누구를 먼저 도울까?",

    character: null,

    choices: [

      {
        text:
          "김보경과 안내 부스를 꾸민다.",

        scores: {
          "김보경": 4
        },

        result:
          "둘은 분홍 리본과 전구로 부스를 꾸미며 계속 웃었다."
      },

      {
        text:
          "성수미와 전시 자료를 정리한다.",

        scores: {
          "성수미": 4
        },

        result:
          "성수미는 네가 있어 마음이 놓인다며 조용히 고마움을 전했다."
      },

      {
        text:
          "서주은과 무대 소품을 옮긴다.",

        scores: {
          "서주은": 4
        },

        result:
          "서주은은 힘든 일도 너와 함께하니 재미있다고 말했다."
      },

      {
        text:
          "박민주와 방송 장비를 점검한다.",

        scores: {
          "박민주": 4
        },

        result:
          "박민주는 말없이 네 몫의 음료까지 준비해 두었다."
      }

    ]
  },


  {
    day: 5,

    background: "festival-background",

    speaker: "안내",

    text:
      "축제가 끝나고 운동장에 불빛이 켜졌다. 지금까지의 선택이 하나의 결말로 이어진다.",

    character: null,

    ending: true
  }

];


const gameState = {

  player: "",

  sceneIndex: 0,

  scores: {
    "김보경": 0,
    "성수미": 0,
    "서주은": 0,
    "박민주": 0
  },

  showingResult: false,

  resultText: "",

  typingTimer: null

};


const dialogueText =
  document.getElementById("dialogue-text");

const speakerName =
  document.getElementById("speaker-name");

const choiceContainer =
  document.getElementById("choice-container");

const nextButton =
  document.getElementById("next-button");

const background =
  document.getElementById("background");

const characterArea =
  document.getElementById("character-area");

const characterImage =
  document.getElementById("character-image");

const characterPlaceholder =
  document.getElementById(
    "character-placeholder"
  );


function showScreen(screenId) {

  document
    .querySelectorAll(".screen")
    .forEach(function(screen) {
      screen.classList.remove("active");
    });

  document
    .getElementById(screenId)
    .classList.add("active");
}


function openNameScreen() {

  document.getElementById("nickname").value = "";

  showScreen("name-screen");

  setTimeout(function() {
    document.getElementById("nickname").focus();
  }, 100);
}


function openModal(modalId) {

  document
    .getElementById(modalId)
    .classList.add("open");
}


function closeModal() {

  document
    .querySelectorAll(".modal")
    .forEach(function(modal) {
      modal.classList.remove("open");
    });
}


function showToast(message) {

  const toast =
    document.getElementById("toast");

  toast.textContent = message;

  toast.classList.add("show");

  setTimeout(function() {
    toast.classList.remove("show");
  }, 1600);
}


function startGame() {

  const nicknameInput =
    document.getElementById("nickname");

  const nickname =
    nicknameInput.value.trim();

  if (nickname.length === 0) {

    showToast("닉네임을 입력해 주세요.");

    nicknameInput.focus();

    return;
  }


  gameState.player = nickname;

  gameState.sceneIndex = 0;

  gameState.showingResult = false;


  Object.keys(gameState.scores)
    .forEach(function(name) {
      gameState.scores[name] = 0;
    });


  document.getElementById(
    "player-name"
  ).textContent = nickname;


  showScreen("game-screen");

  renderScene();
}


function typeText(text) {

  clearInterval(gameState.typingTimer);

  dialogueText.textContent = "";

  const speed =
    Number(
      document
        .getElementById("text-speed")
        .value
    );


  let index = 0;


  gameState.typingTimer =
    setInterval(function() {

      dialogueText.textContent +=
        text[index] || "";

      index += 1;


      if (index >= text.length) {

        clearInterval(
          gameState.typingTimer
        );

        gameState.typingTimer = null;
      }

    }, speed);
}


function finishTyping() {

  if (!gameState.typingTimer) {
    return false;
  }


  clearInterval(gameState.typingTimer);

  gameState.typingTimer = null;


  const scene =
    story[gameState.sceneIndex];


  if (gameState.showingResult) {

    dialogueText.textContent =
      gameState.resultText;

  } else {

    dialogueText.textContent =
      scene.text.replaceAll(
        "{player}",
        gameState.player
      );
  }


  return true;
}


function updateCharacter(characterName) {

  if (!characterName) {

    characterArea.classList.add("hidden");

    return;
  }


  characterArea.classList.remove("hidden");


  const information =
    characters[characterName];


  characterPlaceholder.textContent =
    information.shortName[0];


  characterPlaceholder.style.background =
    "linear-gradient(145deg, " +
    information.color +
    ", #e5d8ff)";


  characterImage.style.display = "none";

  characterPlaceholder.style.display =
    "grid";


  characterImage.src =
    information.image;


  characterImage.alt =
    characterName + " 캐릭터";


  characterImage.onload = function() {

    characterImage.style.display =
      "block";

    characterPlaceholder.style.display =
      "none";
  };


  characterImage.onerror = function() {

    characterImage.style.display =
      "none";

    characterPlaceholder.style.display =
      "grid";
  };
}


function renderScene() {

  const scene =
    story[gameState.sceneIndex];


  if (!scene) {

    showEnding();

    return;
  }


  document.getElementById(
    "day-number"
  ).textContent = scene.day;


  background.className =
    "background " + scene.background;


  speakerName.textContent =
    scene.speaker;


  updateCharacter(scene.character);


  gameState.showingResult = false;

  gameState.resultText = "";


  choiceContainer.innerHTML = "";


  if (scene.choices) {

    nextButton.style.display = "none";

  } else {

    nextButton.style.display = "block";
  }


  const sceneText =
    scene.text.replaceAll(
      "{player}",
      gameState.player
    );


  typeText(sceneText);


  if (scene.choices) {

    scene.choices.forEach(
      function(choice) {

        const choiceButton =
          document.createElement("button");


        choiceButton.className =
          "choice-button";


        choiceButton.textContent =
          "♡ " + choice.text;


        choiceButton.onclick =
          function() {
            selectChoice(choice);
          };


        choiceContainer.appendChild(
          choiceButton
        );
      }
    );
  }


  if (scene.ending) {

    nextButton.textContent =
      "ENDING ▶";

  } else {

    nextButton.textContent =
      "NEXT ▶";
  }
}


function selectChoice(choice) {

  if (finishTyping()) {

    setTimeout(function() {
      selectChoice(choice);
    }, 20);

    return;
  }


  Object.entries(
    choice.scores || {}
  ).forEach(function(entry) {

    const characterName = entry[0];

    const amount = entry[1];

    gameState.scores[characterName] +=
      amount;
  });


  choiceContainer.innerHTML = "";


  gameState.showingResult = true;

  gameState.resultText =
    choice.result;


  speakerName.textContent =
    "결과";


  typeText(choice.result);


  nextButton.style.display =
    "block";

  nextButton.textContent =
    "NEXT ▶";
}


function nextScene() {

  if (finishTyping()) {
    return;
  }


  const scene =
    story[gameState.sceneIndex];


  if (gameState.showingResult) {

    gameState.sceneIndex += 1;

    renderScene();

    return;
  }


  if (scene.choices) {
    return;
  }


  if (scene.ending) {

    showEnding();

    return;
  }


  gameState.sceneIndex += 1;

  renderScene();
}


function findWinner() {

  const scoreList =
    Object.entries(gameState.scores);


  const highestScore =
    Math.max(
      ...scoreList.map(
        function(item) {
          return item[1];
        }
      )
    );


  const winners =
    scoreList.filter(
      function(item) {
        return item[1] === highestScore;
      }
    );


  if (winners.length === 1) {

    return winners[0][0];
  }


  const priority = [
    "김보경",
    "성수미",
    "서주은",
    "박민주"
  ];


  return priority.find(
    function(name) {

      return winners.some(
        function(winner) {
          return winner[0] === name;
        }
      );
    }
  );
}


function showEnding() {

  const winner =
    findWinner();


  const information =
    characters[winner];


  document.getElementById(
    "ending-title"
  ).textContent =
    winner + " 엔딩";


  const endingIcon =
    document.getElementById(
      "ending-icon"
    );


  endingIcon.textContent =
    information.shortName[0];


  endingIcon.style.background =
    "linear-gradient(145deg, " +
    information.color +
    ", #e2d6ff)";


  document.getElementById(
    "ending-text"
  ).textContent =
    gameState.player +
    ", " +
    information.ending;


  const scoreList =
    document.getElementById(
      "score-list"
    );


  scoreList.innerHTML = "";


  Object.entries(
    gameState.scores
  ).forEach(function(entry) {

    const name = entry[0];

    const score = entry[1];


    const row =
      document.createElement("div");

    row.className =
      "score-row";


    const label =
      document.createElement("span");

    label.textContent = name;


    const bar =
      document.createElement("div");

    bar.className =
      "score-bar";


    const fill =
      document.createElement("div");

    fill.className =
      "score-fill";


    fill.style.width =
      Math.max(
        0,
        Math.min(
          100,
          score * 10
        )
      ) + "%";


    bar.appendChild(fill);


    const number =
      document.createElement("strong");

    number.textContent = score;


    row.appendChild(label);

    row.appendChild(bar);

    row.appendChild(number);


    scoreList.appendChild(row);
  });


  showScreen("ending-screen");
}


function saveGame() {

  const saveData = {

    player:
      gameState.player,

    sceneIndex:
      gameState.sceneIndex,

    scores:
      gameState.scores
  };


  localStorage.setItem(
    "romanceGameSave",
    JSON.stringify(saveData)
  );


  closeModal();

  showToast(
    "게임이 저장되었습니다."
  );
}


function loadGame() {

  const savedData =
    localStorage.getItem(
      "romanceGameSave"
    );


  if (!savedData) {

    showToast(
      "저장된 게임이 없습니다."
    );

    return;
  }


  try {

    const data =
      JSON.parse(savedData);


    gameState.player =
      data.player;


    gameState.sceneIndex =
      data.sceneIndex;


    gameState.scores =
      data.scores;


    document.getElementById(
      "player-name"
    ).textContent =
      gameState.player;


    closeModal();

    showScreen("game-screen");

    renderScene();


    showToast(
      "게임을 불러왔습니다."
    );

  } catch (error) {

    showToast(
      "저장 데이터를 불러올 수 없습니다."
    );
  }
}


function resetSave() {

  localStorage.removeItem(
    "romanceGameSave"
  );


  showToast(
    "저장 데이터가 초기화되었습니다."
  );
}


function goMain() {

  closeModal();

  showScreen("main-screen");
}


function changeSparkle() {

  const setting =
    document.getElementById(
      "sparkle-setting"
    );


  document.body.classList.toggle(
    "no-sparkle",
    !setting.checked
  );
}


document.getElementById(
  "nickname"
).addEventListener(
  "keydown",
  function(event) {

    if (event.key === "Enter") {
      startGame();
    }
  }
);


window.addEventListener(
  "keydown",
  function(event) {

    if (event.key === "Escape") {
      closeModal();
    }


    const gameScreen =
      document.getElementById(
        "game-screen"
      );


    const openedModal =
      document.querySelector(
        ".modal.open"
      );


    if (
      event.key === "Enter" &&
      gameScreen.classList.contains(
        "active"
      ) &&
      !openedModal
    ) {

      nextScene();
    }
  }
);
