const ItemControllerModule = (function () {
    class Item {
        constructor(id, name, calories) {
            this.id = id;
            this.name = name;
            this.calories = calories;
        }
    }

    const data = {
        items: [],
        currentItem: null,
        totalCalories: 0
    }

    function logData() {
        return data;
    }

    function getItems() {
        return data.items;
    }

    function addItem(name, calories) {
        let id = 0;
        if (data.items.length > 0) {
            id = data.items[data.items.length - 1].id + 1;
        }

        calories = parseInt(calories);

        const newItem = new Item(id, name, calories);
        data.items.push(newItem);

        return newItem;
    }

    function getTotalCalories() {
        let total = 0;
        data.items.forEach((item) => {
            total += item.calories;
        });

        data.totalCalories = total;

        return data.totalCalories;
    }

    function getItemById(id) {
        let found = null;
        data.items.forEach((item) => {
            if (item.id === id) {
                found = item;
            }
        });
        return found;
    }

    function setCurrentItem(item) {
        data.currentItem = item;
    }

    function getCurrentItem() {
        return data.currentItem;
    }

    return {
        logData,
        getItems,
        addItem,
        getTotalCalories,
        getItemById,
        setCurrentItem,
        getCurrentItem
    }

})();