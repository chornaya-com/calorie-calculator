// Storage Controller

// Item Controller
const ItemControllerModule = (function () {
    // item constructor
    class Item {
        constructor(id, name, calories) {
            this.id = id;
            this.name = name;
            this.calories = calories;
        }
    }

    // data structure / state
    const data = {
        items: [
            {id: 0, name: 'Steak', calories: 1200},
            {id: 1, name: 'Ice Cream', calories: 400},
            {id: 2, name: 'Coffee', calories: 5}
        ],
        currentItem: null,
        totalCalories: 0
    }

    // log data
    function logData() {
        return data;
    }

    return {
        logData
    }

})();



// UI Controller
const UiControllerModule = (function () {

})();



// App Controller
const AppModule = (function (ItemControllerModule, UiControllerModule) {
    function init() {
        console.log('Initializing app...');
    }

    return {
        init
    }

})(ItemControllerModule, UiControllerModule);

// Initialize App
AppModule.init();