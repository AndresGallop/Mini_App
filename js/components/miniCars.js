export default {
    name: "miniCars",

    props: ["mini"],  //props means properties

    // data needs to be a function inside a component
    data: function() {
        return {
            name: this.mini.name,
            description: this.mini.description,
            Company: "Mini"
        }
    },

    template: 
    `<li @click="logClicked">
        <img :src="'images/' + mini.image" :alt='mini.name + " image"'>
        <!--<p>Automovil carro: {{ mini.name }}</p>-->
    </li>`,

    created: function () {
        console.log(`created ${this.mini.name}'s card`);
    },


    methods: {
        logClicked: function() {

            debugger;

             console.log(`Great selection, the ${this.mini.name} is amazing!`);

             let lightbox = document.querySelector(".lightbox"),
             closeButton = lightbox.querySelector('span');

                console.log("clicked on a list item");
                

         closeButton.addEventListener("click", ()=> {lightbox.classList.remove('show-lightbox')});

         lightbox.classList.add('show-lightbox');
         // lightbox should open but nothing inside yet
         lightbox.querySelector('img').src = `images/${this.mini.image}`;
         lightbox.querySelector('h3').textContent = this.mini.name ;
         lightbox.querySelector('p').textContent = this.mini.description;
                
            
        }
    }
}