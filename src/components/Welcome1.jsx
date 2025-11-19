import './Welcome1.css';
import { useNavigate } from 'react-router-dom';
import { Button, ConfigProvider, Space } from 'antd';
import { createStyles } from 'antd-style';

const useStyle = createStyles(({ prefixCls, css }) => ({
  linearGradientButton: css`
    &.${prefixCls}-btn-primary:not([disabled]):not(.${prefixCls}-btn-dangerous) {
      > span {
        position: relative;
      }
      &::before {
        content: '';
        background: linear-gradient(135deg, #6253e1, #04befe);
        position: absolute;
        inset: -1px;
        opacity: 1;
        transition: all 0.3s;
        border-radius: inherit;
      }
      &:hover::before {
        opacity: 0;
      }
    }
  `,
}));

const Welcome1 = () => {
  const { styles } = useStyle();
  const navigate = useNavigate();

  return (

    <div className="welcome-container">
      <div className="welcome_header">
        Welcome to my first React Project
      </div>

      <ConfigProvider
        button={{
          className: styles.linearGradientButton
        }}
      >
        <Space>
          <Button type="primary" size="large" onClick={() => navigate('/Login')}> Login </Button>
          <Button type="primary" size="large" onClick={() => navigate('/Tables')}> Tables </Button>
          <Button type="primary" size="large" onClick={() => navigate('/Tables1')}> Tables1 </Button>

          <Button type="primary" size="large" onClick={() => navigate('/Concepts')}> Concepts </Button>
        </Space>
      </ConfigProvider>
    </div>
  );
};

export default Welcome1;



