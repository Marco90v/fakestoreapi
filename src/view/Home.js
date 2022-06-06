import img1 from '../assets/slide-01.jpg';
import img2 from '../assets/product-08.jpg';
import Product from '../components/Product';

const Home = () => {
    // console.log('Home');

    return (
        <>
            <div className='slide'>
            <picture>
                <source media="(max-width: 999px)" srcSet={img2} />
                <source media="(min-width: 1000px)" srcSet={img1} />
                <img src={img1} alt="" />
            </picture>
            </div>
            <Product />
        </>
    );
}

export default Home;