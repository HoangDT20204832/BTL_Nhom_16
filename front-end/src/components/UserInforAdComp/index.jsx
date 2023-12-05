import React from 'react'
import styles from "./styles.module.css";
import {Button} from "antd"
import TableComponent from '../TableComp/index';

const UserInForAd = () => {
  return (
    <div>
        <div className={styles.headerUser}>
          Quản lý người dùng
        </div>
        <Button className={styles.buttonAdd}>Thêm người dùng mới</Button>

        {/* <TableComponent /> */}
    </div>
  )
}

export default UserInForAd