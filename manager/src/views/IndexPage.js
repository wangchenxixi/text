import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <div className={styles.form}>
        <div className={styles.user}>
          <img src="../../images/user.png" alt="" />
          <input type="text" placeholder="请输入用户名" />
        </div>
        <div className={styles.user}>
          <img src="../../images/pwd.png" alt="" />
          <input type="password" placeholder="请输入用户密码" />
        </div>
        <div className={styles.pwd}>
          <p className={styles.check}><input type="checkbox" /> <span>记住密码</span></p>
          <p className={styles.foget}>忘记密码</p>
        </div>
        <div className={styles.btn}><button>登录</button></div>
      </div>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
