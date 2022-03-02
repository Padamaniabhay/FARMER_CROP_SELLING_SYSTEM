import React from 'react';
import { AiFillStar } from "react-icons/ai"
import { Link } from "react-router-dom"
// import { useDispatch } from "react-redux";
// import { getImage } from '../Redux/Image/Image.action';



const CropCard = (props) => {
    //     const [image, setImage] = useState({
    //         images:""
    //     });

    //     const dispatch = useDispatch();


    //     useEffect(() => {
    //         props.image && dispatch(getImage(props.image)).then((data) => { setImage(data.payload.image) });
    //     }, [props.image]);

    // console.log({image});
    
    return <>

        <Link to={`/${props.Category}/${props._id}`} {...props} className="flex flex-col flex-wrap mx-8 w-1/4">
            <div className='w-full h-96 border-2 rounded-2xl hover:shadow-xl py-2 px-4 transitions duration-700 ease-in-out'>
                <div className='w-full h-60'>
                    <img
                        src={`http://localhost:4000/public/images/${props.image}`}
                        alt='crop'
                        className='w-full h-full'
                    />
                    <div>
                        <div className='flex flex-row justify-between'>
                            <h4 className='font-bold text-xl'>{props.name}</h4>
                            <div className='flex gap-1 items-center bg-green-600 text-white rounded-lg px-2 py-1'>4.5 <AiFillStar /></div>
                        </div>
                    </div>
                    <div className='text-lg font-semibold'>Price: RS.{props.price}</div>
                    <div className='text-lg font-normal'>Product Size: 20KG</div>
                    <div className='text-lg flex items-center gap-1'>Location:<div className='font-semibold'>{props.address}</div></div>
                </div>
            </div>
        </Link>
    </>;
};

export default CropCard;
