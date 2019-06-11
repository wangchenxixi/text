import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Button, Checkbox, Input, Icon, Tooltip } from "antd";
import "antd/dist/antd.css";
function IndexPage() {
  return (
    <div className={styles.normal}>
      <span>1111</span>
      <div className={styles.form}>
        <div className={styles.user}>
          <Input
            placeholder="请输入用户名"
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            suffix={
              <Tooltip title="Extra information">
                <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
              </Tooltip>
            }
          />

        </div>
        <div className={styles.user}>

          <Input
            placeholder="请输入密码"
            prefix={<Icon type="key" style={{ color: 'rgba(0,0,0,.25)' }} />}
            suffix={
              <Tooltip title="Extra information">
                <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
              </Tooltip>
            }
          />
        </div>
        <div className={styles.pwd}>
          <p className={styles.check}><Checkbox onChange={onChange}>记住密码</Checkbox></p>
          <p className={styles.foget}>忘记密码</p>
        </div>
       
        <div className={styles.btn}>  <Button type="primary" block onClick={click=>window.location.href="http://localhost:8000/#/home"} >
         登录
    </Button></div>
      </div>
    </div>
  );
}
function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
};
function onClick(e) {

  console.log(e.target)
};
IndexPage.propTypes = {
};

export default connect()(IndexPage);

