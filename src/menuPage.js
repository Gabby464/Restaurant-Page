export class Item {
    constructor(Prname, price, description) {
        this.Prname = Prname;
        this.price = price;
        this.description = description;
    }
    createEl() {
        const itemDiv = document.createElement("div");
        itemDiv.className = "menu-item";

        const namePriceDiv = document.createElement("div");
        namePriceDiv.className = "name-price";
        itemDiv.appendChild(namePriceDiv);
        const header = document.createElement("h2");
        header.className = "name-item";
        header.textContent = this.Prname;
        namePriceDiv.appendChild(header);

        const span = document.createElement("span");
        span.className = "underline";
        namePriceDiv.appendChild(span);

        const price = document.createElement("div");
        price.className = "price";
        price.textContent = this.price;
        namePriceDiv.appendChild(price);

        const menuDescription = document.createElement("p");
        menuDescription.className = 'menu-description';
        menuDescription.textContent = this.description;
        itemDiv.appendChild(menuDescription);
        return itemDiv;
    }
}

export const menuCreator = (bodyContainer) => {
    bodyContainer.innerHTML = ""
    const menuContainer = document.createElement("div");
    menuContainer.className = "menu-container";
    bodyContainer.appendChild(menuContainer); 
        //create nodes and return section element;
        class Section {
            constructor(content) {
                this.content = content
            }
            createElelment(content) {
                const mainDiv = document.createElement("div");
                mainDiv.className = 'menu-section';
                //main div = header + sectionItems
                const header = document.createElement("h1");
                header.className = 'menu-header';
                header.innerText = content;
                const sectionItems = document.createElement("div");
                sectionItems.class = "section-items";
                mainDiv.append(header, sectionItems);
                menuContainer.appendChild(mainDiv);
                return sectionItems;
            }
        }
        const createSections = () => {
            const salads = new Section();
            const saladItems = salads.createElelment('Salads');
            const main = new Section();
            const mainItems = main.createElelment('Main Courses');
            const desserts = new Section();
            const dessertItems = desserts.createElelment('Desserts')
            return([saladItems, mainItems, dessertItems])
        }

        ;
        const fillInSections = () => {
            const allSections = createSections()
            let saladItems, mainItems, dessertItems;
            [saladItems, mainItems, dessertItems] = allSections;
            saladItems.className = 'items';
            mainItems.className = 'items';
            dessertItems.className = 'items';
            const burrito = new Item('Burrito', '14.99USD', 'Wrap with veggies and rice, if you want we can add some meat in it');
            const pasta = new Item('Pasta', '18.99USD', 'Fresh pasta with homemade sauce made with mixed vegitables and mushrooms');
            const club = new Item('Club Sandwich', '11.99USD', 'Classic sandwich with ham and cheese, served with french fries');
            const trufflePasta = new Item('Truffle Pasta', '21.99USD', 'Fresh pasta with truffle sauce and chicken');
            const steak = new Item('Steak', '22.99USD', 'Beef steak served with baked potatos and a fresh salad');
            const cake = new Item('Cake', '7.99USD', 'Homemade chocolate cake, served with ice cream');
            const pancakes = new Item('Pancakes', '11.29USD', 'American pancakes served with various topings and fruit');
            const salad = new Item('Salad', '9.99USD', 'Chopped veggies with olive oil');
            const greekSalad = new Item('Greek Salad', '10.99USD', 'Chopped veggies with Feta cheese and olive oil')
        
            mainItems.append(club.createEl(), burrito.createEl(), steak.createEl(), pasta.createEl(), trufflePasta.createEl());
            saladItems.append(salad.createEl(), greekSalad.createEl());
            dessertItems.append(cake.createEl(), pancakes.createEl())
        }

        fillInSections()
}