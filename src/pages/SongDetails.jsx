import { useParams } from "react-router-dom";
import { DetailsHeader, Error, Loader } from "../components";
import { useGetSongDetailsQuery } from "../redux/services/shazamCore";
const SongDetails = () => {
  const { songid } = useParams();
  const { data: songData, isFetching: isFetchingSongDetails } =
    useGetSongDetailsQuery({ songid });
  if (isFetchingSongDetails) return <Loader title="Searching song details" />;
  return (
    <div flex flex-col>
      <DetailsHeader artisId="" songData={songData} />
      <div className="mb-10 mt-10">
        <h2 className="text-white text-3x1 font-bold">Lyric:</h2>
        <div className="mt-5">
          {songData?.sections[1].type === "LYRICS" ? (
            songData?.sections[1].text.map((line, i) => (
              <p className="text-gray-400 text-base my-1">{line}</p>
            ))
          ) : (
            <p className="text-gray-400 text-base my-1">
              Sorry, no lyrics found!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SongDetails;
