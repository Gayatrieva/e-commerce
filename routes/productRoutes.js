import express, { Router } from 'express'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
import { brainTreePaymentController, braintreeTokenController, createProductcontroller, deleteProductController, getProductContoller, getSingleProductController, productCategoryController, productCountController, productFilterController, productListController, productPhotoController, realtedProductController, searchProductController, updateCategoryController } from '../controllers/productController.js';
import formidable from 'express-formidable';


const router = express.Router()

//routes
router.post('/create-product', requireSignIn, isAdmin, formidable(), createProductcontroller);
//update 
router.put('/update-product/:pid',
    requireSignIn,
    isAdmin,
    formidable(),
    updateCategoryController);

//GET PRODUCTS
router.get('/get-product', getProductContoller);

//Single product
router.get("/get-product/:slug", getSingleProductController);

//get photo 
router.get('/product-photo/:pid', productPhotoController);

// delete product
router.delete('/product/:pid', deleteProductController);

// filter product
router.post('/product-filers', productFilterController);
//PRODUCT Router
router.get('/product-count', productCountController)

//product per page
router.get('/product-list/:page', productListController);
//search product
router.get('/search/:keyword', searchProductController);

//similar product
router.get('relted-product/:pid/c:id', realtedProductController)

//category wise product
router.get('/product-category/:slug', productCategoryController)
//PAYMENT ROUTES
//TOKEN
router.get('/braintree/token', braintreeTokenController)

//payment route
router.post('/braintree/payment', requireSignIn, brainTreePaymentController)

export default router;