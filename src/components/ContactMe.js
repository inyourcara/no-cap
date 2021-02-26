import React from 'react'
import '../index.css';
function ContactMe() {
    return (
        <div>
            <section className="contact-page-sec">
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <div className="contact-info">
          <div className="contact-info-item">
            <div className="contact-info-icon">
              <i className="fas fa-map-marked" />
            </div>
            <div className="contact-info-text">
              <h2>address</h2>
              <span>El Monte CA </span> 
              <span>91732</span> 
            </div>
          </div>            
        </div>          
      </div>          
      <div className="col-md-4">
        <div className="contact-info">
          <div className="contact-info-item">
            <div className="contact-info-icon">
              <i className="fas fa-envelope" />
            </div>
            <div className="contact-info-text">
              <h2>E-mail</h2>
              <span>fernand0e88capitalv.com</span> 
              <span>fernand0388@yahoo.com</span>
            </div>
          </div>            
        </div>                
      </div>                
            
    </div>
    <div className="row">
      <div className="col-md-8">
        <div className="contact-page-form" method="post">
          <h2>Get in Touch</h2> 
          <form action="contact-mail.php" method="post">
            <div className="row">
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="single-input-field">
                  <input type="text" placeholder="Your Name" name="name" />
                </div>
              </div>  
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="single-input-field">
                  <input type="email" placeholder="E-mail" name="email" required />
                </div>
              </div>                              
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="single-input-field">
                  <input type="text" placeholder="Phone Number" name="phone" />
                </div>
              </div>  
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="single-input-field">
                  <input type="text" placeholder="Subject" name="subject" />
                </div>
              </div>                
              <div className="col-md-12 message-input">
                <div className="single-input-field">
                  <textarea placeholder="Write Your Message" name="message" defaultValue={""} />
                </div>
              </div>                                                
              <div className="single-input-fieldsbtn">
                <input type="submit" defaultValue="Send Now" />
              </div>                          
            </div>
          </form>   
        </div>      
      </div>
      <div className="col-md-4">        
        <div className="contact-page-map">
        <iframe  id="gmap_canvas" src="https://maps.google.com/maps?q=el%20monte%20ca&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no"  width="100%" height={450} frameBorder={0} style={{"border":"0"}} allowFullScreen ></iframe>
        </div>          
      </div>        
    </div>
  </div>
</section>
        </div>
    )
}

export default ContactMe
