import React, { useRef, useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import PdfIcon from "../../../../property/images/icons/pdf_icon.png";
import UploadIcon from "../../../../property/images/icons/upload.png";
// import YesButton from '../../Buttons/YesButton';
import GeneralButton from "../../../../constituents/IButton/GeneralButton";
import BackButton from "../../../../constituents/IButton/BackButton";
import cancel from "../../../../property/images/close_circle.svg";
import { useTranslation } from "react-i18next";
import "./styles.css";
import { uploadMaterail } from "../../../../request/api";

const UploadDiag = (props) => {
  const {
    title,
    open,
    setOpen,
    onCancel,
    className,
    alert = false,
    onReturn,
    f_uploadImageImportProcess,
    vSelectProcessIndex,
  } = props;
  const { t } = useTranslation();
  const fileInputRef = useRef();
  const [vImageObject, setImageObject] = useState({});

  const fileInputTrigger = (e) => {
    e.preventDefault();
    fileInputRef.current.click();
  };

  const handleInputFile = (e) => {
    //update image
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
      let base64 = reader.result.split(",")[1];
      setImageObject({ data: base64, filename: file.name });
    };
  };

  const uploadFile = () => {
    const update = async () => {
      const response = await uploadMaterail(vImageObject);
      f_uploadImageImportProcess(response.data, vSelectProcessIndex);
      setOpen(false);
    };
    update();
  };

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="confirm-dialog"
      PaperProps={{ className: "confirm_pdf_dialog_width" }}
    >
      <DialogTitle id="confirm-dialog" className="p-0 text-right">
        <img
          src={cancel}
          alt="Cancel"
          className="cancel"
          onClick={() => {
            setOpen(false);
            if (typeof onCancel === "function") {
              onCancel();
            }
          }}
        />
      </DialogTitle>
      <DialogContent
        className={`font-weight-bold text-center dialog_title_box px-5 ${className}`}
      >
        <h6>{t('role_play_creation.upload_dia.header')}</h6>
        <div className="pdf-message-box-sec">
          <img src={UploadIcon} alt="Pdf Icon" />
          <a
            href="/"
            onClick={fileInputTrigger}
            className="cmn-link d-block mt-4 pt-2"
          >
            {t('role_play_creation.upload_dia.title')}
          </a>
          <input
            accept="application/pdf,image/*"
            ref={fileInputRef}
            onChange={handleInputFile}
            type="file"
            hidden
          />
        </div>
      </DialogContent>
      <DialogActions className="d-block text-right px-5">
        <BackButton
          id="apply"
          className="yes_btn font-14 mr-2 w-auto"
          title={t('role_play_creation.upload_dia.cancel')}
          onClick={() => {
            setOpen(false);
          }}
        />
        <GeneralButton
          id="cancel"
          className="no_btn font-14 w-auto px-4"
          title={t('role_play_creation.upload_dia.upload')}
          onClick={() => {
            uploadFile();
          }}
        />
      </DialogActions>
    </Dialog>
  );
};
export default UploadDiag;
