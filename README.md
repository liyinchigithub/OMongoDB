
====Environment 环境依赖
node v0.10.28+
reids ~
"body-parser": "^1.18.3",
"express": "^4.16.4",
"mongodb": "^3.1.10",
"multer": "^1.4.1"

====Deployment steps 部署步骤
1. npm install  //Installation node operation environment 安装node运行环境

2. npm server.js   //Start 启动


#目录结构描述
├── README.md                   // help
├── server.js                   // server
├── mongoDB_demo.js             // mongdb



====V1.0.0 Version update


-------English
1. New features to create the database

Request method: POST

Request address: http://127.0.0.1:8004/mongoDB_demo/CreateDB/

The request body: {

"Db_url" : "mongo: / / localhost: 27017 /",

Db_name: "Express_API_DB3"

}


2. New features to create collections

Request method: POST

Request address: http://127.0.0.1:8004/mongoDB_demo/CreateCollection/

The request body: {

"Db_url" : "mongo: / / localhost: 27017 /",

Db_name: "Express_API_DB",

"Collection_name" : "Express_API_Collection1"

}


3. The new function to delete data in a database collection

Request method: DELETE

Request address: http://127.0.0.1:8004/mongoDB_demo/delete

The request body: {

"Db_url" : "mongo: / / localhost: 27017 /",

Db_name: "Express_API_DB",

"Collection_name" : "Express_API_Collection1",

"WhereStr" :

{

"Name" : "netease"

}

}


4. The new feature collection

Request method: DELETE

Request address: http://127.0.0.1:8004/mongoDB_demo/drop

The request body: {

"Db_url" : "mongo: / / localhost: 27017 /",

Db_name: "Express_API_DB",

"Collection_name" : "Express_API_Collection5"

}


5. New function to insert data to the database in the collection

Request method: PUT

Request address: http://127.0.0.1:8004/mongoDB_demo/insert_data/

The request body: {

"Db_url" : "mongo: / / localhost: 27017 /",

Db_name: "Express_API_DB",

"Collection_name" : "Express_API_Collection1",

"Obj" : {

"Name" : "netease",

"Url" : "www.162.com"

}

}


6. New functions query the database data in a collection

Request method: POST

Request address: http://127.0.0.1:8004/mongoDB_demo/find

The request body: {

"Db_url" : "mongo: / / localhost: 27017 /",

Db_name: "Express_API_DB",

"Collection_name" : "Express_API_Collection1"

}


7. New functions query the database data in a collection

Request method: GET

Request address: http://127.0.0.1:8004/mongoDB_demo/find

Request parameters:

Db_name database name

Collection_name collection name

====V1.0.0 版本内容更新

-------中文
1. 新功能   创建数据库
请求方法：POST
请求地址：http://127.0.0.1:8004/mongoDB_demo/CreateDB/
请求body：{
	"db_url":"mongodb://localhost:27017/",
	"db_name":"Express_API_DB3"
}

2. 新功能   创建集合
请求方法：POST
请求地址：http://127.0.0.1:8004/mongoDB_demo/CreateCollection/
请求body：{
	"db_url":"mongodb://localhost:27017/",
	"db_name":"Express_API_DB",
	"collection_name":"Express_API_Collection1"
}

3. 新功能   删除数据库集合中的数据
请求方法：DELETE
请求地址：http://127.0.0.1:8004/mongoDB_demo/delete
请求body：{
	"db_url":"mongodb://localhost:27017/",
	"db_name":"Express_API_DB",
	"collection_name":"Express_API_Collection1",
	"whereStr":
		{
			"name":"网易"			
		}
}

4. 新功能   删除集合
请求方法：DELETE
请求地址：http://127.0.0.1:8004/mongoDB_demo/drop
请求body：{
	"db_url":"mongodb://localhost:27017/",
	"db_name":"Express_API_DB",
	"collection_name":"Express_API_Collection5"
}

5. 新功能   插入数据到数据库集合中
请求方法：PUT
请求地址：http://127.0.0.1:8004/mongoDB_demo/insert_data/
请求body：{ 
	"db_url":"mongodb://localhost:27017/",
	"db_name":"Express_API_DB",
	"collection_name":"Express_API_Collection1",
	"obj":{
		"name": "网易",
		"url": "www.162.com"
		}
}

6. 新功能   查询数据库集合中的数据
请求方法：POST
请求地址：http://127.0.0.1:8004/mongoDB_demo/find
请求body：{
		"db_url":"mongodb://localhost:27017/",
		"db_name":"Express_API_DB",
		"collection_name":"Express_API_Collection1"
}

7. 新功能   查询数据库集合中的数据
请求方法：GET
请求地址：http://127.0.0.1:8004/mongoDB_demo/find
请求参数：
db_name数据库名称
collection_name集合名称
