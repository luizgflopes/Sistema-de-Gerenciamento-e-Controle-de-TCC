import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Slide from "@material-ui/core/Slide";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function DefaultDialog({
  onClose,
  open,
  confirmAction,
  children,
  title
}) 

{
  const classes = useStyles();

  const handleClose = () => {
    onClose();
  };
  const handleUpdate = (e)=>{
    confirmAction()
  }
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title">
        {title}
      </DialogTitle>
      <DialogContent>
      <div className={classes.root}>

        {children}
        </div>
        </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Fechar
        </Button>
        <Button onClick={(e)=>{
          handleUpdate(e)
        }} color="primary">
          Atualizar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

DefaultDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  confirmAction: PropTypes.func.isRequired,
  title:PropTypes.string.isRequired
};
