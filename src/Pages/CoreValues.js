import React from 'react'

const CoreValues = () => {
    const content = [
        {
            heading: 'Safety',
            subcontent: 'We take safety to heart; it is more than just policy or procedures. Every step we take starts with safety, this is the most important and valuable service we provide.'
        },
        {
            heading: 'Quality',
            subcontent: 'We are committed to delivering our best to all projects, all clients, at all times. Our ability to self-perform critical scopes of work allows us to excel in schedule management, cost management, and quality control.'
        },
        {
            heading: 'Relationships',
            subcontent: 'Our team, from the field to the office, does whatever it takes to communicate to our clients every step of the way; from daily reports, weekly updates, and friendly phone calls/emails with project updates.'
        }
    ];

    return (
        <section className='px-5 py-5 bg-light'>
            <div className='container'>
                <div className='text-center mb-4'>
                    <h2 className=''>Our Core Values</h2>
                </div>
            </div>
            <div className="row gy-4">
                {content?.map((item, index) => (
                    <div className="col-lg-4 col-md-6" key={index}>
                        <div className="card shadow border-0 h-100">
                            <div className="card-body">
                                <h4 className="card-title fw-bold text-dark">{item?.heading}</h4>
                                <p className="card-text text-dark">
                                    {item?.subcontent}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default CoreValues
