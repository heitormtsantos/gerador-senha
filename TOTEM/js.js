document.addEventListener("DOMContentLoaded", function() {
    const generateBtn = document.getElementById("generateBtn");
    const skipBtn = document.getElementById("skipBtn");
    const recallBtn = document.getElementById("recallBtn");
    const nextBtn = document.getElementById("nextBtn");

    let currentTicketNumber = 0; 

    const storedTicket = sessionStorage.getItem("currentTicket");
    if (storedTicket) {
        currentTicketNumber = parseInt(storedTicket);
    }

    updateCurrentTicket(); 

    generateBtn.addEventListener("click", function() {
        const patientType = document.getElementById("patientType").value;
        const department = document.getElementById("department").value;

        
        const ticketNumber = generateTicketNumber(patientType, department);

       
        currentTicketNumber = parseInt(ticketNumber);
        sessionStorage.setItem("currentTicket", ticketNumber);

       
        alert(`Sua senha é: ${ticketNumber}`);
        updateCurrentTicket(); 
    });

    skipBtn.addEventListener("click", function() {
       
        if (currentTicketNumber > 0) {
            currentTicketNumber++;
            sessionStorage.setItem("currentTicket", currentTicketNumber);
            updateCurrentTicket();
        }
    });

    recallBtn.addEventListener("click", function() {
        const ticketToRecall = prompt("Insira o número da senha que deseja chamar de volta:");
        if (ticketToRecall) {
            currentTicketNumber = parseInt(ticketToRecall);
            sessionStorage.setItem("currentTicket", currentTicketNumber);
            updateCurrentTicket();
        }
    });

    nextBtn.addEventListener("click", function() {
     
        currentTicketNumber++;
        sessionStorage.setItem("currentTicket", currentTicketNumber);
        updateCurrentTicket();
    });

    function generateTicketNumber(patientType, department) {
        const patientTypeCode = { normal: 1, idoso: 2, gestante: 3 };
        const departmentCode = { pediatria: 1, odontologia: 2 /* adicione outros setores aqui */ };

        return `${patientTypeCode[patientType]}${departmentCode[department]}${Math.floor(Math.random() * 100)}`;
    }

    function updateCurrentTicket() {
        const currentTicketElement = document.getElementById("currentTicket");
        currentTicketElement.textContent = `Senha Atual: ${currentTicketNumber}`;
    }
});
