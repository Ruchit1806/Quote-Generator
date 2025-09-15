// =========================
// QUOTES DATA
// =========================
let quotes = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs", category: "motivation" },
  { text: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer", category: "success" },
  { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein", category: "life" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon", category: "life" },
  { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky", category: "motivation" },
  { text: "The journey of a thousand miles begins with one step.", author: "Lao Tzu", category: "motivation" },

  // --- Extra quotes converted into objects (with guessed categories) ---
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt", category: "motivation" },
  { text: "Act as if what you do makes a difference. It does.", author: "William James", category: "motivation" },
  { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson", category: "life" },
  { text: "Happiness depends upon ourselves.", author: "Aristotle", category: "life" },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt", category: "motivation" },
  { text: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair", category: "motivation" },
  { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe", category: "motivation" },
  { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau", category: "success" },
  { text: "Opportunities don't happen. You create them.", author: "Chris Grosser", category: "success" },
  { text: "Don’t wait. The time will never be just right.", author: "Napoleon Hill", category: "motivation" },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan", category: "motivation" },
  { text: "If you can dream it, you can do it.", author: "Walt Disney", category: "motivation" },
  { text: "Fall seven times and stand up eight.", author: "Japanese Proverb", category: "motivation" },
  { text: "It always seems impossible until it’s done.", author: "Nelson Mandela", category: "motivation" },
  { text: "Don’t count the days, make the days count.", author: "Muhammad Ali", category: "motivation" },
  { text: "Don’t be pushed by your problems. Be led by your dreams.", author: "Ralph Waldo Emerson", category: "motivation" },
  { text: "Work hard in silence, let your success be your noise.", author: "Frank Ocean", category: "success" },
  { text: "Go the extra mile. It’s never crowded.", author: "Wayne Dyer", category: "success" },
  { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde", category: "life" },
  { text: "The purpose of our lives is to be happy.", author: "Dalai Lama", category: "life" },
  { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey", category: "life" },
  { text: "Failure is not the opposite of success; it’s part of success.", author: "Arianna Huffington", category: "success" },
  { text: "Don’t be afraid to give up the good to go for the great.", author: "John D. Rockefeller", category: "motivation" },
  { text: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Sudhashree Acharya", category: "success" },
  { text: "Dream it. Wish it. Do it.", author: "Leslie Levine", category: "motivation" },
  { text: "Sometimes later becomes never. Do it now.", author: "Rawish Chaudhary", category: "motivation" },
  { text: "Success doesn’t just find you. You have to go out and get it.", author: "Robert Collier ", category: "success" },
  { text: "The key to success is to focus on goals, not obstacles.", author: "Jim Rohn", category: "success" },
  { text: "Don’t wish it were easier. Wish you were better.", author: "Jim Rohn", category: "motivation" },
  { text: "Be so good they can’t ignore you.", author: "Steve Martin", category: "success" },
  { text: "Discipline is the bridge between goals and accomplishment.", author: "Jim Rohn", category: "success" },
  { text: "Strive for progress, not perfection.", author: "David Perlmutter", category: "motivation" },
  { text: "If you get tired, learn to rest, not to quit.", author: "Banksy", category: "life" },
  { text: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis", category: "motivation" },
  { text: "If you want to fly, give up everything that weighs you down.", author: "Buddha", category: "life" },
  { text: "Keep going. Everything you need will come to you at the perfect time.", author: "Honeylyn Reambonanza", category: "life" },
  { text: "The expert in anything was once a beginner.", author: "Helen Hayes", category: "motivation" },
  { text: "Stay humble. Work hard. Be kind.", author: "Brad Meltze", category: "life" },
  { text: "Don’t tell people your plans. Show them your results.", author: "Peter Gollwitzer", category: "success" },
  { text: "Consistency is more important than perfection.", author: "Bill Burditzman", category: "motivation" },
  { text: "Stars can’t shine without darkness.", author: "D.H. Sidebottom", category: "life" },
  { text: "One day or day one. You decide.", author: "Paulo Coelhon", category: "motivation" },
  { text: "It’s not whether you get knocked down, it’s whether you get up.", author: "Vince Lombardi", category: "motivation" },
  { text: "Doubt kills more dreams than failure ever will.", author: "Suzy Kassem", category: "motivation" },
  { text: "The best view comes after the hardest climb.", author: "Les Brown", category: "motivation" },
  { text: "Don’t let yesterday take up too much of today.", author: "Will Rogers", category: "life" },
  { text: "Courage is one step ahead of fear.", author: "Coleman Young", category: "motivation" },
  { text: "Difficult roads often lead to beautiful destinations.", author: "Zig Ziglar", category: "motivation" },
  { text: "The man who moves a mountain begins by carrying away small stones.", author: "Confucius", category: "motivation" },
  { text: "Opportunities multiply as they are seized.", author: "Sun Tzu", category: "success" },
  { text: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar", category: "success" },
  { text: "When you have a dream, you’ve got to grab it and never let go.", author: "Carol Burnett", category: "motivation" },
  { text: "If you want something you’ve never had, you must be willing to do something you’ve never done.", author: "Thomas Jefferson", category: "motivation" },
  { text: "Stop being afraid of what could go wrong and start being excited about what could go right.", author: "Tony Robbins", category: "motivation" },
  { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis", category: "life" },
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain", category: "motivation" },
  { text: "Act the way you’d like to be and soon you’ll be the way you act.", author: "Leonard Cohen", category: "life" },
  { text: "Your big opportunity may be right where you are now.", author: "Napoleon Hill", category: "success" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt", category: "motivation" },
  { text: "Don’t wait for opportunity. Create it.", author: "George Bernard Shaw", category: "motivation" },
  { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney", category: "motivation" },
  { text: "Perseverance is not a long race; it is many short races one after another.", author: "Walter Elliot", category: "motivation" },
  { text: "Success is stumbling from failure to failure with no loss of enthusiasm.", author: "Winston Churchill", category: "success" },
  { text: "Energy and persistence conquer all things.", author: "Benjamin Franklin", category: "success" },
  { text: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman", category: "life" },
  { text: "You don’t have to be perfect to be amazing.", author: "John Steinbeck's", category: "life" },
  { text: "Motivation gets you started. Habit keeps you going.", author: "Jim Ryun", category: "motivation" },
  { text: "Action is the foundational key to all success.", author: "Pablo Picasso", category: "success" },
  { text: "It’s not the load that breaks you, it’s the way you carry it.", author: "Lou Holtz", category: "life" },
  { text: "Quality is not an act, it is a habit.", author: "Aristotle", category: "success" },
  { text: "Do what you feel in your heart to be right – for you’ll be criticized anyway.", author: "Eleanor Roosevelt", category: "life" },
  { text: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles Swindoll", category: "life" },
  { text: "A goal is a dream with a deadline.", author: "Napoleon Hill", category: "success" },
  { text: "You must do the thing you think you cannot do.", author: "Eleanor Roosevelt", category: "motivation" },
  { text: "Never give up, for that is just the place and time that the tide will turn.", author: "Harriet Beecher Stowe", category: "motivation" },
  { text: "The future depends on what you do today.", author: "Mahatma Gandhi", category: "motivation" },
  { text: "Success is liking yourself, liking what you do, and liking how you do it.", author: "Maya Angelou", category: "success" },
  { text: "Do something today that your future self will thank you for.", author: "Sean Patrick Flanery", category: "motivation" },
  { text: "Life is short. Smile while you still have teeth.", author: "Mallory Hopkins", category: "life" },
  { text: "A person who never made a mistake never tried anything new.", author: "Albert Einstein", category: "life" },
  { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt", category: "motivation" }
];

// =========================
// SELECTORS
// =========================
let quoteBox = document.getElementById("quote");
let authorBox = document.getElementById("author");
let generateBtn = document.getElementById("btn");
let categorySelect = document.getElementById("category");
let darkModeToggle = document.getElementById("darkModeToggle");
let fontSelect = document.getElementById("fontSelect");
let fontSizeSlider = document.getElementById("fontSizeSlider");
let copyBtn = document.getElementById("copyBtn");
let autoToggleBtn = document.getElementById("autoToggle");
let body = document.body;

let autoMode = false;
let autoInterval = null;

// =========================
// FUNCTIONS
// =========================
function getRandomQuote(category) {
  let filtered = category === "all" ? quotes : quotes.filter(q => q.category === category);

  if (filtered.length === 0) {
    quoteBox.innerText = "No quotes available for this category.";
    authorBox.innerText = "";
    return;
  }

  let randomNumber = Math.floor(Math.random() * filtered.length);
  let selected = filtered[randomNumber];

  quoteBox.innerText = `"${selected.text}"`;
  authorBox.innerText = `— ${selected.author}`;

  randomBackground();
}

function randomBackground() {
  const colors = [
    "linear-gradient(to right, #ffecd2, #fcb69f)",
    "linear-gradient(to right, #a1c4fd, #c2e9fb)",
    "linear-gradient(to right, #fbc2eb, #a6c1ee)",
    "linear-gradient(to right, #ff9a9e, #fecfef)",
    "linear-gradient(to right, #f6d365, #fda085)"
  ];
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  body.style.background = randomColor;
}

// =========================
// EVENT LISTENERS
// =========================
generateBtn.addEventListener("click", () => getRandomQuote(categorySelect.value));

categorySelect.addEventListener("change", () => getRandomQuote(categorySelect.value));

copyBtn.addEventListener("click", () => {
  let fullQuote = `${quoteBox.innerText} ${authorBox.innerText}`;
  navigator.clipboard.writeText(fullQuote);
  copyBtn.innerText = "✅ Copied!";
  setTimeout(() => copyBtn.innerText = "📋 Copy", 1500);
});

darkModeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  darkModeToggle.innerText = body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
});

fontSelect.addEventListener("change", () => {
  quoteBox.style.fontFamily = fontSelect.value;
});

fontSizeSlider.addEventListener("input", () => {
  quoteBox.style.fontSize = `${fontSizeSlider.value}px`;
});

autoToggleBtn.addEventListener("click", () => {
  autoMode = !autoMode;
  if (autoMode) {
    autoToggleBtn.innerText = "⏸️ Stop Auto";
    autoInterval = setInterval(() => getRandomQuote(categorySelect.value), 4000);
  } else {
    autoToggleBtn.innerText = "▶️ Auto Mode";
    clearInterval(autoInterval);
  }
});

// =========================
// INITIAL LOAD
// =========================
getRandomQuote("all");

// =========================
// OWNER NAME
// =========================
document.getElementById("owner").innerText = "Made by Ruchit Tank";

