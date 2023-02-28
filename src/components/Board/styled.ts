import styled from 'styled-components'
import { ActionColorProps } from './types';

export const BoardContainer = styled.div`
    width: 100%;
    height: calc(100% - 2vh);
    position: relative;
`;

export const AddNoteButton = styled.button`
    background-color: black;
    border: none;
    border-radius: 0.5rem;
    width: 8vw;
    height: 50px;
    color: #fff;
    font-size: 1rem;
    &:hover {
        border: none;
        opacity: 0.8;
    }
`
export const AddNoteRow = styled.div`
    display: flex;
    margin-top: 2rem;
    padding: 0 2rem;
`
export const ColorsListContainer = styled.div`
    margin-left: 2rem;
    width: 15vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const ColorAction = styled.button<ActionColorProps>`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    border: none;
    background-color: ${ ({ currentColor }) => currentColor};
    &:active {
        opacity: 0.8;
    }
`

export const NotesListContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 0 2rem;
`
export const RemoveNoteContainer = styled.button`
    border: none;
    outline: none;
    position: absolute;
    bottom: 0;
    height: 100px;
    width: 100%;
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
`

export const RemoveIcon = styled.span`
    font-size: 4rem;
    color: #fff;
`