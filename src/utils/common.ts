import { history } from '@umijs/max';
// 与doBack配合使用
const doJump = (to: any, state?: any):void => {
  history.push(to, {...state, from: history.location.pathname})
}
// 与doJump配合使用
const doBack = (newState?: any):any => {
  const state: any = history.location.state
  history.push(state.from, {...state, ...newState})
}
// 获取路由传参
const analyzeJumpState = ():any => {
  return history.location.state;
}

export {
  analyzeJumpState,
  doJump,
  doBack
}
