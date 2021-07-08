import React from 'react';
import Image from 'next/image'

const QuickMessage = ({children}) => {
  return (
    <div className="flex flex-nowrap flex-row justify-items-start items-center space-x-3">
      <Image src="/images/Bolt.svg" alt="Bolt" width="36" height="36" />
      <p className="text-blue-800 font-semibold">{children}</p>
    </div>
  )
};

export default QuickMessage;
