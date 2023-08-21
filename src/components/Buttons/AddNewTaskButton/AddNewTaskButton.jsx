import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from './Style';
import { FaPlus} from "react-icons/fa"
import { isRightSubSidebarState } from '../../../store/sidebarStore';
import { useRecoilState } from 'recoil';
import TaskList from '../../Lists/TaskList/TaskList';


function AddNewTaskButton( {target, setTarget}) {
    const [isRightSubSidebar, setIsRightSubSidebar ] = useRecoilState(isRightSubSidebarState);

    const handleOpenClick = (e) => {
        //똑같은 걸 눌렀을 때 열고 닫히도록
        if(target === e.target) {
            setIsRightSubSidebar(false);
            setTarget(null);
            console.log("같음")
        }else if(target === null) {
            setIsRightSubSidebar(true);
            setTarget(e.target);
            console.log("target===null")
        }else {
            setTarget(e.target);
            console.log("else")
        }
    }

    return (
        <button  css={S.SLayout} onClick={handleOpenClick}>
            <FaPlus css={S.SIcon} />
            <span css={S.SAddTask}> Add New Task </span>
        </button>
    );
}

export default AddNewTaskButton;