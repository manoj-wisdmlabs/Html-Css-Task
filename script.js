const feedback = [
    { 
        quote: "Erin was a wonderful teacher. She was personable, kind, organized, and great with facilitating group discussion.",
        author: "Katy L."
    },
    { 
        quote: "The course exceeded my expectations. The instructor was knowledgeable, engaging, and made complex topics easy to understand.",
        author: "James H."
    },
    { 
        quote: "I truly appreciated the hands-on approach and practical examples provided during the sessions. It made learning enjoyable and impactful.",
        author: "Samantha T."
    },
    { 
        quote: "The instructor's enthusiasm for the subject was contagious. I left every session feeling inspired and motivated.",
        author: "Michael B."
    },
    { 
        quote: "Clear, concise, and interactive. This was one of the best learning experiences I've had. Highly recommended!",
        author: "Rachel C."
    }
];
let index = 0;

function menubar() {
    var nav = document.querySelector('.nav');
    nav.classList.toggle('hide');

}

function updateMessage(sequence) {
    var message = document.getElementById('quote-content');
    var author = document.getElementById('author');
    if(sequence == 'next') {
        index = (index + 1)%5;
    }else {
        index = (index -1) == -1 ? 4 : index - 1;
    }
    console.log(index);
    var messageText = feedback[index].quote;
    var authorText = feedback[index].author;

    message.textContent = messageText;
    author.textContent = authorText;
}
