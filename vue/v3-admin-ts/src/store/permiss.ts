import { defineStore } from "pinia";
//不同角色权限数据

//接口定义
type roleList = {
  [key: string]: string[];
};
export const usePermissStore = defineStore("permiss", () => {
  //组件间会有数据需求,当前用户的权限有哪些
  const keys = localStorage.getItem("ms_keys");

  return {
    //角色列表
    roleList: <roleList>{
      admin: ["1", "2", "3", "4"],
      user: ["1"], //403
    },
    key: keys ? JSON.parse(keys) : [],
    setKeys(val) {
      this.key = val;
    },
  };
});
