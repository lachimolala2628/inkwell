import React from "react";
import { PricingTable } from "@clerk/nextjs";
import Footer from "@/components/Footer";

const SubscriptionsPage = () => {
    return (
        <>
            <div className="container wrapper py-10">
                <div className="flex flex-col items-center text-center my-10">
                    <h1 className="text-4xl font-bold font-serif mb-4">Choose Your Plan</h1>
                    <p className="text-muted-foreground max-w-2xl">
                        Upgrade to unlock more books, longer sessions, and advanced features.
                    </p>
                </div>

                <div className="clerk-pricing-container">
                    <PricingTable
                        appearance={{
                            variables: {
                                colorBackground: '#191A1B',
                                colorText: '#F7F8F8',
                                colorTextSecondary: '#8A8F98',
                                colorPrimary: '#FFFFFF',
                                colorNeutral: '#F7F8F8',
                            },
                            elements: {
                                pricingTableCard: {
                                    backgroundColor: '#191A1B',
                                    border: '1px solid #23252a',
                                    borderRadius: '1rem',
                                },
                                pricingTableCardTitle: { color: '#F7F8F8' },
                                pricingTableCardPrice: { color: '#F7F8F8' },
                                pricingTableCardPriceAmount: { color: '#F7F8F8' },
                                pricingTableCardDescription: { color: '#8A8F98' },
                                pricingTableCardFeaturesList: { color: '#8A8F98', backgroundColor: '#191A1B' },
                                pricingTableCardFeaturesListItem: { color: '#8A8F98', backgroundColor: '#191A1B' },
                                pricingTableCardFeaturesListItemIcon: { color: '#8A8F98' },
                                pricingTableCardBody: { backgroundColor: '#191A1B' },
                                pricingTableCardFooter: { backgroundColor: '#191A1B' },
                                pricingTableCardHeader: { backgroundColor: '#191A1B' },
                                formButtonPrimary: {
                                    backgroundColor: '#FFFFFF',
                                    color: '#08090A',
                                },
                            },
                        }}
                    />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default SubscriptionsPage