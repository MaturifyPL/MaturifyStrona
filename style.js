document.addEventListener("DOMContentLoaded", () => {
    
    const loadingDots = document.getElementById("loading-dots");
    let count = 0;

    /**
     * Funkcja cyklicznie dodająca i usuwająca kropki '...' (animacja w bok)
     */
    function animateDots() {
        // Co pół sekundy
        count = (count + 1) % 4; // Cykl 0 -> 1 -> 2 -> 3 -> 0 (co 0.5 sekundy)

        let dots = '';
        for (let i = 0; i < count; i++) {
            // Dodajemy spację przed kropką, aby oddzielić od "Już wkrótce"
            dots += '.'; 
        }

        // Zapewniamy, że zawsze są trzy spacje, aby tekst "Już wkrótce" się nie przesuwał
        loadingDots.innerText = ' ' + dots;
    }

    // Uruchomienie animacji co 500 ms (0.5 sekundy)
    setInterval(animateDots, 500);

});