import { Link } from "react-router-dom";
const Services=()=>{
    return(
        <>

      
         
      <div class="container-fluid">
     
        <h1 class="text-center mt-5 display-3 fw-bold"> <span class="theme-text">Our Services<br/></span> </h1>
        
        <hr class="mx-auto mb-5 w-25"></hr>
        <div class="row mb-5">
            <div class="col-12 col-sm-6 col-md-3 m-auto">
               
                <div class="card shadow ">
                    <img src="https://glenreceptions.com/wp-content/uploads/2020/10/Birthday.jpg" alt="" class="card-img-top"/>
                    <div class="card-body">
                        <h3 class="text-center">Birthday Party</h3>
                        <hr class="mx-auto w-75"></hr>
                        <p>
                        <div className="nav-item">
                          <Link className="btn btn-secondary me-6 d-grid gap-3 col-7 mx-auto"  aria-current="page" to="/bday">Know More</Link>
                        </div>
                        </p>
                    </div>
                </div>
             
            </div>
          
            <div class="col-12 col-sm-6 col-md-3 m-auto">
             
                <div class="card shadow">
                <img src="https://cdn.pixabay.com/photo/2018/01/09/22/51/roses-3072698_960_720.jpg" alt="" class="card-img-top"/>
                    <div class="card-body">
                        <h3 class="text-center">Wedding Anniversary </h3>
                        <hr class="mx-auto w-75"></hr>
                        <p>
                        <div className="nav-item">
                          <Link className="btn btn-secondary me-6 d-grid gap-3 col-7 mx-auto"  aria-current="page" to="/anniversary">know More</Link>
                        </div>
                        </p>
                    </div>
                </div>
              
            </div>
   
            <div class="col-12 col-sm-6 col-md-3 m-auto">
               
                <div class="card shadow">
                    <img src="https://media.istockphoto.com/photos/rocket-icon-launching-from-floor-startup-concepts-picture-id1133439305?b=1&k=20&m=1133439305&s=170667a&w=0&h=fqXVreaAY-vkoROGejHQiATdQIx5DgB94LqhN70uuyY=" alt="" class="card-img-top"/>
                    <div class="card-body">
                        <h3 class="text-center">Product Launch</h3>
                        <hr class="mx-auto w-75"></hr>
                        <p>
                        <div className="nav-item">
                          <Link className="btn btn-secondary me-6 d-grid gap-3 col-7 mx-auto"  aria-current="page" to="">know More</Link>
                        </div>
                        </p>
                    </div>
                </div>
              
            </div>

            <div class="row mb-5">

            <div class="col-12 col-sm-6 col-md-3 m-auto">
               
                <div class="card shadow mt-6 ">
                    <img src="https://media.istockphoto.com/id/1161944604/vector/golden-laurel-wreath-over-red-round-podium-with-steps-in-front-of-the-curtains-vector.jpg?s=612x612&w=0&k=20&c=ja24z7AfnpnIrPgSJE_53qcKbnVfMAnjdtEgcKomdcE=" alt="" class="card-img-top"/>
                    <div class="card-body">
                        <h3 class="text-center">Award Ceremony</h3>
                        <hr class="mx-auto w-75"></hr>
                        <p>
                        <div className="nav-item">
                          <Link className="btn btn-secondary me-6 d-grid gap-3 col-7 mx-auto"  aria-current="page" to="">know More</Link>
                        </div>
                        </p>
                    </div>
                </div>
             
            </div>
          
            <div class="col-12 col-sm-6 col-md-3 m-auto">
             
                <div class="card shadow mt-2">
    
                <img src="https://media.istockphoto.com/id/1135282422/photo/happy-outdoor-holi-festival-party-in-spring.jpg?s=612x612&w=0&k=20&c=d6ZrHTk25FKoA2JGlQLkmHsQWmnM6t3pUC6IWrw0fDs=" alt="" class="card-img-top"/>
                    <div class="card-body">
                        <h3 class="text-center">Holi</h3>
                        <hr class="mx-auto w-75"></hr>
                        <p>
                        <div className="nav-item">
                          <Link className="btn btn-secondary me-6 d-grid gap-3 col-7 mx-auto"  aria-current="page" to="">know More</Link>
                        </div>
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-6 col-md-3 m-auto">
             
             <div class="card shadow">
             <img src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" class="card-img-top"/>
                 <div class="card-body">
                     <h3 class="text-center">Concert </h3>
                     <hr class="mx-auto w-75"></hr>
                     <p>
                     <div className="nav-item">
                       <Link className="btn btn-secondary me-6 d-grid gap-3 col-7 mx-auto"  aria-current="page" to="/anniversary">know More</Link>
                     </div>
                     </p>
                 </div>
             </div>
           
         </div>
        </div>
          
         
        </div>
    </div>

   
        
       
   
     
        </>
    )
}
export default Services;