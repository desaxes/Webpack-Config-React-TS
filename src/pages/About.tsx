import img1 from '@/assets/logo.png'
import img2 from '@/assets/no-image.jpg'
import Img from '@/assets/logo.svg'

const About = () => {
    return (
        <>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <Img width={500} height={500}/>
        </>
    )
}
export default About;