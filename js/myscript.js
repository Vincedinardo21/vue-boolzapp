const myApp = new Vue({
    el : "#app",
    data : {
        activeChat : 0,
        newMessage : "",
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
                        stato : "received"
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
                        message : "Oggi dobbiamo vincere!",
                        stato : "received"
                    },
                    {
                        date : "10/12/2022 20:30:58",
                        message : "Contaci!",
                        stato : "sent"
                    },
                    {
                        date : "10/12/2022 22:35:58",
                        message : "Non hai fatto un tiro oggi!",
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
                        message : "Hai consegnato il sito?",
                        stato : "sent"
                    },
                    {
                        date : "10/12/2022 20:30:58",
                        message : "Non ancora, ci sto lavorando, tu?",
                        stato : "received"
                    },
                    {
                        date : "10/12/2022 22:35:58",
                        message : "Idem",
                        stato : "sent"
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
    },
    methods : {
        // Seleziono una chat
        clickOnChat(element){
            this.activeChat = element;
            console.log(this.contacts[element].name);
        },

        // Scrivo un messaggio e invio
        addMessage(){ 
            let thisContact = this.contacts[this.activeChat];           
            thisContact.messages.push({
                date : "10/12/2022 23:34:12",
                message : this.newMessage,
                stato : "sent"
            });
            this.newMessage = "";

            // Risposta utente dopo 1 sec
            setTimeout(() => {
                thisContact.messages.push({
                    date : "11/12/2022 23:34:12",
                    message : "Ok",
                    stato : "received"
                });
            }, 1000);
        },

        searchUsers(){
            
        }
    }
});