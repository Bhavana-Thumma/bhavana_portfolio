import {React, useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Project1 from '../Projects/Project1';
/**
* @author
* @function Work
**/

const Work = (props) => {
    
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [show6, setShow6] = useState(false);
    const [show7, setShow7] = useState(false);
    
    function handleShow1() {setShow1(true);}
    function handleShow2() {setShow2(true);}
    function handleShow3() {setShow3(true);}
    function handleShow4() {setShow4(true);}
    function handleShow5() {setShow5(true);}
    function handleShow6() {setShow6(true);}
    function handleShow7() {setShow7(true);}
  return(
    <div>
        <section class="work section" id="work">
            <h2 class="section-title">Work</h2>

            <div class="work__container bd-grid">
                <div class="work__img" >
                    <img src="work1.jpg" alt="" onClick={() => handleShow1()} />
                </div>
                <div class="work__img" >
                    <img src="work2.jpg" alt="" onClick={() => handleShow2()}/>
                </div>
                <div class="work__img">
                    <img src="work3.gif"  alt="" onClick={() => handleShow3()}/>
                </div>
                <div class="work__img">
                    <img src="work4.jpg"  alt="" onClick={() => handleShow4()}/>
                </div>
                <div class="work__img">
                    <img src="work5.jpg" alt="" onClick={() => handleShow5()}/>
                </div>
                <div class="work__img">
                    <img src="work6.gif"  alt="" onClick={() => handleShow6()}/>
                </div>
                <div class="work__img">
                    <img src="work7.jpg"  alt="" onClick={() => handleShow7()}/>
                </div>
            </div>
        </section>       
   
        <Modal show={show1}   scrollable={true} size={'xl'} onHide={() => setShow1(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Multiverz</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Project1/>
          </Modal.Body>
        </Modal>

        <Modal show={show2}   scrollable={true} size={'xl'} onHide={() => setShow2(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Connect 4</Modal.Title>
          </Modal.Header>
          <Modal.Body>Modal body 2            
          </Modal.Body>
        </Modal>

        <Modal show={show3}   scrollable={true} size={'xl'} onHide={() => setShow3(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Quiz Application</Modal.Title>
          </Modal.Header>
          <Modal.Body>Modal body 3
          </Modal.Body>
        </Modal>

        <Modal show={show4}   scrollable={true} size={'xl'} onHide={() => setShow4(false)}>
          <Modal.Header closeButton>
            <Modal.Title>ToDo List</Modal.Title>
          </Modal.Header>
          <Modal.Body>Modal body 4
          </Modal.Body>
        </Modal>

        <Modal show={show5}   scrollable={true} size={'xl'} onHide={() => setShow5(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Banking Application</Modal.Title>
          </Modal.Header>
          <Modal.Body>Modal body 5
          </Modal.Body>
        </Modal>

        <Modal show={show6}   scrollable={true} size={'xl'} onHide={() => setShow6(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Conways Game of life</Modal.Title>
          </Modal.Header>
          <Modal.Body>Modal body 6
          </Modal.Body>
        </Modal>

        <Modal show={show7}   scrollable={true} size={'xl'} onHide={() => setShow7(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Mariah Vs Rihanna</Modal.Title>
          </Modal.Header>
          <Modal.Body>Modal body 7
          </Modal.Body>
        </Modal>

    </div>
   )

 }

export default Work;