import React from "react";
import Header from "./Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle, faLink, } from '@fortawesome/free-solid-svg-icons';
import Footer from "./Footer";


const Rooms = () => {
   
    return (

        <div>
            <Header />
            <div className="vango">
                <div style={{top:90}}>SEARCH</div>
            </div>
            <div style={{backgroundColor:'black',height:40,}}>

            </div>
            <div class="containerRooms">
                <div class="row">
                    <div class="col-2 ">
                        <div className="room1">

                        </div>
                        <div>

                        </div>
                    </div>
                    <div class="col-6 containerRoom">
                        <div class="item item">1</div>
                        <div class="item item">2</div>
                        <div class="item item">3</div>
                        <div class="item item">4</div>
                    </div>
                   
                </div>
            </div>
            <Footer/>
        </div>
        
    );
};
export default Rooms;