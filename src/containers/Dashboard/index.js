/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import shortid from 'shortid';
import dragula from 'dragula';
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';

import { paths } from '../../routes/paths';
import { TodoList } from '../../components/index';
import { listInfo } from '../../utils/index';
import { cardsAction } from '../../store/action';
import { cardsSelector } from '../../store/selector';

import './Dashboard.scss';

const Dashboard = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const dataList = useSelector(cardsSelector.dataList);

    useEffect(() => {
        let oneRow = document.getElementById('oneRow');
        let twoRow = document.getElementById('twoRow');
        let threeRow = document.getElementById('threeRow');
        let fourRow = document.getElementById('fourRow');

        dragula([oneRow, twoRow, threeRow, fourRow])
            .on('drop', (el, target) => {
                const filterCard = dataList.filter((item) => item.id === Number(el.getAttribute('data-id')));
                const { text, id } = filterCard[0];

                const editCard = {
                    row: target.getAttribute('data-row'),
                    seq_num: el.getAttribute('data-index'),
                    text,
                };

                dispatch(cardsAction.editCard(id, editCard));
            })
    });

    useEffect(() => {
        dispatch(cardsAction.getCard());
    }, []);

    const handlerLogout = () => {
        window.localStorage.removeItem('accessToken')
        history.push(paths.home);
    };

    const newDataList = listInfo.map((el) => {
        const currentRow = dataList.filter((item) => item.row === el.row);
        return { ...el, list: currentRow }
    });

    const renderTodoList = newDataList.map((item) => <TodoList item={item} key={shortid.generate()} />);

    return (
        <section className='section'>
            <button onClick={handlerLogout} className="logout" >Выйти</button>
            <div className='wrapper container'>{renderTodoList}</div>;
        </section>
    );
};

export default Dashboard;
