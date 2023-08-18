import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { HiCalendar } from 'react-icons/hi';
import * as S from "./Style";
import { useLocation, useNavigate } from 'react-router-dom';

function List({ title, list }) {
    const navigate = useNavigate();
    const location = useLocation();
    const pathName = location.pathname;

    const handleLinkClick = (path) => {
        navigate(path);
    }
    return (
        <div css={S.SLayout}>
            <h2 css={S.STitle}>{title}</h2>
            <ul css={S.SListContainer}>
                {/* list에 있는것들을 꺼내줘야지 */}
                {list.map(item => {
                    //item.path의 값으로 시작하면 true 
                    const isSelected = pathName.startsWith(item.path); //활성화시 리스트의 디자인 다름
                    return(
                        // key=item.id를 통해 순서정렬 / 부분랜더링 가능
                        <li css={S.SListBox(isSelected)} key={item.id} onClick={() => {
                            handleLinkClick(item.path);
                        }} >
                            <HiCalendar />
                            <span css={S.SListName(isSelected)}>{item.name}</span>
                            {!!item.count && (<div css={S.SCount(isSelected)}>{item.count}</div>)}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default List;