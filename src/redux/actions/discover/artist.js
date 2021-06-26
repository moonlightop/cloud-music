import { ArtistType } from "@redux/constant";
import { requestArtistList } from '@services/artist';

export const changeCurrentArea = (currentArea) => ({
  type: ArtistType.CHANGE_CURRENT_AREA,
  currentArea
})

export const changeCurrentType = (currentType) => ({
  type: ArtistType.CHANGE_CURRENT_TYPE,
  currentType
})

export const changeArtistList = (artistList) => ({
  type: ArtistType.CHANGE_ARTIST_LIST,
  artistList
})

export const getArtistList = (playload) => {
  return async dispatch => {
    let res = await requestArtistList(playload);
    if (res.code === 200) {
      dispatch(changeArtistList(res.artists));
    }
  }
}