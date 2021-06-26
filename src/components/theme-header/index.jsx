import React, { Fragment, memo } from 'react';
import PropTypes from 'prop-types';
import { useSelector, shallowEqual } from 'react-redux';

import ZHNavLink from '@components/navlink';

import { 
  ThemeHeaderWrapper,
  LeftContent,
  RightContent
} from './style';


const ZHThemeHeader = memo(function(props) {
  const { 
    themeName,
    desc,
    themeRoute,
    isIcon,
    isComment 
  } = props;

  const { songList } = useSelector(state => ({
    songList: state.getIn(['toplist','songList'])

  }), shallowEqual);

  const playCount = songList.playCount;

  return (
    <ThemeHeaderWrapper isIcon={isIcon} className={isIcon ? 'sprite_02' : ''}>
      <LeftContent isIcon={isIcon}>
        <h3 className="theme-name">{themeName}</h3>
        {
          desc.length > 0 ?         
            <div className="desc">
              {
                desc.map((title,index) => {
                  return (
                    <Fragment key={title}>
                      <ZHNavLink className="desc-item" to={"/discover/playlist?cat=" + title}>{title}</ZHNavLink>
                      { index === desc.length - 1 ? '' : <i className="line">|</i> }
                    </Fragment>
                  );
                })
              }
            </div> : ""
        }
      </LeftContent>
      <RightContent>
        {
          isIcon ? (
            <>
              <ZHNavLink to={themeRoute}>更多</ZHNavLink>
              <i className="right-arrow sprite_02"></i>
            </>
          ) : ( isComment ? 
            <>
              播放：<span className="play-count">{playCount}</span> 次
            </>
            :
            <ZHNavLink to={themeRoute}>更多&gt;</ZHNavLink> 
          )
        }
      </RightContent>
    </ThemeHeaderWrapper>
  );

})

// props传递的属性进行限制
ZHThemeHeader.propTypes = {
  themeName: PropTypes.string.isRequired,
  desc: PropTypes.array,
  isIcon: PropTypes.bool,
  themeRoute: PropTypes.string,
  isComment: PropTypes.bool

}
ZHThemeHeader.defaultProps = {
  themeName: '',
  desc: [],
  isIcon: true,
  themeRoute: '',
  isComment: false

}


export default ZHThemeHeader;