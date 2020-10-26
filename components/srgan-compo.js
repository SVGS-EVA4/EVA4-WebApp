import React, { useState } from "react";
import axios from 'axios';
import {SRGAN_ENDPOINT } from "../api_endpoints";
import {
    Container,
    Form,
    Row,
    Col,
    Button,
    Spinner,
    Toast,
    ProgressBar,
    Image,
    Alert,
    Card
} from "react-bootstrap";
const SrganCompo = () => {

    axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
    axios.defaults.headers.post["Accept"] = "application/json";
     const [file, setFile] = useState("");
     const [fileName, setFileName] = useState("Please select an image");
  
     const [showLoading, setShowLoading] = useState(false);
     const [uploadPercentage, setUploadPercentage] = useState(0);
     const [results, setResults] = useState({});
     const [outputsize, setoutputsize] = useState([]);
 
     const estimate = async () => {
         try {
             
             setShowLoading(true);
             const formData = new FormData();
             formData.append("file", file);
 
             // request recognisation from end-point
             const results = await axios.post(
                 `${SRGAN_ENDPOINT}`,
                 formData,
                 {
                     crossDomain: true,
                 }
             );
          
             setResults(results.data);
             setoutputsize(results.data.size.replace(/[() ]/g, '').split(','))
         } catch (e) {
     
             setResults({});
             alert(JSON.stringify(e));
             console.log(e)
             
             
         }
 
         // we are done, now turn off the loading and progress bar
         setShowLoading(false);
 
         // reset the states
         setTimeout(() => {
             setUploadPercentage(0);
         }, 5000);
     };
 
     const onFileSelect = (e) => {
         if (e.target.files.length >= 1) {
             setFile(e.target.files[0]);
             setFileName(e.target.files[0].name);
         } else {
             setFileName("Please select an Image");
         }
     };
 
     return (
       <>
      
         <Container>
   
         <h1 style = {{textAlign:"center"}}>Super Resolution Gan</h1>
         <br/>
         <div style = {{textAlign:'center'}} >
               <p><strong>This is a Super Resolution Generative Adversarial Network (SRGAN). <br/>It can convert low resolution flying drone images to high quality resolution images(4x)</strong></p>
               
        
         </div>
         <br/>
         {/* <Row className="justify-content-md-center">
                     <Col md={4} lg={4} className="mx-auto">
                  
                         {!(Object.entries(results).length === 0 && results.constructor === Object) && (
                         
                         <Alert style = {{textAlign:"center"}}  variant='dark'>{results['Status']==0 ? <strong>{results['Message']}</strong> : <strong>It is  {results['Predicted_Class']}</strong>}</Alert>
                         )}
                     </Col>
           </Row> */}
           <Row  className="justify-content-md-center">
                     <Button
                         variant="dark"
                         className="mt-5"
                         hidden={!showLoading}
                         disabled
                         block
                     >
                         <Spinner
                             as="span"
                             animation="grow"
                             size="sm"
                             role="status"
                             aria-hidden="true"
                         />{" "}
                         Loading...
                     </Button>
            </Row>
           <Row className="justify-content-md-center" >
           
             <Col xs = {8}>
              <Form>
                
                         <Form.Group as={Row}>
                             <Form.Label>
                                 <h5>
                                     <strong>Select Image</strong>
                                 </h5>
                             </Form.Label>
 
                             <Form.File custom>
                                 <Form.File.Input
                                     onChange={onFileSelect}
                                     accept=".jpg,.png,.jpeg"
                                 />
                                 <Form.File.Label data-browse="Browse">
                                     {fileName}
                                 </Form.File.Label>
                             </Form.File>
                         </Form.Group>
                    
              
                 <Row>
                     <Col  md = {4} className="mx-auto" style = {{textAlign:'center'}}>
                         {file.name && (
                             <Card>
                             <Image
                                 src={URL.createObjectURL(file)}
                                 style={{ width: "100%" }}
                                 className="mx-auto"
                                 rounded
                                 fluid
                             />
                             <p>
                                 Low Resolution Input Image<br/>
                                 {outputsize.length > 0 && (
                                 <>
                                 Input size : {parseInt(outputsize[0])/4 + '*' + parseInt(outputsize[1])/4
                                 }
                                 </>
                                 
                               )}
                             </p>
                             </Card>
                         )}
                     </Col>
                     <Col  md = {8} className="mx-auto" style = {{textAlign:'center'}}>
                         {results.data && (
                             <Card>
                             <img
                             src={`data:image/jpeg;base64,${results.data}`}
                                 style={{ width: '100%'}}
                                 className="mx-auto "
                                 rounded
                                 fluid
                             />
                             <p>
                                 High Resolution output Image<br/>
                                 Output size : {outputsize[0] + '*' + outputsize[1]}
                             </p>
                             </Card>
                         )}
                     </Col>
                 </Row>
                 <br/>
                 <Row>
                     <Button
                         variant="dark"
                         className="mx-auto shadow-lg"
                         size="lg"
                         onClick={() => estimate()}
                         disabled={file.name === undefined}
                     >
                         Upscale
                     </Button>
                 </Row>
                 
                 
                
             </Form>
             </Col>
             </Row>
           
         </Container>
         </>
     );
  
     
   
   
 
 

}
   
  export default SrganCompo