const reviews = [
    {
        author: '.Codewithharry',
        job: '  Youtuber',
        text: 'Harry is also known as CodeWithHarry on youtube. He has a hude subscribers youtube channel. He had done his study in B.Tech Computer Science.',
        img: 'codewithharry.webp'
    },
    {
        author: 'Sanjeev Kushwaha',
        job: 'Front End Developer',
        text: 'My name is Sanjeev Kushwaha . i am  pursuing B.E. from Institute Of Engineering Jiwaji University Gwalior (M.P)',
        img: '444444443.jpg',
    },
    {
        author: 'Praveen Sahu',
        job: 'Web Developer',
        text: 'My name is Praveen Sahu . i am  pursuing B.E. from Institute Of Engineering Jiwaji University Gwalior (M.P)',
        img: 'WhatsApp Image 2024-01-08 at 1.59.53 PM.jpeg',
    },
    // {
    //     author: '',
    //     job: '',
    //     text: '',
    //     img: ''
    // }

]

// Creating variables to get elements from our DOM.
const mainImage = document.getElementById('img');
const myAuthor = document.getElementById('author');
const myJob = document.getElementById('job');
const myText = document.getElementById('text');
const prev = document.getElementById('prev-btn');
const next = document.getElementById('next-btn');
const random = document.getElementById('randomBtn')

let indexNum = 0;
let length = reviews.length;

// Code for listening next button event
next.addEventListener('click', function () {
    indexNum++;
    if (indexNum > length-1) {
        indexNum = 0;
        mainImage.src = reviews[indexNum].img;
        myAuthor.innerHTML = reviews[indexNum].author;
        myJob.innerHTML = reviews[indexNum].job;
        myText.innerHTML = reviews[indexNum].text;
    }
    else {
        mainImage.src = reviews[indexNum].img;
        myAuthor.innerHTML = reviews[indexNum].author;
        myJob.innerHTML = reviews[indexNum].job;
        myText.innerHTML = reviews[indexNum].text;
    }
})

// Code for listening previous button event
prev.addEventListener('click', function () {
    indexNum--;
    if (indexNum < 0) {
        indexNum = 3;
        mainImage.src = reviews[indexNum].img;
        myAuthor.innerHTML = reviews[indexNum].author;
        myJob.innerHTML = reviews[indexNum].job;
        myText.innerHTML = reviews[indexNum].text;
    }
    else {
        mainImage.src = reviews[indexNum].img;
        myAuthor.innerHTML = reviews[indexNum].author;
        myJob.innerHTML = reviews[indexNum].job;
        myText.innerHTML = reviews[indexNum].text;
    }
})

// Code for listening random button event
random.addEventListener('click', function () {
    let num = Math.floor(3 * (Math.random()));

    mainImage.src = reviews[num].img;
    myAuthor.innerHTML = reviews[num].author;
    myJob.innerHTML = reviews[num].job;
    myText.innerHTML = reviews[num].text;
})