const UiControllerModule = (function () {

    const uiSelectors = {
        itemList: 'item-list',
        addBtn: '.add-btn',
        itemNameInput: 'item-name',
        itemCaloriesInput: 'item-calories',
        totalCalories: '.total-calories'
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

    function addListItem(item) {
        document.getElementById(uiSelectors.itemList).style.display = 'block';
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.id = `item-${item.id}`;
        li.innerHTML = `<strong>${item.name}:</strong> ${item.calories} kcal
                        <a href="#" class="secondary-content">
                            <i class="edit-item fa fa-pencil"></i>
                        </a>`;
        document.getElementById(uiSelectors.itemList).insertAdjacentElement('beforeend', li);
    }

    function clearInput() {
        document.getElementById(uiSelectors.itemNameInput).value = '';
        document.getElementById(uiSelectors.itemCaloriesInput).value = '';
    }

    function hideList() {
        document.getElementById(uiSelectors.itemList).style.display = 'none';
    }

    function showTotalCalories(totalCalories) {
        document.querySelector(uiSelectors.totalCalories).textContent = totalCalories;
    }

    return {
        populateItemList,
        getSelectors,
        getItemInput,
        addListItem,
        clearInput,
        hideList,
        showTotalCalories
    }
})();