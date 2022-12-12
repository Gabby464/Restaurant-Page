export const createHomePage = (bodyContainer) => {
    bodyContainer.innerHTML = '';
    const bioDiv = document.createElement('div');
    bioDiv.className = 'bio';
    const bioParagraph = document.createElement('p');
    bioDiv.appendChild(bioParagraph);
    bioParagraph.innerHTML = "Scazz, is not the result of a coincidence, neither an impulse. Scazz Restaurant is rather a dream that has been cooking for years. It is the result of engineering the perfect food business and the perfect intimate atmosphere for our guests.<hr>After our vast experience in over 114 countries and 35+ years in the business, we have purified and distilled the good and the excellent of this art and eliminated the bad and the evil of this business. For us Scazz means perfection, sacrifice, exclusivity and creativity to the maximum expression.<hr>Scazz is destined to pamper and spoil our guests with Michelin style cuisine, diversity and attention to detail all into one unique experience."
    bodyContainer.appendChild(bioDiv);
    const reservationEl = document.createElement('div');
    reservationEl.className = "reservation"
    const header3 = document.createElement('h3');
    reservationEl.appendChild(header3)
    bodyContainer.appendChild(reservationEl);
    header3.textContent = 'Book a table to experience "The Experience" of Scazz';
    const reservationButton = document.createElement('button');
    reservationButton.innerHTML = "Reserve";
    reservationButton.className = "reservation"
    reservationEl.appendChild(reservationButton);

    
}