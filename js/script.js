window.onload = function(){

    var matrix =[
        // Agent Smith:
        'Have you ever stood and stared at it, marveled at its beauty, its genius?',
        'Billions of people just living out their lives, oblivious.',
        'Did you know that the first Matrix was designed to be a perfect human world, where none suffered, where everyone would be happy?',
        'It was a disaster.',
        'No one would accept the program, entire crops were lost.',
        'Some believed we lacked the programming language to describe your perfect world, but I believe that, as a species, human beings define their reality through misery and suffering.',
        'The perfect world was a dream that your primitive cerebrum kept trying to wake up from.',
        'Which is why the Matrix was redesigned to this, the peak of your civilization.',
        'I say your civilization, because as soon as we started thinking for you, it really became our civilization, which is of course what this is all about.',
        'Evolution, Morpheus, evolution. Like the dinosaur.',
        'Look out that window.',
        'You\'ve had your time.',
        'The future is our world, Morpheus.',
        'The future is our time.',
        // Neo:
        'I know you\'re out there.',
        'I can feel you now.',
        'I know that you\'re afraid... you\'re afraid of us.',
        'You\'re afraid of change. I don\'t know the future.',
        'I didn\'t come here to tell you how this is going to end.',
        'I came here to tell you how it\'s going to begin.',
        'I\'m going to hang up this phone, and then I\'m going to show these people what you don\'t want them to see.',
        'I\'m going to show them a world without you. A world without rules and controls, without borders or boundaries.',
        'A world where anything is possible.',
        'Where we go from there is a choice I leave to you.'
    ]

    for (let i=0; i<matrix.length; i++){
        for (let j=0; j<matrix[i].length; j++){
            setTimeout(function(){
                document.getElementById("code").innerHTML += matrix[i].charAt(j);
                console.log("ZEICHEN");
            }, 50*j);
            console.log("pause");
        }
        document.getElementById("matrix").innerHTML += "<br>";
        console.log("ZEILE");
    }
}