/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from 'react';
import * as S from "./Style";

function MainLayout( children) {
    return (
        <div css={S.SLayout}>
            {children}
        </div>
    );
}

export default MainLayout;