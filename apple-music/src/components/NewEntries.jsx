import { useState, useEffect } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { FaChevronRight } from 'react-icons/fa';

const NewEntries = function () {
  const [newEntries, setNewEntries] = useState([]);

  function fetchNewEntries() {
    fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=the%20devil%20wears%20prada')
      .then((r) => {
        if (r.ok) {
          return r.json();
        } else {
          throw new Error('Errore nel recupero libri stock');
        }
      })
      .then((songs) => {
        console.log(songs.data);
        setNewEntries(songs.data);
        console.log(newEntries);
      })
      .catch((err) => {
        console.log('Errore: ', err);
      });
  }

  useEffect(() => {
      fetchNewEntries();
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(screen.width);

  const [maxSongs, setMaxSongs] = useState(null)

  window.addEventListener("resize", function(){
  console.log(screen.width)
  if(screen.width > 994){ 
          setMaxSongs(10)
      } else {
          setMaxSongs(6)
      }})
  
//   useEffect(() => {
//       if(screen.width > 994){ 
//           setMaxSongs(10)
//       } else {
//           setMaxSongs(6)
//       }}, []);

  return (
    <>
      <h4 className="text-light">
        {' '}
        Nuove uscite <FaChevronRight className="fs-5 align-middle" />
      </h4>
      <Row className="flex-wrap">
        {newEntries.map((song, index) => {


            if (index < maxSongs) {
          return (
            <Col xs={4} className="new-entries flex-grow-1 p-0 m-0" key={index} >
              <Card className="border border-0 bg-transparent text-light">
                <Card.Body>
                  <Card.Img
                    className="round rounded-3 text-info"
                    src={song.album.cover_medium}
                  />
                  <Card.Text className="fs-6 text-info fw-semibold m-0">{song.title}</Card.Text>
                  <Card.Text className="fs-6 text-info-emphasis fw-semibold">{song.artist.name}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );}
        })}
      </Row>
    </>
  );
};

export default NewEntries;
