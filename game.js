// Expanded Text Library with 50+ Texts Per Level
const textLibrary = {
    easy: [
        "the quick brown fox jumps over the lazy dog",
        "practice makes perfect with daily effort",
        "coding is fun when you master typing",
        "learn to type without looking at keys",
        "speed and accuracy improve with practice",
        "master your keyboard one key at time",
        "type faster to boost your productivity",
        "focus on accuracy before building speed",
        "touch typing saves time in long run",
        "build muscle memory through repetition",
        "improve your skills one word at time",
        "consistency is key to mastering typing",
        "every expert was once a beginner",
        "small progress leads to big results",
        "patience and practice lead to success",
        "develop good habits from the start",
        "quality beats quantity every single time",
        "start slow and gradually increase pace",
        "proper technique matters more than speed",
        "relaxed fingers type faster and better"
    ],
    medium: [
        "The only way to do great work is to love what you do. Stay hungry, stay foolish.",
        "Success is not final, failure is not fatal. It is the courage to continue that counts.",
        "Innovation distinguishes between a leader and a follower in the modern world.",
        "The best time to plant a tree was twenty years ago. The second best time is now.",
        "Your work is going to fill a large part of your life. Make sure it's meaningful.",
        "Don't watch the clock. Do what it does, keep going forward every single day.",
        "Quality is not an act, it is a habit that you develop through practice.",
        "Excellence is never an accident. It is always the result of intention and effort.",
        "The future depends on what you do today. Make it count and work hard.",
        "Believe you can and you're halfway there. Confidence drives achievement forward.",
        "Whether you think you can or cannot, you are absolutely right every time.",
        "The expert in anything was once a beginner. Never stop learning new things.",
        "Opportunities don't happen. You create them through hard work and dedication.",
        "The secret of getting ahead is getting started. Take action now, not later.",
        "Do what you can with what you have, right where you are today.",
        "The only limit to our realization of tomorrow will be our doubts of today.",
        "Success usually comes to those who are too busy looking for it continuously.",
        "The way to get started is to quit talking and begin doing something meaningful.",
        "If you really look closely, most overnight successes took a very long time.",
        "Don't be afraid to give up the good to go for the great opportunity ahead.",
        "I find that the harder I work, the more luck I seem to have consistently.",
        "Success is walking from failure to failure with no loss of enthusiasm at all.",
        "Knowing is not enough. We must apply. Willing is not enough. We must do.",
        "The mind is everything. What you think, you become through focused action.",
        "The distance between your dreams and reality is called action and persistence."
    ],
    hard: [
        "In the midst of chaos, there is also opportunity. A wise person adapts to circumstances, just as water shapes itself to the vessel it's in.",
        "The greatest glory in living lies not in never falling, but in rising every time we fall. Perseverance is the key to long-term success.",
        "Technology is best when it brings people together. Innovation should serve humanity's needs, not replace genuine human connection and empathy.",
        "Life is what happens when you're busy making other plans. Success requires dedication, focus, and unwavering commitment to excellence always.",
        "The future belongs to those who believe in the beauty of their dreams and work tirelessly to make them a reality worth living for.",
        "Education is the most powerful weapon which you can use to change the world. Knowledge opens doors that were previously locked forever.",
        "The difference between ordinary and extraordinary is that little extra effort. Excellence requires going beyond what's merely sufficient today.",
        "Your time is limited, so don't waste it living someone else's life. Follow your passion and intuition; they somehow know what's best.",
        "I have not failed. I've just found ten thousand ways that won't work. Persistence and learning from mistakes leads to breakthrough moments.",
        "The only person you are destined to become is the person you decide to be. Your choices define your character and ultimate destiny.",
        "Success is not how high you have climbed, but how you make a positive difference to the world around you through meaningful actions.",
        "It does not matter how slowly you go as long as you do not stop. Consistent progress beats sporadic bursts of effort every time.",
        "What lies behind us and what lies before us are tiny matters compared to what lies within us. Inner strength conquers external obstacles.",
        "The people who are crazy enough to think they can change the world are the ones who actually do it through relentless determination.",
        "Quality means doing it right when no one is looking. True character is revealed when there are no external rewards or recognition.",
        "The best revenge is massive success. Channel negative energy into positive action and prove doubters wrong through your achievements.",
        "Don't let yesterday take up too much of today. Learn from the past but focus your energy on creating a better tomorrow now.",
        "Either you run the day, or the day runs you. Take control and make deliberate choices rather than drifting through life passively.",
        "The successful warrior is the average person with laser-like focus. Concentration and dedication separate winners from mere participants.",
        "Motivation is what gets you started. Habit is what keeps you going when motivation fades and challenges become overwhelming obstacles."
    ],
    expert: [
        "function calculateWPM(chars, minutes) { return Math.round((chars / 5) / minutes); }",
        "const reducer = (state = initialState, action) => { switch(action.type) { case 'UPDATE': return {...state, data: action.payload}; default: return state; } };",
        "class TypeRacer extends Component { constructor(props) { super(props); this.state = { wpm: 0, accuracy: 100 }; } }",
        "import React, { useState, useEffect } from 'react'; export default function App() { const [count, setCount] = useState(0); return <div>{count}</div>; }",
        "git commit -m 'feat: implement typing speed calculation with real-time WPM and accuracy tracking system'",
        "const fetchData = async () => { try { const response = await fetch('/api/data'); return await response.json(); } catch (error) { console.error(error); } };",
        "export default function middleware(req, res, next) { if (!req.user) return res.status(401).json({ error: 'Unauthorized' }); next(); }",
        "const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);",
        "interface User { id: number; name: string; email: string; createdAt: Date; }",
        "SELECT users.name, COUNT(orders.id) AS total_orders FROM users LEFT JOIN orders ON users.id = orders.user_id GROUP BY users.id;",
        "docker run -d -p 8080:80 --name webapp -v $(pwd):/app nginx:latest",
        "kubectl apply -f deployment.yaml && kubectl rollout status deployment/myapp",
        "grep -r 'TODO' --include='*.js' --exclude-dir=node_modules .",
        "awk '{sum+=$1} END {print \"Average:\", sum/NR}' data.txt",
        "terraform init && terraform plan -out=plan.tfplan && terraform apply plan.tfplan",
        "npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin",
        "const debounce = (fn, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => fn(...args), delay); }; };",
        "git rebase -i HEAD~3 && git push origin feature-branch --force-with-lease",
        "curl -X POST https://api.example.com/v1/users -H 'Content-Type: application/json' -d '{\"name\":\"John\"}'",
        "python -m venv env && source env/bin/activate && pip install -r requirements.txt"
    ]
};

