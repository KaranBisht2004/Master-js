const zodiacSING = [
    "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
];

const compliment = [
    "You have a great sense of humor.",
    "Your energy is genuinely infectious.",
    "You are an incredible listener.",
    "You bring out the best in the people around you.",
    "Your creativity is inspiring.",
    "You have a remarkably sharp mind.",
    "Your resilience is deeply admirable.",
    "You make people feel safe and welcome.",
    "Your passion is absolutely beautiful.",
    "You have impeccable taste in everything.",
    "Your kindness is a breath of fresh air.",
    "You are much stronger than you give yourself credit for.",
    "Your perspective on life is fascinating.",
    "You have a very calming presence.",
    "You are incredibly reliable and trustworthy.",
    "Your confidence is quiet but powerful.",
    "You possess a genuinely unique soul.",
    "Your determination is bound to take you far.",
    "You have a gift for making people smile.",
    "Your thoughtfulness never goes unnoticed.",
    "You are a wonderfully empathetic person.",
    "Your authenticity is incredibly refreshing.",
    "You handle difficult situations with immense grace.",
    "You have a beautiful way with words.",
    "Your enthusiasm can brighten any room.",
    "You are a natural leader, even if you don't always see it.",
    "Your intuition is incredibly sharp.",
    "You bring so much joy into the world.",
    "Your attention to detail is brilliant.",
    "You have a heart of absolute gold.",
    "You are exactly where you need to be today."
];

const vitmecompliment = [
    "Vitamin A: You have an amazing vision for your future.",
    "Vitamin B: Your bravery in facing new challenges is stellar.",
    "Vitamin C: Your charisma is absolutely glowing today.",
    "Vitamin D: You are pure sunshine to everyone you meet.",
    "Vitamin E: Your empathy makes the world a better place.",
    "Vitamin K: Your kindness is your superpower.",
    "Vitamin B6: Your balance in life is deeply grounded.",
    "Vitamin B12: Your energy levels are beautifully vibrant.",
    "Vitamin Focus: Your dedication to your goals is unmatched.",
    "Vitamin Peace: You radiate calm and serenity.",
    "Vitamin Joy: Your laughter is the best kind of medicine.",
    "Vitamin Spark: You possess a brilliant, creative spark.",
    "Vitamin Glow: Your inner beauty shines through effortlessly.",
    "Vitamin Grit: Your mental toughness is incredibly inspiring.",
    "Vitamin Hope: Your optimistic outlook lifts others up.",
    "Vitamin Harmony: You bring balance wherever you go.",
    "Vitamin Bold: You aren't afraid to stand out in a crowd.",
    "Vitamin Grace: You handle every curveball with elegance.",
    "Vitamin True: Your loyalty to those you love is fierce.",
    "Vitamin Magic: You make ordinary moments feel special.",
    "Vitamin Logic: Your problem-solving skills are top-notch.",
    "Vitamin Warmth: Your presence feels like a cozy blanket.",
    "Vitamin Free: Your free spirit is beautiful to watch.",
    "Vitamin Drive: Your ambition will open doors for you.",
    "Vitamin Wise: Your inner wisdom runs incredibly deep.",
    "Vitamin Sweet: Your gentle nature is a rare gift.",
    "Vitamin Root: You are wonderfully steady and reliable.",
    "Vitamin Heart: You love deeply and unapologetically.",
    "Vitamin Zen: You have mastered the art of letting go.",
    "Vitamin Shine: Today is your day to take center stage.",
    "Vitamin Whole: You are perfectly complete just as you are."
];

