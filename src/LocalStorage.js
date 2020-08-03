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

    return {
        storeItem,
        getItemsFromStorage
    }
})();