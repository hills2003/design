import React from 'react';
import "./App.css";
import one from "./images/one.jpg";
import two from "./images/two.jpg";
import three from "./images/three.jpg";
import four from "./images/four.jpg";
import {Grid, GridList,GridListTile} from "@material-ui/core";
function Hello(props) {
    const list =[
        {
            img:one,
            text:'Lorem ipsum dolor sit amet consectetur adipiscing elit Pellentesque eleifend lacinia felis id pharetra purus tempor ultrices.'
            
        },
        
        {
            img:two,
            text:'Lorem ipsum dolor sit amet consectetur adipiscing elit Pellentesque eleifend lacinia felis, id pharetra purus tempor ultrices.'
        },
        {
            img:three,
            text:'Lorem ipsum dolor sit amet consectetur adipiscing elit Pellentesque eleifend lacinia felis, id pharetra purus tempor ultrices.'
        },
        {
            img:four,
            text:'Lorem ipsum dolor sit amet consectetur adipiscing elit Pellentesque eleifend lacinia felis, id pharetra purus tempor ultrices.'
        },

    ]
    return (
       <>
         <header className="head">
             <div className="header">
             <div className='div1'>
                <h4>Hillary</h4>
                <ul>
                <li>Home</li>
                <li>my work</li>
                <li>services</li>
                </ul>
             </div>
             </div>
             <div className="div2">
             <svg className='first' width="29" height="29" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path fill-rule="evenodd" clip-rule="evenodd" d="M0 19.6089C0 29.3036 7.04113 37.3652 16.25 39V24.9161H11.375V19.5H16.25V15.1661C16.25 10.2911 19.3911 7.58387 23.8339 7.58387C25.2411 7.58387 26.7589 7.8 28.1661 8.01612V13H25.675C23.2911 13 22.75 14.1911 22.75 15.7089V19.5H27.95L27.0839 24.9161H22.75V39C31.9589 37.3652 39 29.3053 39 19.6089C39 8.82375 30.225 0 19.5 0C8.775 0 0 8.82375 0 19.6089Z" fill="black"/>
            </svg>
            <svg width="29" className='second' height="29" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.625 4.61175C1.625 3.81962 1.93968 3.05993 2.4998 2.4998C3.05992 1.93968 3.81962 1.625 4.61175 1.625H34.385C34.7776 1.62436 35.1664 1.70116 35.5292 1.85099C35.8921 2.00082 36.2218 2.22074 36.4995 2.49818C36.7773 2.77561 36.9976 3.10509 37.1478 3.46777C37.298 3.83045 37.3752 4.21919 37.375 4.61175V34.385C37.3754 34.7776 37.2984 35.1665 37.1484 35.5294C36.9984 35.8922 36.7783 36.2219 36.5008 36.4996C36.2232 36.7773 35.8936 36.9976 35.5309 37.1478C35.1681 37.298 34.7793 37.3752 34.3866 37.375H4.61175C4.21939 37.375 3.83087 37.2977 3.4684 37.1475C3.10592 36.9973 2.77659 36.7771 2.49922 36.4996C2.22186 36.2221 2.00189 35.8927 1.85189 35.5301C1.70188 35.1675 1.62479 34.779 1.625 34.3866V4.61175ZM15.7755 15.2555H20.6164V17.6865C21.3151 16.289 23.1026 15.0313 25.7888 15.0313C30.9384 15.0313 32.1588 17.8149 32.1588 22.9223V32.383H26.9474V24.0858C26.9474 21.177 26.2486 19.5358 24.4741 19.5358C22.0123 19.5358 20.9885 21.3054 20.9885 24.0858V32.383H15.7755V15.2555ZM6.838 32.1604H12.051V15.0313H6.838V32.1588V32.1604ZM12.7969 9.4445C12.8067 9.89085 12.7273 10.3347 12.5633 10.7499C12.3993 11.1651 12.1539 11.5434 11.8418 11.8626C11.5296 12.1817 11.1568 12.4353 10.7452 12.6084C10.3337 12.7815 9.89177 12.8707 9.44531 12.8707C8.99886 12.8707 8.55691 12.7815 8.14539 12.6084C7.73387 12.4353 7.36107 12.1817 7.04887 11.8626C6.73668 11.5434 6.49138 11.1651 6.32736 10.7499C6.16335 10.3347 6.08392 9.89085 6.09375 9.4445C6.11304 8.56839 6.47463 7.73466 7.10107 7.12187C7.7275 6.50907 8.56899 6.16593 9.44531 6.16593C10.3216 6.16593 11.1631 6.50907 11.7896 7.12187C12.416 7.73466 12.7776 8.56839 12.7969 9.4445Z" fill="black"/>
            </svg>
            <svg width="29" height="29" className='third' viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5 0C8.72625 0 0 8.72625 0 19.5C0 28.1287 5.58187 35.4169 13.3331 38.0006C14.3081 38.1712 14.6737 37.5862 14.6737 37.0744C14.6737 36.6112 14.6494 35.0756 14.6494 33.4425C9.75 34.3444 8.4825 32.2481 8.0925 31.1512C7.87313 30.5906 6.9225 28.86 6.09375 28.3969C5.41125 28.0312 4.43625 27.1294 6.06938 27.105C7.605 27.0806 8.70187 28.5187 9.0675 29.1037C10.8225 32.0531 13.6256 31.2244 14.7469 30.7125C14.9175 29.445 15.4294 28.5919 15.99 28.1044C11.6512 27.6169 7.1175 25.935 7.1175 18.4762C7.1175 16.3556 7.87313 14.6006 9.11625 13.2356C8.92125 12.7481 8.23875 10.7494 9.31125 8.06812C9.31125 8.06812 10.9444 7.55625 14.6737 10.0669C16.2337 9.62812 17.8912 9.40875 19.5487 9.40875C21.2062 9.40875 22.8638 9.62812 24.4237 10.0669C28.1531 7.53187 29.7862 8.06812 29.7862 8.06812C30.8587 10.7494 30.1763 12.7481 29.9813 13.2356C31.2244 14.6006 31.98 16.3312 31.98 18.4762C31.98 25.9594 27.4219 27.6169 23.0831 28.1044C23.79 28.7137 24.3994 29.8837 24.3994 31.7119C24.3994 34.32 24.375 36.4162 24.375 37.0744C24.375 37.5862 24.7406 38.1956 25.7156 38.0006C29.5867 36.6937 32.9504 34.2057 35.3335 30.887C37.7165 27.5682 38.9988 23.5857 39 19.5C39 8.72625 30.2738 0 19.5 0Z" fill="black"/>
            </svg>
        
             </div>
             
         </header>
         <div className='pos'>
         <div className="section">
             <div className='h3'>
                 <h3>Beautifully crafted ui/ux web experiences</h3>
             </div>
             
        </div>
        <div className='glass'>
             <svg width="300" height="251" viewBox="0 0 416 421" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="141" width="275" height="239" rx="50" fill="#1E589B" fill-opacity="0.71"/>
                <rect x="57" y="137" width="263" height="221" rx="50" fill="#2BE2C1" fill-opacity="0.77"/>
                <rect y="222" width="257" height="199" rx="50" fill="#D64FD9" fill-opacity="0.74"/>
            </svg>

             </div>
        </div>
        <div>
             <div className="works">
                 <h4 className="some">some of my works</h4>
                 <img src={one} className='one'/>
             </div>
         </div>
         <div className='container'>
                 {list.map(maps=>{
                     return(
                         <>
                             <h4>{maps.text}</h4>
                             <img src={maps.img} className="img" alt='pictures' />
                        </>
                     );
                 })}

         </div>
         <div className='hire'>
             <h4>like what you see ...
                 hire me
             </h4>
         </div>
         <footer className="footer">
            <Grid container style={{marginLeft:'10px'}} spacing={2}>
                <Grid xs={6} item md={4} lg={3}>
                <div className="services">
                 <h5>our services</h5>
                 <p>we offer the best services</p>
                 </div>
                </Grid>
                <Grid item xs={6} md={4} lg={3}>
                <div className="experiences">
                 <h5>experiences</h5>
                 <p>we offer the best services</p>
                 </div>
                </Grid>
             <Grid xs={6} item md={4} lg={3}>
             <div className="services">
                 <h5>our services</h5>
                 <p>we offer the best services</p>
             </div>
             </Grid>
             <Grid xs={6} md={4} lg={3}>
             <div className="clients">
                 <h5>clients</h5>
                 <p>we offer the best services</p>
             </div>

             </Grid>
             <Grid item xs={6} md={4} lg={3}>
             <div className="team">
                 <h5>team</h5>
                 <p>we offer the best services</p>
            </div>
            
             </Grid>
             </Grid>
             <div className='copy'>
             <h4>copyright and privacy policy</h4>
             <div className="div3">
                    <a href="mailto:chillaryvictor@gmail.com"><svg width="29" height="29" className='third' viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 19.6089C0 29.3036 7.04113 37.3652 16.25 39V24.9161H11.375V19.5H16.25V15.1661C16.25 10.2911 19.3911 7.58387 23.8339 7.58387C25.2411 7.58387 26.7589 7.8 28.1661 8.01612V13H25.675C23.2911 13 22.75 14.1911 22.75 15.7089V19.5H27.95L27.0839 24.9161H22.75V39C31.9589 37.3652 39 29.3053 39 19.6089C39 8.82375 30.225 0 19.5 0C8.775 0 0 8.82375 0 19.6089Z" fill="black"/>
                    </svg>
                    </a>
                    <svg width="29" className='second' height="29" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.625 4.61175C1.625 3.81962 1.93968 3.05993 2.4998 2.4998C3.05992 1.93968 3.81962 1.625 4.61175 1.625H34.385C34.7776 1.62436 35.1664 1.70116 35.5292 1.85099C35.8921 2.00082 36.2218 2.22074 36.4995 2.49818C36.7773 2.77561 36.9976 3.10509 37.1478 3.46777C37.298 3.83045 37.3752 4.21919 37.375 4.61175V34.385C37.3754 34.7776 37.2984 35.1665 37.1484 35.5294C36.9984 35.8922 36.7783 36.2219 36.5008 36.4996C36.2232 36.7773 35.8936 36.9976 35.5309 37.1478C35.1681 37.298 34.7793 37.3752 34.3866 37.375H4.61175C4.21939 37.375 3.83087 37.2977 3.4684 37.1475C3.10592 36.9973 2.77659 36.7771 2.49922 36.4996C2.22186 36.2221 2.00189 35.8927 1.85189 35.5301C1.70188 35.1675 1.62479 34.779 1.625 34.3866V4.61175ZM15.7755 15.2555H20.6164V17.6865C21.3151 16.289 23.1026 15.0313 25.7888 15.0313C30.9384 15.0313 32.1588 17.8149 32.1588 22.9223V32.383H26.9474V24.0858C26.9474 21.177 26.2486 19.5358 24.4741 19.5358C22.0123 19.5358 20.9885 21.3054 20.9885 24.0858V32.383H15.7755V15.2555ZM6.838 32.1604H12.051V15.0313H6.838V32.1588V32.1604ZM12.7969 9.4445C12.8067 9.89085 12.7273 10.3347 12.5633 10.7499C12.3993 11.1651 12.1539 11.5434 11.8418 11.8626C11.5296 12.1817 11.1568 12.4353 10.7452 12.6084C10.3337 12.7815 9.89177 12.8707 9.44531 12.8707C8.99886 12.8707 8.55691 12.7815 8.14539 12.6084C7.73387 12.4353 7.36107 12.1817 7.04887 11.8626C6.73668 11.5434 6.49138 11.1651 6.32736 10.7499C6.16335 10.3347 6.08392 9.89085 6.09375 9.4445C6.11304 8.56839 6.47463 7.73466 7.10107 7.12187C7.7275 6.50907 8.56899 6.16593 9.44531 6.16593C10.3216 6.16593 11.1631 6.50907 11.7896 7.12187C12.416 7.73466 12.7776 8.56839 12.7969 9.4445Z" fill="black"/>
                    </svg>
                    <svg className='first' width="29" height="29" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5 0C8.72625 0 0 8.72625 0 19.5C0 28.1287 5.58187 35.4169 13.3331 38.0006C14.3081 38.1712 14.6737 37.5862 14.6737 37.0744C14.6737 36.6112 14.6494 35.0756 14.6494 33.4425C9.75 34.3444 8.4825 32.2481 8.0925 31.1512C7.87313 30.5906 6.9225 28.86 6.09375 28.3969C5.41125 28.0312 4.43625 27.1294 6.06938 27.105C7.605 27.0806 8.70187 28.5187 9.0675 29.1037C10.8225 32.0531 13.6256 31.2244 14.7469 30.7125C14.9175 29.445 15.4294 28.5919 15.99 28.1044C11.6512 27.6169 7.1175 25.935 7.1175 18.4762C7.1175 16.3556 7.87313 14.6006 9.11625 13.2356C8.92125 12.7481 8.23875 10.7494 9.31125 8.06812C9.31125 8.06812 10.9444 7.55625 14.6737 10.0669C16.2337 9.62812 17.8912 9.40875 19.5487 9.40875C21.2062 9.40875 22.8638 9.62812 24.4237 10.0669C28.1531 7.53187 29.7862 8.06812 29.7862 8.06812C30.8587 10.7494 30.1763 12.7481 29.9813 13.2356C31.2244 14.6006 31.98 16.3312 31.98 18.4762C31.98 25.9594 27.4219 27.6169 23.0831 28.1044C23.79 28.7137 24.3994 29.8837 24.3994 31.7119C24.3994 34.32 24.375 36.4162 24.375 37.0744C24.375 37.5862 24.7406 38.1956 25.7156 38.0006C29.5867 36.6937 32.9504 34.2057 35.3335 30.887C37.7165 27.5682 38.9988 23.5857 39 19.5C39 8.72625 30.2738 0 19.5 0Z" fill="black"/>
                    </svg>

             </div>
             </div>
         </footer>
                
       </>
    );
}

export default Hello;