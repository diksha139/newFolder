use('ProductOrder');
// switched to db ProductOrder

//4. Display the first 5 rows of product, inventory, user, and order collection. 
db.Product.find().limit(5);
// {
//   _id: ObjectId("654b7706a0120d9862863329"),
//   sku: 'SNY-11001',
//   code: 'Sony-01',
//   price: 100000,
//   created: '2021-08-09 12:32:56',
//   last_updated: '2021-08-09 12:32:56',
//   brand: 'Sony',
//   model: 'Bravia-X',
//   warranty: 5
// }
// {
//   _id: ObjectId("654b7706a0120d986286332a"),
//   sku: 'SNY-12002',
//   code: 'Sony-02',
//   price: 120000,
//   created: '2021-09-19 08:23:45',
//   last_updated: '2021-09-19 08:23:45',
//   brand: 'Sony',
//   model: 'Bravia-Z',
//   warranty: 5
// }
// {
//   _id: ObjectId("654b7706a0120d986286332b"),
//   sku: 'SMG-21001',
//   code: 'Samsung-01',
//   price: 66000,
//   created: '2021-07-13 16:46:32',
//   last_updated: '2021-07-13 16:46:32',
//   brand: 'Samsung',
//   model: 'XZ',
//   warranty: 3
// }
// {
//   _id: ObjectId("654b7706a0120d986286332c"),
//   sku: 'LLG-32001',
//   code: 'LG-01',
//   price: 64000,
//   created: '2021-10-28 18:34:21',
//   last_updated: '2021-10-28 18:34:21',
//   brand: 'LG',
//   model: 'ZX',
//   warranty: 3
// }
// {
//   _id: ObjectId("654b7706a0120d986286332d"),
//   sku: 'PNS-18001',
//   code: 'Panasonic-01',
//   price: 62000,
//   created: '2021-11-01 19:21:00',
//   last_updated: '2021-11-01 19:21:00',
//   brand: 'Panasonic',
//   model: 'LY',
//   warranty: 3
// }
db.Inventory.find().limit(5);

// {
//   _id: ObjectId("654b7725a0120d9862863334"),
//   sku: 'SNY-11001',
//   quantity: 100,
//   last_updated: '2021-11-18 18:19:27'
// }
// {
//   _id: ObjectId("654b7725a0120d9862863335"),
//   sku: 'SNY-12002',
//   quantity: 80,
//   last_updated: '2021-12-01 23:12:45'
// }
// {
//   _id: ObjectId("654b7725a0120d9862863336"),
//   sku: 'SMG-21001',
//   quantity: 400,
//   last_updated: '2021-10-31 19:30:18'
// }
// {
//   _id: ObjectId("654b7725a0120d9862863337"),
//   sku: 'LLG-32001',
//   quantity: 450,
//   last_updated: '2021-11-28 12:34:56'
// }
// {
//   _id: ObjectId("654b7725a0120d9862863338"),
//   sku: 'PNS-18001',
//   quantity: 500,
//   last_updated: '2021-12-01 11:34:21'
// }
db.User.find().limit(5);
// {
//   _id: ObjectId("654b773ba0120d986286333f"),
//   name: 'Anjali Gupta',
//   email: 'anjali.gupta@zestmail.com',
//   created: '2020-12-08 13:01:56',
//   last_accessed: '2021-12-04 13:23:00',
//   role: 'Customer'
// }
// {
//   _id: ObjectId("654b773ba0120d9862863340"),
//   name: 'Kevin Curran',
//   email: 'currank@zestmail.com',
//   created: '2021-08-15 09:10:11',
//   last_accessed: '2021-11-30 09:00:23',
//   role: 'Supplier'
// }
// {
//   _id: ObjectId("654b773ba0120d9862863341"),
//   name: 'Sudha Natarajan',
//   email: 'sudha.nat@yourmail.com',
//   created: '2021-06-14 12:12:24',
//   last_accessed: '2021-12-05 08:34:56',
//   role: 'Customer'
// }
// {
//   _id: ObjectId("654b773ba0120d9862863342"),
//   name: 'Nabil Jamal',
//   email: 'nabil.jamal@thatmail.com',
//   created: '2020-11-16 08:30:45',
//   last_accessed: '2021-11-29 10:13:09',
//   role: 'Customer'
// }
// {
//   _id: ObjectId("654b773ba0120d9862863343"),
//   name: 'Clara Kingston',
//   email: 'clara.king@evermail.com',
//   created: '2021-08-09 23:12:00',
//   last_accessed: '2021-12-02 11:45:02',
//   role: 'Customer'
// }
db.Order.find().limit(5);
// {
//   _id: ObjectId("654b7750a0120d986286334c"),
//   created: '2021-12-06 23:12:09',
//   last_updated: '2021-12-07 20:30:01',
//   items: [
//     {
//       product_sku: 'SNY-11001',
//       unit_price: 100000,
//       quantity: 1
//     }
//   ],
//   total_price: 100000,
//   discount: 10000,
//   net_price: 90000,
//   status: 1,
//   user_email: 'sudha.nat@yourmail.com'
// }
// {
//   _id: ObjectId("654b7750a0120d986286334d"),
//   created: '2021-12-07 12:18:01',
//   last_updated: '2021-12-07 23:59:59',
//   items: [
//     {
//       product_sku: 'SMG-21001',
//       unit_price: 66000,
//       quantity: 1
//     },
//     {
//       product_sku: 'LLG-32001',
//       unit_price: 64000,
//       quantity: 1
//     },
//     {
//       product_sku: 'PNS-18001',
//       unit_price: 62000,
//       quantity: 1
//     }
//   ],
//   total_price: 192000,
//   discount: 19200,
//   net_price: 172800,
//   status: 3,
//   user_email: 'currank@zestmail.com'
// }
// {
//   _id: ObjectId("654b7750a0120d986286334e"),
//   created: '2021-12-08 08:36:45',
//   last_updated: '2021-12-08 09:00:55',
//   items: [
//     {
//       product_sku: 'SNY-12002',
//       unit_price: 120000,
//       quantity: 1
//     },
//     {
//       product_sku: 'LLG-32001',
//       unit_price: 64000,
//       quantity: 1
//     }
//   ],
//   total_price: 184000,
//   discount: 18400,
//   net_price: 165600,
//   status: 2,
//   user_email: 'nabil.jamal@thatmail.com'
// }
// {
//   _id: ObjectId("654b7750a0120d986286334f"),
//   created: '2021-12-08 02:18:46',
//   last_updated: '2021-12-08 02:20:24',
//   items: [
//     {
//       product_sku: 'SNY-12002',
//       unit_price: 120000,
//       quantity: 1
//     }
//   ],
//   total_price: 120000,
//   discount: 12000,
//   net_price: 108000,
//   status: 2,
//   user_email: 'anjali.gupta@zestmail.com'
// }
// {
//   _id: ObjectId("654b7750a0120d9862863350"),
//   created: '2021-12-07 22:56:23',
//   last_updated: '2021-12-07 23:00:00',
//   items: [
//     {
//       product_sku: 'SMG-21001',
//       unit_price: 66000,
//       quantity: 1
//     }
//   ],
//   total_price: 66000,
//   discount: 6600,
//   net_price: 59400,
//   status: 2,
//   user_email: 'sudha.nat@yourmail.com'
// }


