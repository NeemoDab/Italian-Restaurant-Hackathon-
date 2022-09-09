import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Box } from '@mui/system';

export default function Footer() {


    return (

        <div className="footer">
            <div className="footerLeftText">
            <p>Copyright &copy; Our Italian Ting </p>
            </div>
            <div className="footerRightIcons">
            <TwitterIcon/> <FacebookIcon/> <InstagramIcon/>
            </div>
            
        </div>
    )
}
