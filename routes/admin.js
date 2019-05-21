//dashboard
admin = {};
//<li>Dashboard - view visitors, products bought, current(todays) gross sales</li>

var visitors = require('./models/visitors');

var transactions = require('./models/transactions');

function getToday()
{
const now = new Date();
const today = new Date(now.getFullYear(), now.getFullMonth, now.getDate());
return today;
}

//count how many visitors today
admin.visitorsToday = (req, res) => {visitors.find({created: getToday()})
.count((count) => {res.send(count);})
.catch((error) => {res.status(500);});
};
//return last ten visitors
admin.lastTenVisitors = (req, res) => {visitors.find({created: getToday()})
.limit(10)
.exec((visitors) => {res.json(visitors);})
.catch((error) => {res.status(500);});	
};

//return all transactions created today
admin.transactionsToday = (req, res) => {transactions.find({created: getToday()})
.exec((transactions) => {res.json(transactions);})
.catch((error) => {res.status(500);});	
};

