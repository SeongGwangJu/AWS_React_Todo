/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const SContainer = (isMainSidebarShow, isRightSidebarShow) => {
    
    let width = 934;

    // 사이드바 유무에따라 메인컨테 폭이 조절됨
    if(isMainSidebarShow) { 
        width -= 210;
    }

    if(isRightSidebarShow) {
        width -= 310;
    }

    return css`
    position: absolute;
    transition: all 0.8s ease;
    z-index: -1;
    left: ${isMainSidebarShow? "270px" : "60px"};
    border-radius: 10px;
    padding: 10px 20px 20px 20px;
    width: ${width}px;
    height: 560px;
    background-color: #fafafa;
    `
};