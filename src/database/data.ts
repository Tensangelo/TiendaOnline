const Products: Record<TProductId, TProduct> = {
    'CPU-01':
        {
            id: 'CPU-01',
            name: 'AMD Ryzen™ 5 5600G',
            images: 'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51f2hkWjTlL._AC_UL320_.jpg',
            price: 628335,
            detail: 'AMD Ryzen 5 5600G 6-Core 12-Thread Unlocked Desktop Processor with Radeon Graphics',
            category: 'CPU',
            stock: 10,
        },
    'CPU-02':
        {
            id: 'CPU-02',
            name: 'AMD Ryzen™ 5 5600X',
            images: 'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61vGQNUEsGL._AC_UY218_.jpg',
            price: 878277,
            detail: 'AMDs fastest 6 core processor for mainstream desktop, with 12 processing threads',
            category: 'CPU',
            stock: 10,
        },
    'CPU-03':
        {
            id: 'CPU-03',
            name: 'AMD Ryzen™ 7 5700G',
            images: 'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51p5BjKPc1L._AC_UY218_.jpg',
            price: 1110386,
            detail: 'Play some of the most popular games at 1080p with the fastest processor graphics in the world, no graphics card required, 8 Cores and 16 processing threads, bundled with the AMD Wraith Stealth cooler',
            category: 'CPU',
            stock: 10,
        },
    'CPU-04':
        {
            id: 'CPU-04',
            name: 'AMD Ryzen™ 7 5700X',
            images: 'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71zCiJZcnTL._AC_UY218_.jpg',
            price: 1127227,
            detail: 'Can deliver ultra-fast 100 plus FPS performance in the worlds most popular games, discrete graphics card required, 8 Cores and 16 processing threads, based on AMD "Zen 3" architecture',
            category: 'CPU',
            stock: 10,
        },
    'CPU-05':
        {
            id: 'CPU-05',
            name: 'AMD Ryzen™ 9 5900X',
            images: 'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/616VM20+AzL._AC_UY218_.jpg',
            price: 1756508,
            detail: 'The worlds best gaming desktop processor, with 12 cores and 24 processing threads',
            category: 'CPU',
            stock: 10,
        },
    'GPU-01':
        {
            id: 'GPU-01',
            name: 'GIGABYTE GeForce RTX 3060 Vision OC 12G',
            images: 'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71Dl21jUedS._AC_UY218_.jpg',
            price: 1720291,
            detail: 'GIGABYTE GeForce RTX 3060 Vision OC 12G (REV2.0) Graphics Card, 3X WINDFORCE Fans, 12GB 192-bit GDDR6, GV-N3060VISION OC-12GD REV2.0 Video Card',
            category: 'GPU',
            stock: 10,
        },
    'GPU-02':
        {
            id: 'GPU-02',
            name: 'GIGABYTE GeForce RTX 3060 Gaming OC 12G',
            images: 'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/715UuCH5OES._AC_UY218_.jpg',
            price: 1765563,
            detail: 'GIGABYTE GeForce RTX 3060 Gaming OC 12G (REV2.0) Graphics Card, 3X WINDFORCE Fans, 12GB 192-bit GDDR6, GV-N3060GAMING OC-12GD REV2.0 Video Card',
            category: 'GPU',
            stock: 10,
        },
    'GPU-03':
        {
            id: 'GPU-03',
            name: 'ZOTAC Gaming GeForce RTX™ 3060 Ti',
            images: 'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81iKGq2f77L._AC_UY218_.jpg',
            price: 2037195,
            detail: 'ZOTAC Gaming GeForce RTX™ 3060 Ti Twin Edge OC LHR 8GB GDDR6 256-bit 14 Gbps PCIE 4.0 Gaming Graphics Card, IceStorm 2.0 Advanced Cooling, Active Fan Control, Freeze Fan Stop ZT-A30610H-10MLHR',
            category: 'GPU',
            stock: 10,
        },
    'GPU-04':
        {
            id: 'GPU-04',
            name: 'GIGABYTE GeForce RTX 3070',
            images: 'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71XcVOdHX+S._AC_UY218_.jpg',
            price: 2489915,
            detail: 'GIGABYTE GeForce RTX 3070 Gaming OC 8G (REV2.0) Graphics Card, 3X WINDFORCE Fans, LHR, 8GB 256-bit GDDR6, GV-N3070GAMING OC-8GD REV2.0 Video Card',
            category: 'GPU',
            stock: 10,
        },
    'GPU-05':
        {
            id: 'GPU-05',
            name: 'GIGABYTE GeForce RTX 3070 Ti Gaming OC 8G',
            images: 'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81ZWSNdXNSS._AC_UY218_.jpg',
            price: 2852091,
            detail: 'GIGABYTE GeForce RTX 3070 Ti Gaming OC 8G Graphics Card, WINDFORCE 3X Cooling System, 8GB 256-bit GDDR6X, GV-N307TGAMING OC-8GD Video Card',
            category: 'GPU',
            stock: 10,
        },
    'Board-01':
        {
            id: 'Board-01',
            name: 'GIGABYTE B550 AORUS Elite',
            images: 'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61mngTZGfiL._AC_UY218_.jpg',
            price: 679034,
            detail: 'GIGABYTE B550 AORUS Elite (AM4 AMD/B550/ATX/Dual M.2/SATA 6Gb/s/USB 3.2 Gen 2/2.5 GbE LAN/Realtek ALC1200/HDMI/DP/PCIe4.0/DDR4/Gaming Motherboard)',
            category: 'Board',
            stock: 10,
        },
    'Board-02':
        {
            id: 'Board-02',
            name: 'MSI MAG B550 TOMAHAWK Gaming Motherboard',
            images: 'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/910jyKG9QlL._AC_UY218_.jpg',
            price: 769578,
            detail: 'MSI MAG B550 TOMAHAWK Gaming Motherboard (AMD AM4, DDR4, PCIe 4.0, SATA 6Gb/s, M.2, USB 3.2 Gen 2, HDMI/DP, ATX, AMD Ryzen 5000 Series processors)',
            category: 'Board',
            stock: 10,
        },
    'Board-03':
        {
            id: 'Board-03',
            name: 'ASUS ROG Strix B550-F Gaming AMD',
            images: 'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81Q-hxowAqL._AC_UY218_.jpg',
            price: 860122,
            detail: 'ASUS ROG Strix B550-F Gaming AMD AM4 Zen 3 Ryzen 5000 & 3rd Gen Ryzen ATX Gaming Motherboard (PCIe 4.0, 2.5Gb LAN, BIOS Flashback, HDMI 2.1, Addressable Gen 2 RGB Header and Aura Sync)',
            category: 'Board',
            stock: 10,
        },
    'Board-04':
        {
            id: 'Board-04',
            name: 'GIGABYTE Z690 AORUS Xtreme',
            images: 'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81clBZAVo5L._AC_UY218_.jpg',
            price: 4074435,
            detail: 'GIGABYTE Z690 AORUS Xtreme (LGA 1700/ Intel Z690/ EATX/ DDR5/ Quad M.2/ PCIe 5.0/ USB 3.2 Gen2X2 Type-C/Intel WiFi 6E/ AQUANTIA 10GbE LAN/Intel Thunderbolt 4/ Motherboard)',
            category: 'Board',
            stock: 10,
        },
    'Board-05':
        {
            id: 'Board-05',
            name: 'Asus ROG Maximus Z690 Hero EVA',
            images: 'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/811WsAtV8FL._AC_UY218_.jpg',
            price: 2942635,
            detail: 'Asus ROG Maximus Z690 Hero EVA(ROG x Evangelion) Z690 ATX Gaming Motherboard,DDR5,PCIe® 5.0,Wi-Fi 6E,5xM.2,USB 3.2 Gen 2x2 Front-Panel Connector with Quick Charge 4+ Support, 2xThunderbolt™ 4',
            category: 'Board',
            stock: 0,
        },
}

export default Products;