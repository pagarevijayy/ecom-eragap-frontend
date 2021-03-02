export class browserData {
    static categories: Array<any> = [
        {
            label: 'Beads',
            route: 'bead'
        },
        {
            label: 'Pendants',
            route: 'pendant'
        },
        {
            label: 'Jewellery',
            route: 'jewellery'
        },
        {
            label: 'Tools & Kit',
            route: 'tools-and-kit'
        }
    ];

    static subcategories: Array<any> = [
        'Crystal Beads',
        'Bone Beads',
        'Clay Beads'
    ];

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
        enquiryTextPrimary: `Hi! I wanted to know more about your product and services.
        Can we have a word?`
    };

    static storeInformation = {
        storeName: "Eragap",
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
        copyright:"Copyright ©",
        claimName: "Eragap Co.",
        allRightsReserved: "All Rights Reserved",
        // copyrightYear: "This should be dynamic. Done via javascript in browser"
    }

}