// Track used texts to prevent immediate repetition
const usedTexts = {
    easy: [],
    medium: [],
    hard: [],
    expert: []
};

// Game State
const gameState = {
    currentLevel: 'medium',
    currentText: '',
    currentIndex: 0,
    startTime: null,
    endTime: null,
    errors: 0,
    isPlaying: false,
    totalChars: 0,
    correctChars: 0,

    // Stats
    wpm: 0,
    accuracy: 100,
    elapsedTime: 0,

    // Personal bests
    bestWPM: parseInt(localStorage.getItem('typeracerBestWPM') || '0'),
    bestAccuracy: parseInt(localStorage.getItem('typeracerBestAccuracy') || '0'),

    // Timers
    updateInterval: null
};

// Initialize Game
function initGame() {
    loadPersonalBests();
    setupEventListeners();
}

// Load Personal Bests
function loadPersonalBests() {
    gameState.bestWPM = parseInt(localStorage.getItem('typeracerBestWPM') || '0');
    gameState.bestAccuracy = parseInt(localStorage.getItem('typeracerBestAccuracy') || '0');
}

// Setup Event Listeners
function setupEventListeners() {
    // Difficulty buttons
    document.querySelectorAll('.difficulty-button').forEach(button => {
        button.addEventListener('click', () => {
            const level = button.getAttribute('data-level');
            startTypingTest(level);
        });
    });

    // Typing input
    const input = document.getElementById('typingInput');
    input.addEventListener('input', handleTyping);
    input.addEventListener('paste', (e) => e.preventDefault()); // Prevent pasting

    // Restart button
    document.getElementById('restartButton').addEventListener('click', () => {
        startTypingTest(gameState.currentLevel);
    });

    // Quit button
    document.getElementById('quitButton').addEventListener('click', () => {
        quitToMenu();
    });

    // Results buttons
    document.getElementById('tryAgainButton').addEventListener('click', () => {
        startTypingTest(gameState.currentLevel);
    });

    document.getElementById('backToMenuButton').addEventListener('click', () => {
        quitToMenu();
    });
}

