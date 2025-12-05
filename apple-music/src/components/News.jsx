import NewEntries from "./NewEntries"
import NewRadioStations from "./NewRadioStations"
import NewStationEpisodes from "./NewStationEpisodes"
import Other from "./Other"


const News = function() {
    return(
        <>
            <h1 className="text-white fw-semibold display-2 ">Novità</h1>
            <hr />
            <NewRadioStations/>
            <NewStationEpisodes/>
            <NewEntries/>
            <Other/>
        </>
    )
}

export default News