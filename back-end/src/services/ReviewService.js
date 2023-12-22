const Review = require('../models/ReviewProduct');
const Product = require('../models/ProductModel')
const createReview = (data) => {
  return new Promise(async(resolve, reject) => {
    const { userId, productId, rating, comment } = data;

    try {
      const checkProduct = await Product.findOne({ _id: productId})
      if(checkProduct !== null){
        const newReview = await Review.create({
            userId, 
            productId, 
            rating, 
            comment, 
          });
          if(newReview){
            resolve({
                status: "OK",
                message: "SUCCESS",
                data: newReview
            });
          }
      }
    } catch (e) {
      reject(e);
    }
  });
};

const  getReviewsByProduct = (productId) => {
    return new Promise(async(resolve, reject) => {
      try {
        // const product = await Product.findOne({_id: productId})
       const reviews = await Review.find({productId: productId }).populate('userId');
        if(reviews === null){
          resolve({ 
            status: 'OK',
            message: "Đánh giá không tồn tại"
          })
        }
       
        resolve({ 
          status: 'OK',
          message: "Lấy thành công đánh giá ản phẩm",
          data: reviews
        })
      } catch (e) {
        reject(e);
      }
    });
  };
// const getReviewsByProduct = async (req, res) => {
//     try {
//       const productId = req.params.productId;
//       const reviews = await Review.find({ productId }).populate('userId');
//       return res.status(200).json({ reviews });
//     } catch (error) {
//       console.error('Error fetching reviews:', error);
//       return res.status(500).json({ error: 'Internal Server Error' });
//     }
//   };

module.exports = {
    createReview,
    getReviewsByProduct
};