// Start Typing Test
function startTypingTest(level) {
    gameState.currentLevel = level;
    gameState.currentText = getRandomText(level);
    gameState.currentIndex = 0;
    gameState.errors = 0;
    gameState.startTime = null;
    gameState.endTime = null;
    gameState.isPlaying = true;
    gameState.totalChars = gameState.currentText.length;
    gameState.correctChars = 0;
    gameState.wpm = 0;
    gameState.accuracy = 100;
    gameState.elapsedTime = 0;

    // Clear input
    document.getElementById('typingInput').value = '';

    // Render text
    renderText();

    // Show game screen
    showScreen('gameScreen');

    // Focus input
    document.getElementById('typingInput').focus();

    // Update UI
    updateStats();
}

// Get Random Text (avoiding recent repetitions)
function getRandomText(level) {
    const texts = textLibrary[level];
    const availableTexts = texts.filter(text => !usedTexts[level].includes(text));

    // If all texts have been used, reset the used list
    if (availableTexts.length === 0) {
        usedTexts[level] = [];
        return texts[Math.floor(Math.random() * texts.length)];
    }

    // Get random text from available ones
    const selectedText = availableTexts[Math.floor(Math.random() * availableTexts.length)];

    // Add to used texts
    usedTexts[level].push(selectedText);

    // Keep only last 5 texts in memory to allow eventual repetition
    if (usedTexts[level].length > 5) {
        usedTexts[level].shift();
    }

    return selectedText;
}

// Render Text Display
function renderText() {
    const display = document.getElementById('textDisplay');
    display.innerHTML = '';

    for (let i = 0; i < gameState.currentText.length; i++) {
        const span = document.createElement('span');
        span.className = 'char';
        span.textContent = gameState.currentText[i];

        if (i === gameState.currentIndex) {
            span.classList.add('current');
        } else if (i < gameState.currentIndex) {
            span.classList.add('correct');
        }

        display.appendChild(span);
    }
}

// Handle Typing
function handleTyping(e) {
    const input = e.target;
    const typedText = input.value;

    // Start timer on first character
    if (!gameState.startTime && typedText.length > 0) {
        gameState.startTime = Date.now();
        startUpdateLoop();
    }

    // Check if typing is complete
    if (typedText.length > gameState.currentText.length) {
        input.value = typedText.slice(0, gameState.currentText.length);
        return;
    }

    // Update current index
    gameState.currentIndex = typedText.length;

    // Validate typing
    let correctCount = 0;
    let errorCount = 0;

    for (let i = 0; i < typedText.length; i++) {
        if (typedText[i] === gameState.currentText[i]) {
            correctCount++;
        } else {
            errorCount++;
        }
    }

    gameState.correctChars = correctCount;
    gameState.errors = errorCount;
    gameState.accuracy = gameState.currentIndex > 0
        ? Math.round((correctCount / gameState.currentIndex) * 100)
        : 100;

    // Update text display
    updateTextDisplay(typedText);

    // Check if complete
    if (typedText.length === gameState.currentText.length) {
        completeTest();
    }

    // Update stats
    updateStats();
}

// Update Text Display
function updateTextDisplay(typedText) {
    const display = document.getElementById('textDisplay');
    const chars = display.querySelectorAll('.char');

    chars.forEach((char, index) => {
        char.classList.remove('correct', 'incorrect', 'current');

        if (index < typedText.length) {
            if (typedText[index] === gameState.currentText[index]) {
                char.classList.add('correct');
            } else {
                char.classList.add('incorrect');
            }
        } else if (index === typedText.length) {
            char.classList.add('current');
        }
    });
}

// Calculate WPM
function calculateWPM() {
    if (!gameState.startTime) return 0;

    const now = Date.now();
    const timeElapsed = (now - gameState.startTime) / 1000 / 60; // minutes

    if (timeElapsed === 0) return 0;

    const words = gameState.correctChars / 5; // Standard: 5 chars = 1 word
    return Math.round(words / timeElapsed);
}

