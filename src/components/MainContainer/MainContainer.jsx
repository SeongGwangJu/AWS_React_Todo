import React, { useEffect } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from './Style';
import { isSidebarShowState, isRightSubSidebarState } from '../../store/sidebarStore';
import { useRecoilState } from 'recoil';

function MainContainer( { children }) {
    const [ isSidebarShow, setIsSidebarShow ] = useRecoilState(isSidebarShowState);
    const [isRightSubSidebar, setIsRightSubSidebar ] =useRecoilState(isRightSubSidebarState);

    useEffect(() => {
        //언마운트 되는 시점에 상태를 반전시켜줌
        return () => {
            setIsRightSubSidebar(false);
        }
    }, [] );

    return (
        <div css={S.SContainer(isSidebarShow, isRightSubSidebar)}>
            { children }
        </div>
    );
}

export default MainContainer;