const images = require.context('./images', true, /\.png$/)

const products = {
  featured: [
    {
      id: 2,
      description: 'Go for gold in the Nike Air Max 270 React. The design draws inspiration from the Air Max pantheon, showcasing Nike\'s big innovation with its large window and fresh array of colors.',
      title: 'Nike Air Max 270 React',
      src: images('./air-max-270-react-mens-shoe.png'),
      cost: 189,
      category: 'Men\'s Shoe',
      onSale: true
    },
    {
      id: 3,
      description:
        'Featuring a full-length foam midsole and VaporMax Air unit, the Nike Air VaporMax 360 gives you a cushy ride with bold \'90s style. Iridescent accents on the upper combine with small Air Pod details for a fresh look with just enough flash.',
      title: 'Nike Air VaporMax 360',
      src: images('./air-vapormax-360-mens-shoe.png'),
      category: 'Men\'s Shoe',
      cost: 194
    },
    {
      id: 4,
      description:
        'Designed specifically for a woman\'s foot, the Nike Air Max Dia delivers a lifted look, an airy aesthetic and a sleek shape. The minimal upper modernizes the look, while the Max Air unit, surrounded by clear TPU, is amplified even further by an exaggerated midsole for a boost of style.',
      title: 'Nike Air Max Dia',
      src: images('./air-max-dia-womens-shoe.png'),
      category: 'Women\'s Shoe',
      cost: 111
    },
    {
      id: 5,
      description:
        'Featuring the original ripple design inspired by Japanese bullet trains, the Nike Air Max 97 Tortoise Shell lets you push your style full-speed ahead. With its revolutionary full-length Nike Air unit that shook up the running world and new tortoise shell print details, it lets you ride in first-class comfort.',
      title: 'Nike Air Max 97 Tortoise Shell',
      src: images('./air-max-97-tortoise-shell-womens-shoe.png'),
      category: 'Women\'s Shoe',
      cost: 159
    },
    {
      id: 6,
      description:
        'The Nike Vista Lite SE brings you to a bold new place both rebellious and refined. Using recycled foam from the Nike Zoom X family, it takes Nike DNA and fuses it to elements of fashion and technology. Lightweight mesh, exaggerated stitching and the transparent window on the upper add a modern look while the thick stack of foam adds unreal comfort and response.',
      title: 'Nike Vista Lite SE',
      src: images('./vista-lite-se-womens.png'),
      category: 'Women\'s Shoe',
      cost: 99
    },
    {
      id: 1,
      description:
        'Rise from the ashes with the new LeBron 15, engineered with next-generation BattleKnit technology for an unrivaled combination of flexibility and strength.',
      title: 'LeBron 17',
      src: images('./lebron-17-big-kids-shoe.png'),
      category: 'Men\'s Shoe',
      cost: 199
    },
  ],
  newArrivals: [
     {
      id: 1,
      description:
        'The Nike React Phantom Run Flyknit 2 offers versatility for the everyday runner. Building on the foundation of its predecessor, the shoe expands on its laceless design by adding secure support that feels like it "disappears" on your foot. More foam means better cushioning, keeping you comfortable as you run.',
      title: 'Nike React Phantom Run Flyknit 2',
      src: images('./react-phantom-run-flyknit-2-mens-running-shoe.png'),
      category: 'Men\'s Running Shoe',
      cost: 185,
    },
    {
      id: 2,
      description:
        'The Nike Zoom Pegasus Turbo 2 is updated with a featherlight upper, while innovative foam brings revolutionary responsiveness to your long distance training.',
      title: 'Nike Zoom Pegasus Turbo 2',
      src: images('./zoom-pegasus-turbo-2-mens-running-shoe-GcDSX3.png'),
      category: 'Men\'s Running Shoe',
      cost: 201,
    },
    {
      id: 3,
      description:
        'The Nike Joyride Run Flyknit is designed to help make running feel easier and give your legs a day off. Tiny foam beads underfoot conform to your foot for cushioning that',
      title: 'Nike Joyride Run Flyknit',
      src: images('./joyride-run-flyknit-womens-running-shoe-HcfnJd.png'),
      category: 'Women\'s Running Shoe',
      cost: 185,
    },
    {
      id: 4,
      description:
        'The Nike Wildhorse 6 keeps it stable, secure and lightweight on the trail. An updated outsole delivers the traction you need, while a foam midsole keeps you cushioned on your run.',
      title: 'Nike Wildhorse 6',
      src: images('./wildhorse-6-womens-trail-running-shoe-jJXN1F.png'),
      category: 'Women\'s Trail Running Shoe',
      cost: 295,
    },
    {
      id: 5,
      description:
        'Inspired by the Vaporfly, the Nike Zoom Fly 3 gives distance runners race-day comfort and durability. The power of a carbon fiber plate keeps you in the running mile after mile.',
      title: 'Nike Zoom Fly 3',
      src: images('./zoom-fly-3-mens-running-shoe-XhzpPH.png'),
      category: 'Men\'s Running Shoe',
      cost: 185,
    },
     {
      id: 6,
      description:
        'The Nike Zoom Pegasus Turbo Shield delivers your favorite lightweight running shoe in a smart, weatherized design, so you can continue training in confidence despite those dark and rainy months.',
      title: 'Nike Zoom Pegasus Turbo Shield',
      src: images('./zoom-pegasus-turbo-shield-womens-running-shoe-TP4DR2.png'),
      category: 'Women\'s Running Shoe',
      cost: 210.23,
    },
     {
       id: 7,
      description:
        'The Nike Air VaporMax Plus looks to the past to propel itself into the future. Nodding to the \'98 Air Max Plus with its floating cage, cushioned upper and heel logo, it adds revolutionary VaporMax Air technology and colors inspired by skydiving and balloons to ramp up the comfort and modern look.',
      src: images('./air-vapormax-plus-mens-shoe-fPnNXW.png'),
      title: 'Air Vapormax Plus',
      category: 'Men\'s Shoe',
      cost: 389,
    }
    // ],
    // torsos: [
    //   {
    //     id: 1,
    //     description: 'A torso that can bend slightly at the waist and equiped with a heat guage.',
    //     title: 'Flexible Gauged',
    //     src: images('./torso-flexible-gauged.png'),
    //     category: 'torsos',
    //     cost: 1575
    //   },
    //   {
    //     id: 2,
    //     description: 'A less flexible torso with a battery gauge.',
    //     title: 'Gauged',
    //     src: images('./torso-gauged.png'),
    //     category: 'torsos',
    //     cost: 1385
    //   },
    //   {
    //     id: 2,
    //     description: 'A simple torso with a pouch for carrying items.',
    //     title: 'Gauged',
    //     src: images('./torso-pouch.png'),
    //     category: 'torsos',
    //     cost: 785,
    //     onSale: true
    //   }
    // ],
    // bases: [
    //   {
    //     id: 1,
    //     description: 'A two wheeled base with an accelerometer for stability.',
    //     title: 'Double Wheeled',
    //     src: images('./base-double-wheel.png'),
    //     category: 'bases',
    //     cost: 895
    //   },
    //   {
    //     id: 2,
    //     description: 'A rocket base capable of high speed, controlled flight.',
    //     title: 'Rocket',
    //     src: images('./base-rocket.png'),
    //     category: 'bases',
    //     cost: 1520.5
    //   },
    //   {
    //     id: 3,
    //     description: 'A single-wheeled base with an accelerometer capable of higher speeds and navigating rougher terrain than the two-wheeled variety.',
    //     title: 'Single Wheeled',
    //     src: images('./base-single-wheel.png'),
    //     category: 'bases',
    //     cost: 1190.5
    //   },
    //   {
    //     id: 4,
    //     description: 'A spring base - great for reaching high places.',
    //     title: 'Spring',
    //     src: images('./base-spring.png'),
    //     category: 'bases',
    //     cost: 1190.5
    //   },
    //   {
    //     id: 5,
    //     description: 'An inexpensive three-wheeled base. only capable of slow speeds and can only function on smooth surfaces.',
    //     title: 'Triple Wheeled',
    //     src: images('./base-triple-wheel.png'),
    //     category: 'bases',
    //     cost: 700.5
    //   }

  ],
  heroImage: [
    {
      src: images('./air-vapormax-plus-mens-shoe.png'),
      title: 'Air Vapormax Plus',

    },
    {
      src: images('./air-max-2090-womens-shoe.png'),
      title: 'Air Max 2090',

    },
    {
      src: images('./lebron-17-big-kids-shoe.png'),
      title: 'LeBron 17',

    },
    {
      src: images('./air-max-dia-womens-shoe.png'),
      title: 'Air Max Dia',
    },
    {
      src: images('./air-max-97-tortoise-shell-womens-shoe.png'),
      title: 'Air Max 97',
    },
    {
      src: images('./nike-red.png'),
      title: 'Red Nike',
    },
  ],
  inspImage: [
    {
      id: 3,
      description:
        'Featuring a full-length foam midsole and VaporMax Air unit, the Nike Air VaporMax 360 gives you a cushy ride with bold \'90s style. Iridescent accents on the upper combine with small Air Pod details for a fresh look with just enough flash.',
      title: 'Nike Air VaporMax 360',
      src: images('./air-vapormax-360-mens-shoe.png'),
      category: 'Men\'s Shoe',
      cost: 194
    },
    {
      description:
      'Run or cross-train in these lightweight and supportive shoes. The breathable mesh upper is built with targeted areas of support and stretch for confident multidirectional movement. Flexible cushioning adds spring to your step.',
      id: 12,
      title: 'ALPHABOUNCE+ RUN EM SHOES',
      src: images('./Alphabounce+_Run_EM_Shoes.png'),
      category: 'Women\'s Shoe',
      cost: 159
    },
    {
      id: 1,
      description:
        'The Nike Joyride Dual Run is designed to help make running feel easier and give your legs a day off. Tiny foam beads underfoot conform to your foot for cushioning that stands up to your mileage.',
      title: 'Nike Joyride Dual Run',
      src: images('./joyride-dual-run-womens-running.png'),
      category: 'Men\'s Shoe',
      cost: 129
    },
    {
      id: 2,
      description:
        'Reinvigorate your stride with the Nike Air Zoom Pegasus 37. Delivering the same fit and feel that runners love, the shoe has an all-new forefoot cushioning unit and foam for maximum responsiveness. The result is a durable, lightweight trainer designed for everyday running.',
      title: 'Nike Air Zoom Pegasus 37',
      src: images('./air-zoom-pegasus-37-womens-running-shoe.png'),
      category: 'Women\'s Shoe',
      cost: 179
    },

  ]
}
export default products;
