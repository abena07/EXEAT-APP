import React from 'react'
import styled  from 'styled-components'

function Footer() {
    return (
    <FooterContainer className="main-footer">
    <div className="footer-middle">
    <div className="container">
    <div className="row">
       {/* column 1 */}
      <div className= "col-md-3 col-sm-6">
     <h4 >Contact </h4>
     <ul className="list-unstyled">
         <li ><a href ='/'>HeadMaster</a></li>
         <li><a href='/' >Ass HeadMaster</a></li>
         <li> <a href='/' >House Master</a></li>
        <li><a href='/'>Ass House Master</a></li>
      </ul>
      </div>

      {/* column 2*/}
      <div className= "col-md-3 col-sm-6">
     <h4 >Emergency </h4>
     <ul className="list-unstyled">
         <li><a href='/'>HeadMaster</a></li>
         <li><a href='/'> Ass HeadMaster</a></li>
         <li> <a href='/'>House Master</a></li>
        <li><a href='/'>Ass House Master</a></li>
     </ul>
      </div>

      {/* column  3*/}
      <div className="col-md-3 col-sm-6">
     <h4 >Special Needs </h4>
     <ul className="list-unstyled">
         <li><a href='/'>HeadMaster</a></li>
         <li><a href='/'> Ass HeadMaster</a></li>
         <li><a href='/'> House Master</a></li>
        <li><a href='/'>Ass House Master</a></li>
     </ul>
      </div>

      {/* column 4 */}
      <div className="col-md-3 col-sm-6">
     <h4 >Mid-Terms</h4>
     <ul className="list-unstyled">
         <li><a href='/'>HeadMaster</a></li>
         <li> <a href='/'>Ass HeadMaster</a></li>
         <li><a href='/'> House Master</a></li>
        <li><a href='/'>Ass House Master</a></li>
     </ul>
      </div>
     </div>

     {/* Footer Bottom */}
     <div className="footer-bottom">
     <p className="text-xs-center">
     &copy;{new Date().getFullYear()} Exeat Booking App-All Rights Reserved
     </p>


     </div>
    </div>
    </div>
    </FooterContainer>

    )
}

export default Footer
const FooterContainer=styled.footer`
.footer-middle{
    background:var(--mainDark);
    padding-top:3rem;
    color:var(--mainWhite);
}

.footer-bottom{
    padding-top: 3rem;
    padding-bottom: 2rem;
}

ul li a {
    color:var(--mainGrey);


}

ul li a: hover{
    color:(--mainLightGrey);

}

`;

