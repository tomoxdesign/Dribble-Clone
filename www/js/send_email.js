document.addEventListener('DOMContentLoaded', function() {
    var contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Zabrání výchozímu chování formuláře

        // Získání hodnot z formuláře
        var name = document.getElementById('nameInput').value;
        var email = document.getElementById('emailInput').value;
        var message = document.getElementById('messageInput').value;

        // Vytvoření mailto odkazu s předvyplněnými hodnotami
        var subject = encodeURIComponent("Elissdecor - nová zakázka");
        var body = encodeURIComponent("Jméno: " + name + "\nE-mail: " + email + "\n\nZpráva:\n" + message);
        var mailtoLink = "mailto:tomox.design@gmail.com?subject=" + subject + "&body=" + body;

        // Otevření e-mailového klienta uživatele s předvyplněnými údaji
        window.location.href = mailtoLink;

        // Vyčištění formuláře po odeslání
        document.getElementById('nameInput').value = '';
        document.getElementById('emailInput').value = '';
        document.getElementById('messageInput').value = '';
    });
});
