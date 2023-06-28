
let form = document.querySelector("#add-article");

const containerBook = document.querySelector(".container-book");

const infoTitle = document.querySelector("#nom-input");
const infoAuthor = document.querySelector("#auteur-input");
const infoImg = document.querySelector("#image-input");



form.addEventListener('submit', (event)=>{
    event.preventDefault();

    // Liste des couleurs disponibles pour le bgColor des cards
    const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];

    const item = document.createElement('div');
    item.classList.add('item');
    containerBook.appendChild(item);
    item.style.backgroundColor = randomColor;
    item.style.borderRadius = '20px';
    item.style.overflow = 'hidden';
    item.style.animation = 'slide-in 0.5s ease-in-out';


    let newImg = new Image(10, 10)
    newImg.src = infoImg.value;
    item.appendChild(newImg);
    newImg.style.width = '100%';
    newImg.style.height = '260px';
    newImg.style.margin = '0 auto';
    newImg.style.objectFit = 'cover';

    const title = document.createElement('p')
    item.appendChild(title);
    title.textContent = infoTitle.value;
    title.style.fontSize = '2rem';
    title.style.textAlign = 'center';
    title.style.filter = 'invert()';

    const author = document.createElement('p')
    item.appendChild(author);
    author.textContent = "By " + infoAuthor.value;
    author.style.fontSize = '1.5rem';
    author.style.padding = '1.2rem';
    author.style.filter = 'invert()';

    
    const closeImg = document.createElement('img');
    closeImg.classList.add('close-img');
    item.appendChild(closeImg);
    closeImg.src ="https://cdn-icons-png.flaticon.com/128/4225/4225690.png";
    closeImg.style.width = '50px';
    closeImg.style.position = 'absolute';
    closeImg.style.top = '10px';
    closeImg.style.right = '10px';
    closeImg.style.cursor = 'pointer';
    closeImg.style.transition = 'all 0.5s ease-in-out';

    //Evenement on click sur closeImg pour remove la card
    closeImg.addEventListener('click', function() {
        item.remove();
      });
});