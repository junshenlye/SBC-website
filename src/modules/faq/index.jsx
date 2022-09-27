import React from 'react'
import './style.css'


export default function index() {
    return (
        <React.Fragment>
            <div className="faq container" id='faq'>
                <h1 data-aos="slide-left">FAQ’s</h1>
                <div className="faq-box">
                    <details
                        itemScope
                        itemProp="mainEntity"
                        itemType="https://schema.org/Question"
                    >
                        <summary data-aos="slide-right" itemProp="name">How much does a minting of SpaceBoyClub NFT cost?</summary>
                        <div
                            className="details-expanded"
                            itemScope
                            itemProp="acceptedAnswer"
                            itemType="https://schema.org/Answer"
                        >
                            <p>6.5ADA</p>
                        </div>
                    </details>

                    <details
                        itemScope
                        itemProp="mainEntity"
                        itemType="https://schema.org/Question"
                    >
                        <summary data-aos="slide-left" itemProp="name">What Is the Total Supply?</summary>
                        <div
                            className="details-expanded"
                            itemScope
                            itemProp="acceptedAnswer"
                            itemType="https://schema.org/Answer"
                        >
                            <p>500</p>
                        </div>
                    </details>

                    <details
                        itemScope
                        itemProp="mainEntity"
                        itemType="https://schema.org/Question"
                    >
                        <summary data-aos="slide-left" itemProp="name">Are there benefits to holding SpaceBoyClub NFT?</summary>
                        <div
                            className="details-expanded"
                            itemScope
                            itemProp="acceptedAnswer"
                            itemType="https://schema.org/Answer"
                        >
                            <p>Nope, just a PFP designed by a group of friends. Just enjoy the artwork, utility might be asscoiated with space boys.... Stay tuned</p>
                        </div>
                    </details>

                    <details
                        itemScope
                        itemProp="mainEntity"
                        itemType="https://schema.org/Question"
                    >
                        <summary data-aos="slide-right" itemProp="name">When can I buy SpaceBoyClub NFT and be a part of the community?</summary>
                        <div
                            className="details-expanded"
                            itemScope
                            itemProp="acceptedAnswer"
                            itemType="https://schema.org/Answer"
                        >
                            <p>Minting is closed, You may purchase our Spaceboys from the secondary Market.</p>
                        </div>
                    </details>

                    <details
                        itemScope
                        itemProp="mainEntity"
                        itemType="https://schema.org/Question"
                    >
                        <summary data-aos="slide-left" itemProp="name">Are royalties charged on resale?</summary>
                        <div
                            className="details-expanded"
                            itemScope
                            itemProp="acceptedAnswer"
                            itemType="https://schema.org/Answer"
                        >
                            <p>Yes it will be 5% of the resale price. Royalties will go towards the artist and development of the project</p>
                        </div>
                    </details>
                </div>
            </div>
        </React.Fragment>)
}
