import React from 'react';
import { Link } from 'dva/router';
import "./index.css"
export default ()=>{
  return <div className="other-img">
    <Link to="/">
    <div className="box">
    <img src="http://img.zcool.cn/community/018a7758d24b60a801219c7754463e.gif" alt=""/>
    </div>
    </Link>  
  </div>
}
