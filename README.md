【服务诞生原因】功能测试人员、开发人员均使用postman进行接口测试，但postman自身无法对mongoDB数据库进行操作，为了方便测试人员使用postman，进行接口自动化测试时，可以调用操作数据库清除测试数据，由此诞生Omongodb。

![img](static/image/demo.jpg)

# 环境要求

nodejs >8.X


# 使用方式

如果你电脑已经安装配置Git、node环境，可以直接按下面步骤进行操作：

1、从github拉取工程

```
git clone git@github.com:liyinchigithub/OMongoDB.git
```
2、切换到目录下

```
cd OMongoDB
```

3、安装依赖包

```
npm install
```

4、启动OMongoDB服务

```
node server.js
```

5、如果你的电脑还没有node环境，具体配置方法可以参考下面两个链接：

windows https://jingyan.baidu.com/article/1876c8529c79e2890b1376dd.html

mac https://jingyan.baidu.com/article/6b1823098bdd9fba59e1597a.html


## API接口文档

### 中文

1. 功能   创建集合

请求方法：POST

请求地址：http://127.0.0.1:8004/mongoDB_demo/CreateCollection/

请求body：
```
{
	"db_url":"mongodb://localhost:27017/",
	"db_name":"Express_API_DB",
	"collection_name":"Express_API_Collection1"
}
```

2. 功能   删除数据库集合中的数据

请求方法：DELETE

请求地址：http://127.0.0.1:8004/mongoDB_demo/delete

请求body：
```
{
	"db_url":"mongodb://localhost:27017/",
	"db_name":"Express_API_DB",
	"collection_name":"Express_API_Collection1",
	"whereStr":
		{
			"name":"网易"			
		}
}
```

3. 功能   删除集合

请求方法：DELETE

请求地址：http://127.0.0.1:8004/mongoDB_demo/drop

请求body：
```
{
	"db_url":"mongodb://localhost:27017/",
	"db_name":"Express_API_DB",
	"collection_name":"Express_API_Collection5"
}
```

4. 功能   插入数据到数据库集合中

请求方法：PUT

请求地址：http://127.0.0.1:8004/mongoDB_demo/insert_data/

请求body：
```
{ 
	"db_url":"mongodb://localhost:27017/",
	"db_name":"Express_API_DB",
	"collection_name":"Express_API_Collection1",
	"obj":{
		"name": "网易",
		"url": "www.162.com"
		}
}
```

5. 功能   查询数据库集合中的数据

请求方法：POST

请求地址：http://127.0.0.1:8004/mongoDB_demo/find

请求body：
```
{
		"db_url":"mongodb://localhost:27017/",
		"db_name":"Express_API_DB",
		"collection_name":"Express_API_Collection1"
}
```

6 功能   查询数据库集合中的数据

请求方法：GET

请求地址：http://127.0.0.1:8004/mongoDB_demo/find

请求参数：
```
db_name数据库名称

collection_name集合名称
```

7.备注
如果你的mongoDB设置了账号密码，url参数可以使用此格式：

mongoose.connect('mongodb://账号:密码@localhost:27017/');




## English
### API Document
1. New features to create collections

Request method: POST

Request address: http://127.0.0.1:8004/mongoDB_demo/CreateCollection/

The request body:
```
{

"Db_url" : "mongo: / / localhost: 27017 /",

Db_name: "Express_API_DB",

"Collection_name" : "Express_API_Collection1"

}
```

2. The new function to delete data in a database collection

Request method: DELETE

Request address: http://127.0.0.1:8004/mongoDB_demo/delete

The request body: 
```
{

"Db_url" : "mongo: / / localhost: 27017 /",

Db_name: "Express_API_DB",

"Collection_name" : "Express_API_Collection1",

"WhereStr" :

{

"Name" : "netease"

}

}
```

3. The new feature collection

Request method: DELETE

Request address: http://127.0.0.1:8004/mongoDB_demo/drop

The request body:
```
{

"Db_url" : "mongo: / / localhost: 27017 /",

Db_name: "Express_API_DB",

"Collection_name" : "Express_API_Collection5"

}
```

4. New function to insert data to the database in the collection

Request method: PUT

Request address: http://127.0.0.1:8004/mongoDB_demo/insert_data/

The request body:
```
{

"Db_url" : "mongo: / / localhost: 27017 /",

Db_name: "Express_API_DB",

"Collection_name" : "Express_API_Collection1",

"Obj" : {

"Name" : "netease",

"Url" : "www.162.com"

}

}
```

5. New functions query the database data in a collection

Request method: POST

Request address: http://127.0.0.1:8004/mongoDB_demo/find

The request body:
```
{

"Db_url" : "mongo: / / localhost: 27017 /",

Db_name: "Express_API_DB",

"Collection_name" : "Express_API_Collection1"

}
```

6. New functions query the database data in a collection

Request method: GET

Request address: http://127.0.0.1:8004/mongoDB_demo/find

Request parameters:
```

Db_name database name

Collection_name collection name
```

7. Note

If your mongoDB has set the account password, the url parameter can use this format:

mongoose.connect('mongodb://username:password@localhost:27017/');

