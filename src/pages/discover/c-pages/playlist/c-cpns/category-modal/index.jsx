import React, { memo, Fragment, useCallback } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getTopPlayList } from '@redux/actions/discover/playlist';

import {
  CategoryModalWrapper
} from './style';

/*
  1. 获取标签分类数据，上边有个三角白色三角形
  2. dl，每一个definition term，definition decoration
      偏白色背景图
  3. 点击后，dispatch来改变当前标签，并获取数据

*/
export default memo(function ZHCategoryModal(props) {
  const { showCategoryModal,setShowCategoryModal } = props;

  const dispatch = useDispatch();
  const { playTagList,topPlayList } = useSelector(state => ({
    playTagList: state.getIn(['playlist','playTagList']),
    topPlayList: state.getIn(['playlist','topPlayList'])

  }), shallowEqual);

  const updatePlayList = useCallback(cat => {
    dispatch(getTopPlayList({ cat }));
    setShowCategoryModal(false);    
  
  }, [dispatch,setShowCategoryModal]);


  return (
    <CategoryModalWrapper 
      style={{ visibility: showCategoryModal ? 'visible' : 'hidden' }}
      onMouseDown={ e => e.stopPropagation() }
    >
      {/* category: 4 */}
      <header className="tag-header sprite_sltlyr">
        <i className="tri sprite_icon">上三角形</i>
      </header>
      {/* 分类按：0 1 2 3 4 ... */}
      <div className="tag-category sprite_sltlyr">
        <h3 className="all-style">
          <span 
            onClick={e => updatePlayList('全部')}
            className={ "title sprite_playlist_button" }
          >
            全部风格
          </span>
        </h3>
        {
          playTagList && playTagList.code && 
            ['0','1','2','3','4']
              .map(index => {
                const categoryName = playTagList.categories[index];
                return (
                  <dl key={categoryName}>
                    <dt>
                      <i className="icon-style sprite_icon2"></i>
                      <span className="tag-name">{categoryName}</span>
                    </dt>
                    <dd>  
                      {
                        playTagList.sub
                          .filter(subItem => subItem.category === parseInt(index))
                            .map(subTagObj => {
                              return (
                                <Fragment key={subTagObj.name}>
                                  {/*                               
                                    此处用路由跳转我觉得用户体验极差，应该是展示的内容区显示loading组件这样的效果会更好 
                                  */}
                                  <span 
                                    className={ "subTagName " + (subTagObj.name === topPlayList.cat ? 'selected-category-tag' : '') }
                                    onClick={e => updatePlayList(subTagObj.name)}
                                  >
                                    {subTagObj.name}
                                  </span>
                                  <span className="line">|</span>
                                </Fragment>
                              );
                            })
                      }
                    </dd>   
                  </dl>
                );

              })
        }
      </div>
      <footer className="footer-bg sprite_sltlyr"></footer>
    </CategoryModalWrapper>
  );

})
