import React, { memo, Fragment } from 'react';
import { useDispatch ,shallowEqual, useSelector } from 'react-redux';
import { getCurrentSong } from '@redux/actions/player';

import ZHUserComment from '@components/user-comment';
import ZHNavLink from '@components/navlink';
import ZHThemeHeader from '@components/theme-header';

import { formatMinuteSecond, SetPitureSize } from '@utils/format-utils';

import {
  SongListWrapper,
  SongListContent
} from './style';



export default memo(function ZHSongList(props) {

  const dispatch = useDispatch();
  const { songList } = useSelector(state => ({
    songList: state.getIn(['toplist','songList'])

  }), shallowEqual);


  return (
    <SongListWrapper>
      <ZHThemeHeader 
        themeName='歌曲列表' 
        desc={[`${songList.tracks ? songList.tracks.length : ''}首歌`]} 
        isIcon={false}
      />
      <SongListContent>
        <thead>
          <tr>
            {
              ['','标题','时长','歌手'].map(title => {
                return (
                  <th className="sprite_table" key={title}>
                    { title ? <div className="sprite_table">{title}</div> : title}                  
                  </th>
                );
              })
            }
          </tr>
        </thead>
        <tbody>
          {
            songList.tracks && songList.tracks.map((track,index) => {
              return (
                <tr key={track.id}>
                  <td>
                    <span className="index">{index + 1}</span>
                    {/* 没有找到标注为新歌，上升 | 下降 */}
                    <div className="icon-new-or-arrow ">
                      <i className="sprite_icon2"></i>
                    </div>
                  </td>
                  {/* 标题 */}
                  <td>
                    { 
                      index < 3 ? (
                        <ZHNavLink to={`/song?id=${track.id}`}  className="pic">
                          <img src={SetPitureSize(track.al.picUrl,50) + '&quality=100'} alt={track.name}/> 
                        </ZHNavLink>
                      ): ''
                    }
                    <i  className="icon-play sprite_table" 
                        onClick={e => {
                          if(songList.name !== '黑胶VIP爱听榜')
                            dispatch(getCurrentSong(track.id,'play'));
                          else 
                            alert('需要开通vip才能听该歌曲');
                        }}
                    ></i>
                    <ZHNavLink 
                      to={`/song?id=${track.id}`} 
                      className="song-name  text-nowrap"
                    >
                      <span>{track.name}</span>
                      { 
                        track.alia.length > 0 && 
                          <span className="alia"> - ({track.alia.join('/')})</span> 
                      }
                    </ZHNavLink>
                    { 
                      track.mv ? 
                        <span className="icon-mv sprite_table" onClick={e => alert(`暂不支持mv(${track.mv})功能`)}>mv</span>
                        : ''
                    }
                  </td>
                  {/* 时长 */}
                  <td>
                    <span className="time">{formatMinuteSecond(track.dt)}</span>
                    <div className="icns">
                      <i className="icon-plus sprite_icon2" onClick={e => dispatch(getCurrentSong(track.id,'addToPlayList'))}>添加</i>
                      <i className="icon-fac sprite_table">收藏</i>
                      <i className="icon-share sprite_table">转发</i>
                      <i className="icon-download sprite_table">下载</i>
                    </div>                    
                  </td>
                  {/* 歌手 */}
                  <td className="text-nowrap">
                    {
                      track.ar.map((author,index) => {
                        return (
                          <Fragment key={author.id}>
                            <ZHNavLink to={`/artist?id=${author.id}`}>{author.name}</ZHNavLink>
                            { index + 1 === track.ar.length ? '' : '/'}
                          </Fragment>
                        );
                      })
                    }
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </SongListContent>
      
      {
        songList.name === '黑胶VIP爱听榜' ? (
          <div className="download">
            <p className="title">查看更多内容，请下载客户端</p>
            <ZHNavLink className="btn-bg" to="/download">立即下载</ZHNavLink>
          </div>
        ) : ''
      }
      <ZHUserComment commentCount={songList.commentCount}/>
    </SongListWrapper>
  );

})
