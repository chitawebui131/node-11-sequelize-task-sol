## Node.js Practically
### Tasks for the topic "sequelize"
Create a web application that implements a RestAPI application based on the proposed pattern using Node.js, Express.js and Sequelize that allows users to create, read, update and delete items in the store. The frontend is present in the proposed code template on GitHub in the appropriate folder and is written in rect.

Use recommended directory structure.

The database connection configuration file is located in the **config** directory and is named **db.js**

Use **'/api/v1/products'** as root url for products. Then '/api/v1/products/:id' should be used for requests that require id of product.
Connect routers to application object app in app.js
Create products handlers in **productsController.js** , all the names of required handlers are specified there along with expected responses.
In  controllers create a next methods: 

- getAllProducts,
-  createProduct,
-  getProductById,
-  updateProduct,
-  deleteProduct,
-  validateProductId,
-  checkProducts.

Create middlewares in productsController  for checking correctness of **Id** of products that is requested/updated/deleted. If entity with such id does not exist, the response should be provided with status 404 and body

  {
    status: 'fail',
    message: 'Invalid products id',
  }
  
Create middlewate checkProducts for checking correctness of body of request for creating/updating product. Non-empty title property must be present. If this property is not provided, or it is empty, the response should be provided with status 400 and body

  {
    status: 'fail',
    message: 'Title is required',
  }
