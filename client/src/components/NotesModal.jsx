import { useRef, useState } from "react";
import uploadImg from "../assets/images/notes/uploadIcon.webp";
import deleteIcon from "../assets/images/notes/deleteIcon.webp";
import closeIcon from "../assets/images/notes/closeIcon.webp";
import style from "./less/noteModal.module.less";
import { base64ToBinary, binaryToBase64 } from "../utils/commonFunctions";

const NotesModal = (props) => {
  const { setOpen, handleAdd, note, type, handleEdit } = props;
  const [noteContent, setNoteContent] = useState(note);
  const inputRef = useRef();

  const handleonChange = (e) => {
    setNoteContent((prev) => ({ ...prev, data: e.target.value }));
  };
  const handleUpload = () => {
    inputRef.current && inputRef.current.click();
  };
  const handleUploadedImg = (e) => {
    const files = inputRef.current.files;
    // const urls = [];
    const urls = Array.from(e.target.files).map((file) => file);
          setNoteContent((prev) => ({ ...prev, imageList: urls }));
    // Array.from(files).forEach((file) => {
    //   const reader = new FileReader();
    //   reader.onloadend = () => {
    //     urls.push(reader.result);
    //     if (urls.length === files.length) {
    //       setNoteContent((prev) => ({ ...prev, imageList: urls }));
    //     }
    //   };
    //   reader.readAsDataURL(file);
    // });
  };
  const handleDelete = (idx) => {
    const arr = noteContent.imageList.filter((ele, i) => i !== idx);
    setNoteContent((prev) => ({ ...prev, imageList: arr }));
  };
  return (
    <div className={style.modalWrapper}>
      {type === "show" ? (
        <>
          <div className={style.showmodalContainer}>
            <div className={style.closeIconWrapper}>
              <img
                src={closeIcon}
                className={style.closeIcon}
                onClick={() => {
                  setOpen(false);
                  setNoteContent({ id: 0, data: "", imageList: [] });
                }}
              />
            </div>
            <div className={style.contentWrapper}>
              {noteContent?.data?.startsWith("http") ||
              noteContent?.data?.trim().endsWith(".com") ? (
                <a href={noteContent.data} target="_blank">
                  {noteContent?.data}
                </a>
              ) : (
                <p>{noteContent?.data}</p>
              )}
              {noteContent?.imageList?.length > 0 &&
                noteContent.imageList.map((ele, idx) => (
                  <img src={ele} key={`img${idx}`} />
                ))}
            </div>
          </div>
        </>
      ) : (
        <div className={style.addorEditContainer}>
          <h1>{type === "add" ? "Add your notes" : "Edit your content"}</h1>
          <textarea value={noteContent.data} onChange={handleonChange} />
          <div className={style.actionContainer}>
            <img
              src={uploadImg}
              onClick={handleUpload}
              className={style.uploadIcon}
            />
            <button
              className={style.cancelBtn}
              onClick={() => {
                setOpen(false);
                setNoteContent({ id: 0, data: "", imageList: [] });
              }}
            >
              cancel
            </button>
            <button
              className={style.confirmBtn}
              disabled={
                noteContent.data.length === 0 &&
                noteContent.imageList.length === 0
              }
              onClick={() => {
                type === "add"
                  ? handleAdd(noteContent)
                  : handleEdit(noteContent);
                setNoteContent({ id: 0, data: "", imageList: [] });
              }}
            >
              {type === "add" ? "Add" : "Update"}
            </button>
          </div>
          {noteContent?.imageList?.length > 0 && (
            <div className={style.uploadedImgContainer}>
              {noteContent.imageList.map((ele, idx) => (
                <>
                  <div
                    key={`uploadedImg_${idx}`}
                    className={style.imageWrapper}
                  >
                    <img
                      src={ele}
                      width={"50px"}
                      className={style.uploadedImg}
                    />
                    <img
                      className={style.deleteIcon}
                      src={deleteIcon}
                      onClick={() => handleDelete(idx)}
                      width={"50px"}
                    />
                  </div>
                </>
              ))}
            </div>
          )}
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={handleUploadedImg}
            style={{ display: "none" }}
          />
        </div>
      )}
    </div>
  );
};

export default NotesModal;