const recmdetion = [
    "Take 5 minutes to just breathe and clear your mind.",
    "Reach out to an old friend you haven't spoken to in a while.",
    "Drink an extra glass of water right now.",
    "Step outside and get some fresh air for a moment.",
    "Treat yourself to your favorite snack today.",
    "Write down three things you are genuinely grateful for.",
    "Listen to your favorite upbeat song at full volume.",
    "Organize a small corner of your room or desk.",
    "Go to bed 30 minutes earlier tonight.",
    "Compliment a total stranger today.",
    "Take a break from social media for the next few hours.",
    "Read a chapter of a book or an interesting article.",
    "Stretch your muscles for a couple of minutes.",
    "Spend a little time planning out your week.",
    "Write down one big goal and the first step to reach it.",
    "Do something creative, even if it's just a quick doodle.",
    "Watch a comedy or something that makes you laugh out loud.",
    "Declutter your phone's photo gallery or camera roll.",
    "Take the scenic route home today if you can.",
    "Light a candle or use a nice scent in your room.",
    "Enjoy a warm cup of tea or coffee without distractions.",
    "Practice saying 'no' to something that drains your energy.",
    "Wear your favorite outfit, even if you're staying in.",
    "Cook a healthy, delicious meal from scratch.",
    "Forgive yourself for a past mistake and move forward.",
    "Spend some quality time with a pet or nature.",
    "Treat yourself to a relaxing, long warm shower.",
    "Write your thoughts down in a journal to clear your head.",
    "Smile at yourself in the mirror and mean it.",
    "Remember to take things one single step at a time."
];

const predictions = [
    "An unexpected pleasant surprise is coming your way very soon.",
    "A long-standing problem will finally find its resolution.",
    "You will soon connect with someone who changes your perspective.",
    "An exciting financial or career opportunity is on the horizon.",
    "A creative breakthrough will strike when you least expect it.",
    "Your hard work over the past few weeks is about to pay off.",
    "A moment of pure clarity will help you make a tough decision.",
    "An old memory will bring a sudden smile to your face today.",
    "You will find closure in an area that has been bothering you.",
    "A fresh start is coming, bringing a wave of positive energy.",
    "You will inspire someone today without even realizing it.",
    "A small risk you take this week will lead to a great reward.",
    "You are about to enter a peaceful and stable phase of life.",
    "A conversation today will plant the seed for a brilliant idea.",
    "You will soon rediscover a passion you had completely forgotten.",
    "Good news regarding a family or friend group is on its way.",
    "Your intuition will guide you perfectly through a tricky situation.",
    "A sudden burst of energy will help you crush your goals.",
    "Someone is going to speak very highly of you behind your back.",
    "You will find unexpected comfort in a completely new routine.",
    "An item you thought you lost will mysteriously turn up.",
    "A heavy emotional burden is going to lift from your shoulders.",
    "You will soon receive the recognition you rightfully deserve.",
    "A door that recently closed will make way for a much better one.",
    "You will make meaningful progress on a personal project.",
    "A random act of kindness will come back to you tenfold.",
    "You are going to master a skill you've been struggling with.",
    "An exciting journey or trip is in your near future.",
    "You will find unexpected joy in a very quiet, simple moment.",
    "Everything is aligning perfectly behind the scenes for you."
];


const astrologyForm = document.getElementById("astrologyForm")

astrologyForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const firstName = document.getElementById("firstName").value.trim() || "User";
    const lastName = document.getElementById("lastName").value.trim() || "";

    const day = parseInt(document.getElementById("day").value) || 1;
    const month = parseInt(document.getElementById("month").value) || 1;
    const year = parseInt(document.getElementById("year").value) || 2000;

    const zodiacIndex = Math.max(0, Math.min(month - 1, 11));
    const complimentIndex = Math.max(0, Math.min(day - 1, 30));

    const vitmeIndex = year % 31;
    const recIndex = (day * month) % 30;
    const predIndex = (firstName.length * lastName.length) % 30;

    const text = `Hello ${firstName} ${lastName}. Your Zodiac Sign is ${zodiacSING[zodiacIndex]}. ${compliment[complimentIndex]} ${vitmecompliment[vitmeIndex]} Recommendation: ${recmdetion[recIndex]} Prediction: ${predictions[predIndex]}`;

    
    let results = document.getElementById("results");
    results.textContent = text;
})