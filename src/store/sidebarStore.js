import { atom } from "recoil";

//recoil : 전역상태라이브러리
export const isSidebarShowState = atom({
    key: "isSidebarShow",
    default: false
});

export const isRightSubSidebarState = atom({
    key: "isRightSubSidebar",
    default: false
});