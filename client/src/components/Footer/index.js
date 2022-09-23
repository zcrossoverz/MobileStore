import React from 'react'
import Style from "./Footer.module.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
  return (
    <div className={Style.container}>
        <div className={Style.icons}>
            <TwitterIcon className={Style.icon} />
            <InstagramIcon className={Style.icon} />
            <FacebookIcon className={Style.icon} />
            <YouTubeIcon className={Style.icon} />
        </div>
        <div>
            <ul className={Style.right_contents}>
                <li className={Style.list_urls}>Privacy</li>
                <li className={Style.list_urls}>MS Commitment to Privacy</li>
                <li className={Style.list_urls}>Sale Terms</li>
                <li className={Style.list_urls}>Terms of Service</li>
                <li className={Style.list_urls}>Careers</li>
            </ul>
        </div>
    </div>
  )
}
