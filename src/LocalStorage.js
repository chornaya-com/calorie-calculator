const StorageControllerModule = (function () {
    function storeItem(item) {
        let items;

        if (localStorage.getItem('items') === null) {
            items = [];
            items.push(item);

            localStorage.setItem('items', JSON.stringify(items));
        } else {
            items = JSON.parse(localStorage.getItem('items'));
            items.push(item);

            localStorage.setItem('items', JSON.stringify(items));
        }
    }

    function getItemsFromStorage() {
        let items;
        if (localStorage.getItem('items') === null) {
            items = [];
        } else {
            items = JSON.parse(localStorage.getItem('items'));
        }
        return items;
    }

    function updateItemStorage(updatedItem) {
        let items = JSON.parse(localStorage.getItem('items'));
        items.forEach((item, index) => {
            if (updatedItem.id === item.id) {
                items.splice(index, 1, updatedItem);
            }
        });
        localStorage.setItem('items', JSON.stringify(items));
    }

    function deleteItemFromStorage(id) {
        let items = JSON.parse(localStorage.getItem('items'));
        items.forEach((item, index) => {
            if (id === item.id) {
                items.splice(index, 1);
            }
        });
        localStorage.setItem('items', JSON.stringify(items));
    }

    function clearItemsFromStorage() {
        localStorage.removeItem('items');
    }

    return {
        storeItem,
        getItemsFromStorage,
        updateItemStorage,
        deleteItemFromStorage,
        clearItemsFromStorage
    }
})();