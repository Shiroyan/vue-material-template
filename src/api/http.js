import VR from 'vue-resource';

const baseUrl = '/activity-engine/';

export default {
  //  get-获取openId
  openId: VR.resource(`${baseUrl}openId`),
  //  post-抽奖   get-查询抽奖
  draw: VR.resource(`${baseUrl}draw`),
  //  post-用户其他信息收集
  userInfo: VR.resource(`${baseUrl}userInfo`),
  //  活动与用户状态查询接口
};
