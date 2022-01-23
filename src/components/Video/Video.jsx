const Video = ({ list }) => {
  return (
    <iframe
      title="Video Player"
      id="player"
      type="text/html"
      width="100%"
      height="100%"
      src={'https://www.youtube.com/embed/?enablejsapi=1&playlist=' + list + '&playsinline=1'}
      frameBorder="0"
      allowFullScreen
    ></iframe>
  );
};
export default Video;
