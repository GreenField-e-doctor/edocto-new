import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { fetchReviews } from './redux/actions/reviewsactions';
import ReactStars from 'react-stars';

function Reviews() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.reviews.reviews);
    useEffect(() => {
        dispatch(fetchReviews());
    }, [dispatch]);// eslint-disable-line
    
    // const data = [
    //     {
    //         "imageSrc": "https://s3-alpha-sig.figma.com/img/0577/f0e9/b7fca2f32639871454da0de95f951709?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JNqy~MgzfTYiIFcizL-nr-Wr6ojSHe5uLBKQ1mvSOq71xqvn5SZa0JnKg4PqsxU3OyopZW3D797~muYI6V3nfsJusTlzfVJb7~dTmI3JTR43RFEFD-8LrRIhvSQnuMzD6Si7Z75gDgN6q6S8qNKoFbnbxloe-QIGIy-VmyUAgCDFfeMUlnO5olljOaKAYissbOtELqaFbwrJjoQfxwYmVnNjC7qKEQSmhyExt2VRnKeLEJiWE2e1IsdMJjW1U7PtWkXUACSEa9jIvKcy-AGsrUpT~0YqNYMkNQMNGYe5mWVyqSMox0-I4XfCjYOWKDhcF~neWYMkjQgy7tjmKgoaZg__",
    //         "name": "Dr. Sarah Johnson",
    //         "rating": 5,
    //         "review": "Excellent service! Dr. Johnson was very knowledgeable and provided clear explanations."
    //     },
    //     {
    //         "imageSrc": "https://s3-alpha-sig.figma.com/img/0577/f0e9/b7fca2f32639871454da0de95f951709?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JNqy~MgzfTYiIFcizL-nr-Wr6ojSHe5uLBKQ1mvSOq71xqvn5SZa0JnKg4PqsxU3OyopZW3D797~muYI6V3nfsJusTlzfVJb7~dTmI3JTR43RFEFD-8LrRIhvSQnuMzD6Si7Z75gDgN6q6S8qNKoFbnbxloe-QIGIy-VmyUAgCDFfeMUlnO5olljOaKAYissbOtELqaFbwrJjoQfxwYmVnNjC7qKEQSmhyExt2VRnKeLEJiWE2e1IsdMJjW1U7PtWkXUACSEa9jIvKcy-AGsrUpT~0YqNYMkNQMNGYe5mWVyqSMox0-I4XfCjYOWKDhcF~neWYMkjQgy7tjmKgoaZg__",
    //         "name": "John Doe",
    //         "rating": 3,
    //         "review": "Decent experience overall. Dr. Johnson provided adequate assistance."
    //     },
    //     {
    //         "imageSrc": "https://s3-alpha-sig.figma.com/img/0577/f0e9/b7fca2f32639871454da0de95f951709?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JNqy~MgzfTYiIFcizL-nr-Wr6ojSHe5uLBKQ1mvSOq71xqvn5SZa0JnKg4PqsxU3OyopZW3D797~muYI6V3nfsJusTlzfVJb7~dTmI3JTR43RFEFD-8LrRIhvSQnuMzD6Si7Z75gDgN6q6S8qNKoFbnbxloe-QIGIy-VmyUAgCDFfeMUlnO5olljOaKAYissbOtELqaFbwrJjoQfxwYmVnNjC7qKEQSmhyExt2VRnKeLEJiWE2e1IsdMJjW1U7PtWkXUACSEa9jIvKcy-AGsrUpT~0YqNYMkNQMNGYe5mWVyqSMox0-I4XfCjYOWKDhcF~neWYMkjQgy7tjmKgoaZg__",
    //         "name": "Emily Smith",
    //         "rating": 4,
    //         "review": "Dr. Johnson was quite helpful and provided good advice."
    //     },
    //     {
    //         "imageSrc": "https://s3-alpha-sig.figma.com/img/0577/f0e9/b7fca2f32639871454da0de95f951709?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JNqy~MgzfTYiIFcizL-nr-Wr6ojSHe5uLBKQ1mvSOq71xqvn5SZa0JnKg4PqsxU3OyopZW3D797~muYI6V3nfsJusTlzfVJb7~dTmI3JTR43RFEFD-8LrRIhvSQnuMzD6Si7Z75gDgN6q6S8qNKoFbnbxloe-QIGIy-VmyUAgCDFfeMUlnO5olljOaKAYissbOtELqaFbwrJjoQfxwYmVnNjC7qKEQSmhyExt2VRnKeLEJiWE2e1IsdMJjW1U7PtWkXUACSEa9jIvKcy-AGsrUpT~0YqNYMkNQMNGYe5mWVyqSMox0-I4XfCjYOWKDhcF~neWYMkjQgy7tjmKgoaZg__",
    //         "name": "David Brown",
    //         "rating": 5,
    //         "review": "I had a great experience with Dr. Johnson. Highly recommended!"
    //     },
    //     {
    //         "imageSrc": "https://s3-alpha-sig.figma.com/img/0577/f0e9/b7fca2f32639871454da0de95f951709?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JNqy~MgzfTYiIFcizL-nr-Wr6ojSHe5uLBKQ1mvSOq71xqvn5SZa0JnKg4PqsxU3OyopZW3D797~muYI6V3nfsJusTlzfVJb7~dTmI3JTR43RFEFD-8LrRIhvSQnuMzD6Si7Z75gDgN6q6S8qNKoFbnbxloe-QIGIy-VmyUAgCDFfeMUlnO5olljOaKAYissbOtELqaFbwrJjoQfxwYmVnNjC7qKEQSmhyExt2VRnKeLEJiWE2e1IsdMJjW1U7PtWkXUACSEa9jIvKcy-AGsrUpT~0YqNYMkNQMNGYe5mWVyqSMox0-I4XfCjYOWKDhcF~neWYMkjQgy7tjmKgoaZg__",
    //         "name": "Michelle Taylor",
    //         "rating": 4,
    //         "review": "I found Dr. Johnson to be very understanding and helpful."
    //     }
    // ];

    return (
        <div style={{ width: '80%', margin: '0 auto' }}>
            dd
            {console.log(data)}
            {data.map((item, index) => (
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
