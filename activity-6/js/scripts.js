var messages = [];

var messageType = {
    out: 'out-message',
    in: 'in-message',
    unknown: 'unknown-message'
};

//seed data
var data = [
    {
        type: messageType.out,
        user: 'Mal',
        message: 'Hey, lets go on a boat ride'
    },
    {
        type: messageType.in,
        user: 'Candace',
        message: 'Hey mal, let me know what time works for you'
    },
    {
        type: messageType.out,
        user: 'Mal',
        message: 'Be ready by 7'

    }
];

//Message constructor
function Message(type, user, message){
    this.type = type;
    this.user = user;
    this.message = message;
}

//Function to create and return an element for the supplied message
function createMessageElement(message){
    //create text element for the message
    var messageText = document.createTextNode(
        message.user + ': ' + message.message
    );

    //Create the element and add the message text
    var messageEl = document.createElement('div');
    messageEl.appendChild(messageText);

    //Add a class using the message type
    messageEl.className = message.type;

    return messageEl;
}

function addMessageHandler(event) {
    var user, type;
    var messageInput = document.getElementById('message-input');
    var messagesContainerEl = document.getElementById('message-container');

    //Determine message type and set message variables accordingly.
    switch(event.target.id) {
        case 'send-button':
            user = 'Mal';
            type = messageType.out;
            break;
        case 'reply-button':
            user = 'Candace'
            type = messageType.in;
            break;
        default:
            user = 'unknown';
            type = messageType.unknown;
    }

    //create new message
    if(messageInput.value != '') {
        //Construct a message and add it to the array
        var message = new Message(type, user, messageInput.value);
        messages.push(message);

        //create a message element
        var el = createMessageElement(message);

        //Add the message element to DOM
        messagesContainerEl.appendChild(el);

        //Reset input
        messageInput.value = '';
    }
}

//Load seed data from data array
function loadSeedData() {
    for(var i = 0; i < data.length; i++) {
        var message = new Message(data[i].type, data[i].user, data[i].message);
        messages.push(message);
    }

    //Load view w pre-loaded messages
    var messagesContainerEl = document.getElementById('message-container');

    for(var i = 0; i < messages.length; i++) {
        var message = messages[i];
        var el = createMessageElement(message)

        messagesContainerEl.appendChild(el);
    }
}

var init = function() {
    //Wire event handlers
    document.getElementById('send-button').onclick = addMessageHandler;
    document.getElementById('reply-button').onclick = addMessageHandler;

    //Load seed data from data array above
    loadSeedData();
};

init();