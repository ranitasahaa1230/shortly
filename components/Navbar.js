import Image from 'next/image';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <Image src='/assets/logo.svg' height={50} width={50}/>
                <a>Features</a>
                <a>Pricing</a>
                <a>Resources</a>

        </nav>
     );
}
 
export default Navbar;