import { useState } from "react";
import closeIcon from "../../assets/images/notes/closeIcon.webp";
import style from "./less/noteModal.module.less";

const NotesModal = (props) => {
  const { setOpen, handleAdd, note, type, handleEdit } = props;
  const [noteContent, setNoteContent] = useState(note);

  const handleonChange = (e) => {
    setNoteContent((prev) => ({ ...prev, content: e.target.value }));
  };
  return (
    <div className={style.modalWrapper}>
      {type === "show" ? (
        <>
          <div className={style.showmodalContainer}>
            <div className={style.contentWrapper}>
              <textarea disabled>
                {noteContent?.content}
              </textarea>
            </div>
          </div>
        </>
      ) : (
        <div className={style.addorEditContainer}>
          <h1>{type === "add" ? "Add your notes" : "Edit your content"}</h1>
          <textarea value={noteContent.content} onChange={handleonChange} />
          <div className={style.actionContainer}>
            <button
              className={style.cancelBtn}
              onClick={() => {
                setOpen(false);
                setNoteContent({ id: 0, content: "" });
              }}
            >
              cancel
            </button>
            <button
              className={style.confirmBtn}
              disabled={
                noteContent.content.length === 0
              }
              onClick={() => {
                type === "add"
                  ? handleAdd(noteContent)
                  : handleEdit(noteContent);
                setNoteContent({ id: 0, content: "" });
              }}
            >
              {type === "add" ? "Add" : "Update"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotesModal;
