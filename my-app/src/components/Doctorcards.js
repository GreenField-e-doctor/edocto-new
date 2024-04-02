import React from 'react'
import ReactStars from 'react-stars';

function Doctorcards() {
  return (
    <div>
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
                                src="https://s3-alpha-sig.figma.com/img/63b2/8d8f/00c58641067a23c773c149f7209e1ea0?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XgCiOctqmKz5vnUxeAYxWvfhGa0w6gvQ2m7oxcwCuzjVtinjnOA98kNqrtZDKM6VGywxErwtA2ysmX2DL6-DuIpzFz0BPatwwEy78ia0jTpYxLn~mss0dDwdL~~DObvLhQq3cjxMcVzLv9ml0xDGMEqq~tut4iaR8K0leg9Sb0MS3M82IoOnuzF3FpAaLvqew9YiwrXm3-~h7be7g7per7CN9SJJaWiigz7T~r6yO7axRBAbh3u~8S~D7YkpHt0Zm0q2cdaKNpHrup1xSX5ESHGqP8~wRecRrX2NCxZSWlrkKMM7J9TUs6D-VBYEiMsYEjZgFk8P~YE-nYqJBnaYMw_"
                                alt=""
                                className="round-image"
                                style={{ width: '336px', height: '336px', marginRight: '140px' }}
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
                                <h3 style={{ fontSize: '17px', color: '#007E85', marginRight: '30px' }}>Dr JOE Michael</h3>


                                <div style={{ whiteSpace: 'nowrap' }}>
                                    <ReactStars  count="5" value="4" size={17} color1="#CCCCCC" color2="#FFD700" edit={false}  />
                                </div>
                            </div>
                            <h2 style={{ fontSize: '20px', marginBottom: '10px', color: '#333333' }}>“location”</h2>
                            <h3 style={{ fontSize: '17px', color: '#007E85', marginRight: '30px' }}>Dentist </h3>
                            <h3 style={{ fontSize: '17px', color: '#007E85', marginRight: '30px' }}>pricing:17.5$</h3>
                        </div>
    </div>
    </div>
    </div>
    )
}

export default Doctorcards
