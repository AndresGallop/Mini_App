export default {
    name: "miniCars",

    props: ["mini"],  //props means properties

    // data needs to be a function inside a component
    data: function() {
        return {
            myName: this.mini.name,
            myDesc: this.mini.description,
            Company: "Mini"
        }
    },

    template: 
    `<li @click="logClicked">
        <img :src="'images/' + mini.image" :alt='mini.name + " image"'>
        <p>Automovil carro: {{ mini.name }}</p>

        
    </li>`,

    created: function () {
        console.log(`created ${this.mini.name}'s card`);
    },

    methods: {
        logClicked() {
            console.log(`fired from inside ${this.mini.name}'s component!`);
        }
    }
}