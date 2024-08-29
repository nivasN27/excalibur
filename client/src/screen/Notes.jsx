import { useEffect, useState } from "react";
import NotesModal from "../components/notes/NotesModal";
import plusIcon from "../assets/images/notes/plusIcon.webp";
import deleteIcon from "../assets/images/notes/deleteIcon.webp";
import sun from "../assets/images/notes/sun.webp";
import moon from "../assets/images/notes/moon.webp";
import edit from "../assets/images/notes/editIcon.webp";
import style from "./less/notes.module.less";
import BgImg from "../components/notes/BackgroundImage";
import GlobalService from "../utils/globalService.jsx";
import DefaultLoader from "../components/DefaultLoader.jsx";

const Notes = () => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true)
  const [noteList, setNoteList] = useState([]);
  const [note, setNote] = useState({ id: 0, content: "" });
  const [type, setType] = useState("add");

  useEffect(() => {
    handleGetNotes();
  }, []);
  
  const handleGetNotes = () => {
    GlobalService.apiInstance((data) => {
      if(data.status) {
        setNoteList(data.data);
        setIsLoading(false)
      }
    }, "/notes");
  }

  const handleAdd = (note) => {
    setOpen(false);
    const obj = { 
      content: note.content
    };
    GlobalService.apiInstance(
      (data) => {
        if(data.status && data.message === "success") {
          const updatedObj = {
            ...obj,
            id: data.id,
          };
          setNoteList(prev => [...prev, updatedObj])
        }
      },
      "/add", obj, "post"
    );
  };

  const handleEdit = (note) => {
    setOpen(false);
    const obj = {
      content: note.content,
      id: note.id
    };
    GlobalService.apiInstance(
      (data) => {
        handleGetNotes()
      }, '/edit', obj, "PUT"
    )
  }
  const handleDelete = (id) => {
    const obj = {
      id
    };
    GlobalService.apiInstance(
      (data) => {
        handleGetNotes()
      }, '/delete', obj, "DELETE"
    )
  }

  const renderContent = (obj) => {
    return (
      <div
        className={style.content}
        onClick={() => {
          setType("show");
          setOpen(true);
          setNote(obj);
        }}
      >
        {obj?.content?.startsWith("http") ||
        obj?.content?.trim().endsWith(".com") ? (
          <a href={obj.content} target="_blank" className={style.link}>
            {obj?.content}
          </a>
        ) : (
          <p>{obj?.content}</p>
        )}
      </div>
    );
  };

  const renderContainer = () => (
    <div className={style.container}>
        <img
          src={plusIcon}
          onClick={() => {
            setOpen(true);
            setType("add");
            setNote({ id: 0, content: ""});
          }}
          className={style.plusIcon}
        />
        <div>
        </div>
        <div className={style.noteListContainer}>
          {noteList.map((obj, index) => (
            <div key={index} className={style.note}>
              {renderContent(obj, index)}
              <div className={style.actionContainer}>
                <img
                  className={style.editIcon}
                  src={edit}
                  alt="editIcon"
                  onClick={() => {
                    setOpen(true);
                    setNote(obj);
                    setType("edit");
                  }}
                />
                <img
                  className={style.deleteIcon}
                  src={deleteIcon}
                  alt="delIcon"
                  onClick={() => handleDelete(obj.id)}
                />
              </div>
            </div>
          ))}
        </div>
        {open && (
          <div className={style.modalContainer}
          onClickCapture={()=> {
            if (type === "show") {
              setOpen(false);
              setNoteContent({ id: 0, content: "" });
            }
          }}
          >
            <NotesModal
              setOpen={setOpen}
              handleAdd={handleAdd}
              note={note}
              type={type}
              handleEdit={handleEdit}
            />
          </div>
        )}
      </div>
  );
  return (
    <>
      <div className={style.font}>
        <BgImg/>
      </div>
      {isLoading ? (
        <DefaultLoader/>
      ) : (
        renderContainer()
      )}
    </>
  );  
};

export default Notes;
