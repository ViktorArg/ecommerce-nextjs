import Image from 'next/image'
import PropTypes from 'prop-types'

interface LogoProps {
    width: number;
    height: number;
}

const Logo = (props: LogoProps) => {
    const { width, height } = props;
    return (
        <img
            src={"./LAUMARYBABY-LOGO.png"}
            width={width}
            height={height}
            alt='logo'
            className='object-contain'
        />
    )
  }
  
//   Logo.propTypes = {
//     'width': Number,
//     'height': Number
//   }

export default Logo