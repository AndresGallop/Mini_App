import { fetchData } from "./components/DataMiner.js";
import Carritos from "./components/miniCars.js";

(() => {

    let vue_vm = new Vue({
        // link Vue to an element in our HTML
        //el: "#app",

        data: {
            message: "Hello from Vue!",
            anotherMessage: "more text, so simple! much winning",
            removeAformat: true,
            showBioData: false,
            automoviles: [],
            currentProfData: {}
        },

        // this is the "mounted" lifecycle hook. Vue is done creating itself, and has attached itself to the "app" div on the page
        mounted: function() {
            console.log("Vue is mounted, trying a fetch for the initial data");
            
            fetchData("./includes/index.php")
                .then(data => {data.forEach(mini => this.automoviles.push(mini));}).catch(err => console.error(err));
                        
        },

        // run a method when we change our view (update the DOM with Vue)
        updated: function() {
            console.log('Vue just updated the DOM');
        },

        methods: {   //LOS METHODS SON COMO FUNCIONES PERO SIN NECESIDAD DE ESCRIBIR FUNCTION SEGUN ENTIENDO
            logClicked() {

                console.log("clicked on a list item");

            },

            clickHeader() {
                console.log("clicked on the header");
            },

            showProfData(target) {
                // remove this prof from the professors array
                console.log('clicked to view prof bio data', target, target.name);
                // the "this" keyword inside a vue instance REFERS to the Vue instance itself by default

                // toggle the property between true and false using a ternary statement
                this.showBioData = this.showBioData ? false : true;

                // make the selected prof's data visible
                this.currentProfData = target;
            },            

            removeProf(target) {
                // remove this prof from the professors array
                console.log('clicked to remove prof', target, target.name);
                // the "this" keyword inside a vue instance REFERS to the Vue instance itself by default

                // make the selected prof's data visible
                // this.professors.splice(this.professors.indexOf(target), 1);
                this.$delete(this.automoviles, target);
            }
        },

        components: {
            "mini-autos": Carritos
        }
    }).$mount("#app"); // also connects Vue to your wrapper in HTML
})();