import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { HiCalendar } from 'react-icons/hi';
import * as S from "./Style";
import MainContainer from '../../components/MainContainer/MainContainer';
import { useRecoilState } from 'recoil';
import { isRightSubSidebarState } from '../../store/sidebarStore';


function Today(props) {
    const [ isRightSubSidebar, setIsRightSubSidebar ] = useRecoilState(isRightSubSidebarState);

    const handleOpenClick = () => {
        setIsRightSubSidebar(!isRightSubSidebar);
    }
    // const [ isSidebarShow, setIsSidebarShow ] = useRecoilState(isSidebarShowState);
    return (
        <MainContainer>
            <button onClick={handleOpenClick}>열기</button>
        </MainContainer>
    );
}

export default Today;