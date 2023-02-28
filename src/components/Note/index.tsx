import React, { useEffect, useState } from 'react'
import { INoteProps } from './types'

import { NoteDraggable, NoteContainer, TextArea, AreaContainer, DisplayArea, ResizeButton, SaveTextAreaButton } from './styled'

function Note({ text, color, writeStatus, id, removeNoteFn, removeNoteRef }: INoteProps) {
  const [noteText, setNoteText] = useState(text);
  const [currentWriteStatus, setCurrentWriteStatus] = useState(writeStatus);
  const [saveNote, setSaveNote] = useState(false);
  const [noteSize, setNoteSize] = useState({ x: 300, y: 300 });
  const [notePosition, setNotePosition] = useState({ x: 0, y: 0});
  const [dragNote, setDragNote] = useState(false);
 
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNoteText(e.target.value)
    if(e.target.value.length > 0){
      setSaveNote(true)
    }
  }

  const handleSizeByDrag = (mouseDownEvent: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setDragNote(false);
    const startSize = noteSize;
    const startPosition = { x: mouseDownEvent.pageX, y: mouseDownEvent.pageY };
    function onMouseMove(mouseMoveEvent: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
      setNoteSize({ 
        x: startSize.x - startPosition.x + mouseMoveEvent.pageX, 
        y: startSize.y - startPosition.y + mouseMoveEvent.pageY 
      });
    }

    function onMouseUp() {
      document.body.removeEventListener("mousemove", onMouseMove as unknown as EventListener);
    }
    
    document.body.addEventListener("mousemove", onMouseMove as unknown as EventListener);
    document.body.addEventListener("mouseup", onMouseUp, { once: true });
  }

  const handleStartDragNote = (startDragEvent: React.PointerEvent<HTMLDivElement>) => {
    setDragNote(true);
  }

  const handlePointerIsUp = () => {
    setDragNote(false);
  }

  const handleDragNote = (dragEvent: React.PointerEvent<HTMLDivElement>) => {
    if(dragNote && noteText?.length) {
      setNotePosition({ x: notePosition.x + dragEvent.movementX * 2, y: notePosition.y + dragEvent.movementY * 2})
    }
  }

  const handleDragEnds = (e: React.PointerEvent<HTMLDivElement>) => {
  }

  useEffect(() => {
  window.addEventListener('pointerup', handlePointerIsUp);

    return () => {
      window.removeEventListener('pointerup', handlePointerIsUp);
    }
  }, []);

  return (
    <NoteDraggable 
      onPointerDown={e => handleStartDragNote(e)}
      onPointerMove={e => handleDragNote(e)}
      onPointerUp={e => handleDragEnds(e)}
    >
      <NoteContainer  
        width={noteSize.x} 
        height={noteSize.y} 
        color={color}
        left={notePosition.x}
        top={notePosition.y}
      >
        <AreaContainer>
          {currentWriteStatus ? 
              <>
              <TextArea 
                  value={noteText} 
                  onChange={(e) => handleChange(e)} 
                />
                {saveNote && <SaveTextAreaButton onClick={() =>  setCurrentWriteStatus(false)}>Save</SaveTextAreaButton>}
              </>
            : 
            <>
                <DisplayArea> 
                  <p>{noteText}</p>
                </DisplayArea>
                <SaveTextAreaButton onClick={() => setCurrentWriteStatus(true)}>Edit</SaveTextAreaButton>
              </>
          }
        </AreaContainer>
        <ResizeButton 
          onMouseDown={e => handleSizeByDrag(e) } 
        >
          ↘
        </ResizeButton>
      </NoteContainer>
    </NoteDraggable>
  )
}

export default Note