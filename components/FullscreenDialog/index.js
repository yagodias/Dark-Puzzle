import PropTypes from 'prop-types';
import { 
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fade,
  Grid,
  Slide
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function FullscreenDialog({
  children,
  direction,
  disableEscapeKeyDown,
  disableOnClose,
  divider,
  fullScreen,
  maxWidth,
  open,
  scroll,
  setOpen,
  showCloseButton,
  title,
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const handleClose = () => {
    setOpen(false);
  };

  return(
    <Dialog
      scroll={scroll}
      TransitionComponent={isMobile ? Slide : Fade}
      TransitionProps={{
        direction,
      }}
      transintionDuration={400}
      maxWidth={maxWidth}
      fullWidth={!isMobile}
      fullScreen={isMobile || fullScreen}
      open={open}
      onClose={() => {
        if (!disableOnClose) handleClose();
      }}
      disableEscapeKeyDown={disableEscapeKeyDown}
      aria-labelledby="responsive-dialog-"
    >
      <DialogTitle
        id="responsive-dialog-title"
        sx={{ padding: '8px 24px' }}
      >
        <Grid container alignItems="center">
          <Grid item xs={10}>
            {title}
          </Grid>
          {showCloseButton && (
            <Grid item xs={2}>
              <DialogActions>
                <Button autoFocus onClick={handleClose} color="primary">
                  Fechar
                </Button>
              </DialogActions>
            </Grid>
          )}
        </Grid>
      </DialogTitle>
      <DialogContent dividers={divider}>{children}</DialogContent>
    </Dialog>
  );
}

FullscreenDialog.propTypes = {
  children: PropTypes.instanceOf(Object),
  direction: PropTypes.string,
  disableEscapeKeyDown: PropTypes.bool,
  disableOnClose: PropTypes.bool,
  divider: PropTypes.bool,
  fullScreen: PropTypes.bool,
  maxWidth: PropTypes.string,
  open: PropTypes.bool,
  scroll: PropTypes.string,
  setOpen: PropTypes.func.isRequired,
  showCloseButton: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]), 
};

FullscreenDialog.defaultProps = {
  children: '',
  direction: 'up',
  disableEscapeKeyDown: false,
  disableOnClose: false,
  divider: true,
  fullScreen: false,
  maxWidth: 'md',
  open: false,
  scroll: 'paper',
  showCloseButton: true,
  title: '',
};

export default FullscreenDialog;
