export class Item{
    constructor(Prname, price) {
        this.Prname = Prname;
        this.price = price;
    }
    createEl(){
        const itemDiv = document.createElement("div");
        itemDiv.className = "menu-item";

        const header = document.createElement("h2");
        header.className = "name-item";
        header.textContent = this.Prname;
        itemDiv.appendChild(header);

        const itemImage = document.createElement("div");
        itemImage.className = "image-container";
        const image = document.createElement("img");
        itemImage.appendChild(image);
        itemDiv.appendChild(itemImage);
        image.src = `Menu-images/${this.Prname.toLowerCase()}.jpeg`;
        image.alt = `${this.Prname}`;

        const price = document.createElement("div");
        price.className = "price";
        price.textContent = this.price;
        itemDiv.appendChild(price);
        console.log(itemDiv)
        return itemDiv;
    }
}

export const menuCreator = (bodyContainer) => {
    bodyContainer.innerHTML = ""
    const main = document.createElement("div");
    main.className = "main-menu";
    const salads = document.createElement("div");
    salads.className = "salads-menu";
    const desserts = document.createElement("div");
    desserts.className = "dessert-menu"

    bodyContainer.append(salads, main, desserts)

    const burrito = new Item('Burrito', '14.99USD');
    const pasta = new Item('Pasta', '18.99USD');
    const club = new Item('Club Sandwich','11.99USD');
    const trufflePasta = new Item('Truffle Pasta', '21.99USD');
    const steak = new Item('Steak', '22.99USD')

    main.append(club.createEl(), burrito.createEl(), steak.createEl(), pasta.createEl(), trufflePasta.createEl());

    const salad = new Item('Salad', '9.99USD');
    const greekSalad = new Item('Greek Salad', '10.99USD');
    
    salads.append(salad.createEl(), greekSalad.createEl());

    const cake = new Item('Cake', '7.99USD');
    const pancakes = new Item('Pancakes', '11.29USD')

    desserts.append(cake.createEl(), pancakes.createEl())
}