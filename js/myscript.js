const myApp = new Vue({
    el : "#app",
    data : {
        contacts : [
            {
                name : "Teodorica",
                avatar : "img/icon1.png",
                visible : true,
                messages : [
                    {
                        date : "10/12/2022 15:30:55",
                        message : "Hey, Teo",
                        stato : "sent"
                    },
                    {
                        date : "10/12/2022 20:30:58",
                        message : "Ho saputo che hai trovato un lavoro!",
                        stato : "sent"
                    },
                    {
                        date : "10/12/2022 22:35:58",
                        message : "Si, ma mi hanno licenziata subito",
                        stato : "received"
                    },
                ]
            },
            {
                name : "Domiziana",
                avatar : "img/icon2.png",
                visible : true,
                messages : [
                    {
                        date : "10/12/2022 15:30:55",
                        message : "Ciao Domiziana",
                        stato : "sent"
                    },
                    {
                        date : "10/12/2022 20:30:58",
                        message : "Oggi a che ora ci vediamo?",
                        stato : "sent"
                    },
                    {
                        date : "10/12/2022 22:35:58",
                        message : "Mi dispiace, oggi non posso",
                        stato : "received"
                    },
                ]
            },
            {
                name : "Alice",
                avatar : "img/icon3.png",
                visible : true,
                messages : [
                    {
                        date : "10/12/2022 15:30:55",
                        message : "Hai ricevuto la mail?",
                        stato : "sent"
                    },
                    {
                        date : "10/12/2022 20:30:58",
                        message : "Si, tutto ok!",
                        stato : "sent"
                    },
                ]
            },
            {
                name : "Omar",
                avatar : "img/icon4.png",
                visible : true,
                messages : [
                    {
                        date : "10/12/2022 15:30:55",
                        message : "Ci sei per una partita a biliardo?",
                        stato : "received"
                    },
                    {
                        date : "10/12/2022 20:30:58",
                        message : "Molto volentieri!",
                        stato : "sent"
                    },
                    {
                        date : "10/12/2022 22:35:58",
                        message : "Ci vediamo alle 17 al bar",
                        stato : "received"
                    },
                    {
                        date : "10/12/2022 22:35:58",
                        message : "A dopo.",
                        stato : "sent"
                    }
                ]
            },
            {
                name : "Guglielmo",
                avatar : "img/icon5.png",
                visible : true,
                messages : [
                    {
                        date : "10/12/2022 15:30:55",
                        message : "Guglielmo, hai pagato il fantacalcio?",
                        stato : "sent"
                    },
                    {
                        date : "10/12/2022 20:30:58",
                        message : "Scusa ma chi sei?",
                        stato : "received"
                    },
                ]
            },
            {
                name : "Jessico Calcetto",
                avatar : "img/icon7.png",
                visible : false,
                messages : [
                    {
                        date : "10/12/2022 15:30:55",
                        message : "Ciao Domiziana",
                        stato : "sent"
                    },
                    {
                        date : "10/12/2022 20:30:58",
                        message : "Oggi a che ora ci vediamo?",
                        stato : "sent"
                    },
                    {
                        date : "10/12/2022 22:35:58",
                        message : "Mi dispiace, oggi non posso",
                        stato : "received"
                    },
                ]
            },
            {
                name : "Gennaro",
                avatar : "img/icon5.png",
                visible : true,
                messages : [
                    {
                        date : "10/12/2022 15:30:55",
                        message : "Ciao Domiziana",
                        stato : "sent"
                    },
                    {
                        date : "10/12/2022 20:30:58",
                        message : "Oggi a che ora ci vediamo?",
                        stato : "sent"
                    },
                    {
                        date : "10/12/2022 22:35:58",
                        message : "Mi dispiace, oggi non posso",
                        stato : "received"
                    },
                ]
            },
            {
                name : "Tizio di Fortnite",
                avatar : "img/icon7.png",
                visible : false,
                messages : [
                    {
                        date : "10/12/2022 15:30:55",
                        message : "Oggi partita online?",
                        stato : "sent"
                    },
                    {
                        date : "10/12/2022 20:30:58",
                        message : "Ho il pomeriggio libero",
                        stato : "sent"
                    },
                    {
                        date : "10/12/2022 22:35:58",
                        message : "Oggi no, ho il pc in manutenzione",
                        stato : "received"
                    },
                ]
            },
        ]
    }
});