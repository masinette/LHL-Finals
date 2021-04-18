import { CardDeck, Card, Button, Col, Row, Container, Badge } from 'react-bootstrap';
import { React, useEffect, useState, useContext }  from 'react';
import { useHistory } from 'react-router-dom';
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import './RoommatesItem.scss';
import { UserContext } from '../../UserContext';
import axios from 'axios';

export default function RoommatesItem(props) {
  const history = useHistory();
  const {user, setUser} = useContext(UserContext)
  const [commonInterests, setCommonInterests] = useState([]);
  console.log("PROPS in item", props)

  const redirect = (id) => {
    console.log("Which id are you getting?", id)
    //history.push(`/about`)
    history.push(`/search/roommates/${id}`)
  }

  const findCommonInterests = (user1, user2) => {
    const interestsUser1 = user1.map(value => value.name);
    const interestsUser2 = user2.map(value => value.name);
    // const interestsUser1 = Object.values(user1);
    // const interestsUser2 = Object.values(user2);
    // const interestsInCommon = [];
    // for (const int of interestsUser1) {
    //   console.log("INDEX OF", int, interestsUser2)
    //   if(interestsUser2.indexOf(int)){
    //     interestsInCommon.push(interestsUser2[interestsUser2.indexOf(int)])

    //   }
    // }
    const interestsInCommon = interestsUser1.filter(e => interestsUser2.indexOf(e) !== -1)
    console.log("int user1",  interestsUser1, )
    console.log("int user2", interestsUser2)
    console.log("COMMON?", interestsInCommon)
    return interestsInCommon
  }

  useEffect(() => {
    const urlInterestsUserLogged = `/api/user_interests/${user.id}`
    const urlInterestsSearchedUser = `/api/user_interests/${props.id}`
    Promise.all([
      axios({
        method: 'GET',
        url: urlInterestsUserLogged
      }),
      axios({
        method: 'GET',
        url: urlInterestsSearchedUser
      })
    ])
      .then((
        data
        ) => {
        console.log("USERS INTERESTs",data);

        //console.log("USERS LIST un moment donne?", usersList, loading)
        // setLoading(false);
        setCommonInterests(findCommonInterests(data[0].data, data[1].data))
        // setUser1Interests(data[1].data)
        // setUser2Interests(data[2].data)
        
        })
        .then(() => {
          //setLoading(false);

        })
        .catch((err) => console.log(err));
  }, []);

  const interestsList = []
  return (
    <Container>
      <Container fluid className="oneCard" onClick={() => redirect(props.id)}>
        <Row > 
         {/*  <Col >  */}
            <Card className="text-center">
              <Card.Header>{props.name}</Card.Header>
              <Card.Body>
                <div className="roommatesSomethingAll">
                  <Image cloudName="Ds3bokefg"  publicId={`users/${props?.id}/u${props?.id}_p1.jpg`} className="d-block w-100" className="img">
                    <Transformation width="200" height="200" crop="fill"/>
                  </Image>
                  
                  <div className="roommatesSomethingNoPicture">
                    <Card.Title onClick={() => redirect(props.id)}>{/* {props.name} */}</Card.Title>
                    <div>
                    <Card.Text className="rmaText">
                      {props.description}
                    </Card.Text>
                    </div>
                    <div className="rmaInterests center bottom">
                      <div  className="rmaInterestsText">
                        <Card.Text className="rmaCommonInterestsText">
                          Common interests with {props.firstName}:
                        </Card.Text>
                      </div>
                      <div >
                        <Card.Text >
                          {commonInterests.map((i, index) => {
                            return (
                           
                                <Badge pill variant="info" key={index} className="rmaPill" >
                                {i}
                                </Badge>
                          
                            )
                          })}
                        </Card.Text>
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Body>
              <Card.Footer className="text-muted">Looking for a place in: {props.city}</Card.Footer>
            </Card>
       {/*    </Col> */}
        </Row>
      </Container>
    </Container>
  )
}