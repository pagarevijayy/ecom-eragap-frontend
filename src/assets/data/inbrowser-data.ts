export class browserData {

    static carouselLargeScreen: Array<any> = [
        'https://ik.imagekit.io/pagarevijayytech/ecom-platform-eragap/carousel/carousel-1_Bi3IshONp.jpg',
        'https://ik.imagekit.io/pagarevijayytech/ecom-platform-eragap/carousel/carousel-3_p-1jMlTZ9m.jpg',
        'https://ik.imagekit.io/pagarevijayytech/ecom-platform-eragap/carousel/carousel-2_N0vvEThjJ.jpg'
    ];

    static carouselSmallScreen: Array<any> = [
        'https://ik.imagekit.io/pagarevijayytech/ecom-platform-eragap/carousel-small-screen/mob-carousel-1_9hLMRUm9bS.webp',
        'https://ik.imagekit.io/pagarevijayytech/ecom-platform-eragap/carousel-small-screen/mob-carousel-3__zfmRXYjhF.webp',
        'https://ik.imagekit.io/pagarevijayytech/ecom-platform-eragap/carousel-small-screen/mob-carousel-2_Cl6oj1OGRD.webp'
    ];

    static whatsAppDataContent = {
        whatsAppContactNumber: 917972071550,
        buttonLabelPrimary: `Contact for Business Enquiry`,
        buttonLabelSecondary: "Looking for something else? Let us know!",
        enquiryTextPrimary: `Hi! I wanted to know more about your product and services. Can we have a word?`
    };

    // remember to update the title bar in index.html
    static storeInformation = {
        storeName: "Eragap Co.",
        faviconURL: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🛍️</text></svg>",
        contactNumber: 7972071550,
        emailAddress: "eragaptech@gmail.com",
        addressLineOne: "Sector 1, Shantinagar",
        addressLineTwo: "Miraroad (E), Thane 401107",
        socialFacebook: "urlhere",
        socialInstagram: null,
        socialTwitter: null,
    };

    static footerContent = {
        copyrightText: "© Eragap Tech Company",
        copyright: "Copyright ©",
        claimName: "Eragap Co.",
        allRightsReserved: "All Rights Reserved",
        // copyrightYear: "This should be dynamic. Done via javascript in browser"
    }

}

export class ProductInformation {
    static productCategories: Array<any> = [
        {
            "categoryLabel": "beads",
            "route": "beads",
            "displayTitle": "special beads collection",
            "weightage": 0,
            "product_subcategories": [
                {
                    "subcategoryLabel": "Clay Beads",
                    "displayPictureUrl": "https://ik.imagekit.io/pagarevijayytech/ecom-platform-eragap/product-images/product-4_IMTJrTZIW.webp",
                    "subcategorySlug": "clay-beads",
                    "weightage": 10
                },
                {
                    "subcategoryLabel": "Bone Beads",
                    "displayPictureUrl": "https://ik.imagekit.io/pagarevijayytech/ecom-platform-eragap/product-images/prod-6_N3T0c8dM9.jpg",
                    "subcategorySlug": "bone-beads",
                    "weightage": 31
                },
                {
                    "subcategoryLabel": "Xyz Beads",
                    "displayPictureUrl": "https://ik.imagekit.io/pagarevijayytech/ecom-platform-eragap/product-images/product-1_tbE8TJhRa.webp",
                    "subcategorySlug": "XYZ-beads",
                    "weightage": 15
                },
                {
                    "subcategoryLabel": "ABC Beads",
                    "displayPictureUrl": "https://ik.imagekit.io/pagarevijayytech/ecom-platform-eragap/product-images/product-2_kMPTyfcDi.jpg",
                    "subcategorySlug": "abc-beads",
                    "weightage": 1
                },
                {
                    "subcategoryLabel": "Special Beads",
                    "displayPictureUrl": "https://ik.imagekit.io/pagarevijayytech/ecom-platform-eragap/product-images/product-4_IMTJrTZIW.webp",
                    "subcategorySlug": "special-beads",
                    "weightage": 0
                },
                {
                    "subcategoryLabel": "LMA Beads",
                    "displayPictureUrl": "https://ik.imagekit.io/pagarevijayytech/ecom-platform-eragap/product-images/prod-6_N3T0c8dM9.jpg",
                    "subcategorySlug": "lma-beads",
                    "weightage": 0
                },
            ]
        },
        {
            "categoryLabel": "Pendants",
            "route": "pendant",
            "displayTitle": "Special Pendants",
            "weightage": 0,
            "product_subcategories": [
                {
                    "subcategoryLabel": "Special pendants",
                    "displayPictureUrl": "https://ik.imagekit.io/pagarevijayytech/ecom-platform-eragap/product-images/product-4_IMTJrTZIW.webp",
                    "subcategorySlug": "special-pendants",
                    "weightage": 0
                },
                {
                    "subcategoryLabel": "Bombay pendants",
                    "displayPictureUrl": "https://ik.imagekit.io/pagarevijayytech/ecom-platform-eragap/product-images/product-2_kMPTyfcDi.jpg",
                    "subcategorySlug": "bombay-pendants",
                    "weightage": 0
                },
                {
                    "subcategoryLabel": "NY pendants",
                    "displayPictureUrl": "https://ik.imagekit.io/pagarevijayytech/ecom-platform-eragap/product-images/product-1_tbE8TJhRa.webp",
                    "subcategorySlug": "ny-pendants",
                    "weightage": 0
                }
            ]
        },
        {
            "categoryLabel": "Jewellery",
            "route": "jewellery",
            "displayTitle": "Jewllery Collection",
            "weightage": 0,
            "product_subcategories": [
                {
                    "subcategoryLabel": "MLK jewllery",
                    "displayPictureUrl": "https://ik.imagekit.io/pagarevijayytech/ecom-platform-eragap/product-images/product-2_kMPTyfcDi.jpg",
                    "subcategorySlug": "mlk-jewellery",
                    "weightage": 0
                },
                {
                    "subcategoryLabel": "Carot 24",
                    "displayPictureUrl": "https://ik.imagekit.io/pagarevijayytech/ecom-platform-eragap/product-images/product-1_tbE8TJhRa.webp",
                    "subcategorySlug": "carot-24",
                    "weightage": 0
                },
                {
                    "subcategoryLabel": "Tasha paris",
                    "displayPictureUrl": "https://ik.imagekit.io/pagarevijayytech/ecom-platform-eragap/product-images/product-4_IMTJrTZIW.webp",
                    "subcategorySlug": "tasha-paris",
                    "weightage": 0
                }
            ]
        },
        {
            "categoryLabel": "Tools & Kit",
            "route": "tools-and-kit",
            "displayTitle": "Tools and kit",
            "weightage": 0,
            "product_subcategories": [
                {
                    "subcategoryLabel": "AG kit",
                    "displayPictureUrl": "https://ik.imagekit.io/pagarevijayytech/ecom-platform-eragap/product-images/product-1_tbE8TJhRa.webp",
                    "subcategorySlug": "ag-kit",
                    "weightage": 0
                },
                {
                    "subcategoryLabel": "VK tools",
                    "displayPictureUrl": "https://ik.imagekit.io/pagarevijayytech/ecom-platform-eragap/product-images/prod-6_N3T0c8dM9.jpg",
                    "subcategorySlug": "vk-tools",
                    "weightage": 0
                },
                {
                    "subcategoryLabel": "Raja kit",
                    "displayPictureUrl": "https://ik.imagekit.io/pagarevijayytech/ecom-platform-eragap/product-images/product-2_kMPTyfcDi.jpg",
                    "subcategorySlug": "raja-kit",
                    "weightage": 0
                }
            ]
        }

    ];

    static productSubcategories: any = {
        'clay-beads': {
            "subcategoryLabel": "clay beads",
            "subcategorySlug": "clay-beads",
            "displayPictureUrl": "https://ik.imagekit.io/pagarevijayytech/ecom-platform-eragap/product-images/product-1_tbE8TJhRa.webp",
            "description": "Main category - Beads, Subcategory - Crystal Beads",
            "weightage": 0,
            "products": [
                {
                    "title": "A1 bead",
                    "description": "This is not a bead, lmao.",
                    "productSlug": "a1-bead",
                    "QtyPrice": [
                        {
                            "qty": 256,
                            "price": 900,
                            "weightage": 10
                        },
                        {
                            "qty": 150,
                            "price": 750,
                            "weightage": 17
                        }
                    ],
                    "Color": [],
                    "ImageUrl": [
                        {
                            "imgURL": "https://ik.imagekit.io/pagarevijayytech/ecom-platform-eragap/product-images/prod-6_N3T0c8dM9.jpg",
                            "weightage": null,
                            "description": "master image"
                        }
                    ]
                },
                {
                    "title": "BY1 bead",
                    "description": "This lorem ipsum is not a bead, lmao.",
                    "productSlug": "by1-bead",
                    "QtyPrice": [
                        {
                            "qty": 256,
                            "price": 900,
                            "weightage": 0
                        },
                        {
                            "qty": 150,
                            "price": 750,
                            "weightage": 0
                        }
                    ],
                    "Color": [],
                    "ImageUrl": [
                        {
                            "imgURL": "https://ik.imagekit.io/pagarevijayytech/ecom-platform-eragap/product-images/prod-5_Bmvc6No5S.jpg",
                            "weightage": null,
                            "description": "master image"
                        }
                    ]
                },
                {
                    "title": "Lorem ipsun",
                    "description": "This is a placeholder not a bead, lmao.",
                    "productSlug": "lorem-ipsum",
                    "QtyPrice": [
                        {
                            "qty": 256,
                            "price": 900,
                            "weightage": 0
                        },
                        {
                            "qty": 150,
                            "price": 750,
                            "weightage": 0
                        }
                    ],
                    "Color": [],
                    "ImageUrl": [
                        {
                            "imgURL": "https://ik.imagekit.io/pagarevijayytech/ecom-platform-eragap/product-images/product-3_rOFYI3OS2.jpg",
                            "weightage": null,
                            "description": "master image"
                        }
                    ]
                },
                {
                    "title": "klmo bead",
                    "description": "Okay got ya this is not a bead, lmao.",
                    "productSlug": "a1-bead",
                    "QtyPrice": [
                        {
                            "qty": 256,
                            "price": 900,
                            "weightage": 0
                        },
                        {
                            "qty": 150,
                            "price": 750,
                            "weightage": 0
                        }
                    ],
                    "Color": [],
                    "ImageUrl": [
                        {
                            "imgURL": "https://ik.imagekit.io/pagarevijayytech/ecom-platform-eragap/product-images/prod-6_N3T0c8dM9.jpg",
                            "weightage": null,
                            "description": "master image"
                        }
                    ]
                },
                {
                    "title": "aplha bead",
                    "description": "This is not a bead, lmao.",
                    "productSlug": "a1-bead",
                    "QtyPrice": [
                        {
                            "qty": 256,
                            "price": 900,
                            "weightage": 0
                        },
                        {
                            "qty": 150,
                            "price": 750,
                            "weightage": 0
                        }
                    ],
                    "Color": [],
                    "ImageUrl": [
                        {
                            "imgURL": "https://ik.imagekit.io/pagarevijayytech/ecom-platform-eragap/product-images/product-4_IMTJrTZIW.webp",
                            "weightage": null,
                            "description": "master image"
                        }
                    ]
                }
            ]
        }
    }

    static products: any = {
        'a1-bead': {
            "title": "A1 bead",
            "description": "This is not a bead, lmao.",
            "rating": 2,
            "productSlug": "a1-bead",
            "product_subcategory": {
                "subcategoryLabel": "crystal beads"
            },
            "QtyPrice": [
                {
                    "qty": 256,
                    "price": 900,
                    "weightage": 10
                },
                {
                    "qty": 150,
                    "price": 750,
                    "weightage": 40
                }
            ],
            "Color": [
                {
                    "colorTitle": "red",
                    "colorCode": "#f2411b"
                },
                {
                    "colorTitle": "green",
                    "colorCode": "#25f21b"
                },
                {
                    "colorTitle": "green",
                    "colorCode": "#c41bf2"
                }
            ],
            "ImageUrl": [
                {
                    "imgURL": "https://ik.imagekit.io/pagarevijayytech/ecom-platform-eragap/product-images/prod-6_N3T0c8dM9.jpg",
                    "weightage": null,
                    "description": "master image"
                }
            ]
        }
    }

}