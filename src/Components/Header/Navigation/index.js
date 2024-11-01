import { IoIosMenu } from "react-icons/io";
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { GiClothes } from "react-icons/gi";


const Navigation = () => {
  return (
    <>
      <nav>
        <div className="container">
          <div className="row">
            <div className="col-sm-2 navPart1">
              <Button className="allCatTab align-items-center">
                <span className="icon1 me-2"><IoIosMenu /></span>
                <span className="text">ALL CATEGORIES</span>
                <span className="icon2 ms-2"><FaAngleDown /></span>
              </Button>
            </div>
            <div className="col-sm-10 navPart2 d-flex align-items-center">
                <ul className="list list-inline ms-auto">
                    <li className="list list-inline-item"><Link to='/'><Button><IoHomeOutline />&nbsp; Home</Button></Link></li>
                    <li className="list list-inline-item"><Link to='/'><Button><GiClothes /> &nbsp; Fashion</Button></Link></li>
                    <li className="list list-inline-item"><Link to='/'><Button>Electronics</Button></Link></li>
                    <li className="list list-inline-item"><Link to='/'><Button>Bakery</Button></Link></li>
                    <li className="list list-inline-item"><Link to='/'><Button>Grocery</Button></Link></li>
                    <li className="list list-inline-item"><Link to='/'><Button>Mobile</Button></Link></li>
                    <li className="list list-inline-item"><Link to='/'><Button>Blog</Button></Link></li>
                    <li className="list list-inline-item"><Link to='/'><Button>Contact Us</Button></Link></li>
                </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
