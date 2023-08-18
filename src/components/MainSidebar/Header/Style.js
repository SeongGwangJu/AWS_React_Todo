/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";


export const SLayout = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;
export const SContainer = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
;`

export const STitle = css`
    font-size: 18px;
    font-weight:600;
    `;

export const SToggleButton = css`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: transparent;
    font-size:18px;
    height: 100%;
    cursor: pointer;
`;

export const SSearchBox = css`
    padding: 5px;
    width: 90%;
`;