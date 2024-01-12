import { defineStore } from "pinia";
//不同角色权限数据
export const usePermissStore = defineStore("permiss", () => {
  const roleList = {
    admin: ["1", "2", "3", "4"],
    user: ["1"], //403
  };
  return {
    //角色列表
    roleList,
  };
});
