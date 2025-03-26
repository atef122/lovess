const messages = ["You are my sunshine ☀️",
"Every moment with you is precious ❤️",
"Your smile brightens my day 😊",
"I love you more than words can say 💖",
"You are my dream come true ✨",
"I can't imagine life without you 🌍",
"You make my world colorful 🌈",
"Your kindness melts my heart 💕",
"I will always stand by your side 🤝",
"You are my forever love 💞",
"Every heartbeat whispers your name 💓",
"You complete my soul 💗",
"My world is beautiful because of you 🌎",
"Your love is my greatest gift 🎁",
"You are the reason for my happiness 😊",
"I love you beyond the stars 🌟",
"You make my heart dance 💃",
"Your love is my safe place 🏡",
"Holding your hand is my favorite feeling ✋❤️",
"Your love is my light in the darkness 💡",
"With you, every moment is magical ✨",
"Your voice is my favorite melody 🎶",
"I love you to the moon and back 🌙",
"You make my life a fairytale 📖",
"My love for you grows stronger every day 💪❤️",
"You are my destiny 🔮",
"Loving you is effortless 🌊",
"I cherish every second with you ⏳",
"You are the best thing that ever happened to me 💖",
"Your eyes hold the universe 🌌",
"Your hugs are my safe haven 🤗",
"With you, I feel at home 🏠❤️",
"You make my heart race like no one else 💓",
"You are my heart's favorite person 💘",
"Your love is the fuel of my soul 🔥",
"I adore you more than words can express 📝💞",
"You make my life shine brighter than the stars 🌠",
"My love for you will never fade ⏳❤️",
"You are my sweetest addiction 🍭💕",
"Every love song reminds me of you 🎵💖",
"You are the missing piece of my puzzle 🧩❤️",
"My heart belongs to you forever 🔐💓",
"You make the impossible feel possible ✨💕",
"Every day with you is an adventure 🌍❤️",
"You are my greatest blessing 🙏💖",
"You are the reason behind my happiest moments 😊💕",
"I love you more than yesterday but less than tomorrow ⏳❤️",
"My love for you is endless ♾️💓",
"You are my heart's melody 🎼❤️",
"With you, every moment feels perfect 💞✨",
"You are my first thought in the morning and my last at night 🌅🌙",
"You bring out the best in me 💕",
"You are my heart’s home ❤️🏡",
"Your love is like a beautiful dream I never want to wake up from 🌙💖",
"You are my soulmate 💑💓",
"Your presence is my greatest comfort 🤗❤️",
"Loving you is the easiest thing I have ever done 💖",
"Every time I see you, my heart skips a beat 💓",
"You are the love of my life 💞",
"I am the luckiest person because I have you 🍀❤️",
"I fall in love with you more every day 💕",
"Your love is my greatest treasure 💎💖",
"With you, life is a beautiful melody 🎶❤️",
"Your laugh is my favorite sound 😂💖",
"I want to spend forever with you ⏳💞",
"Your love makes my world complete 🌍💓",
"You are my everything 💖",
"Every road leads me back to you 🚶‍♂️❤️",
"Your love is my anchor ⚓💕",
"My love for you grows with every heartbeat 💓💖",
"You are the reason my heart beats ❤️",
"I can't imagine a future without you 💍💞",
"You make life sweeter than any dessert 🍰💕",
"My heart belongs to you, now and forever 🔐❤️",
"You make even ordinary moments feel magical ✨💖",
"I love you more than all the stars in the sky 🌠❤️",
"You are my dream, my wish, my everything 💕",
"Your love is my guiding light 🔥💖",
"Every time I hold you, I feel at home 🏡❤️",
"You are my heart's favorite melody 🎶💓",
"I love you endlessly ♾️❤️",
"You make my heart smile 😊💖",
"Your love is my favorite story 📖💕",
"You are my forever and always 💞",
"Your touch sends shivers down my spine 💓🔥",
"I am happiest when I’m with you 😊💖",
"Your love is a fairytale come true ✨💕",
"You are my perfect match 👫❤️",
"Every time I look into your eyes, I see my future 👀💞",
"Your love is my safe space 🏡💖",
"I love you more than chocolate 🍫💕",
"You are the best part of my life 💖",
"My heart is yours forever 💘",
"You make my soul sing 🎵💞",
"You light up my darkest days 💡❤️",
"My love for you is written in the stars 🌟💕",
"Every second with you is a gift 🎁💖",
"I love you more than I ever thought possible 💞",
"Your love is my happy place 😊💖",
"I will love you till the end of time ⏳❤️"
]; // نفس الرسائل السابقة

document.getElementById("showMessage").addEventListener("click", function() {
    let num = document.getElementById("messageInput").value;
    if (num >= 1 && num <= 100) {
        document.getElementById("loveMessage").innerText = messages[num - 1];
        showFloatingHearts();
    } else {
        document.getElementById("loveMessage").innerText = "Please enter a number between 1 and 100";
    }
    document.getElementById("clickSound").play();
    showNotification("Mariam ❤️");
    updateLoveCounter();
});

document.getElementById("randomMessage").addEventListener("click", function() {
    let randomIndex = Math.floor(Math.random() * 100);
    document.getElementById("loveMessage").innerText = messages[randomIndex];
    document.getElementById("clickSound").play();
    showFloatingHearts();
    showNotification("Mariam ❤️");
    updateLoveCounter();
});

document.getElementById("toggleMusic").addEventListener("click", function() {
    let music = document.getElementById("backgroundMusic");
    if (music.paused) {
        music.play();
        this.innerText = "🎵 Stop Music";
    } else {
        music.pause();
        this.innerText = "🎵 Play Music";
    }
});

// تأثير القلوب الطايرة
function showFloatingHearts() {
    let heart = document.createElement("div");
    heart.innerText = "❤️";
    heart.classList.add("floating-heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}

// عرض النوتيفيكيشن باسم مريم
function showNotification(text) {
    let notification = document.createElement("div");
    notification.classList.add("notification");
    notification.innerText = text;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}

// عداد الحب
let loveCount = 0;
function updateLoveCounter() {
    loveCount++;
    document.getElementById("loveCounter").innerText = `Love Count: ${loveCount}`;
}

// تأثير الشرارات حول المؤشر
document.addEventListener("mousemove", (e) => {
    let spark = document.createElement("div");
    spark.classList.add("spark");
    spark.style.left = e.pageX + "px";
    spark.style.top = e.pageY + "px";
    document.body.appendChild(spark);
    setTimeout(() => spark.remove(), 500);
});
