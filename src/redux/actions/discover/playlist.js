import { PlayListType } from '@redux/constant';
import { requestTopPlayList,requestPlayTagList } from '@services/playlist';


export const changePlayTagList = (playTagList) => ({
  type: PlayListType.CHANGE_PLAY_TAG_LIST,
  playTagList

})
export const getPlayTagList = () => {
  return async (dispatch) => {
    let res = await requestPlayTagList('GET'); 

    if(res.code === 200) {
      dispatch(changePlayTagList(res));
    }

  };

}


export const changeTopPlayList = (topPlayList) => ({
  type: PlayListType.CHANGE_TOP_PLAY_LIST,
  topPlayList
})
export const getTopPlayList = ({cat='全部',order='hot',offset=-1,limit=35}) => {
  return async (dispatch) => {
    let res = await requestTopPlayList('GET',{
      cat,
      order,
      offset: offset*35,
      limit
    });

    if(res.code === 200) {
      dispatch(changeTopPlayList(res));
    }

  };

}




