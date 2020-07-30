const UiControllerModule = (function () {

    const uiSelectors = {
        itemList: 'item-list',
        addBtn: '.add-btn',
        itemNameInput: 'item-name',
        itemCaloriesInput: 'item-calories'
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

    function getItemInput() {
        return {
            name: document.getElementById(uiSelectors.itemNameInput).value,
            calories: document.getElementById(uiSelectors.itemCaloriesInput).value
        };
    }

    function getSelectors() {
        return uiSelectors;
    }

    return {
        populateItemList,
        getSelectors,
        getItemInput
    }
})();