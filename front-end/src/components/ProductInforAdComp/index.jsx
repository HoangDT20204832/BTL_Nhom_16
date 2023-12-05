import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Button,  Modal,Form} from 'antd';
import TableComponent from "../TableComp/index";
import InputComponent from "../InputComponent/InputComponent";
import { WrapperUploadFile } from "../AccountComp/styles";
import * as productService from "../../services/productService"
import {useMutationHooks} from "../../hooks/useMutationHook"
import * as messagee from "../../components/MessageComp"
import {useQuery} from "@tanstack/react-query"
import { PlusOutlined, DeleteOutlined, EditOutlined, SearchOutlined } from '@ant-design/icons'



const ProductInForAd = () => {
  


  const [isModalOpen, setIsModalOpen] = useState(false)

  const [stateProduct, setStateProduct] = useState({
    name: "" , 
    image : "",
    type : "",
    priceOld : "",
    priceNew : "",
    rating : "",
    description : "",
    discount : "",
    selled : "",
    countInStock : "",

  })
  const [form] = Form.useForm()

  const mutation = useMutationHooks(
    ( data) =>{ 
      const {   name , image ,type ,priceOld ,priceNew ,countInStock,rating ,
      description ,discount ,selled } = data;
      console.log("test datta", data)
      const res = productService.createProduct({name , image ,type ,priceOld ,priceNew ,countInStock ,rating ,
        description ,discount ,selled })
      
      return res
      }
        
 )
 // hàm lấy toàn bộ thông tin sản phẩm
 const getAllProduct = async() =>{
  const res = await productService.getAllProducts()
  console.log('ressss', res)
  return res
 }
  const {data, isSuccess, isError} = mutation

  const {data: products } = useQuery(['products'],getAllProduct)
  console.log('products', products)
  const renderAction = () => {
    return (
      <div>
                <DeleteOutlined style={{ color: 'red', fontSize: '30px', cursor: 'pointer' }} onClick={() => {}} />
        <EditOutlined style={{ color: 'orange', fontSize: '30px', cursor: 'pointer' }} onClick={()=>{}} />
        {/* <DeleteOutlined style={{ color: 'red', fontSize: '30px', cursor: 'pointer' }} onClick={() => setIsModalOpenDelete(true)} />
        <EditOutlined style={{ color: 'orange', fontSize: '30px', cursor: 'pointer' }} onClick={handleDetailsProduct} /> */}
      </div>
    )
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text) => <a>{text}</a>
      // sorter: (a, b) => a.name.length - b.name.length,
      // ...getColumnSearchProps('name')
    },
    {
      title: 'Price',
      dataIndex: 'priceNew',
      // sorter: (a, b) => a.price - b.price,
      // filters: [
      //   {
      //     text: '>= 50',
      //     value: '>=',
      //   },
      //   {
      //     text: '<= 50',
      //     value: '<=',
      //   }
      // ],
      // onFilter: (value, record) => {
      //   if (value === '>=') {
      //     return record.price >= 50
      //   }
      //   return record.price <= 50
      // },
    },
    {
      title: 'Rating',
      dataIndex: 'rating',
      // sorter: (a, b) => a.rating - b.rating,
      // filters: [
      //   {
      //     text: '>= 3',
      //     value: '>=',
      //   },
      //   {
      //     text: '<= 3',
      //     value: '<=',
      //   }
      // ],
      // onFilter: (value, record) => {
      //   if (value === '>=') {
      //     return Number(record.rating) >= 3
      //   }
      //   return Number(record.rating) <= 3
      // },
    },
    {
      title: 'Type',
      dataIndex: 'type',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: renderAction
    },
  ];
  const dataTable = products?.data?.length && products?.data?.map((product) => {
    return { ...product, key: product._id }
  })

  //nếu ấn nút submit tạo sản phẩm thành coogn thì sẽ tự động đóng cửa sổ , thống báo thành công
  useEffect(()=> {
    if(isSuccess && data?.status === 'OK'){
      messagee.success()
      handleCancel()
    } else if(isError){
      messagee.error()
    }
  },[isSuccess, isError])

  //hàm xử lý khi thoát ra hỏi cửa sổ thêm sản phẩm
  const handleCancel = () => {
    setIsModalOpen(false);
    setStateProduct({
      name: "" , 
    image : "",
    type : "",
    priceOld : "",
    priceNew : "",
    rating : "",
    description : "",
    discount : "",
    selled : "",
    countInStock : "",
    })
    form.resetFields()
  };

  const handleOnChangeInput = (e) =>{
      console.log("e.target.value", e.target.value);
      console.log("e.target.name", e.target.name);
      setStateProduct({
        ...stateProduct,
        [e.target.name]: e.target.value
      })
  }
    //up file  ảnh sabr phẩm

    const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handleChangeAvatar = async ({fileList}) => {
    const file = fileList[0]
    if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj );
    }
    setStateProduct({
      ...stateProduct,
      image: file.preview,
    })
}
  const onFinishSubmit =() =>{
    console.log('onFinishSubmit',stateProduct )
    mutation.mutate(stateProduct)
  }
  return (
    <div>
      <div className={styles.headerUser}>Quản lý sản phẩm</div>
      <Button className={styles.buttonAdd} onClick={() =>setIsModalOpen(true)}>Thêm người dùng mới</Button>

      <div style={{marginTop: "20px"}}>
        <TableComponent columns={columns} data={dataTable}/>
      </div>

      <Modal title="Tạo sản phẩm" open={isModalOpen}  onCancel={handleCancel} footer={null}>
      <Form
      name="basic"
      labelCol={{
        span: 7,
      }}
      wrapperCol={{
        span: 17,
      }}
      onFinish={onFinishSubmit}
      autoComplete="on"
      form={form}
    >
      <Form.Item
        label="Tên sản phẩm"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input your name!',
          },
        ]}
      >
        <InputComponent value={stateProduct.name} name="name" onChange={handleOnChangeInput} />
      </Form.Item>

      <Form.Item
        label="Loại sản phẩm" name="type"
        rules={[{required: true, message: 'Please input your type!',},]}
      >
        <InputComponent value={stateProduct.type} name="type" onChange={handleOnChangeInput} />
      </Form.Item>

      
      <Form.Item
        label="Giá cũ"
        name="priceOld"
        rules={[
          {
            required: true,
            message: 'Please input your priceOld!',
          },
        ]}
      >
        <InputComponent value={stateProduct.priceOld} name="priceOld" onChange={handleOnChangeInput} />
      </Form.Item>

      <Form.Item
        label="Giá mới" name="priceNew" 
        rules={[{required: true,message: 'Please input your priceNew!',}]}
      >
        <InputComponent value={stateProduct.priceNew} name="priceNew" onChange={handleOnChangeInput}/>
      </Form.Item>

      <Form.Item
        label="Số lượng còn lại" name="countInStock" 
        rules={[{required: true,message: 'Please input your countInStock!',}]}
      >
        <InputComponent value={stateProduct.countInStock} name="countInStock" onChange={handleOnChangeInput}/>
      </Form.Item>

      <Form.Item
        label="Đánh giá" name="rating" 
        rules={[{required: true,message: 'Please input your rating!',}]}
      >
        <InputComponent value={stateProduct.rating} name="rating" onChange={handleOnChangeInput}/>
      </Form.Item>

      <Form.Item
        label="Giảm giá %" name="discount" 
        rules={[{required: true,message: 'Please input your discount!',}]}
      >
        <InputComponent value={stateProduct.discount} name="discount" onChange={handleOnChangeInput}/>
      </Form.Item>

      <Form.Item
        label="Số lượng đã bán" name="selled" 
        rules={[{required: true,message: 'Please input your selled!',}]}
      >
        <InputComponent value={stateProduct.selled} name="selled" onChange={handleOnChangeInput} />
      </Form.Item>

      <Form.Item
        label="Mô tả sản phẩm" name="description" 
        rules={[{required: true,message: 'Please input your description!',}]}
      >
        <InputComponent value={stateProduct.description} name="description" onChange={handleOnChangeInput} />
      </Form.Item>

      <Form.Item
        label="Ảnh" name="image" 
        rules={[{required: true,message: 'Please input your image!',}]}
      >
         <WrapperUploadFile onChange={handleChangeAvatar} maxCount={1}>
                <Button >Chọn ảnh</Button>
                {stateProduct?.image && (
                    <img src={stateProduct?.image} style={{
                        height: '50px',
                        width: '50px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        marginLeft: '10px',
                    }} alt="avatar"/>
                )}
              </WrapperUploadFile>
      </Form.Item>

      

      <Form.Item
        wrapperCol={{
          offset: 20,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
      </Modal>
    </div>
  );
};

export default ProductInForAd;
