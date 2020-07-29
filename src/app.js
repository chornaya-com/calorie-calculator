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

    // Public Methods
    function logData() {
        return data;
    }

    function getItems() {
        return data.items;
    }

    return {
        logData,
        getItems
    }

})();


// UI Controller
const UiControllerModule = (function () {

    const uiSelectors = {
        itemList: 'item-list'
    };

    function populateItemList(items) {
        let html = '';
        items.forEach((item) => {
            html += `<li id="item-${item.id}" class="collection-item">
                        <strong>${item.name}:</strong> ${item.calories} kcal
                        <a href="#" class="secondary-content">
                            <i class="edit-item fa fa-pencil"></i>
                        </a>
                    </li>`
        });

        document.getElementById(uiSelectors.itemList).innerHTML = html;
    }

    return {
        populateItemList
    }

})();


// App Controller
const AppModule = (function (ItemControllerModule, UiControllerModule) {
    function init() {
        // fetch items from data structure
        const items = ItemControllerModule.getItems();

        // populate list with items
        UiControllerModule.populateItemList(items);
    }

    return {
        init
    }

})(ItemControllerModule, UiControllerModule);

// Initialize App
AppModule.init();