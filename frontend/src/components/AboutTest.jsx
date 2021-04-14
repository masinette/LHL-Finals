
import React, {useContext} from "react";
import { UserContext } from '../UserContext'

function AboutTest() {
  const {user, setUser} = useContext(UserContext)

  return (
    <div className="about">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="https://image.freepik.com/free-photo/smiling-young-adult-senior-mother-holding-cup-coffee-looking-each-other_23-2148041350.jpg"
              alt=""
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">About Us</h1> 
            <p>
                LivTogether started as solution to the current housing crisis in Canada, but has grown into a community initiative.
                We match seniors looking for companionship and a little extra help, with youth looking to rent a safe space and foster new friendships. 
                Our goal is to help senior citizens and young adults to bond and form lasting relationships in our community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutTest;