import { Table,Pagination  } from 'antd';
import React, { useState } from 'react'
// import Loading from '../../components/LoadingComponent/Loading'
// import { Excel } from "antd-table-saveas-excel";
import { useMemo } from 'react';

const TableComponent = (props) => {
  const { selectionType = 'checkbox', data:dataSource = [], columns = [] } = props
  // const [rowSelectedKeys, setRowSelectedKeys] = useState([])
  // const newColumnExport = useMemo(() => {
  //   const arr = columns?.filter((col) => col.dataIndex !== 'action')
  //   return arr
  // }, [columns])
  
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      // setRowSelectedKeys(selectedRowKeys)
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User',
      // Column configuration not to be checked
      name: record.name,
    }),
  };
  // const handleDeleteAll = () => {
  //   handleDelteMany(rowSelectedKeys)
  // }

//   const exportExcel = () => {
//     const excel = new Excel();
//     excel
//       .addSheet("test")
//       .addColumns(newColumnExport)
//       .addDataSource(dataSource, {
//         str2Percent: true
//       })
//       .saveAs("Excel.xlsx");
//   };
const [pageSize, setPageSize] = useState(7);
const handlePageSizeChange = (newPageSize) => {
  setPageSize(newPageSize);
};
  
  return (
    <div>
      {/* {!!rowSelectedKeys.length && (
        <div style={{
          background: '#1d1ddd',
          color: '#fff',
          fontWeight: 'bold',
          padding: '10px',
          cursor: 'pointer'
        }}
          onClick={handleDeleteAll}
        >
          Xóa tất cả
        </div>
      )} */}
      {/* <button onClick={exportExcel}>Export Excel</button> */}
      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={dataSource}
        pagination={{
          pageSize: pageSize,
        }}
        {...props}
      />
       <Pagination style={{display:"none"}}
        pageSize={pageSize}
        onChange={handlePageSizeChange}
        showSizeChanger
        showQuickJumper
        pageSizeOptions={['7', '10', '20', '50']} // Các tùy chọn kích thước trang
        defaultPageSize={7} // Kích thước trang mặc định
      />
     </div>
  )
}

export default TableComponent