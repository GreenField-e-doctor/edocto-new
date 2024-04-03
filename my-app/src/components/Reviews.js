import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { fetchReviews } from './redux/actions/reviewsactions';
import ReactStars from 'react-stars';

function Reviews() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.reviews.reviews);
    const userId =localStorage.getItem('userId'); 

    useEffect(() => {
        dispatch(fetchReviews());
        console.log(userId);
    }, [dispatch]);
    
    // const filteredData = data.filter(item => item.userId === userId);
    const filteredData = data;
    
    return (
        <div style={{ width: '80%', margin: '0 auto' }}>
        
            {console.log(filteredData)}
            {filteredData.map((item, index) => (
                <div key={index} style={{ marginBottom: '20px', border: '1px solid #ccc', borderRadius: '10px', padding: '20px', boxShadow: '0 2px 5px rgba(0,0,0,0.15)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        <img src={item.imageSrc} alt="Reviewer" style={{ width: '70px', height: '70px', borderRadius: '50%', marginRight: '20px', objectFit: 'cover' }} />
                        <div>
                            <h3 style={{ marginBottom: '5px', fontSize: '20px', color: '#333' }}>{item.name}</h3>
                            <ReactStars count={item.rating} value={item.rating} size={24} color1="#CCCCCC" color2="#FFD700" edit={false} />
                        </div>
                    </div>
                    <p style={{ fontSize: '16px', color: '#666' }}>{item.review}</p>
                </div>
            ))}
        </div>
    );
}

export default Reviews;
