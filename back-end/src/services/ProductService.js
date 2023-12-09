const Product = require("../models/ProductModel");

const createProduct = (newProduct) => {
  return new Promise(async(resolve, reject) => {
    const { name, image, type, priceOld, priceNew,countInStock,rating, 
      description,discount,selled} = newProduct;

    try {
      const checkProduct = await Product.findOne({ name: name})
      if(checkProduct !== null){
        resolve({ 
          status: 'OK',
          message: "Tên của sản phẩm đã được sử dụng"
        })
      }

      const newProduct = await Product.create({
        name, 
        image, 
        type, 
        priceOld, 
        priceNew,
        countInStock,
        rating, 
        description,
        discount,
        selled
      });
      if(newProduct){
        resolve({
            status: "OK",
            message: "SUCCESS",
            data: newProduct
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

const  updateProduct = (productId, data) => {
  return new Promise(async(resolve, reject) => {
    try {
      console.log("productId: ", productId)
      const checkProduct = await Product.findOne({_id: productId})
      console.log("checkProduct", checkProduct)
      if(checkProduct === null){
        resolve({ 
          status: 'OK',
          message: "Product không tồn tại"
        })
      }
      const updateProductData = await Product.findByIdAndUpdate(productId, data, {new: true})
      // { new: true } được sử dụng để trả về tài liệu được cập nhật sau khi thực hiện phương thức update
      resolve({ 
        status: 'OK',
        message: "Cập nhật thông tin sản phẩm thành công",
        data: updateProductData
      })
    } catch (e) {
      reject(e);
    }
  });
};

const  deleteProduct = (productId) => {
  return new Promise(async(resolve, reject) => {
    try {
      const checkProduct = await Product.findOne({_id: productId})
      if(checkProduct === null){
        resolve({ 
          status: 'OK',
          message: "Product không tồn tại"
        })
      }
      const deleteProductData = await Product.findByIdAndDelete(productId, {new: true})
      // { new: true } được sử dụng để trả về tài liệu được cập nhật sau khi thực hiện phương thức update
      resolve({ 
        status: 'OK',
        message: "Xóa sản phẩm dùng thành công",
      })
    } catch (e) {
      reject(e);
    }
  });
};

const  getAllProduct = (limit, page, sort, filter) => {
  return new Promise(async(resolve, reject) => {
    try { //tham số limit:số sản phẩm tối đa 1 trang; page +1 : trang hiện tại=>vd:page=0 => trang hiện tại là trang đầu(trang1)
      //sort: là 1 object {key: value} sắp xếp theo thứ trự value = "asc": tăng dần, value= "desc": giảm dần,theo key ="1 thuộc tính trong sản phẩm" ko có thì là mặc định
      // filter: là 1 object {key : value} tìm kiếm theo những sản phẩm có key(thuộc tính sản phẩm:vd:name, img) ="name || img || priceOld || ..." có value(giá trị) ="gì đó"
      //limit() để xác định số lượng sản phẩm tối đa trong 1 trang;
      //skip(m) nghĩa là bỏ qua m sản phẩm đầu tiên => skip(page*limit) nghĩa là bỏ qua các sản phẩm của trang trc
      const totalProduct = await Product.countDocuments()
      console.log(filter)
      
      if(sort){
        const objectSort = {}
        const key = sort[1];
        const value = sort[0]
        objectSort[key] = value;

        const allProductSort = await Product.find().limit(limit).skip(page*limit).sort(objectSort)
        
        resolve({ 
          status: 'OK',
          message: "Danh sách tất cả sản phẩm",
          data: allProductSort,
          total: totalProduct,
          pageCurrent: page+1,
          totalPages : Math.ceil(totalProduct / limit)  //tổng số  trang
        })
      }

      if(filter){
        const key= filter[0]
        const value = filter[1] 

        const allProductFilter = await Product.find({ [key]:{ '$regex': value } }).limit(limit).skip(page*limit)
        
        resolve({ 
          status: 'OK',
          message: "Danh sách tất cả sản phẩm",
          data: allProductFilter,
          total: totalProduct,
          pageCurrent: page+1,
          totalPages : Math.ceil(totalProduct / limit)  //tổng số  trang
        })
      }

      const allProduct = await Product.find().limit(limit).skip(page*limit)

      resolve({ 
        status: 'OK',
        message: "Danh sách tất cả sản phẩm",
        data: allProduct,
        total: totalProduct,
        pageCurrent: page+1,
        totalPages : Math.ceil(totalProduct / limit)  //tổng số  trang

      })
    } catch (e) {
      reject(e);
    }
  });
};

const  getDetailProduct = (productId) => {
  return new Promise(async(resolve, reject) => {
    try {
      const product = await Product.findOne({_id: productId})
      if(product === null){
        resolve({ 
          status: 'OK',
          message: "Product không tồn tại"
        })
      }
     
      resolve({ 
        status: 'OK',
        message: "Lấy thành công sản phẩm",
        data: product
      })
    } catch (e) {
      reject(e);
    }
  });
};

const  getAllTypeProduct = () => {
  return new Promise(async(resolve, reject) => {
    try {
      const allTypeProduct = await Product.distinct("type")
     
      resolve({ 
        status: 'OK',
        message: "Lấy thành công loại sản phẩm",
        data: allTypeProduct
      })
    } catch (e) {
      reject(e);
    }
  });
};
module.exports = {
    createProduct,
    updateProduct,
    getDetailProduct,
    deleteProduct,
    getAllProduct,
    getAllTypeProduct

};
