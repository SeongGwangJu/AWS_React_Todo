import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import Header from './Header/Header';
import List from '../../List/List';
import { useRecoilState } from 'recoil';
import { isSidebarShowState } from "../../store/sidebarStore";

function MainSidebar(props) {
    // recoil 가져오는 방법
    const [ isSidebarShow, setIsSidebarShow ] = useRecoilState(isSidebarShowState);

    // const [ isShow, setIsShow ] = useState(false);
          
    //  //클릭이 될때 isShow의 상태가 바뀜
    //  //버튼이 Header.jsx에 있는데 왜 여기에? 
    // const handleMenuToggleClick = () => {
    //     setIsShow(!isShow);
    // }
    
    const [ mainMenuListArray, setMainMenuListArray ] = useState({
        tasks: [
            {
                id: 1,
                path: "/upcoming",
                icon: "",
                name: "Upcoming",
                count: 12
            },
            {
                id: 2,
                path: "/today",
                icon: "",
                name: "Today",
                count: 5
            },
            {
                id: 3,
                path: "/calendar",
                icon: "",
                name: "Calendar",
                count: 0
            },
            {
                id: 4,
                path: "/stickywall",
                icon: "",
                name: "Sticky Wall",
                count: 0
            }
        ],
        lists: [
            {
                id: 1,
                path: "/personal",
                icon: "",
                name: "Personal",
                count: 0
            },
            {
                id: 2,
                path: "/work",
                icon: "",
                name: "Work",
                count: 0
            },
            {
                id: 3,
                path: "/list1",
                icon: "",
                name: "List 1",
                count: 0
            },
        ]
    });
    return(
        <div css={S.SLayout(isSidebarShow)}>
            {/* menuToggleOnClick이랑 handle이랑 연결 */}
            <Header />
            {isSidebarShow && ( //is Show가 있어야 보여준다
                <>
                {/* 얘들은 각각의 배열을 가지고 있어야 함 */}
                <List title={"TASKS"} list={mainMenuListArray.tasks} /> 
                <List title={"LISTS"} list={mainMenuListArray.lists} />
                </>
            )}
        </div>
    );
}

export default MainSidebar;