
const fs = require('fs');


///////////////////////////////////////

// lo que se encuentra aquí abajo es lo primero que se necesita para empezar a crear la sesión de whatapp que nos servira para el bot
const qrcode = require('qrcode-terminal');

const { Client, LegacySessionAuth, LocalAuth } = require('whatsapp-web.js');


// const client = new Client();

/////////////////
//const SESSION_FILE_PATH = "./sesion"

/////
// el numero de telefono va aquí 
const contry_code = "521";
const number = "9842343944";
const msg = "Hola soy HectorBot, en un rato te responde Héctor Humano";

////

// let sessionData;

// if (fs.existsSync(SESSION_FILE_PATH)) {
//     sessionData = require(SESSION_FILE_PATH)
// }

// const client = new Client({
//     session: sessionData
// });
///////////////////

const client = new Client({
    authStrategy: new LocalAuth({
        clientId: "client-one" //Un identificador(Sugiero que no lo modifiques)
    })
});

client.on('authenticated', (session) => {
    //NO ES NECESARIO PERO SI QUIERES AGREGAS UN console.log
    //sessionData = session;
    //fs.writeFile(SESSION_FILE_PATH, JSON.stringify(session), (err) => {
    //    if (err) {
    //        console.error(err);
    //    }
    //});
});


client.initialize();

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log("El cliente está listo");
    let chatid = contry_code + number + "@c.us";
    client.sendMessage(chatid, msg).then((response) => {
        if (response.id.fromMe) {
            console.log("It works!");
        }
    })
});

///

///
/////////////////////////////////////////

// client.on('authenticated', session => {
//     sessionData = session;
//     fs.writeFile(SESSION_FILE_PATH, JSON.stringify(session), err => {
//         if (err) {
//             console.error(err);
//         }
//     });
// });

// client.on('auth_failure', msg => {
//     console.error('Hubo un fallo en la autenticación', msg);
// });

///
client.on('message', msg => {
    for (let index = 0; index < 100; index++) {
        
        if (msg.body === 'Hola') {
            client.sendMessage(msg.from, 'Hola soy ConchiBot');
        }     
    }
    if (msg.body === 'Hola ConchiBot') {
        client.sendMessage(msg.from, 'Hola ');
    } //else client.sendMessage(msg.from, 'Hola soy HéctorBOT en un momento te responde el Hector Humano');
    else if (msg.body === 'Advisor'){
        client.sendMessage(msg.from, 'Ocupo que , , ')
    }
    
    // console.log(client.getContact(msg));
    // console.log(client.msg.getChat());
    // console.log(msg.getQuotedMessage());

    // if (msg.body === 'Hola') {
    //     client.sendMessage(msg.from, 'Hola soy HéctorBOT en un momento te responde el Hector Humano');
    // } else client.sendMessage(msg.from, 'Hola soy HéctorBOT en un momento te responde el Hector Humano');
});
///



