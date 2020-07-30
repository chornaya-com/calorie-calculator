const AppModule = (function (ItemControllerModule, UiControllerModule) {
    function loadEventListeners() {
        const uiSelectors = UiControllerModule.getSelectors();
        document.querySelector(uiSelectors.addBtn).addEventListener('click', itemAddSubmit);
    }

    function itemAddSubmit(event) {
        event.preventDefault();

        const input = UiControllerModule.getItemInput();

        if (input.name !== '' && input.calories !== '') {
            const newItem = ItemControllerModule.addItem(input.name, input.calories);
            UiControllerModule.addListItem(newItem);
            UiControllerModule.clearInput();

            const totalCalories = ItemControllerModule.getTotalCalories();
            UiControllerModule.showTotalCalories(totalCalories);
        }
    }

    function init() {
        const items = ItemControllerModule.getItems();

        if (items.length === 0) {
            UiControllerModule.hideList();
        } else {
            UiControllerModule.populateItemList(items);
        }

        const totalCalories = ItemControllerModule.getTotalCalories();
        UiControllerModule.showTotalCalories(totalCalories);

        loadEventListeners();
    }

    return {init};

})(ItemControllerModule, UiControllerModule);

AppModule.init();