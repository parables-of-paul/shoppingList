var path = require('paths');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
var express = require('express');
require('dotenv').config();


//connect to database
mongoose.connect(`mongodb+srv://${process.env.MONGOOSECRED}@cluster0.tyj8d.mongodb.net/shoppingList?retryWrites=true&w=majority`,{useUnifiedTopology:true, useNewUrlParser: true, useCreateIndex: true}).catch(error => handleError(error));

// create a schema

var productSchema = new mongoose.Schema({
    product: String,
});


// create models

var MiscData = mongoose.model('SummaryProductsList', productSchema);
var BathroomData = mongoose.model('BathroomProductsList', productSchema);
var FruitData = mongoose.model('FruitProductsList', productSchema);
var FridgeData = mongoose.model('FridgeProductsList', productSchema);
var FreezerData = mongoose.model('FreezerProductsList', productSchema);
var BakingData = mongoose.model('BakingProductsList', productSchema);

// assign selector



module.exports = function(app){
//get controller

    app.get('/', function(req, res){
        //get data from Mongo DB and pass it to the view
        MiscData.find({}, function(err, dataMisc){
                if(err) throw err;
                    BathroomData.find({}, function(err, dataBath){
                        if(err) throw err;
                        FruitData.find({}, function(err, dataFruit){
                            if(err) throw err;
                            FridgeData.find({}, function(err, dataFridge){
                                if(err) throw err;
                                FreezerData.find({}, function(err, dataFreezer){
                                    if(err) throw err;
                                    BakingData.find({}, function(err, dataBake){
                                        if(err) throw err;
                                        res.render('index', {miscList: dataMisc, bathroomData: dataBath, fruitData: dataFruit, fridgeData: dataFridge, freezerData: dataFreezer, bakingData: dataBake,});
                                    })
                                })
                            })
                            
                        });
                        
            });
        });
        });

        app.post('/', urlencodedParser, function(req, res){
            //get data from the view and add it to mongoDB
                var array = (Object.values(req.body))
                var cat = array[1];
                if(cat === 'miscChoice'){
                var newMiscProduct = MiscData(req.body).save(function(err, dataMisc){
                    if(err) throw err;
                    res.json(dataMisc);
                });
            } else if(cat === 'fruitChoice'){
                var newFruitProduct = FruitData(req.body).save(function(err, dataFruit){
                 if(err) throw err;

                res.json(dataFruit);
                });
                } else if(cat=== 'fridgeChoice'){
                var newFridgeProduct = FridgeData(req.body).save(function(err, dataFridge){
                    if(err) throw err;
    
                   res.json(dataFridge);
               });
           } else if(cat === 'freezerChoice'){
                var newFreezerProduct = FreezerData(req.body).save(function(err, dataFreezer){
                    if(err) throw err;
    
                    res.json(dataFreezer);
                    });
                    
                } else if(cat === 'bakingChoice'){
                    var newBakingProduct = BakingData(req.body).save(function(err, dataBake){
                    if(err) throw err;
    
                    res.json(dataBake);
                });
            } else if(cat === 'bathroomChoice'){
                var newBathProduct = BathroomData(req.body).save(function(err, dataBath){
                    if(err) throw err;
    
                    res.json(dataBath);
                });
                    };
                });
        
        
 
//delete controllers
                    //app.delete('/:dasher', function(req, res){
                         //MiscData.find({product: req.params.dasher.replace(/\-/g, " ")}).deleteOne(function(err, dataMisc){
                         //if(err) throw err;
                       //  res.json(dataMisc)
                     //});
                      //});

                      
                      app.delete('/:dasher', urlencodedParser, function(req, res){
                          console.log('route found successfully');
                          var deleteFruitArray = (Object.values(req.body));
                          var list = deleteFruitArray[1];
                          console.log(list);
                          if(list === 'fruit'){
                      FruitData.find({product: req.params.dasher.replace(/\-/g, " ").replace(/dash/g, "-").replace(/qMark/g, "?").replace(/hashMark/g, "#").replace(/percentMark/g, "%").replace(/ampersandMark/g, "&").replace(/periodMark/g, ".").replace(/fwdSlash/g, "/").replace(/backSlash/g, "\\")}).deleteOne(function(err, dataFruit){
                          if(err) throw err;
                          res.json(dataFruit);
                       });
                    } else if(list === 'misc') {
                        MiscData.find({product: req.params.dasher.replace(/\-/g, " ").replace(/dash/g, "-").replace(/qMark/g, "?").replace(/hashMark/g, "#").replace(/percentMark/g, "%").replace(/ampersandMark/g, "&").replace(/periodMark/g, ".").replace(/fwdSlash/g, "/").replace(/backSlash/g, "\\")}).deleteOne(function(err, dataMisc){
                            if(err) throw err;
                            res.json(dataMisc);
                            })
                    } else if(list === 'fridge') {
                        FridgeData.find({product: req.params.dasher.replace(/\-/g, " ").replace(/dash/g, "-").replace(/qMark/g, "?").replace(/hashMark/g, "#").replace(/percentMark/g, "%").replace(/ampersandMark/g, "&").replace(/periodMark/g, ".").replace(/fwdSlash/g, "/").replace(/backSlash/g, "\\")}).deleteOne(function(err, dataFridge){
                            console.log(req.params.dasher);
                            if(err) throw err;
                            res.json(dataFridge);
                            })         
                    } else if(list === 'freezer') {
                        FreezerData.find({product: req.params.dasher.replace(/\-/g, " ").replace(/dash/g, "-").replace(/qMark/g, "?").replace(/hashMark/g, "#").replace(/percentMark/g, "%").replace(/ampersandMark/g, "&").replace(/periodMark/g, ".").replace(/fwdSlash/g, "/").replace(/backSlash/g, "\\")}).deleteOne(function(err, dataFreezer){
                            if(err) throw err;
                            res.json(dataFreezer);
                            })
                    } else if(list === 'Baking') {
                        BakingData.find({product: req.params.dasher.replace(/\-/g, " ").replace(/dash/g, "-").replace(/qMark/g, "?").replace(/hashMark/g, "#").replace(/percentMark/g, "%").replace(/ampersandMark/g, "&").replace(/periodMark/g, ".").replace(/fwdSlash/g, "/").replace(/backSlash/g, "\\")}).deleteOne(function(err, dataBake){
                            if(err) throw err;
                            res.json(dataBake);
                            })
                    } else if(list === 'Bathroom') {
                        BathroomData.find({product: req.params.dasher.replace(/\-/g, " ").replace(/dash/g, "-").replace(/qMark/g, "?").replace(/hashMark/g, "#").replace(/percentMark/g, "%").replace(/ampersandMark/g, "&").replace(/periodMark/g, ".").replace(/fwdSlash/g, "/").replace(/backSlash/g, "\\")}).deleteOne(function(err, dataBath){
                            if(err) throw err;
                            res.json(dataBath);
                            })
                    }
        });
    };
