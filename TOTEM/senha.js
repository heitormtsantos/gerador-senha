document.addEventListener("DOMContentLoaded", function() {
    const currentTicketElement = document.getElementById("currentTicket");

    const currentTicket = sessionStorage.getItem("currentTicket");

    currentTicketElement.textContent = ` ${currentTicket}`;
});
