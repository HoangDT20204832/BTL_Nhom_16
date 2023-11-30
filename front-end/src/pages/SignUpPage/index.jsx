import React, { useState } from 'react'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import FormInput from '../../components/FormInput/index'
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons'
import styles from "./styles.module.css";
const SignUpPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false)
  return (
    <div className={styles.wrapper} >
    <div className={styles.wrapperSignIn} >
        <h1 className={styles.titleHeader}>Đăng ký</h1>
        <div className={styles.wapperInput}>
          <div className={styles.textInput}>Tài khoản:</div>
          <FormInput style={{ marginBottom: '10px' }} placeholder="Nhập tài khoản email"  />
        </div>
        <div className={styles.wapperInput}>
          <div className={styles.textInput}>Mật khẩu:</div>
          <div style={{ position: 'relative' }}>
            <span
              // onClick={() => setIsShowPassword(!isShowPassword)}
              style={{
                zIndex: 10,
                position: 'absolute',
                top: '4px',
                right: '8px'
              }}
            >{
                isShowPassword ? (
                  <EyeFilled />
                ) : (
                  <EyeInvisibleFilled />
                )
              }
            </span>
            <FormInput 
              placeholder="Nhập mật khẩu"
              type={isShowPassword ? "text" : "password"}
            />
          </div>
        </div>
        <div className={styles.wapperInput}>
          <div className={styles.textInput}>Xác thực mật khẩu:</div>
          <div style={{ position: 'relative' }}>
            <span
              // onClick={() => setIsShowPassword(!isShowPassword)}
              style={{
                zIndex: 10,
                position: 'absolute',
                top: '4px',
                right: '8px'
              }}
            >{
                isShowPassword ? (
                  <EyeFilled />
                ) : (
                  <EyeInvisibleFilled />
                )
              }
            </span>
            <FormInput 
              placeholder="Nhập mật khẩu"
              type={isShowPassword ? "text" : "password"}
            />
          </div>
        </div>
        
          <ButtonComponent
            size={40}
            styleButton={{
              background: 'linear-gradient(135deg, rgb(70, 35, 224) 0%,rgb(45, 253, 249) 100%)',
              height: '48px',
              width: '100%',
              border: 'none',
              borderRadius: '50px',
              margin: '16px 0 10px'
            }}
            textButton={'Đăng ký'}
            styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
          ></ButtonComponent>
        <p>Bạn đã có tài khoản? 
          <span className={styles.textLight} > Đăng nhập </span>
        </p>
      </div>
    </div >
  )
}

export default SignUpPage