import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReviews } from './redux/actions/reviewsactions';
import ReactStars from 'react-stars';

function Rates() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.reviews.reviews);
    useEffect(() => {
        dispatch(fetchReviews());
    }, [dispatch]);

    function getTopRatedComments(data) {
        // Sort the data by rating in descending order
        const sortedData = data.sort((a, b) => b.rating - a.rating);

        // Get the top 3 rated comments
        const topRatedComments = sortedData.slice(0, 3);

        return topRatedComments;
    }

    let filtred = getTopRatedComments(data);
    console.log('filter', filtred);
    console.log(data);
    return (
        <div>
            <h1 style={{ color: '#007E85', textAlign: 'center' }}>Leading Medicine</h1>
            <h3 style={{ color: '#5D5D5D', textAlign: 'center', fontSize: '15px', marginBottom: '4em' }}>
                Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan.
            </h3>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '20px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: '130px',
                    marginRight: '40px',
                    height: 'fit-content',
                }}
            >
                {filtred.map((item) => (
                    <div
                        style={{
                            width: '300px',
                            backgroundColor: '#FFFFFF',
                            border: '1px solid #ccc',
                            borderRadius: '10px',
                            overflow: 'hidden',
                            margin: '20px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        <div style={{ textAlign: 'center' }}>
                            <img
                                src={item.imageSrc}
                                alt=""
                                className="round-image"
                                style={{ width: '100px', height: '100px', borderRadius: '50%', marginTop: '20px', marginRight: '140px' }}
                            />
                        </div>
                        <div style={{ padding: '20px' }}>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginBottom: '10px',
                                }}
                            >
                                <h3 style={{ fontSize: '20px', color: '#007E85', marginRight: '30px' }}>{item.name}</h3>
                                <div style={{ whiteSpace: 'nowrap' }}>
                                    <ReactStars  count={item.rating} value={item.rating} size={20} color1="#CCCCCC" color2="#FFD700" edit={false}  />
                                </div>
                            </div>
                            <h2 style={{ fontSize: '20px', marginBottom: '10px', color: '#333333' }}>“{item.review}”</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Rates;
