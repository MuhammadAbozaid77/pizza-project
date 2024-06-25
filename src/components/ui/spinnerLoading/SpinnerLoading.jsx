import style from "./SpinnerLoading.module.css";
export default function SpinnerLoading() {
  return (
    <>
      <span className={`${style.loader}`}></span>
    </>
  );
}
