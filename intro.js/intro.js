// Question 1

class restaurantManager {
    constructor(inputResList) {
        this.restaurantList = inputResList;
    }

    printRestaurants = () => {
        return this.restaurantList.map(item => item.name);
    }

    getRestaurantsByCity = (inputCity) => {
        return this.restaurantList.filter(item => item.city.toLowerCase() == inputCity.toLowerCase());
    }
}

var resObj = new restaurantManager(
    [{
        name: "KFC",
        location: "central zone",
        city: "ERODE"
    },
    {
        name: "Dominos",
        location: "ambedkar street",
        city: "SALEM"
    },
    {    name: "Pizza-hut",
        location: "jothi road",
        city: "COIMBATORE"
    }]
);
resObj.printRestaurants();
resObj.getRestaurantsByCity('delhi');

// Question - 2

var orderData = {
    'Below 500': 15,
    '500-1000': 56,
    '1000-1500': 27,
    '1500-2000': 43,
    'Above 2000': 60
};

// a.> Total No. of Orders

var total = Object.values(orderData).reduce((a, b) => a + b, 0);   // 201

// b.>  No. of Order Proportions

Object.keys(orderData).length;     // 5

// c.> Percentage 

Object.keys(orderData).map((item, index) => {
    return {
        id: index + 1,
        orderProportion: item,
        percentage: ((orderData[item] / total) * 100).toFixed(2),
        restaurant: 'Punjabi Tadka'
    }
})
