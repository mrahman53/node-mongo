/**
 * Created by mrahman on 7/19/17.
 */
var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
const assert = require('assert');


var uri = "mongodb://admin:sts2cdb!@cluster0-shard-00-00-xraxl.mongodb.net:27017,cluster0-shard-00-01-xraxl.mongodb.net:27017,cluster0-shard-00-02-xraxl.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";

 export class DataServices{


get connectMongoDB(){
    MongoClient.connect(uri, function(err, db) {
    assert.equal(null, err);
    console.log('database connected to atlas');
    const client = db.collection('client');
    var cursor = db.collection('client').find({}).toArray(function(err, result){
        console.log(result[0].name);
    });
    db.close();
});
}

set insertIntoMongoDB(ClientProfile){
MongoClient.connect(uri,function(err, db){
    const client = db.collection('client');
    db.collection('client').insert(ClientProfile);
    })
  }
}
