const VideoTitle = ({ Title, Description }) => {
  return (
    <div className="absolute px-24 w-screen aspect-video text-white pt-[20%] bg-gradient-to-b from-black">
      <h1 className="text-3xl font-bold">{Title}</h1>
      <p className="w-2/6 text-sm">{Description}</p>
      <div className="mt-4">
        <button className="bg-white text-black p-2 pl-4 pr-4">Play</button>
        <button className="bg-black text-white p-2 pl-4 pr-4 ml-2 opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
