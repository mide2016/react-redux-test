import {
  CREATE_ORDER,
  FETCH_EDITOR_LIST,
  FETCH_EDITOR_DETAIL,
  GET_WECHAT_PAY_INFO,
  GET_ORDER_MATERIAL_LIST
} from 'actions/orderActions';

export default function order(state = {}, action) {
  switch (action.type) {

    case CREATE_ORDER:
      return {
        ...state,
        order: action.payload,
      }

    case FETCH_EDITOR_LIST:
      return {
        ...state,
        editorList: action.payload,
      }

    case FETCH_EDITOR_DETAIL:
      return {
        ...state,
        editorDetail: action.payload,
      }

    case GET_WECHAT_PAY_INFO:
      return {
        ...state,
        payInfo: action.payload,
      }

    case GET_ORDER_MATERIAL_LIST:
      return {
        ...state,
        materialList: action.payload,
      }

    default:
      return state;
  }
}