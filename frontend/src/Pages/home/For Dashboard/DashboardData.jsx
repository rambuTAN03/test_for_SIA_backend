export const DashboardData = {

    

    getProductsData() {

        return [
            {
        
                Customer:"Shelly",
                Service:"Wash",
                Items: [{
                    Item:"item sample 01",
                    Itemtype: "sample ID 01",
                    Quantity: "1"
                }],
                Datarecieved: "Recieve Sample 01",
                Datetoclaim: "1/1/2024",
                Progress: "Yes",
                Report: "Report sample"
            },
            {
                Customer:"Shaggy",
                Service:"Dry Wash",
                Items: [{
                    Item:"item sample 02",
                    Itemtype: "sample ID 02",
                    Quantity: "2"
                }],
                Datarecieved: "Recieve Sample 02",
                Datetoclaim: "1/1/2024",
                Progress: "Yes",
                Report: "Report sample"
            },
            {
                Customer:"Danny",
                Service:"Dry Wash",
                Items: [{
                    Item:"item sample 03",
                    Itemtype: "sample ID 03",
                    Quantity: "3"
                }],
                Datarecieved: "Recieve Sample 03",
                Datetoclaim: "1/1/2024",
                Progress: "No",
                Report: "Report sample"
           
            }];
    },

    getProductsMini() {
        return Promise.resolve(this.getProductsData().slice(0, 5));
    },

    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    },

    getProducts() {
        return Promise.resolve(this.getProductsData());
    },

    getProductsWithOrdersSmall() {
        return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
    },

    getProductsWithOrders() {
        return Promise.resolve(this.getProductsWithOrdersData());
    }
};

