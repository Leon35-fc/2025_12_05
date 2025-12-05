import { useState, useEffect } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { FaChevronRight } from 'react-icons/fa';

const NewEntries = function () {
  const [newEntries, setNewEntries] = useState([]);

  function fetchNewEntries() {
    fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=tropico')
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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    fetchNewEntries();
  }, []);

  return (
    <>
      <h4 className="text-light">
        {' '}
        Nuove uscite <FaChevronRight className="fs-5 align-middle" />
      </h4>
      <Row className="flex-wrap">
        {newEntries.map((song, index) => {
          return (
            <Col xs={4} className="p-0" key={index}>
              <Card className="border border-0 bg-transparent text-light">
                <Card.Body>
                  <Card.Img
                    className="round rounded-3 text-info"
                    src={song.album.cover_medium}
                  />
                  <Card.Text className="fs-6 text-info">{song.title}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default NewEntries;
