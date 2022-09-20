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
                            <p>3333</p>
                        </div>
                    </details>

                    <details
                        itemScope
                        itemProp="mainEntity"
                        itemType="https://schema.org/Question"
                    >
                        <summary data-aos="slide-right" itemProp="name">What wallet is advisable to use for minting?</summary>
                        <div
                            className="details-expanded"
                            itemScope
                            itemProp="acceptedAnswer"
                            itemType="https://schema.org/Answer"
                        >
                            <p>We are launching on Cardano blockchain, you can use wallets such as Nami, Deadalus, Yoroi, CCvault etc. do not send ADA from any exchange (Binance, Coinbase, FTX etc.) or your funds will be lost.</p>
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
                            <p>Yes, there will be air drops in the future and other planned utilities. More details TBC.</p>
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
                            <p>Public Mint is on 10 September 2022 08.00 UTC | After the mint is over, you can trade on secondary market platforms.</p>
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
                            <p>Yes it will be 5% of the resale price. Royalties will go towards the further development of the project</p>
                        </div>
                    </details>
                </div>
            </div>
        </React.Fragment>)
}
