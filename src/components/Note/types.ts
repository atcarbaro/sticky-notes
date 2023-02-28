import { RefObject } from "react";

export interface INote {
    text?: string;
    date?: string;
    color: string;
    writeStatus?: boolean;
    id: number;
}

export interface INoteProps {
    text?: string;
    date?: string;
    color: string;
    writeStatus?: boolean;
    id: number;
    removeNoteFn?: (noteId: number) => void;
    removeNoteRef: RefObject<HTMLButtonElement> 
}

export interface INoteContainerProps {
    color: string;
    width: number;
    height: number;
    left: number;
    top: number;
}