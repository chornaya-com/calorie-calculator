// App Controller
const AppModule = (function (ItemControllerModule, UiControllerModule) {
    // load event listeners
    function loadEventListeners() {
        //get UI selectors from UI controller
        const uiSelectors = UiControllerModule.getSelectors();
        // add item event
        document.querySelector(uiSelectors.addBtn).addEventListener('click', itemAddSubmit);
    }

    // add item submit
    function itemAddSubmit(event) {
        event.preventDefault();

        //get input from UI controller
        const input = UiControllerModule.getItemInput();

        if (input.name !== '' && input.calories !== '') {
            const newItem = ItemControllerModule.addItem(input.name, input.calories);
        }
    }

    function init() {
        // fetch items from data structure
        const items = ItemControllerModule.getItems();

        // populate list with items
        UiControllerModule.populateItemList(items);

        //load event listeners
        loadEventListeners();
    }

    return {
        init
    }

})(ItemControllerModule, UiControllerModule);

// Initialize App
AppModule.init();