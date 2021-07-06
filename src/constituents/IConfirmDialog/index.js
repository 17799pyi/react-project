import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import GeneralButton from "../../constituents/IButton/GeneralButton";
import BackButton from "../../constituents/IButton/BackButton";
// import cancel from '../../property/images/close_circle.svg';
import cancel from "../../property/images/close_icon.svg";
import { useTranslation } from "react-i18next";
import classes from "./styles.module.css";

const ConfirmDialog = (props) => {
  const {
    title,
    open,
    setOpen,
    onCancel,
    className,
    onReturn,
  } = props;
  const { t } = useTranslation();
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="confirm-dialog"
      PaperProps={{ className: `${classes.confirm_dialog_width}` }}
    >
      <DialogTitle id="confirm-dialog" className="p-0 text-right">
        <img
          src={cancel}
          alt="Cancel"
          className={`${classes.cancel}`}
          onClick={() => {
            setOpen(false);
            if (typeof onCancel === "function") {
              onCancel();
            }
          }}
        />
      </DialogTitle>
      <DialogContent
        className={`font-weight-bold text-center ${classes.dialog_title_box} ${className}`}
      >
        <h6>{title}</h6>
      </DialogContent>
      <DialogActions className="d-block px-4">
        <GeneralButton
          id="apply"
          className="yes_btn font-14 py-3 mb-3 mt-2 w-100"
          title="はい"
          onClick={() => onReturn()}
        />
        <button
          id="cancel"
          className={`${classes.no_btn} no_btn font-14 py-3 w-100 m-0`}
          title="いいえ"
          onClick={() => setOpen(false)}
        >いいえ</button>
      </DialogActions>
    </Dialog>
  );
};
export default ConfirmDialog;
