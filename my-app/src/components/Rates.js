import React from 'react';
import ReactStars from 'react-stars';

function Rates() {
    const data = [
        {
            "imageSrc": "https://s3-alpha-sig.figma.com/img/0577/f0e9/b7fca2f32639871454da0de95f951709?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JNqy~MgzfTYiIFcizL-nr-Wr6ojSHe5uLBKQ1mvSOq71xqvn5SZa0JnKg4PqsxU3OyopZW3D797~muYI6V3nfsJusTlzfVJb7~dTmI3JTR43RFEFD-8LrRIhvSQnuMzD6Si7Z75gDgN6q6S8qNKoFbnbxloe-QIGIy-VmyUAgCDFfeMUlnO5olljOaKAYissbOtELqaFbwrJjoQfxwYmVnNjC7qKEQSmhyExt2VRnKeLEJiWE2e1IsdMJjW1U7PtWkXUACSEa9jIvKcy-AGsrUpT~0YqNYMkNQMNGYe5mWVyqSMox0-I4XfCjYOWKDhcF~neWYMkjQgy7tjmKgoaZg__",
            "name": "John Doe",
            "rating": 4,
            "review": "Decent experience overall. Dr. Johnson provided adequate assistance."
        },
        {
            "imageSrc": "https://s3-alpha-sig.figma.com/img/0577/f0e9/b7fca2f32639871454da0de95f951709?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JNqy~MgzfTYiIFcizL-nr-Wr6ojSHe5uLBKQ1mvSOq71xqvn5SZa0JnKg4PqsxU3OyopZW3D797~muYI6V3nfsJusTlzfVJb7~dTmI3JTR43RFEFD-8LrRIhvSQnuMzD6Si7Z75gDgN6q6S8qNKoFbnbxloe-QIGIy-VmyUAgCDFfeMUlnO5olljOaKAYissbOtELqaFbwrJjoQfxwYmVnNjC7qKEQSmhyExt2VRnKeLEJiWE2e1IsdMJjW1U7PtWkXUACSEa9jIvKcy-AGsrUpT~0YqNYMkNQMNGYe5mWVyqSMox0-I4XfCjYOWKDhcF~neWYMkjQgy7tjmKgoaZg__",
            "name": "John Doe",
            "rating": 3,
            "review": "Decent experience overall. Dr. Johnson provided adequate assistance."
        },
        {
            "imageSrc": "https://s3-alpha-sig.figma.com/img/0577/f0e9/b7fca2f32639871454da0de95f951709?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JNqy~MgzfTYiIFcizL-nr-Wr6ojSHe5uLBKQ1mvSOq71xqvn5SZa0JnKg4PqsxU3OyopZW3D797~muYI6V3nfsJusTlzfVJb7~dTmI3JTR43RFEFD-8LrRIhvSQnuMzD6Si7Z75gDgN6q6S8qNKoFbnbxloe-QIGIy-VmyUAgCDFfeMUlnO5olljOaKAYissbOtELqaFbwrJjoQfxwYmVnNjC7qKEQSmhyExt2VRnKeLEJiWE2e1IsdMJjW1U7PtWkXUACSEa9jIvKcy-AGsrUpT~0YqNYMkNQMNGYe5mWVyqSMox0-I4XfCjYOWKDhcF~neWYMkjQgy7tjmKgoaZg__",
            "name": "John Doe",
            "rating": 4,
            "review": "Decent experience overall. Dr. Johnson provided adequate assistance."
        },
     
    ];
    return ( <div>
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
            marginRight: '40px'
        }}
        >
        {data.map((item) => (
            <div style={{ width: '300px', backgroundColor: '#FFFFFF', border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden', margin: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ textAlign: 'center' }}>
                    <img src={item.imageSrc} alt="" className="round-image" style={{ width: '100px', height: '100px', borderRadius: '50%', marginTop: '20px', marginRight: '140px' }} />
                </div>
                <div style={{ padding: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                        <h3 style={{ fontSize: '20px', color: '#007E85', margin: '0' }}>{item.name}</h3>
                        <ReactStars count={item.rating} value={item.rating} size={20} color1="#CCCCCC" color2="#FFD700" edit={false} />
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
