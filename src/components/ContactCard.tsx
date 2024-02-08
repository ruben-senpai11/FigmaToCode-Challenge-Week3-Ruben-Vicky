
interface Props {
    imageSrc: string,
    imageAlt: string,
    middle: boolean
}

function ContactCard({ imageSrc, imageAlt, middle }: Props) {
    return (
        <>

            <div className={(middle == true ? 'middle ' : '') + 'contact-card flex-column'}>
                <img src={imageSrc} alt={imageAlt} className='contact-illustration' />
                <div className="contact-mail">
                    <p>georgia.young@example.com</p>
                    <p>georgia.young@ple.com</p>
                </div>
                <div className="contact-support flex-column gap-20">
                    <h5>Get Support</h5>
                    <button className="contact-cta cta">Submit Request</button>
                </div>
            </div>
        </>
    )
}

export default ContactCard;