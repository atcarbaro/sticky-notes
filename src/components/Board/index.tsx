import React, { useRef, useState } from 'react'
import Note from '../Note';
import { BoardContainer, AddNoteButton, AddNoteRow, ColorAction, ColorsListContainer, NotesListContainer, RemoveIcon, RemoveNoteContainer } from './styled'
import { INote } from '../Note/types'
import { colorsList } from './utils'

function Board() {
    const [showColorsList, setShowColorsList] = useState(false);
    const [notesList, setNotesList] = useState<INote[]>([]) 
    const removeNoteRef = useRef<HTMLButtonElement>(null)

    const handleAddNote = () => {
        setShowColorsList(!showColorsList)
    }

    const handleColorAction = (colorList: string) => {
        const newNote = {
            color: colorList,
            text: '',
            writeStatus: true,
            date: new Date().getTime().toString(),
            id: Number(new Date().getTime().toString())
        }

        const newNotesList = [...notesList, newNote]
        setNotesList(newNotesList)
        setShowColorsList(false)
    }

    const removeNote = (noteId: number) => {
        console.log('noteId', noteId)
    }

    return (
        <BoardContainer >
            <AddNoteRow>
                <AddNoteButton onClick={handleAddNote} >
                    {showColorsList ? 'Cancel Note' : 'Add Note'}
                </AddNoteButton>

                {showColorsList && 
                    <ColorsListContainer>
                        {
                            colorsList.map((colorList) => 
                                <ColorAction key={colorList} onClick={() => handleColorAction(colorList)} currentColor={colorList} />
                            )
                        }
                    </ColorsListContainer>
                }
            </AddNoteRow>

            <NotesListContainer>
                {
                    notesList.map((noteList, noteListKey) => 
                       <Note 
                            id={noteList.id}
                            key={noteListKey}
                            color={noteList.color} 
                            text={noteList.text} 
                            date={noteList.date} 
                            writeStatus={noteList.writeStatus} 
                            removeNoteFn={removeNote}
                            removeNoteRef={removeNoteRef}
                        />
                    )
                }
            </NotesListContainer>
            <RemoveNoteContainer ref={removeNoteRef}>
                <RemoveIcon>🗑</RemoveIcon>
            </RemoveNoteContainer>
        </BoardContainer>
    )
}

export default Board