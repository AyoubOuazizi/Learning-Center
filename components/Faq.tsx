import FaqCard from "./FaqCard";

export default function Faq() {
    return (
        <div className="container-fluid pt-4" id="nouveautes">
            <h6 className='text-uppercase pt-3' style={{ "color": "#E95D40", fontWeight: 700, fontSize: 13 }}>FAQ</h6>
            <h2 className='mt-3' style={{ "color": "#292962", "fontWeight": "bold" }}>
            &quot;Questions fréquentes : 
                <br />
                Trouvez vos réponses ici !&quot;
            </h2>
            <div className="container py-5 px-0 px-md-5">
                <div className="row justify-content-center align-items-center g-2">
                    <div className="col-md-6 col-12 align-self-start">
                        <FaqCard openVal={true}/>
                        <FaqCard/>
                        <FaqCard/>
                    </div>
                    <div className="col-md-6 col-12 align-self-start">
                        <FaqCard/>
                        <FaqCard/>
                        <FaqCard/>
                    </div>
                </div>
            </div>
        </div>
    )
}
