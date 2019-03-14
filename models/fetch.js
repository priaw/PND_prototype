const db = require('./database');

module.exports = class FetchData {
    constructor(id,date, driver, customer, dealer, source, destination, price, payment, job_description){
        this.id = id;
        this.date = date;
        this.driver = driver;
        this.customer = customer;
        this.dealer = dealer;
        this.source = source;
        this.destination = destination;
        this.price = price;
        this.payment = payment;
        this.job_description = job_description;
    }

    save(){

    }

    static DeleteByID(id) {

    }

    static FetchAllData(){
        db.query('SELECT * FROM `list-jobs`', 
        function(err, results) {
            if (err) throw error;
            return JSON.stringify(results);
    });
    }
}