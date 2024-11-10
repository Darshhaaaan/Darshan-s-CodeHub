const questions = [
  {
  question: "Who was the first emperor of the Maurya Dynasty in India?",
  options: ["Ashoka", "Bindusara", "Chandragupta Maurya", "Harsha"],
  answer: "Chandragupta Maurya",
  id: "question1"
},
{
  question: "What ancient civilization is known for building the Pyramids?",
  options: ["Mesopotamians", "Indus Valley", "Egyptians", "Romans"],
  answer: "Egyptians",
  id: "question2"
},
{
  question: "Who is known as the 'Father of History'?",
  options: ["Plato", "Aristotle", "Herodotus", "Socrates"],
  answer: "Herodotus",
  id: "question3"
},
{
  question: "Which Indian freedom fighter famously said, 'Give me blood and I will give you freedom'?",
  options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhas Chandra Bose", "Bhagat Singh"],
  answer: "Subhas Chandra Bose",
  id: "question4"
},
{
  question: "Which empire was ruled by Akbar the Great?",
  options: ["Mughal Empire", "Gupta Empire", "Maurya Empire", "Chola Empire"],
  answer: "Mughal Empire",
  id: "question5"
},
{
  question: "What was the primary material used for tools in the Stone Age?",
  options: ["Iron", "Copper", "Bronze", "Stone"],
  answer: "Stone",
  id: "question6"
},
{
  question: "What year did the First World War begin?",
  options: ["1912", "1914", "1918", "1920"],
  answer: "1914",
  id: "question7"
},
{
  question: "Which ancient city was destroyed by a volcanic eruption from Mount Vesuvius?",
  options: ["Rome", "Pompeii", "Athens", "Alexandria"],
  answer: "Pompeii",
  id: "question8"
},
{
  question: "In what year did India gain independence from British rule?",
  options: ["1945", "1947", "1950", "1952"],
  answer: "1947",
  id: "question9"
},
{
  question: "What is the oldest known written script, originating in ancient Mesopotamia?",
  options: ["Sanskrit", "Cuneiform", "Hieroglyphics", "Latin"],
  answer: "Cuneiform",
  id: "question10"
},
 {
    question: "What planet has the longest day?",
    options: ["Venus", "Jupiter", "Saturn", "Mars"],
    answer: "Venus",
    id: "question11"
  },
  {
    question: "Which galaxy will collide with the Milky Way?",
    options: ["Andromeda", "Sombrero", "Whirlpool", "Triangulum"],
    answer: "Andromeda",
    id: "question12"
  },
  {
    question: "Which planet is hottest due to its atmosphere?",
    options: ["Mercury", "Mars", "Venus", "Jupiter"],
    answer: "Venus",
    id: "question13"
  },
  {
    question: "What forms when a massive star collapses?",
    options: ["Nebula", "Black Hole", "Supernova", "Quasar"],
    answer: "Black Hole",
    id: "question14"
  },
  {
    question: "Which moon might have a subsurface ocean?",
    options: ["Ganymede", "Io", "Europa", "Callisto"],
    answer: "Europa",
    id: "question15"
  },
  {
    question: "What is the radiation from the early universe called?",
    options: ["Solar", "Microwave", "Gamma", "X-rays"],
    answer: "Microwave",
    id: "question16"
  },
  {
    question: "What is a star system with two stars called?",
    options: ["Binary", "Solar", "Cluster", "Quasar"],
    answer: "Binary",
    id: "question17"
  },
  {
    question: "Which spacecraft reached interstellar space?",
    options: ["Voyager 1", "Pioneer", "New Horizons", "Hubble"],
    answer: "Voyager 1",
    id: "question18"
  },
  {
    question: "Which theory explains the universe's expansion?",
    options: ["Relativity", "Big Bang", "Quantum", "String"],
    answer: "Big Bang",
    id: "question19"
  },
  {
    question: "What is a rapidly spinning neutron star?",
    options: ["Pulsar", "Black Hole", "Planet", "Asteroid"],
    answer: "Pulsar",
    id: "question20"
  },
  {
    question: "Which animal is known as the 'King of the Jungle'?",
    options: ["Lion", "Tiger", "Elephant", "Bear"],
    answer: "Lion",
    id: "question21"
  },
  {
    question: "What is the largest species of shark?",
    options: ["Great White", "Whale Shark", "Hammerhead", "Tiger Shark"],
    answer: "Whale Shark",
    id: "question22"
  },
  {
    question: "What plant is known for its ability to trap and digest insects?",
    options: ["Cactus", "Venus Flytrap", "Oak Tree", "Sunflower"],
    answer: "Venus Flytrap",
    id: "question23"
  },
  {
    question: "What is the fastest land animal?",
    options: ["Cheetah", "Lion", "Horse", "Elephant"],
    answer: "Cheetah",
    id: "question24"
  },
  {
    question: "What is the largest living species of turtle?",
    options: ["Leatherback", "Green Turtle", "Hawksbill", "Loggerhead"],
    answer: "Leatherback",
    id: "question25"
  },
  {
    question: "What is the process by which plants make their own food?",
    options: ["Respiration", "Photosynthesis", "Pollination", "Germination"],
    answer: "Photosynthesis",
    id: "question26"
  },
  {
    question: "Which mammal is known for its ability to fly?",
    options: ["Bat", "Bird", "Flying Squirrel", "Flying Fish"],
    answer: "Bat",
    id: "question27"
  },
  {
    question: "What is the largest species of whale?",
    options: ["Blue Whale", "Humpback Whale", "Orca", "Fin Whale"],
    answer: "Blue Whale",
    id: "question28"
  },
  {
    question: "Which insect is known for its role in pollination?",
    options: ["Bee", "Ant", "Dragonfly", "Butterfly"],
    answer: "Bee",
    id: "question29"
  },
  {
    question: "What is the largest flower in the world?",
    options: ["Titan Arum", "Rafflesia", "Sunflower", "Lotus"],
    answer: "Titan Arum",
    id: "question30"
  },
    {
    question: "What is the Earth's outermost layer called?",
    options: ["Core", "Mantle", "Crust", "Ozone"],
    answer: "Crust",
    id: "question31"
  },
  {
    question: "Which type of rock is formed from cooled lava?",
    options: ["Sedimentary", "Igneous", "Metamorphic", "Carbonate"],
    answer: "Igneous",
    id: "question32"
  },
  {
    question: "What is the longest mountain range on Earth?",
    options: ["Himalayas", "Rockies", "Andes", "Alps"],
    answer: "Andes",
    id: "question33"
  },
  {
    question: "Which rock is commonly known as limestone?",
    options: ["Sandstone", "Marble", "Calcite", "Shale"],
    answer: "Calcite",
    id: "question34"
  },
  {
    question: "What is the process of breaking down rocks called?",
    options: ["Erosion", "Metamorphosis", "Fossilization", "Weathering"],
    answer: "Weathering",
    id: "question35"
  },
  {
    question: "Which type of volcano is most dangerous?",
    options: ["Shield", "Cinder", "Composite", "Caldera"],
    answer: "Composite",
    id: "question36"
  },
  {
    question: "Which country/continent is home to the largest desert in the world?",
    options: ["Australia", "Asia", "USA", "Africa"],
    answer: "Africa",
    id: "question37"
  },
  {
    question: "What causes earthquakes?",
    options: ["Wind", "Volcanoes", "Tectonic Plates", "Gravity"],
    answer: "Tectonic Plates",
    id: "question38"
  },
  {
    question: "What is the deepest point on Earth?",
    options: ["Mount Everest", "Mariana Trench", "Grand Canyon", "Lake Baikal"],
    answer: "Mariana Trench",
    id: "question39"
  },
  {
    question: "What is the movement of water through the Earth's crust called?",
    options: ["Hydrosphere", "Aquifer", "Hydrolysis", "Groundwater"],
    answer: "Groundwater",
    id: "question40"
  },
    {
    question: "Who is known as the father of modern physics?",
    options: ["Albert Einstein", "Isaac Newton", "Nikola Tesla", "Marie Curie"],
    answer: "Albert Einstein",
    id: "question41"
  },
  {
    question: "What was the first successful powered flight by humans?",
    options: ["Wright brothers' Flyer", "Hot Air Balloon", "Zeppelin", "SpaceX Falcon 9"],
    answer: "Wright brothers' Flyer",
    id: "question42"
  },
  {
    question: "Which scientist developed the theory of general relativity?",
    options: ["Albert Einstein", "Stephen Hawking", "Galileo Galilei", "Isaac Newton"],
    answer: "Albert Einstein",
    id: "question43"
  },
  {
    question: "Who is credited with the discovery of penicillin?",
    options: ["Louis Pasteur", "Alexander Fleming", "Marie Curie", "Isaac Newton"],
    answer: "Alexander Fleming",
    id: "question44"
  },
  {
    question: "What year did the first human land on the moon?",
    options: ["1969", "1972", "1959", "1980"],
    answer: "1969",
    id: "question45"
  },
  {
    question: "Who invented the first practical telephone?",
    options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Michael Faraday"],
    answer: "Alexander Graham Bell",
    id: "question46"
  },
  {
    question: "What is the primary component of a computer's brain?",
    options: ["RAM", "Hard drive", "CPU", "GPU"],
    answer: "CPU",
    id: "question47"
  },
  {
    question: "Which company developed the first commercial computer?",
    options: ["IBM", "Apple", "Microsoft", "Dell"],
    answer: "IBM",
    id: "question48"
  },
  {
    question: "What was the first video game console released?",
    options: ["Atari 2600", "Nintendo", "Magnavox Odyssey", "Sega Genesis"],
    answer: "Magnavox Odyssey",
    id: "question49"
  },
  {
    question: "What innovation did Tim Berners-Lee create in 1989?",
    options: ["Smartphone", "Internet browser", "World Wide Web", "Wi-Fi"],
    answer: "World Wide Web",
    id: "question50"
  }
];
    let i = 0; 
    let playerName = "";
    let timer;
    let timeLeft = 300; 
    let isTimerRunning = false;

    function startGame() {
      playerName = document.getElementById('playerNameInput').value;
      if (playerName == "") {
        alert('Please enter your name');
      } else {
        document.getElementById('demo1').innerHTML = "Player name: " + playerName + "<br>" + "Score: 0";
        document.getElementById('nameModel').style.display = 'none';
        startGames();
      }
    }

    function startGames() {
      if (!isTimerRunning) {
        isTimerRunning = true;
        startTimer(); 
      }
    }

    function startTimer() {
      timeLeft = 300; 
      updateTimerDisplay(timeLeft); 
      timer = setInterval(function() {
        timeLeft--; 
        updateTimerDisplay(timeLeft); 

        if (timeLeft <= 0) {
          clearInterval(timer);
          timeOver(); 
        }
      }, 1000);
    }

    function updateTimerDisplay(time) {
      let minutes = Math.floor(time / 60);
      let seconds = time % 60;
      seconds = seconds < 10 ? '0' + seconds : seconds;
      document.getElementById('timer').innerHTML = `Time left: ${minutes}:${seconds}`;
    }

    function resetTimer() {
      isTimerRunning = false;
      timeLeft = 300;
      updateTimerDisplay(timeLeft); 
    }

    function checkAnswer(selectOption, questionId, clickedQuestion) {
      const checkQuestion = questions.find(q => q.id === questionId);
      const buttons = document.querySelectorAll(`#${questionId} button`);
        buttons.forEach(button => {
        button.disabled = true;
        button.style.backgroundColor = ''; 
        button.style.color = ''; 
        });
      if (selectOption == checkQuestion.answer) {
        document.getElementById('demo').innerHTML = "Correct Answer!";
        document.getElementById('demo').style.color = "green";
        document.getElementById('demo').style.padding = "25px";
        clickedQuestion.style.backgroundColor = "green";
        clickedQuestion.style.color = "white";
        i += 10;
        document.getElementById('demo1').innerHTML = "Player name: " + playerName + "<br>" + "Score: " + i;
      } else {
        document.getElementById('demo').innerHTML = "Wrong answer!";
        document.getElementById('demo').style.color = "red";
        document.getElementById('demo').style.padding = "25px";
        clickedQuestion.style.backgroundColor = "red";
        clickedQuestion.style.color = "white";
        const correctButton = Array.from(buttons).find(button => button.textContent == checkQuestion.answer);
        if (correctButton) {
        correctButton.style.backgroundColor = "rgba(0, 255, 0, 0.5)"; 
        correctButton.style.color = "white"; 
        }
        i -= 3;
        document.getElementById('demo1').innerHTML = "Player name: " + playerName + "<br>" + "Score: " + i;
      }

      setTimeout(function() {
        document.getElementById('demo').innerHTML = ""; 
        document.getElementById('demo').style.padding = "0px";
      }, 3000);

      
    }
    function timeOver() {
      document.getElementById('endCredits').style.display = "block";
      if (i == 500) {
        document.getElementById('demo2').innerHTML = "PERFECT SCORE! you got " + (i/500)*100 + " out of 100"
      } else if (i >= 450 && i < 500) {
        document.getElementById('demo2').innerHTML = "GENIUS! you got " + (i/500)*100 + " out of 100"
      } else if (i >= 350 && i < 450) {
        document.getElementById('demo2').innerHTML = "SMART! you got " + (i/500)*100 + " out of 100"
      } else if(i >= 250 && i < 350) { 
        document.getElementById('demo2').innerHTML = "INTELLIGENT! you got " + (i/500)*100 + " out of 100"
      } else if (i >= 150 && i < 250) {
        document.getElementById('demo2').innerHTML = "GOOD! you got " + (i/500)*100 + " out of 100"
      } else if(i >= 50 && i < 150) { 
        document.getElementById('demo2').innerHTML = "NICE TRY! you got " + (i/500)*100 + " out of 100"
      } else if (i >= 0 && i < 50) {
        document.getElementById('demo2').innerHTML = "TRY HARDER! you got " + (i/500)*100 + " out of 100"
      } else {
        document.getElementById('demo2').innerHTML = "NEGATIVE SCORE! you got " + (i/500)*100 + " out of 100"
      }
    }