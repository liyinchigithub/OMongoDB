//引入express包
var express=require("express");
//实例化一个express对象
var router=express.Router();
//引入body-parser解析包
var bodyParser = require('body-parser');
//引入mongDB包
var MongoClient = require('mongodb').MongoClient;
//告诉路由中间件，使用bodyparser解析json
router.use(bodyParser.json());
router.all(function(req,res,next){
    console.log('Time:', new Date());
    console.info("请求方法："+req.method+";请求path："+req.path);
});
/**
 * 功能：创建数据库的集合
 * 作者：李银池
 * 参数：
 * db_name 创建数据库名称
 * collection_name 创建数据库中集合名称
 *  */
router.post("/CreateCollection",function(req,res,next){  

    MongoClient.connect(req.body.db_url, { useNewUrlParser: true } ,function (err, db) {
    //如果发生错误
    if (err){
        //响应body返回错误信息
        res.send(err.stack);
    }
    console.info('数据库已创建');
    var dbase = db.db(req.body.db_name);
    console.info("数据库名称："+req.body.db_name+"，"+"集合名称："+req.body.collection_name);
            dbase.createCollection(req.body.collection_name, function (err, res) {
                //如果发生错误
                if (err){
                    //响应body返回错误信息
                    res.send(err.stack);
                }
                console.info("创建集合"+req.body.collection_name+"成功");
                //关闭数据库连接
                db.close();
                                                                                });
                        });   
                    //响应body
                    res.send({"result":"success","status":200,"db_name":req.body.db_name,"collection_name":req.body.collection_name});
                    //释放请求-响应周期
                    res.end();
});


/**
 * 功能：查询数据库的集合中所有数据
 * 作者：李银池
 * 参数：
 * :db_name 查询的数据库名称
 * :collection_name 查询的数据库中集合名称
 *  */
router.get("/find/db_name/:db_name/collection_name/:collection_name",function(req,res,next){
    var url = 'mongodb://localhost:27017/';
    MongoClient.connect(url,{ useNewUrlParser: true } , function(err, db) {
         //如果发生错误
         if (err){
            //响应body返回错误信息
            res.send(err.stack);
        }
        var dbo = db.db(req.params.db_name);
        console.info("请求参数的数据库名称为："+req.params.db_name);
        dbo.collection(req.params.collection_name). find({}).toArray(function(err, result) { // 返回集合中所有数据
             //如果发生错误
            if (err){
                //响应body返回错误信息
                res.send(err.stack);
            }else{
                console.info("查询结果"+result);
                //响应body
                res.send(JSON.stringify(result));
            }
            
             //关闭数据库连接
            db.close();
        });
    });


});

/**
 * 功能：查询数据库的集合中所有数据
 * 作者：李银池
 * 参数：
 * db_url 查询数据库的地址
 * db_name 查询的数据库名称
 * Collection_name 查询的数据库中集合名称
 *  */
router.post("/find",function(req,res,next){
    MongoClient.connect(req.body.db_url,{ useNewUrlParser: true } , function(err, db) {
        //如果发生错误
        if (err){
            //响应body返回错误信息
            res.send(err.stack);
        }
        var dbo = db.db(req.body.db_name);
         dbo.collection(req.body.collection_name).find({}).toArray(function(err, result) { // 返回集合中所有数据
            //如果发生错误
            if (err){
                //响应body返回错误信息
                res.send(err.stack);
            }else{
                console.info("查询结果："+result);
                //响应body
                res.send(JSON.stringify(result));
            }
             //关闭数据库连接
            db.close(); 
        });
    });
    
});

/**
 * 功能：数据库集合插入数据
 * 作者：李银池
 * 参数：
 * db_url 查询数据库的地址
 * db_name 查询的数据库名称
 * Collection_name 查询的数据库中集合名称
 * obj 插入集合的数据
 *  */
router.put("/insert_data",function(req,res,next){
    MongoClient.connect(req.body.db_url, function(err, db) {
        if (err){
            res.send(err.stack);
        }
        var dbo = db.db(req.body.db_name);
        dbo.collection(req.body.collection_name).insertOne(req.body.obj, function(err, res) {
            if (err){
                res.send(err.stack);
            }else{
                console.log("文档插入成功");
                //关闭数据库连接
                db.close();
            }
         
        });
    });
    res.send({"result":"success","status":200,"插入数据":req.body.obj});
    //释放请求-响应周期
    res.end();
});

/**
 * 功能：删除数据库集合中的数据
 * 作者：李银池
 * 参数：
 * db_url 查询数据库的地址
 * db_name 查询的数据库名称
 * Collection_name 查询的数据库中集合名称
 * whereStr 删除符合条件的记录
 *  */
router.delete("/delete",function(req,res,next){
    try {
        MongoClient.connect(req.body.db_url, function(err, db) {
            var dbo = db.db(req.body.db_name);
            var whereStr = req.body.whereStr; 
            dbo.collection(req.body.collection_name).deleteOne(whereStr, function(err, obj) {
               if(err){
                res.send(err.stack);
               }else{
                    console.log("文档删除成功");
                    //响应body
                    res.send({"result":"success","status":200,"删除数据":req.body.obj});
               }
               //关闭数据库连接
               db.close();
            });
        });
    } catch (error) {
        res.send(error);
    }
    

});

/**
 * 功能：删除数据库中的集合
 * 作者：
 * 参数：
 * db_url 查询数据库的地址
 * db_name 查询的数据库名称
 * Collection_name 查询的数据库中集合名称
 * whereStr 删除符合条件的记录
 *  */
router.delete("/drop",function(req,res,next){

    try {
        MongoClient.connect(req.body.db_url, function(err, db) {
            var dbo = db.db(req.body.db_name);
           // 删除 test 集合
        dbo.collection(req.body.collection_name).drop(function(err, delOK) { 
             // 执行成功 delOK 返回 true，否则返回 false
                if(delOK===true){
                    //响应body
                    res.send({"result":"success","status":200,"删除集合成功":req.body.collection_name});
                    console.log("文档删除成功");
                }else{
                    //响应body
                    res.send({"result":"failed","status":300,"删除集合失败，不存在集合":req.body.collection_name});
                }
                //关闭数据库连接
                db.close();
            });
        });
    } catch (error) {
        res.send(error);
    }

});

module.exports=router;