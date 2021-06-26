import { DjRadioType } from "@redux/constant";
import { requestCatelist,requestRecommendType,requestHotRadio } from '@services/djradio';

export const changeCatelist = (catelist) => ({
  type: DjRadioType.CHANGE_CATE_LIST,
  catelist
})

export const getCatelist = () => {
  return async (dispatch) => {
    let res = await requestCatelist('GET',{});
    
    if (res.code === 200) {
      dispatch(changeCatelist(res.categories));
    }
  }
}

export const changeCurRadioType = (curRadioType) => ({
  type: DjRadioType.CHANGE_CUR_RADIO_TYPE,
  curRadioType
})

export const changeDjRadios = (excellentRadios) => ({
  type: DjRadioType.CHANGE_EXCELLENT_RADIOS,
  excellentRadios
})

export const getCurRadioType = (radioType) => {
  return async (dispatch) => {
    let res = await requestRecommendType('GET',{ type: radioType });
    if (res.code === 200) {
      dispatch(changeCurRadioType(radioType));
      dispatch(changeDjRadios(res.djRadios));
    }

  };
}

export const changeRadioRanking = (radioRanking) => ({
  type: DjRadioType.CHANGE_RADIO_RANKING,
  radioRanking
})

export const getRadioRanking = ({ limit=35,offset=0,cateId=-1 }) => {
  return async (dispatch) => {
    let res = await requestHotRadio('GET',{ limit,offset,cateId });
    if (res.code === 200) {
      dispatch(changeRadioRanking(res));
    }

  }
}