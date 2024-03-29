import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Projectv2 = () =>{
    return(
            <div className='maincontainer m-5'>
                <div class="row row-cols-1 row-cols-md-3 g-4 m-5">
                        <div class="col">
                            <div class="card h-100 shadow p-3  rounded bg-secondary text-white">
                            <img src={require('./image14.png')} class="card-img-top" alt="project1" />
                            <div class="card-body">
                                <h5 class="card-title">Project Title1</h5>
                                <p class="card-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
                                                {/* <!-- Button trigger modal --> */}
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#projectmodal1">
                                See More...
                                </button>
                            </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card h-100 shadow p-3  rounded">
                            <img src={require('./image16.png')} class="card-img-top" alt="project2"/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a short card.</p>
                            </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card h-100">
                            <img src={require('./image17.png')} class="card-img-top" alt="project3"/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                            </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card h-100">
                            <img src={require('./image15.png')} class="card-img-top" alt="project4"/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            </div>
                        </div>
                
                </div>
                


               {/* modal for project1 */}
                <div class="modal fade" id="projectmodal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Project title1</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, 
                    making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more 
                    obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered 
                    the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) 
                    by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 
                    "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
                </div>
        
            </div>
    );
}

export default Projectv2;
