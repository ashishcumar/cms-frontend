import React, { useEffect } from "react";
import Alert from "@mui/material/Alert";
import { AlertColor, Grid } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { isShow, message, setAlert } from "@/redux/globleSlices/alertSlice";
import { ALERT_PROPS_TYPE } from "@/Interface/interface";


let dispatchAlertEventFn: any;
function AppAlert(): JSX.Element {
  const alertMessage = useAppSelector(message);
  const isVisible = useAppSelector(isShow);
  const [alertType, setAlertType] = React.useState<AlertColor>();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatchAlertEventFn = dispatchAlertEventInnerFn;
  }, []);
  
  const dispatchAlertEventInnerFn = (alertProps: ALERT_PROPS_TYPE) => {
    dispatch(
      setAlert({
        isShow: true,
        message: alertProps.message,
      })
    );
    setAlertType(alertProps.type);
    setTimeout(() => {
      dispatch(
        setAlert({
          isShow: false,
          message: "",
        })
      );
    }, 3000);
  };

  return (
    <>
      {isVisible && alertType && alertMessage && (
        <Grid
          className="fixedNav"
          style={{
            position: "fixed",
            top: 4,
            padding: 4,
            zIndex: 5,
            display: "flex",
            justifyContent: "flex-end",
            right: 8,
          }}
        >
          <Grid
            style={{
              borderRadius: 4,
            }}
          >
            <Alert severity={alertType}>{alertMessage}</Alert>
          </Grid>
        </Grid>
      )}
    </>
  );
}

export function alertShow(alertProps: ALERT_PROPS_TYPE) {
  dispatchAlertEventFn(alertProps);
}

export default AppAlert;
