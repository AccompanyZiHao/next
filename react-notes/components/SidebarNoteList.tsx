// import SidebarNoteItem from '@/components/SidebarNoteItem';

import SidebarNoteListFilter from '@/components/SidebarNoteListFilter';
import { getAllNotes } from '@/lib/redis';
import { sleep } from '@/lib/utils';
import SidebarNoteItemHeader from '@/components/SidebarNoteItemHeader';

// 避免把 day.js 打包到客户端
export default async function NoteList() {

  await sleep(1000);
  const notes = await getAllNotes();

  if (Object.entries(notes).length == 0) {
    return <div className="notes-empty">
      { 'No notes created yet!' }
    </div>;
  }

  return (
    <SidebarNoteListFilter notes={
      Object.entries(notes).map(([noteId, note]) => {
        const noteData = JSON.parse(note);
        return {
          noteId,
          note: noteData,
          header: <SidebarNoteItemHeader title={ noteData.title } updateTime={ noteData.updateTime }/>,
        };
      })
    }/>
  );
}

/*
 export default async function NoteList() {

 await sleep(100);

 const notes = await getAllNotes();

 const arr = Object.entries(notes);


 if (arr.length == 0) {
 return <div className="notes-empty">
 { 'No notes created yet!' }
 </div>;
 }

 return <ul className="notes-list">
 { arr.map(([noteId, note]) => {
 return <li key={ noteId }>
 <SidebarNoteItem noteId={ noteId } note={ JSON.parse(String(note)) }/>
 </li>;
 }) }
 </ul>;
 }*/
