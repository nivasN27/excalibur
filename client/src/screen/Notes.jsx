import { useEffect, useState } from "react";
import NotesModal from "../components/NotesModal";
import plusIcon from "../assets/images/notes/plusIcon.webp";
import deleteIcon from "../assets/images/notes/deleteIcon.webp";
import sun from "../assets/images/notes/sun.webp";
import moon from "../assets/images/notes/moon.webp";
import edit from "../assets/images/notes/editIcon.webp";
import style from "./less/notes.module.less";
import BgImg from "../components/BackgroundImage";
import GlobalService from "../utils/globalService";
import axios from "axios";

const Notes = () => {
  const [open, setOpen] = useState(false);
  const [noteList, setNoteList] = useState([]);
  const [note, setNote] = useState({ id: 0, data: "", imageList: [] });
  const [type, setType] = useState("add");
  const [theme, setTheme] = useState("light");

  // useEffect(() => {
  //   const storedNotes = JSON.parse(localStorage.getItem("notes"));
  //   if (storedNotes) {
  //     setNoteList(storedNotes);
  //   }
  // }, []);

  useEffect(() => {
    GlobalService.apiHit((data) => {
      setNoteList(data.data);
    }, "/notes");
  }, []);

  const handleAdd = (note) => {
    setOpen(false);
    const obj = { 
      content: note.data,
      imageList: note.imageList
    };
    const formData = new FormData();
    formData.append("content", note.data)
    // formData.append("imageList", note.imageList)
    note.imageList.forEach((element) => {
      formData.append("uploadfile", element);
    });
    GlobalService.apiHit(
      (data) => {
        console.log(data)
        if(data.status === 'added') {
          const updatedObj = {
            ...obj,
            id: data.id,
          };
          setNoteList(prev => [...prev, updatedObj])
        }
      },
      "/add", formData, "post"
    );
  };

  const handleEdit = (note) => {
    setOpen(false);
    const updatedNotes = noteList.map((ele) => {
      if (ele.id === note.id) {
        return note;
      }
      return ele;
    });
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    setNoteList(updatedNotes);
  };

  const handleDelete = (id) => {
    const updatedNotes = noteList.filter((ele) => ele.id !== id);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    setNoteList(updatedNotes);
  };

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
          <a href={obj.content} target="_blank">
            {obj?.content}
          </a>
        ) : (
          <p>{obj?.content}</p>
        )}
        <div className={style.imgContainer}>
          {obj?.imageList?.length > 0 &&
            obj.imageList.map((ele, idx) => <img src={ele} key={`img${idx}`} />)}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className={style.font}>
        <BgImg theme={theme} />
      </div>
      <div className={style.container}>
        <img
          src={plusIcon}
          onClick={() => {
            setOpen(true);
            setType("add");
            setNote({ id: 0, data: "", imageList: [] });
          }}
          className={style.plusIcon}
        />
        <div>
          <img
            src={theme === "light" ? moon : sun}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={style.themeChanger}
          />
        </div>
        {console.log(noteList)}
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
          <div className={style.modalContainer}>
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
    </>
  );
};

export default Notes;