// Start Update Loop
function startUpdateLoop() {
    if (gameState.updateInterval) {
        clearInterval(gameState.updateInterval);
    }

    gameState.updateInterval = setInterval(() => {
        if (gameState.isPlaying && gameState.startTime) {
            gameState.wpm = calculateWPM();
            gameState.elapsedTime = Math.round((Date.now() - gameState.startTime) / 1000);
            updateStats();
        }
    }, 100);
}

// Stop Update Loop
function stopUpdateLoop() {
    if (gameState.updateInterval) {
        clearInterval(gameState.updateInterval);
        gameState.updateInterval = null;
    }
}

// Update Stats Display
function updateStats() {
    document.getElementById('currentWPM').textContent = gameState.wpm;
    document.getElementById('currentAccuracy').textContent = gameState.accuracy + '%';
    document.getElementById('currentTime').textContent = gameState.elapsedTime + 's';
    document.getElementById('errorCount').textContent = gameState.errors;

    // Update progress
    const progress = (gameState.currentIndex / gameState.totalChars) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('progressText').textContent = Math.round(progress) + '%';
}

// Complete Test
function completeTest() {
    gameState.endTime = Date.now();
    gameState.isPlaying = false;
    stopUpdateLoop();

    // Final calculations
    const finalWPM = calculateWPM();
    const finalAccuracy = gameState.accuracy;
    const finalTime = Math.round((gameState.endTime - gameState.startTime) / 1000);
    const finalErrors = gameState.errors;

    // Check for personal bests
    let isNewRecord = false;
    if (finalWPM > gameState.bestWPM) {
        gameState.bestWPM = finalWPM;
        localStorage.setItem('typeracerBestWPM', finalWPM.toString());
        isNewRecord = true;
    }
    if (finalAccuracy > gameState.bestAccuracy) {
        gameState.bestAccuracy = finalAccuracy;
        localStorage.setItem('typeracerBestAccuracy', finalAccuracy.toString());
        isNewRecord = true;
    }

    // Show results
    showResults(finalWPM, finalAccuracy, finalTime, finalErrors, isNewRecord);
}

// Show Results
function showResults(wpm, accuracy, time, errors, isNewRecord) {
    document.getElementById('finalWPM').textContent = wpm;
    document.getElementById('finalAccuracy').textContent = accuracy + '%';
    document.getElementById('finalTime').textContent = time + 's';
    document.getElementById('finalErrors').textContent = errors;

    // Add badges
    const wpmBadge = document.getElementById('wpmBadge');
    const accBadge = document.getElementById('accBadge');

    // WPM badge
    if (wpm >= 60) {
        wpmBadge.textContent = 'Excellent!';
        wpmBadge.className = 'result-badge excellent';
    } else if (wpm >= 40) {
        wpmBadge.textContent = 'Good!';
        wpmBadge.className = 'result-badge good';
    } else {
        wpmBadge.textContent = 'Keep Practicing';
        wpmBadge.className = 'result-badge needs-practice';
    }

    // Accuracy badge
    if (accuracy >= 95) {
        accBadge.textContent = 'Perfect!';
        accBadge.className = 'result-badge excellent';
    } else if (accuracy >= 85) {
        accBadge.textContent = 'Great!';
        accBadge.className = 'result-badge good';
    } else {
        accBadge.textContent = 'Needs Work';
        accBadge.className = 'result-badge needs-practice';
    }

    // Show new record badge
    const newRecordEl = document.getElementById('newRecord');
    if (isNewRecord) {
        newRecordEl.style.display = 'flex';
    } else {
        newRecordEl.style.display = 'none';
    }

    showScreen('resultsScreen');
}

// Quit to Menu
function quitToMenu() {
    stopUpdateLoop();
    gameState.isPlaying = false;
    loadPersonalBests();
    updateMenuStats();
    showScreen('startScreen');
}

// Update Menu Stats
function updateMenuStats() {
    document.getElementById('bestWPM').textContent = gameState.bestWPM;
    document.getElementById('bestAccuracy').textContent = gameState.bestAccuracy + '%';
}

// Screen Management
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

// Initialize on load
window.addEventListener('load', () => {
    initGame();
    updateMenuStats();
});
