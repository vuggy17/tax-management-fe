import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import { Row, Col } from 'antd';
import { getChildrenToRender } from './utils';
import { isImg } from './utils';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  static defaultProps = {
    className: 'footer1',
  };

  getLiChildren = (data) =>
    data.map((item, i) => {
      const { title, childWrapper, ...itemProps } = item;
      return (
        <Col key={i.toString()} {...itemProps} title={null} content={null}>
          <h2 {...title}>
            {typeof title.children === 'string' &&
              title.children.match(isImg) ? (
              <Link to="/"> <img src={title.children} width="100%" alt="img" />
              </Link>
              // <div className='block w-[100px] mr-2'>
              //   <Link to="/">
              //     <svg width="80" height="81" viewBox="0 0 80 81" fill="none" xmlns="http://www.w3.org/2000/svg">
              //       <rect width="80" height="81" fill="#1A87DD" />
              //       <path d="M36.4657 24.1939L24.2715 53.916C23.7577 55.1681 23.9837 56.5828 24.861 57.6077C25.7385 58.6327 27.0905 59.0613 28.3893 58.7263L38.6472 56.0808V43.1279C38.6472 42.5319 39.125 42.0486 39.7144 42.0486C40.3037 42.0486 40.7816 42.5318 40.7816 43.1279V56.0808L51.0394 58.7263C52.3383 59.0613 53.6903 58.6327 54.5677 57.6077C55.4468 56.5807 55.67 55.1659 55.1572 53.9159L42.963 24.1938C42.4079 22.8406 41.163 22 39.7144 22C38.2658 22 37.0209 22.8406 36.4657 24.1939Z" fill="white" />
              //     </svg>
              //   </Link>
              // </div>
            ) : (
              title.children
            )}
          </h2>
          <div {...childWrapper}>
            {childWrapper.children.map(getChildrenToRender)}
          </div>
        </Col>
      );
    });

  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;
    const childrenToRender = this.getLiChildren(dataSource.block.children);
    return (
      <div {...props} {...dataSource.wrapper}>
        <OverPack {...dataSource.OverPack}>
          <QueueAnim
            type="bottom"
            key="ul"
            leaveReverse
            component={Row}
            {...dataSource.block}
          >
            {childrenToRender}
          </QueueAnim>
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from' }}
            key="copyright"
            {...dataSource.copyrightWrapper}
          >
            <div {...dataSource.copyrightPage}>
              <div {...dataSource.copyright}>
                {dataSource.copyright.children}
              </div>
            </div>
          </TweenOne>
        </OverPack>
      </div>
    );
  }
}

export default Footer;
