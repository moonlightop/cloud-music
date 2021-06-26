import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getResidentSinger } from '@redux/actions/discover/recommend';

import { ResidentSingerWrapper } from './style';
import { SetPitureSize } from '@utils/format-utils';

export default memo(function ZHResidentSinger(props) {
  
  const dispatch = useDispatch();
  const { residentSinger } = useSelector(state => ({
    residentSinger: state.getIn(['recommend','residentSinger'])

  }), shallowEqual);

  useEffect(() => {
    dispatch(getResidentSinger(5,5001));
  },[dispatch])

  return (
    <ResidentSingerWrapper>
      <div className="header">
        <span className="title">入驻歌手</span>
        <a href="##" onClick={e => e.preventDefault()}>查看全部 &gt;</a>
      </div>
      <ul className="singers-content">
        {
          residentSinger.length > 0 && residentSinger.map(singer => {
            return (
              <li key={singer.id}>
                <img src={SetPitureSize(singer.picUrl,62)} alt={singer.name} className="singer-pic"/>
                <div className="singer-info">
                  <h3 className="singer-name"><span>{singer.name}</span></h3>
                  <p className="singer-desc">{singer.alias.join("") || singer.name}</p>
                </div>
              </li>
            );

          })
        }
      </ul>
      <div className="footer">
        <a className="sprite_button" target="_blank" rel="noreferrer" href="https://music.163.com/st/musician">
          <i className="sprite_button">申请成为网易音乐人</i>
        </a>
      </div>
    </ResidentSingerWrapper>
  );
})
