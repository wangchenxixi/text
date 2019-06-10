import React from 'react';
import { connect } from 'dva';
// import styles from './IndexPage.css';

function IndexPage() {
  return (
    <div>
      <button onClick={()=>{window.location.href="http://localhost:8000/#/home"}}>登陆</button>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
