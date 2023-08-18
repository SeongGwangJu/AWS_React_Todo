import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import { HiMenu, HiSearch } from "react-icons/hi";

function Header(props) {
    return (
        <div>
            <div css={S.SLayout}>
                <div css={S.SContainer}>
                    <h1 css={S.STitle}>Menu</h1>
                    <button css={S.SToggleButton}><HiMenu /></button>
                </div>
            </div>
            <div css={S.SSearchBox}>
                <input type="text" />
            </div>
        </div>
    );
}

export default Header;