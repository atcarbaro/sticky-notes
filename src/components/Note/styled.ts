import styled from 'styled-components'
import { INoteContainerProps } from './types'

export const NoteDraggable = styled.div``

export const NoteContainer = styled.div<INoteContainerProps>`
    position: relative;
    width: ${ ({ width }) => `${width}px`};
    height: ${ ({ height }) => `${height}px`};
    transform: ${ ({ left, top }) => `translateX(${left}px) translateY(${top}px)`};
    margin: 2rem 2.5rem 2rem 0;
    border-radius: 20px;
    background-color: ${ ({ color }) => color};
    display: flex;
    justify-content: center;
    z-index: 3000
`

export const TextArea = styled.textarea`
    border: none;
    outline: none;
    border-radius: 20px 20px 0 0;
    background: transparent;
    height: 100%;
    width: calc(100% - 2rem);
    line-height: 1.8;
    resize: none;
    font-size: 1rem;
    font-family: inherit;
    padding: 1rem;
    user-select: none; 
`

export const AreaContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
`

export const DisplayArea = styled.div`
    height: 100%;
    width: calc(100% - 2rem);
    padding: 1rem;
    & p {
        font-size: 1rem;
        margin: 0;
        line-height: 1.8;
        user-select: none; 
    }
`

export const SaveTextAreaButton = styled.button`
    border: none;
    border-top: 1px solid grey;
    border-radius: 0 0 8px 8px;
    outline: none;
    background: transparent;
    color: #000;
    font-weight: bold;
    width: 100%;
    height: 100px;
    font-size: 1rem;
    cursor: pointer;
    user-select: none; 
`

export const ResizeButton = styled.button`
    position: absolute;
    bottom: 5px;
    right: 5px;
    transform: translate(50%, 50%);
    border: none;
    background: none;
    cursor: pointer;
    opacity: 0;
    font-size: 2rem;
    &:active, &:hover {
        opacity: 1;
    }
`