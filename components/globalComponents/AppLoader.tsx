import { setLoader } from "@/redux/globleSlices/loaderSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";

let dispatchShowLoadingEventFn: any;
let dispatchHideLoadingEventFn: any;

function AppLoader() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatchShowLoadingEventFn = onShowLoading;
    dispatchHideLoadingEventFn = onHideLoading;
  }, []);

  const onShowLoading = () => {
    dispatch(setLoader({ isShow: true }));
  };
  const onHideLoading = () => {
    dispatch(setLoader({ isShow: false }));
  };
  const { isShow } = useAppSelector((state) => state.globalLoader);
  return (
    <>
      {isShow ? (
        <div
          style={{
            height: "100vh",
            width: "100vw",
            display: "grid",
            placeContent: "center",
            position: "absolute",
            background: "#ffffff99",
            zIndex: 4,
          }}
        >
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default AppLoader;

export function showLoading(isHidden?: boolean) {
  if (isHidden) {
    dispatchHideLoadingEventFn();
    return;
  }
  dispatchShowLoadingEventFn();
}
export function hideLoading() {
  dispatchHideLoadingEventFn();
}
