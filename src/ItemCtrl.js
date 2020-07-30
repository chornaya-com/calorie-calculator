const ItemControllerModule = (function () {
    class Item {
        constructor(id, name, calories) {
            this.id = id;
            this.name = name;
            this.calories = calories;
        }
    }

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

    return {
        logData,
        getItems,
        addItem
    }

})();