const AppModule = (function (ItemControllerModule, UiControllerModule) {
    function loadEventListeners() {
        const uiSelectors = UiControllerModule.getSelectors();
        document.querySelector(uiSelectors.addBtn).addEventListener('click', itemAddSubmit);
        document.getElementById(uiSelectors.itemList).addEventListener('click', itemEditClick);
        document.querySelector(uiSelectors.updateBtn).addEventListener('click', itemUpdateSubmit);

        document.addEventListener('keypress', (event) => {
            if (event.keyCode === 13 || event.which === 13) {
                event.preventDefault();
                return false;
            }
        });
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

    function itemEditClick(event) {
        event.preventDefault();

        if (event.target.classList.contains('edit-item')) {
            const listId = event.target.parentNode.parentNode.id;
            const listIdArray = listId.split('-');
            const id = parseInt(listIdArray[1]);
            const itemToEdit = ItemControllerModule.getItemById(id);

            ItemControllerModule.setCurrentItem(itemToEdit);

            UiControllerModule.addItemToForm();
        }
    }

    function itemUpdateSubmit(event) {
        event.preventDefault();
        const input = UiControllerModule.getItemInput();
        const updatedItem = ItemControllerModule.updateItem(input.name, input.calories);
        UiControllerModule.updateListItem(updatedItem);

        const totalCalories = ItemControllerModule.getTotalCalories();
        UiControllerModule.showTotalCalories(totalCalories);

        UiControllerModule.clearEditState();
    }

    function init() {
        UiControllerModule.clearEditState();

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