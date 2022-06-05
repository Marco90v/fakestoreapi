import img1 from '../assets/slide-01.jpg';
import img2 from '../assets/product-08.jpg';
import Product from '../components/Product';

const Home = () => {
    return (
        <>
            <div className='slide'>
            <picture>
                <source media="(max-width: 999px)" srcset={img2} />
                <source media="(min-width: 1000px)" srcset={img1} />
                <img src={img1} alt="" />
            </picture>
            </div>
            <Product />
        </>
    );
}

export default Home;