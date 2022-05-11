import medizen from "./components/imgs/medizen-logo.svg";
export default function Navigation({ data, isPlaying }) {
  return (
    <>
      <p>{data}</p>
      <img
        src={medizen}
        className={isPlaying ? "svg-logo-active" : "svg-logo-inactive"}
        alt="Medizen App Logo"
      />
    </>
  );
}
