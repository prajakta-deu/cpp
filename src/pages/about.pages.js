
import { Link } from "react-router-dom";
const About=()=>{
    return(
        <>
   <div class="row row1">
    

    <div class="col">
    <img src="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/F6INOOMSRRL5XOOQDRPZUWPWBA.jpg" class="img-fluid" alt="..."/>
    </div>
    <div class="col col1">
    <div class="card about-body">
  <div class="card-body ">
  <h1>About Us</h1>
            <p class="text">
            Dream oraganizer’s is an event management company. We organize events such as birthday parties ,
             Holi , anniversary parties , award ceremony and product launch events.<br/>
        Our event management firms can handle a variety of specific event-related services, 
            which can range from few select services for clients with limited budget, to handling all creative,
             technical and logical aspect of the event. Our company fulfill all user requirements.<br/>            </p>
           <div className="skills">

           
            <div className="nav-item">
        <Link className="btn btn-secondary me-2"  aria-current="page" to="/know">know More</Link>
        </div>
        </div>
  </div>
</div>
    </div>
</div>
            
        </>
    )
}
export default About;