//5. Display the Unique Brand and Model names from the Product collection. 
db.Product.aggregate([{$group: {
  _id: {brand: '$brand',model: '$model'}
  }
}]);
// {
//   _id: {
//     brand: 'GoogleTV',
//     model: 'GO1'
//   }
// }
// {
//   _id: {
//     brand: 'LG',
//     model: 'N'
//   }
// }
// {
//   _id: {
//     brand: 'Samsung',
//     model: 'XZ'
//   }
// }
// {
//   _id: {
//     brand: 'Panasonic',
//     model: 'LY'
//   }
// }
// {
//   _id: {
//     brand: 'Haier',
//     model: 'A'
//   }
// }
// {
//   _id: {
//     brand: 'LG',
//     model: 'ZX'
//   }
// }
// {
//   _id: {
//     brand: 'AppleTV',
//     model: 'AP1'
//   }
// }
// {
//   _id: {
//     brand: 'Sony',
//     model: 'Bravia-X'
//   }
// }
// {
//   _id: {
//     brand: 'Samsung',
//     model: 'G'
//   }
// }
// {
//   _id: {
//     brand: 'Sony',
//     model: 'Bravia-Z'
//   }
// }

//6. Find the maximum and minimum price of the given products.
db.Product.aggregate([
    {
        $group: {
          _id: null,
          min: {  $min: '$price'},
          max: {  $max: '$price'}
        }
    }
]);
// {
//   _id: null,
//   min: 62000,
//   max: 150000
// }
// db.Inventory.find({'sku':'SNY-11001'},{'_id':0,'sku':1, 'quantity':1, 'last_updated':1});
// {
//   sku: 'SNY-11001',
//   quantity: 100,
//   last_updated: '2021-11-18 18:19:27'
// }



//7. List down the count of the total number of users whose role is identified as 'Supplier' from User collection.
db.User.find({role:'Supplier'}).count();
// 3

//8. Display 'sku', 'code', 'price', 'brand' and 'warranty' information for the model 'Bravia-X'.
db.Product.find({model:'Bravia-X'},{_id:0, sku:1, code:1, price:1, brand:1, warranty:1, model:1}); 
// {
//   sku: 'SNY-11001',
//   code: 'Sony-01',
//   price: 100000,
//   brand: 'Sony',
//   model: 'Bravia-X',
//   warranty: 5
// }

//9. Find all the information of Sony products which have an Price greater than 1 lakh.
db.Product.find({brand:'Sony' , price: {$gt : 100000}},{_id:0});
// {
//   sku: 'SNY-12002',
//   code: 'Sony-02',
//   price: 120000,
//   created: '2021-09-19 08:23:45',
//   last_updated: '2021-09-19 08:23:45',
//   brand: 'Sony',
//   model: 'Bravia-Z',
//   warranty: 5
// }


// 10. Find the total no of users by each role, sort them is descending order and save the results in the temporary collection
db.User.aggregate(
    [
        {
            $group:{
                "_id" : "$role",
                count : {"$sum":1}
            }
        },
        {
            "$sort":{count:-1}
        }
    ]
)
// {
//     _id: 'Customer',
//     count: 9
//   }
// {
//     _id: 'Supplier',
//     count: 3
//   }