import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from './Style';
import {FaChevronRight} from "react-icons/fa";
import { useRecoilState } from 'recoil';
import { isRightSubSidebarState } from '../../../store/sidebarStore';

function TaskList( {target, setTarget} ) {
    const [ isRightSubSidebar, setIsRightSubSidebar ] = useRecoilState(isRightSubSidebarState);

    const handleOpenClick = (e) => {
        //이 if문 왜넣는다고??
        if(target === e.target) {
            setIsRightSubSidebar(false);
            setTarget(null);
        }else if(target === null) {
            setIsRightSubSidebar(true);
            setTarget(e.target);
        }else {
            setTarget(e.target);
        }
    }

    return (
        <ul css={S.SLayout}>
            <li css={S.SListBox} onClick={handleOpenClick}>
                <div css={S.SListContent}>
                    <input css={S.SCheckBox}type="checkbox" />
                    <span>Research content ideas</span>
                </div>
                <FaChevronRight />
            </li>
        </ul>
    );
}

export default TaskList;