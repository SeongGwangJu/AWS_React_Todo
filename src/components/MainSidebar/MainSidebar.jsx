import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import Header from './Header/Header';
function MainSidebar(props) {
    return (
        <div css={S.SLayout}>
            <Header></Header>
        </div>
    );
}

export default MainSidebar;