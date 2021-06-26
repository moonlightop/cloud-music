import React, { memo, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { getCurrentSong,getSimiSongList } from '@redux/actions/player';

import ZHUserComment from '@components/user-comment';
import ZHSongInfo from './c-cpns/song-info';
import ZHSimilarSong from './c-cpns/similar-song';
import ZHDownloadApp from './c-cpns/download-app';

import { 
  SongWrapper,
  LeftContent,
  RightContent

} from './style';


export default memo(function ZHSongDetail(props) {

  const songId = props.location.search.slice(4);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentSong(songId));
    dispatch(getSimiSongList(songId));

  },[dispatch,songId])


  return (
    <SongWrapper className="wrap-v2">
      <LeftContent>
        <ZHSongInfo/>
        <ZHUserComment/>
      </LeftContent>
      <RightContent>
        <ZHSimilarSong/>
        <ZHDownloadApp/>
        <ZHUserComment />
      </RightContent>
    </SongWrapper>
  );

})
