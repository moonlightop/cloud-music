import React, { Fragment, memo, useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getCurrentSong } from '@redux/actions/player';

import ZHSubThemeHeader from '../sub-theme-header';

import {
  SimilarSongWrapper
} from './style';

export default memo(function ZHSimilarSong(props) {

  const dispatch = useDispatch();

  const { simiSongList } = useSelector(state => ({
    simiSongList: state.getIn(['player','simiSongList']),

  }),shallowEqual);


  const playOrfac = useCallback((id,type='play') => {
    dispatch(getCurrentSong(id,type));

  },[dispatch]);


  return (
    <SimilarSongWrapper>
      <ZHSubThemeHeader SubThemeName='相似歌曲'/>
      <ul className="simi-song-list">
        {
          simiSongList && simiSongList.map(song => {
            return (
              <li key={song.id}>
                <div className="song-item-left">
                  <a href={`#/song?id=${song.id}`} className="songName">{song.name}</a>
                  <div className="authors">
                    {
                      song.artists.map((author,index) => {
                        return (
                          <Fragment key={author.id}>
                            <a href={`#/artist?id=${author.id}`}>
                              {author.name}
                            </a>
                            { (index + 1 === song.artists.length ? '' : ' / ') }
                          </Fragment>
                        );
                      })
                    }
                  </div>
                </div>
                <div className="song-item-right">
                  <i className="icon-play sprite_icon3" onClick={e => playOrfac(song.id)}></i>
                  <i className="icon-plus sprite_icon3" onClick={e => playOrfac(song.id,'fac')}></i>
                </div>
              </li>
            );
          })
        }
      </ul>
    </SimilarSongWrapper>
  );

})
