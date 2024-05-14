const btn = document.querySelector('#new-quote');
const quote = document.querySelector('.quote');
const person = document.querySelector('.person');
const left = document.getElementById('left');
const right = document.getElementById('right');

const quotes = [
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        person: "Nelson Mandela"
    },
    {
        quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        person: "Mother Teresa"
    },
    {
        quote: "When you reach the end of your rope, tie a knot in it and hang on.",
        person: "Franklin D. Roosevelt"
    },
    {
        quote: "Always remember that you are absolutely unique. Just like everyone else.",
        person: "Margaret Mead"
    },
    {
        quote: "Whoever is happy will make others happy too.",
        person: "Anne Frank"
    },
    {
        quote: "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.",
        person: "Helen Keller"
    },
    {
        quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
        person: "Benjamin Franklin"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        person: "Eleanor Roosevelt"
    },
    {
        quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
        person: "Robert Louis Stevenson"
    },
    {
        quote: "In the end, it's not the years in your life that count. It's the life in your years.",
        person: "Adam Lincoln"
    }
];


    
const RGBCode = ['0', '1', '2','3','4', '5', '6', '7', '8', '9', 'A', 'B','C', 'D', 'E', 'F'];

btn.addEventListener('click', function() {

    let HEXCode = [];

    for ( let i = 0; i < 6; i++ ) {
        function changeFace() {
            let randomNumber = Math.floor(Math.random() * RGBCode.length);
            gottenRandomly = RGBCode[randomNumber];
            HEXCode.push(gottenRandomly);
            let newHEXCode = HEXCode.join('');
            document.body.style.background = `#${newHEXCode}`;
            console.log(newHEXCode);
        }
        changeFace();
    }
});

btn.addEventListener('click', function() {
    let random = Math.floor(Math.random() * quotes.length);
    console.log(random);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
});

let quoteNumber = 0

right.addEventListener('click', function(){
    quoteNumber += 1
    quote.innerText = quotes[quoteNumber].quote;
    person.innerText = quotes[quoteNumber].person;
    if (quoteNumber == quotes.length -1) {
        right.style.display = 'none';
    } else {
        left.style.display = 'inline';
    }
})

left.addEventListener('click', function(){
    quoteNumber -= 1
    quote.innerText = quotes[quoteNumber].quote;
    person.innerText = quotes[quoteNumber].person;
    if (quoteNumber == 0) {
        left.style.display = 'none'
    } else {
        right.style.display = 'inline';
    }
})