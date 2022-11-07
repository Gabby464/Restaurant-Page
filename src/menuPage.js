export class Item {
    constructor(Prname, price) {
        this.Prname = Prname;
        this.price = price;
    }
    createEl() {
        const itemDiv = document.createElement("div");
        itemDiv.className = "menu-item";

        const header = document.createElement("h2");
        header.className = "name-item";
        header.textContent = this.Prname;
        itemDiv.appendChild(header);

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
        //create nodes and return section element;
        class Section {
            constructor(content) {
                this.content = content
            }
            createElelment(content) {
                const mainDiv = document.createElement("div");
                mainDiv.className = 'menu-section';
                //main div = header + sectionItems
                const header = document.createElement("div");
                header.textContent = content;
                const sectionItems = document.createElement("div");
                sectionItems.class = "section-items";
                mainDiv.append(header, sectionItems);
                bodyContainer.appendChild(mainDiv);
                return sectionItems;
            }
        }
        const createSections = () => {
            const salads = new Section('Salads');
            const saladItems = salads.createElelment();
            const main = new Section('Main Courses');
            const mainItems = main.createElelment();
            const desserts = new Section('Desserts');
            const dessertItems = desserts.createElelment()
            return([saladItems, mainItems, dessertItems])
        }

        ;
        const fillInSections = () => {
            const allSections = createSections()
            let saladItems, mainItems, dessertItems;
            [saladItems, mainItems, dessertItems] = allSections;
            const burrito = new Item('Burrito', '14.99USD');
            const pasta = new Item('Pasta', '18.99USD');
            const club = new Item('Club Sandwich', '11.99USD');
            const trufflePasta = new Item('Truffle Pasta', '21.99USD');
            const steak = new Item('Steak', '22.99USD');
            const cake = new Item('Cake', '7.99USD');
            const pancakes = new Item('Pancakes', '11.29USD');
            const salad = new Item('Salad', '9.99USD');
            const greekSalad = new Item('Greek Salad', '10.99USD');
        
            mainItems.append(club.createEl(), burrito.createEl(), steak.createEl(), pasta.createEl(), trufflePasta.createEl());
            saladItems.append(salad.createEl(), greekSalad.createEl());
            dessertItems.append(cake.createEl(), pancakes.createEl())
        }

        fillInSections()
}