
const createMainLayout = (bodyContainer) => {

    function createInfoTab(title, ...info) {
        const infoDiv = document.createElement('div');
        infoDiv.className = 'info-tab';
        const infoTitle = document.createElement('h1');
        infoTitle.textContent = title;
        infoDiv.appendChild(infoTitle);
        console.log(info)
       for (let information of info){
            const infoP = document.createElement('p');
            infoP.textContent = information;
            infoDiv.appendChild(infoP);
        }
        return (infoDiv)
    }

    bodyContainer.innerHTML = ""
    const headerDiv = document.createElement('div');
    headerDiv.className = 'contact-header';
    bodyContainer.appendChild(headerDiv);

    headerDiv.textContent = "Contact Us";

    const mapDiv = document.createElement('div');
    mapDiv.className = 'map';
    mapDiv.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12397.194972006906!2d-120.60729177567022!3d39.031307491249244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809bb6ddbd111c3b%3A0xc611e23a42421cb5!2sEnd%20of%20the%20World!5e0!3m2!1sbg!2sbg!4v1670873855585!5m2!1sbg!2sbg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    bodyContainer.appendChild(mapDiv);

    const contactDetails = document.createElement('div');
    const location = createInfoTab('Location', 'End of the World', 'California, Usa');
    const hours = createInfoTab('Hours', 'Tue – Thu, 8 am – 10 pm', 'Fri – Sun, 8 am – 11 pm', 'Closed Mondays');
    const contact = createInfoTab('Contact', '(666) 777-6666', 'iHateWebpackSoooooBadly@gmail.com')
    contactDetails.append(location, hours, contact);
    bodyContainer.appendChild(contactDetails);

}

export {
    createMainLayout
}