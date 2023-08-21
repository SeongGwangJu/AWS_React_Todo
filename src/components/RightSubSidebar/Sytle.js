import { css } from "@emotion/react";

export const SLayout = (isShow) => {
    return css`
        position: absolute;
        transition: all 0.8s ease;
        right: 20px;
        z-index: -1;
        border-radius: 10px;
        //isShow상태에 따라 커졌다 작아졌따
        width: ${isShow ? "300px" : "0px"};
        height: 560px;
        background-color: #eee;
    `;
};