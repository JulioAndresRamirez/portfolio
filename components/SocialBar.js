import React from 'react';
import Link from 'next/link'
import Image from 'next/image'

const SocialBar = ({username, twitter, instagram, github, linkedin, codepen}) => {
  let brands = {
    twitter: typeof twitter === "string" ? `https://twitter.com/${twitter}` : twitter ? `https://twitter.com/${username.replace('@', '')}` : false,
    instagram: typeof instagram === "string" ? `https://www.instagram.com/${instagram}` : instagram ? `https://www.instagram.com/${username.replace('@', '')}` : false,
    github: typeof github === "string" ? `https://github.com/${github}` : github ? `https://github.com/${username.replace('@', '')}` : false,
    linkedin: typeof linkedin === "string" ? `https://linkedin.com/in/${linkedin}` : linkedin ? `https://linkedin.com/in/${username.replace('@', '')}` : false,
    codepen: typeof codepen === "string" ? `https://codepen.io/${codepen}` : codepen ? `https://codepen.io/${username.replace('@', '')}` : false,
  }

  return (
    <>
      <div className="flex flex-shrink">
        <div className="flex flex-nowrap flex-shrink items-center justify-items-center bg-black rounded-full">
          <p
            className="font-semibold text-sm text-white bg-gray-750 px-4 py-4 md:py-2 rounded-full">{username ? username : ''}</p>
          <div className="flex flex-nowrap space-x-3.5 px-4">
            {
              Object.keys(brands).map((keyValue, i) => {
                if (brands[keyValue]) {
                  return <Link href={`${brands[keyValue]}`} key={i}>
                    <a target="_blank" className="flex items-center">
                      <Image src={`/images/brands/${keyValue}-brands.svg`} width={20} height={20}/>
                    </a>
                  </Link>
                }
              })
            }
          </div>
        </div>
      </div>
    </>
  );
};

SocialBar.defaultProps = {
  username: null,
  twitter: false,
  instagram: false,
  facebook: false,
  github: false,
  linkedin: false,
  codepen: false
}

export default SocialBar;
