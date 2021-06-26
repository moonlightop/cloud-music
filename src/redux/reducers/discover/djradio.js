import { DjRadioType } from '@redux/constant';
import { Map } from 'immutable';

const initState = Map({
  catelist: [],
  curRadioType: -1,
  excellentRadios: [],
  radioRanking: {}

});

export default function djradio(preState=initState,action) {

  switch(action.type) {
    case DjRadioType.CHANGE_CATE_LIST:
      return preState.set('catelist',action.catelist);
    case DjRadioType.CHANGE_CUR_RADIO_TYPE:
      return preState.set('curRadioType',action.curRadioType);
    case DjRadioType.CHANGE_EXCELLENT_RADIOS:
      return preState.set('excellentRadios',action.excellentRadios);
    case DjRadioType.CHANGE_RADIO_RANKING:
      return preState.set('radioRanking',action.radioRanking);
    default: 
      return preState;
  }

}