import React, {FunctionComponent} from 'react'

interface Props{
    Icon: React.ElementType;
    title: string;
    subtitle: string;
}

const OfferCard : FunctionComponent<Props> = ({ Icon, title, subtitle }) => {
  return (
    <div className='w-full shadow-cardShadow flex flex-col items-center justify-center gap-10'>
        {Icon && <Icon className="text-designColor text-[75px]" />}
        <h1 className='text-2x1 font-semibold text-gray-100 uppercase tracking-[10px]'>
            {title}
        </h1>
        <p className='text-2x1 text-textColor px-10 text-center leading-[40px]'>
            {subtitle}
        </p>
    </div>
  )
}

export default OfferCard
